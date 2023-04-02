import { RankedConfig } from "@/configs/Ranks";
import { fetchPlayer } from "@/lib/api/fetchPlayer";
import { convertNumberToTwoDecimals } from "@/utils/Numbers";
import Link from "next/link";
import OverviewEmpty from "../OverviewEmpty";
import styles from "./SummaryCard.module.scss";
import SummaryCardRankImage from "./SummaryCardRankImage";

interface SummaryCardProps {
    uuid: string;
}

const SummaryCard = async (props: SummaryCardProps) => {
    const { data: { ranked, summary } } = await fetchPlayer(props.uuid, "uplay");

    const isRankedNotAvailable = ranked == null; 
    const isSummaryNotAvailable = summary == null;

    if (isRankedNotAvailable || isSummaryNotAvailable) return <OverviewEmpty message="Ranked Data Currently Unavailable" subtitle="This could be due to not enough games played, New Season Starting, or Ubisoft Server Issues."/>;

    const config = RankedConfig[ranked.rank];
    const linearGradient = `linear-gradient(45deg, ${config.linear[0]}, ${config.linear[1]}, ${config.linear[2]}, ${config.linear[3]})`;
    const winPercentage = ranked.wins / (ranked.wins + ranked.losses) * 100;

    return (
        <Link href={`/player/${props.uuid}/summary`} className={styles.card}>
            <div className={styles.ranked}>
                <SummaryCardRankImage rank={ranked.rank} topPosition={ranked.top_rank_position} img={config.image} gradient={linearGradient} />
                <h3 className={styles.ranked_text}>{ config.name }</h3>
                <span className={styles.ranked_subtitle}>Current Rank</span>
            </div>
            <div className={styles.ranked_grid}>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{convertNumberToTwoDecimals(ranked.kill_death_ratio)}</span>
                    <h3 className={styles.grid_subtitle}>K/D</h3>
                </div>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{convertNumberToTwoDecimals(winPercentage, 1)}%</span>
                    <h3 className={styles.grid_subtitle}>Win Rate</h3>
                </div>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{convertNumberToTwoDecimals(summary.roundsWithKOST.value * 100, 1)}%</span>
                    <h3 className={styles.grid_subtitle}>KOST</h3>
                </div>
            </div>
        </Link>
    )
}

export default SummaryCard;