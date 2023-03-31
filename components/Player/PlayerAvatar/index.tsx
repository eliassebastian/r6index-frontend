'use client';

import { useUpdateDataContext } from '@/context/UpdateContext';
import { canPlayerBeUpdated } from '@/utils/Time';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useId } from 'react';
import styles from './PlayerAvatar.module.scss';


interface PlayerAvatarProps {
    id: string;
    platform: string;
    lastUpdate: number;
}

const PlayerAvatar = (props: PlayerAvatarProps) => {
    const id = useId();
    const router = useRouter();
    const { initiateUpdate, isUpdating, canUpdate }  = useUpdateDataContext();
    const canPlayerBeUpdate = canPlayerBeUpdated(props.lastUpdate);

    const onClick = async () => {
        if (isUpdating || !canPlayerBeUpdate) return;
        const response = await initiateUpdate(id, props.id, props.platform);
        if (response === 200 || response === 202) {
            router.refresh();
        }
    }
    
    return (
        <button 
        className={styles.button} 
        style={{ cursor: canUpdate ? 'pointer': 'default' }}
        onClick={onClick}
        >
            <div className={`${styles.bg} ${isUpdating && styles.updating}`} style={{ opacity: canPlayerBeUpdate ? 1 : 0 }}></div>
            <div className={styles.img_bg}>
                <Image src={`https://ubisoft-avatars.akamaized.net/${ props.id }/default_146_146.png`} fill priority alt="Player Avatar"/>
            </div>
        </button>
    )
}

export default PlayerAvatar;