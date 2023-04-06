import { operatorsConfig } from '@/configs/Operators';
import { fetchPlayer } from '@/lib/api/fetchPlayer';
import { calculateBestOperator } from '@/utils/Ubisoft';
import Image from 'next/image';
import { Suspense } from 'react';
import PlayerBasicInfo from '../../PlayerBasicInfo';
import PlayerBasicInfoLoading from '../../PlayerBasicInfo/Loading';
import PlayerTest from '../../PlayerTest';
import styles from '../PlayerBanner.module.scss';

interface PlayerBannerProps {
    uuid: string;
}

const PlayerBanner = async (props: PlayerBannerProps) => {
    const { data: { operators } } = await fetchPlayer(props.uuid, "uplay");

    const topOperator = operators && calculateBestOperator(operators);
    const operatorConfig = operators && operatorsConfig[topOperator.statsDetail];
    
    return (
        <section className={styles.banner}>
            {/* <PlayerTest data={player} /> */}
            {/* player details */}
            <div className={styles.player}>
                <Suspense fallback={<PlayerBasicInfoLoading/>}>
                    {/* @ts-expect-error Async Server Component */}
                    <PlayerBasicInfo id={props.uuid} platform={"uplay"} />
                </Suspense>
            </div>
            {/* image */}
            {operators && <Image className={styles.img} src={operatorConfig.large} alt={`${ topOperator.statsDetail } banner image`} sizes="33vw" fill priority />}
        </section>
    );
}

export default PlayerBanner;