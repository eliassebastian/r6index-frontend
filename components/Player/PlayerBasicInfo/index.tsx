import { timeAgo } from '@/utils/Time';
import Image from 'next/image';
import { fetchPlayer } from '../fetchPlayer';
import PlayerAvatar from '../PlayerAvatar';
import styles from './PlayerBasicInfo.module.scss';

interface PlayerBasicInfoProps {
    id: string;
    platform: string;
}

const PlayerBasicInfo = async (props: PlayerBasicInfoProps) => {
    const { data: { profileId, nickname, level, lastSeen, lastUpdate } } = await fetchPlayer(props.id, props.platform);
    return (
        <div className={styles.flex}>
            <PlayerAvatar id={profileId} platform={props.platform} lastUpdate={lastUpdate}/>

            <div>
                <div>
                    <span className={styles.subtitle}>{`Level ${ level } `}&#183;{` ${ timeAgo( lastSeen ) }`}</span>
                </div>
                <div>
                    <h1 className={styles.nickname}>{nickname}</h1>
                </div>
            </div>
        </div>
    )
}

export default PlayerBasicInfo;