'use client';

import { RankedConfig } from "@/configs/Ranks";
import { Ranked, Summary } from "@/types/Player";
import Link from "next/link"
import styles from "../SummaryCard.module.scss";
import SummaryCardRankImage from "../SummaryCardRankImage";

interface SummaryCardContentProps {

    uuid: string;
    ranked: Ranked;
    summary: Summary;

}

const SummaryCardContent = (props: SummaryCardContentProps) => {

    const config = RankedConfig[5];
    const linearGradient = { "--rank-linear": `linear-gradient(45deg, ${config.linear[0]}, ${config.linear[1]}, ${config.linear[2]}, ${config.linear[3]})` } as React.CSSProperties;

    console.log(props.ranked, props.summary)


    return (
        <Link href={`/player/${props.uuid}/summary`} className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles.ranked}>
                    <SummaryCardRankImage rank={5} topPosition={100} />

                    <h3 style={{
                        // background: `linear-gradient(45deg, ${config.linear[0]}, ${config.linear[1]}, ${config.linear[2]}, ${config.linear[3]})`,
                        // backgroundClip: "text",
                        // WebkitBackgroundClip: "text",
                        // backgroundSize: "200% 200%",
                        // WebkitTextFillColor: "transparent",
                        }} className={styles.ranked_text}>{ config.name }
                    </h3>
                    <span className={styles.ranked_subtitle}>Current Rank</span>
                </div>
            </div>
        </Link>
    )
}

export default SummaryCardContent;