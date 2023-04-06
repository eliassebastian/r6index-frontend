import { fetchPlayer } from "@/lib/api/fetchPlayer";
import styles from "./MapsPage.module.scss";
import MapsList from "@/components/Maps/MapsList";

export const dynamic = 'force-static', dynamicParams = true;
export function generateStaticParams() {
    return [];
}

export default async function Maps({ params }: { params: { uuid: string }}) {
    const {data: { maps }} = await fetchPlayer(params.uuid, "uplay");
    // TODO: call notFound() if maps is null
    if (!maps) return null;

    return (
        <div className={styles.page}>
            <MapsList data={maps}/>
        </div>
    )
}