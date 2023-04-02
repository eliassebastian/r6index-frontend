import { MapConfig } from "@/configs/Maps";
import { fetchPlayer } from "@/lib/api/fetchPlayer";
import { convertNumberToTwoDecimals, removeSubstring } from "@/utils/Numbers";
import { calculateBestMap } from "@/utils/Ubisoft";
import Image from "next/image";
import Link from "next/link";
import OverviewEmpty from "../OverviewEmpty";
import styles from "./MapsCard.module.scss";

interface MapsCardProps {
    uuid: string;
}

const MapsCard = async (props: MapsCardProps) => {
    const { data: { maps } } = await fetchPlayer(props.uuid, "uplay");
    // check if maps is null, if it is, throw an error for error boundary to catch 
    const isMapsNotAvailable = maps == null;
    if (isMapsNotAvailable) return <OverviewEmpty message="Map Data Currently Unavailable" subtitle="This could be due to not enough games played, New Season Starting, or Ubisoft Server Issues."/>;

    const topMap = calculateBestMap(maps);
    const mapConfig = MapConfig[topMap.statsDetail];
    const winRate = topMap.roundsWon / topMap.roundsPlayed * 100;

    return (
        <Link 
            href={`/player/${props.uuid}/maps`}
            className={styles.card}
        >
            {/* <div className={styles.image_wrapper}>
                <Image src={mapConfig.image} alt={`${ topMap.statsDetail } map image`} fill priority />
            </div> */}
            <div className={styles.header}>
                <h2 className={styles.title}>TOP MAP</h2>
                <h3 className={styles.mapName}>{removeSubstring(topMap.statsDetail, "V2")}</h3>
            </div>
            <div className={styles.grid}>
                <div className={styles.grid_content} >
                    <span className={styles.grid_text}>{ convertNumberToTwoDecimals( winRate, 1 ) }%</span>
                    <h3 className={styles.grid_subtitle}>Win Rate</h3>
                </div>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{ convertNumberToTwoDecimals( topMap.roundsWithKOST.value * 100, 1) }%</span>
                    <h3 className={styles.grid_subtitle}>KOST</h3>
                </div>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{ convertNumberToTwoDecimals( topMap.killDeathRatio.value ) }</span>
                    <h3 className={styles.grid_subtitle}>K/D</h3>
                </div>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{ convertNumberToTwoDecimals( topMap.killsPerRound.value, 1) }</span>
                    <h3 className={styles.grid_subtitle}>KPR</h3>
                </div>
            </div>
        </Link>
    )
}

export default MapsCard;