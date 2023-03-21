'use client';

import { canPlayerBeUpdated } from '@/utils/Time';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './PlayerAvatar.module.scss';

interface PlayerAvatarProps {
    id: string;
    platform: string;
    lastUpdate: number;
}

const PlayerAvatar = (props: PlayerAvatarProps) => {
    const [update, setUpdate] = useState(false);
    const isUpdating = useRef(false);

    const onUpdate = () => {
        if (isUpdating.current) return;
        isUpdating.current = true;
        console.log("Updating Player");
    }


    useEffect(() => {
        if (update) return

        //run on initialisation
        const isUpdateable = canPlayerBeUpdated( props.lastUpdate );
        if (isUpdateable) {
            setUpdate(true);
            return
        }

        // run every 60 seconds
        const interval = setInterval(() => {
            const isUpdateable = canPlayerBeUpdated( props.lastUpdate );
            if (isUpdateable) {
                setUpdate(true);
                return
            }
        }, 60000);
        
        return () => {
            clearInterval(interval);
        }
    }, [update])

    return (
        <button className={styles.button} style={{ cursor: update ? 'pointer': 'default' }}>
            <div className={styles.bg} style={{ opacity: update ? 1 : 0 }}></div>
            <div className={styles.img_bg}>
                <Image src={`https://ubisoft-avatars.akamaized.net/${ props.id }/default_146_146.png`} fill priority alt="Player Avatar"/>
            </div>
        </button>
    )
}

export default PlayerAvatar;