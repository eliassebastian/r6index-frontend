'use client';

import { useUpdateDataContext } from '@/context/UpdateContext';
import { canPlayerBeUpdated } from '@/utils/Time';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './PlayerUpdate.module.scss';

interface PlayerUpdateProps {
    id: string;
    platform: string;
    lastUpdate: number;
}

const PlayerUpdate = (props: PlayerUpdateProps) => {
    const { updateTimestamp, initiateUpdate, isUpdating, canUpdate, setCanUpdate} = useUpdateDataContext();
    const router = useRouter();
    const canBeUpdated = canPlayerBeUpdated( updateTimestamp ? updateTimestamp : props.lastUpdate );

    console.log("UPDATETIMESTAMPS", updateTimestamp)

    const onClick = async () => {
        if (isUpdating || !canBeUpdated) return;
        const response = await initiateUpdate(props.id, props.platform);
        console.log("ONCLICK response", response);
        if (response === 202) {
            console.log("refresh");
            router.refresh();
        }
    }

    useEffect(() => {
        //dont run if player page can be updated
        if (canBeUpdated) return

        // run every 60 seconds
        const interval = setInterval(() => {
            console.log( "interval");
            const isUpdateable = canPlayerBeUpdated( updateTimestamp ? updateTimestamp : props.lastUpdate );
            if (isUpdateable) {
                setCanUpdate(true);
                return
            }
        }, 60000);
        
        return () => {
            clearInterval(interval);
        }
    }, [ canUpdate ]);

    if (!canBeUpdated) return null;

    return (
        <button className={styles.button} onClick={onClick}>
            <span className={`${styles.icon} ${isUpdating && styles.rotate}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                </svg>
            </span>
            <span className={styles.text}>{isUpdating ? "Updating Profile" : "Update Profile"}</span>
        </button>
    )
}

export default PlayerUpdate;