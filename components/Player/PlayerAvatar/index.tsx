'use client';

import { useUpdateDataContext } from '@/context/UpdateContext';
import { canPlayerBeUpdated } from '@/utils/Time';
import Image from 'next/image';
import styles from './PlayerAvatar.module.scss';


interface PlayerAvatarProps {
    id: string;
    platform: string;
    lastUpdate: number;
}

const PlayerAvatar = (props: PlayerAvatarProps) => {
    const { updateTimestamp, isUpdating, canUpdate }  = useUpdateDataContext();
    const canBeUpdated = canPlayerBeUpdated( updateTimestamp ? updateTimestamp : props.lastUpdate ) ;

    //[Log] CANPLAYERBEUPDATED – true – false – 1680295944 (layout-1dda1e5de5216970.js, line 1)
    //[Log] CANPLAYERBEUPDATED – true – false – 1680300251

    console.log("CANPLAYERBEUPDATED", canBeUpdated, canUpdate, props.lastUpdate)

    return (
        <button 
        className={styles.button} 
        >
            <div className={`${styles.bg} ${isUpdating && styles.updating}`} style={{ opacity: canBeUpdated ? 1 : 0 }}></div>
            <div className={styles.img_bg}>
                <Image src={`https://ubisoft-avatars.akamaized.net/${ props.id }/default_146_146.png`} fill sizes="33vw" priority alt="Player Avatar"/>
            </div>
        </button>
    )
}

export default PlayerAvatar;