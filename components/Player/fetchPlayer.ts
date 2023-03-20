import { PlayerResponse } from "@/types/Player";
import isUbisoftUUID from "@/utils/UbisoftID";

export const fetchPlayer = async (uuid: string, platform: string) => {
    //if (!isUbisoftUUID(uuid)) throw new Error("Invalid UUID");
    const testUuid = "661e632b-c2cd-4994-96ba-6d9ed930b941";
    const res = await fetch(`http://127.0.0.1:8080/v1/player?p=uplay&id=${ testUuid }`, { next: { revalidate: 3600 } });
    if (res.status !== 200) throw new Error("Failed to fetch player");
    const data: PlayerResponse = await res.json();
    return data;
}