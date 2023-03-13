'use client';

import { useSearchParams } from 'next/navigation';
import * as devalue from 'devalue';
import Dialog from '@/components/Dialog';
import { useEffect, useState } from 'react';
import styles from './HardSearchBtn.module.scss';
import { toast } from 'react-hot-toast';
import isUbisoftUUID from '@/utils/UbisoftID';

const HardSearchBtn = () => {
    // const [isDialogVisible, setDialogVisible] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [foundPlayer, setFoundPlayer] = useState("");
    const searchParams = useSearchParams();

    const fetchPlayer = async () => {

    }

    useEffect(() => {
        if (!isFetching) return;
        const abortController = new AbortController();

        const name = searchParams.get('q');
        const platform = searchParams.get('p');

        if (!name || !platform) {
            toast('Invalid Name/Platform Provided', {})
            setIsFetching(false);
            return;
        }

        const isUUID = isUbisoftUUID(name);
        const params = {
            id: isUUID ? name : "",
            name: !isUUID ? name : "",
            platform,
        }

        const fetchIndex = fetch('https://api.r6index.app/v1/index', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
            },
            body: devalue.stringify(params),
            signal: abortController.signal
        });

        // const fetchPlayer = async () => {
        //     const response = await fetch('https://api.r6index.app/v1/index', {
        //         headers: {
        //         method: 'POST',
        //         'Content-Type': 'application/json',
        //         },
        //         body: devalue.stringify(params),
        //         signal: abortController.signal
        //     });

        //     if (response.status !== 202) {
        //         throw new Error('Failed to find Player');
        //     }

        //     // {
        //     //     "status": "success",
        //     //     "duration": 1176,
        //     //     "data": {
        //     //         "profileId": "a2ef9315-688b-4ca6-86a0-df667fee1a0f"
        //     //     }
        //     // }

        //     const data = await response.json();

        //     setTimeout(() => {}, 5000);

        //     setIsFetching(false);
        //     console.log(data);
        // }

        toast.promise(fetchIndex, {
            loading: 'Searching and Indexing Player',
            success: (data) => {
                console.log(data);
                return 'Player Found';
            },
            error: (err) => { 
                setIsFetching(false);
                return 'Could not find Player'
            },
        }, {
            position: 'bottom-right'
        })

        return () => {
            abortController.abort();
        }
    }, [isFetching])

    return (
        <button disabled={isFetching} className={styles.btn} onClick={ () => { setIsFetching(true) } }>
            Hard Search 
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg> */}
        </button>
    )
}

export default HardSearchBtn;