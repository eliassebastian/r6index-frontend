import OperatorsGrid from "@/components/Operators/OperatorsGrid";
import { fetchPlayer } from "@/lib/api/fetchPlayer";
import styles from "./OperatorPage.module.scss";

export const dynamic = 'force-static', dynamicParams = true;
export function generateStaticParams() {
    return [];
}

export default async function Operators({ params }: { params: { uuid: string }}) {
    const {data: { operators }} = await fetchPlayer(params.uuid, "uplay");
    
    // TODO: call notFound() if operators is null
    if (!operators) return null;
    
    return (
        <div className={styles.page}>
            <OperatorsGrid data={operators}/>
        </div>
    )
}