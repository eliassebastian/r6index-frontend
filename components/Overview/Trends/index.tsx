import Link from "next/link";
import TrendsCardContent from "./TrendsCardContent";
import styles from "./TrendsCard.module.scss";
import OverviewEmpty from "../OverviewEmpty";
import { fetchPlayer } from "@/lib/api/fetchPlayer";
import { convertNumberToTwoDecimals } from "@/utils/Numbers";

interface MapsCardProps {
    uuid: string;
}

const TrendsCard = async (props: MapsCardProps) => {
    const { data: { trends } } = await fetchPlayer(props.uuid, "uplay");

    const isTrendsNotAvailable = trends == null;
    const kostTrend = !isTrendsNotAvailable && trends.trends.find(trend => trend.name === "roundsWithKOST");

    //trends data is not available
    if (isTrendsNotAvailable || !kostTrend) return <OverviewEmpty message="Performance Data Currently Unavailable" subtitle="This could be due to not enough games played, New Season Starting, or Ubisoft Server Issues."/>;

    console.log(kostTrend, kostTrend.trend, kostTrend.average, kostTrend.low, kostTrend.high )

    return (
        <Link 
            href={`/player/${props.uuid}/trends`}
            className={styles.card}
        >
            <h3 className={styles.title}>PERFORMANCE</h3>
            <TrendsCardContent uuid={props.uuid} data={ kostTrend.trend } average={ kostTrend.average } />
            <div className={styles.grid}>
                <div>
                    <span className={styles.stat_title}>Low</span><span className={styles.stat}>{ convertNumberToTwoDecimals(Math.min(...kostTrend.trend), 2) }</span>
                </div>
                <div>
                    <span className={styles.stat_title}>High</span><span className={styles.stat}>{ convertNumberToTwoDecimals(Math.max(...kostTrend.trend), 2) }</span>
                </div>
            </div>
        </Link>
    )
}

export default TrendsCard;