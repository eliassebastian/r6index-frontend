import { fetchPlayer } from "@/components/Player/fetchPlayer";
import Link from "next/link";
import TrendsCardContent from "./TrendsCardContent";
import styles from "./TrendsCard.module.scss";
import OverviewEmpty from "../OverviewEmpty";

interface MapsCardProps {
    uuid: string;
}

const TrendsCard = async (props: MapsCardProps) => {
    const { data: { trends } } = await fetchPlayer(props.uuid, "uplay");

    const isTrendsNotAvailable = trends == null;
    //const topOperator = maps && calculateBestOperator([...operators.attacker, ...operators.defender])

    //TODO: return empty div if data is not available
    if (isTrendsNotAvailable) return <OverviewEmpty message="Performance Data Currently Unavailable" subtitle="This could be due to not enough games played, New Season Starting, or Ubisoft Server Issues."/>;

    return (
        <Link 
            href={`/player/${props.uuid}/trends`}
            className={styles.card}
        >  
            <TrendsCardContent uuid={props.uuid} />
        </Link>
    )
}

export default TrendsCard;