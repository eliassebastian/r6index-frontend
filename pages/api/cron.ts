import UbisoftAuthenticationProvider from "@/services/ubisoft/authentication";
import { NextRequest, NextResponse } from 'next/server';
 
export const config = {
  runtime: 'edge'
};

const errorResponse = (message: { error: string }) => new Response(JSON.stringify(message), { 
    status: 404, 
    headers: { 'content-type': 'application/json' } 
});

export default async function handler(request: NextRequest) {
    // check if request has valid key
    const key = request.nextUrl.searchParams.get("key");
    if (!key || key !== process.env.CRON_KEY) {
        console.log("invalid request key")
        return errorResponse({error: "invalid request key"});
    }

    // get username and password from env file
    const username = process.env.UBISOFT_USERNAME;
    const password = process.env.UBISOFT_PASSWORD;
    if (!username || !password) {
        console.log("invalid ubisoft credentials")
        return errorResponse({error: "invalid ubisoft credentials"});
    }

    try {
        // create and initialise authentication provider
        const ubisoftAuthProvider = new UbisoftAuthenticationProvider(username, password);
        await ubisoftAuthProvider.authenticateUbisoftCredentialsOld();
        await ubisoftAuthProvider.authenticateUbisoftCredentialsNew();

        // get authentication values
        const authValues = ubisoftAuthProvider.getAuthenticationValues();

        // update edge config
        const updateEdgeConfig = await fetch(
            `https://api.vercel.com/v1/edge-config/${process.env.VERCEL_CONFIG_ID}/items?teamId=${process.env.VERCEL_TEAM_ID}`,
            {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: [
                        {
                            operation: 'update',
                            key: 'ticket',
                            value: authValues.ticket,
                        },
                        {
                            operation: 'update',
                            key: 'session',
                            value: authValues.session,
                        },
                        {
                            operation: 'update',
                            key: 'expiration',
                            value: authValues.expiration,
                        },
                        {
                            operation: 'update',
                            key: 'ticketNew',
                            value: authValues.ticketNew,
                        },
                        {
                            operation: 'update',
                            key: 'sessionNew',
                            value: authValues.sessionNew,
                        },
                        {
                            operation: 'update',
                            key: 'expirationNew',
                            value: authValues.expirationNew,
                        },
                    ],
                }),
            },
        );
            
        // check if edge config update was successful
        const result = await updateEdgeConfig.json();
        if (result.error) {
            console.log("error updating edge config", result.error, process.env.VERCEL_API_TOKEN)
            return errorResponse(result.error);
        }

        NextResponse.json(result);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
            return errorResponse({error: error.message});
        }
    }
}