import { weaponsConfig } from "@/configs/Weapons";
import { calculateBestWeapon } from "@/utils/Ubisoft";
import Link from "next/link";
import Image from "next/image";
import styles from "./WeaponsCard.module.scss";
import { convertNumberToTwoDecimals } from "@/utils/Numbers";
import OverviewEmpty from "../OverviewEmpty";
import { fetchPlayer } from "@/lib/api/fetchPlayer";

interface WeaponCardProps {
    uuid: string;
}

const WeaponsCard = async (props: WeaponCardProps) => {
    const { data: { weapons } } = await fetchPlayer(props.uuid, "uplay");

    const isWeaponsNotAvailable = weapons == null;
    if (isWeaponsNotAvailable) return <OverviewEmpty message="Weapon Data Currently Unavailable" subtitle="This could be due to not enough games played, New Season Starting, or Ubisoft Server Issues."/>;

    const topWeapon = weapons && calculateBestWeapon(weapons)
    const weaponConfig = weaponsConfig[topWeapon.weaponName];
    const isValidWeapon = weaponConfig != null;
    const weaponImageLink = isValidWeapon ? weaponConfig.image : "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2I86r2a2QD8EHTZVZnxcxy/2913450ba952a16c29fac1f5ce58ba1a/416-C_Carbine.png";

    return (
        <Link
            href={`/player/${props.uuid}/weapons`}
            className={styles.card}
        >
            <h2 className={styles.title}>TOP WEAPON</h2>
            <div className={styles.weapon}>
                <Image className={`${ !isValidWeapon && styles.filter }`} src={weaponImageLink} alt={topWeapon.weaponName} fill sizes="33vw" />
            </div>
            <div>
                <span className={styles.weaponName}>{topWeapon.weaponName}</span>
                <span className={styles.weaponType}>{topWeapon.weaponType}</span>
            </div>
            <div className={styles.grid}>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{topWeapon.kills}</span>
                    <h3 className={styles.grid_subtitle}>Kills</h3>
                </div>
                <div className={styles.grid_content}>
                    <span className={styles.grid_text}>{convertNumberToTwoDecimals( topWeapon.roundsWon / topWeapon.roundsPlayed * 100, 1) }%</span>
                    <h3 className={styles.grid_subtitle}>Win Rate</h3>
                </div>
            </div>
        </Link>
    )
}

export default WeaponsCard;