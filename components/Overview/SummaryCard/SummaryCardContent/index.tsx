'use client';

import { RankedConfig } from "@/configs/Ranks";
import { Ranked, Summary } from "@/types/Player";
import { convertNumberToTwoDecimals } from "@/utils/Numbers";
import Link from "next/link"
import { MouseEvent, useRef } from "react";
import styles from "../SummaryCard.module.scss";
import SummaryCardRankImage from "../SummaryCardRankImage";

interface SummaryCardContentProps {
    uuid: string;
    ranked: Ranked;
    summary: Summary;
}

const SummaryCardContent = (props: SummaryCardContentProps) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const config = RankedConfig[props.ranked.rank];
    const linearGradient = `linear-gradient(45deg, ${config.linear[0]}, ${config.linear[1]}, ${config.linear[2]}, ${config.linear[3]})`;
    const winPercentage = props.ranked.wins / (props.ranked.wins + props.ranked.losses) * 100;

    const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect(), x = event.clientX - rect.left, y = event.clientY - rect.top;

        ref.current.style.setProperty("--mouse-x", `${x}px`);
        ref.current.style.setProperty("--mouse-y", `${y}px`);
    }

    return (
        <Link ref={ref} href={`/player/${props.uuid}/summary`} className={styles.card} onMouseMove={onMouseMove}>
            <div className={styles.wrapper}>
                <div className={styles.ranked}>
                    <SummaryCardRankImage rank={props.ranked.rank} topPosition={props.ranked.top_rank_position} img={config.image} gradient={linearGradient} />
                    <h3 className={styles.ranked_text}>{ config.name }</h3>
                    <span className={styles.ranked_subtitle}>Current Rank</span>
                </div>
                <div className={styles.ranked_grid}>
                    <div className={styles.grid_content}>
                        <span className={styles.grid_text}>{convertNumberToTwoDecimals(props.ranked.kill_death_ratio)}</span>
                        <h3 className={styles.grid_subtitle}>K/D</h3>
                    </div>
                    <div className={styles.grid_content}>
                        <span className={styles.grid_text}>{convertNumberToTwoDecimals(winPercentage, 1)}%</span>
                        <h3 className={styles.grid_subtitle}>Win Rate</h3>
                    </div>
                    <div className={styles.grid_content}>
                        <span className={styles.grid_text}>{convertNumberToTwoDecimals(props.summary.all[0].roundsWithKOST.value * 100, 1)}%</span>
                        <h3 className={styles.grid_subtitle}>KOST</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SummaryCardContent;