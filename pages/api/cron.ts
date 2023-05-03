import UbisoftAuthenticationProvider from "@/services/ubisoft/authentication";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    // check if request has valid key
    if (request.query.key !== process.env.CRON_KEY) {
        response.status(404).end();
        return;
    }

    // get username and password from env file
    const username = process.env.UBISOFT_USERNAME;
    const password = process.env.UBISOFT_PASSWORD;
    if (!username || !password) {
        response.status(404).end();
        return;
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
            `https://api.vercel.com/v1/edge-config/${process.env.VERCEL_CONFIG_ID}/items?teamId=${process.env.VERCEL_TEAM_ID}}`,
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
    
        const result = await updateEdgeConfig.json();
        
        response.status(200).json({ success: true});
    } catch (error) {
        response.status(404).end();
    }
}