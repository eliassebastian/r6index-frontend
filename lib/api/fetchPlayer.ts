
import { PlayerResponse } from "@/types/Player";
import isUbisoftUUID from "@/utils/UbisoftID";

export const fetchPlayer = async (uuid: string, platform: string) => {

    console.log("Fetching Player Information...", uuid, platform);

    if (!isUbisoftUUID(uuid)) throw new Error("Invalid UUID");
    //const res = await fetch(`http://127.0.0.1:8080/v1/player?p=uplay&id=${ uuid }`, { cache: 'force-cache' });
    const res = await fetch(`http://127.0.0.1:8080/v1/player?p=uplay&id=${ uuid }`, { next: { revalidate: 15 } });
    
    if (res.status !== 200) throw new Error("Failed to Get Player Information");

    const data: PlayerResponse = await res.json();
    return data;
}