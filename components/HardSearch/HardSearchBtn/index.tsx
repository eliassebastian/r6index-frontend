'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './HardSearchBtn.module.scss';
import { toast } from 'react-hot-toast';
import isUbisoftUUID from '@/utils/UbisoftID';

const HardSearchBtn = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [foundPlayer, setFoundPlayer] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (!isFetching) return;
        const abortController = new AbortController();

        const name = searchParams?.get('q');
        const platform = searchParams?.get('p');

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

        const devalued = JSON.stringify(params);
        const fetchIndex = fetch('http://127.0.0.1:8080/v1/index', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
            },
            body: devalued,
            signal: abortController.signal
        }).then(response => response.json());

        toast.promise(fetchIndex, {
            loading: 'Searching and Indexing Player',
            success: (data) => {
                setIsFetching(false);
                setFoundPlayer(data.data.profileId);
                return data.data.message;
            },
            error: (err) => { 
                setIsFetching(false);
                return 'Error. Could not find Player'
            },
        }, {
            position: 'bottom-right',
        })

        return () => {
            abortController.abort();
        }
    }, [isFetching])

    useEffect(() => {
        if (foundPlayer === "") return;

        const timeout = setTimeout(() => {
            router.push(`/player/${foundPlayer}`);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, [foundPlayer])

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