import { timeAgo } from '@/utils/Time';
import { fetchPlayer } from '../fetchPlayer';
import PlayerAvatar from '../PlayerAvatar';
import { PlayerButtonTab, PlayerButtonTabMobile } from '../PlayerButtonTab';
import styles from './PlayerBasicInfo.module.scss';

interface PlayerBasicInfoProps {
    id: string;
    platform: string;
    mobile?: boolean;
}

const PlayerBasicInfo = async (props: PlayerBasicInfoProps) => {
    const { data: { profileId, nickname, level, lastSeen, lastUpdate, aliases } } = await fetchPlayer(props.id, props.platform);
    return (
        <>
            <div className={styles.flex}>
                { !props.mobile && <PlayerAvatar id={profileId} platform={props.platform} lastUpdate={lastUpdate}/> }
                <div>
                    <div>
                        <span className={styles.subtitle}>{`Level ${ level } `}&#183;{` ${ timeAgo( lastSeen ) }`}</span>
                    </div>
                    <div className={styles.nickname_wrapper}>
                        <h1 className={styles.nickname}>{nickname}</h1>
                        {!props.mobile && <span className={styles.platform}>{props.platform}</span>}
                    </div>
                </div>
                <PlayerButtonTabMobile nickname={nickname} id={props.id} platform={props.platform} aliases={aliases} mobile={props.mobile} lastUpdate={lastUpdate}/>
            </div>
            <PlayerButtonTab nickname={nickname} id={props.id} platform={props.platform} aliases={aliases} mobile={props.mobile} lastUpdate={lastUpdate}/>
        </>
    )
}

export default PlayerBasicInfo;