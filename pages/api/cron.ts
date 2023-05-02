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

    // create authentication provider
    const ubisoftAuthProvider = new UbisoftAuthenticationProvider(username, password);

    // update edge config
    const updateEdgeConfig = await fetch(
        `https://api.vercel.com/v1/edge-config/${process.env.VERCEL_CONFIG_ID}/items`,
        {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: [
                    {
                        operation: 'create',
                        key: 'example_key_1',
                        value: 'example_value_1',
                    },
                    {
                        operation: 'update',
                        key: 'example_key_2',
                        value: 'new_value',
                    },
                ],
            }),
        },
    );

    const result = await updateEdgeConfig.json();



    
    

    response.status(200).json({ success: true});
}