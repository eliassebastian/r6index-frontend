import { operatorsConfig } from '@/configs/Operators';
import { calculateBestOperator } from '@/utils/Operators';
import Image from 'next/image';
import { fetchPlayer } from '../../fetchPlayer';
import PlayerBasicInfo from '../../PlayerBasicInfo';
import PlayerTest from '../../PlayerTest';
import styles from '../PlayerBanner.module.scss';

interface PlayerBannerProps {
    uuid: string;
}

const PlayerBanner = async (props: PlayerBannerProps) => {

    const player = await fetchPlayer(props.uuid, "uplay");
    const topOperator = calculateBestOperator([...player.data.operators.attacker, ...player.data.operators.defender]);
    const operatorConfig = operatorsConfig[topOperator.statsDetail];

    return (
        <section className={styles.banner}>
            {/* player details */}
            <div className={styles.player}>
                {/* @ts-expect-error Async Server Component */}
                <PlayerBasicInfo id={props.uuid} platform={"uplay"} />
            </div>
            {/* image */}
            <Image className={styles.img} src={operatorConfig.large} alt={`${ topOperator.statsDetail } banner image`} fill priority />
        </section>
    );
}

export default PlayerBanner;