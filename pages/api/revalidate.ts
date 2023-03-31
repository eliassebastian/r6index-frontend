import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;

    res.setHeader('Vary', 'Origin');
    res.setHeader('Vary', 'Access-Control-Request-Method');

    const origin = req.headers.origin;
    if (origin) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (method === 'OPTIONS' && req.headers['access-control-request-method']) {
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Max-Age', '43200');
            res.status(200).end();
            return;
        }
    }

    if (method !== 'POST') {
        return res.status(401).json({ message: 'Invalid Method' });
    }

    if (!body) {
        return res.status(400).send('Bad request (no body)');
    }

    const { secret, id, platform } = body;
    if (secret !== process.env.REVALIDATE_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    console.log(`Revalidating player ${id} on ${platform}...`);
    try {
        //post update from api
        const updateResponse = await fetch('http://127.0.0.1:8080/v1/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
            },
            body: JSON.stringify({"platform": platform, "id": id}),
        });

        console.log(`Update response: ${updateResponse.status} ${updateResponse.statusText}`);
        //revalidate page with new data
        await res.revalidate(`/player/${id}`);
        return res.status(updateResponse.status).json({ revalidated: true });
    } catch (e) {
        return res.status(500).json({ message: 'Error Updating' });
    }
}