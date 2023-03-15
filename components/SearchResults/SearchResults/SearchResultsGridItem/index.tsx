'use client';

import UbisoftProfileImage from '@/components/UbisoftProfileImage';
import { Hit } from '@/types/SearchResults';
import { timeAgo } from '@/utils/Time';
import Link from 'next/link';
import styles from './SearchResultsGridItem.module.scss';

const SearchResultsGridItem = (props: Hit) => {
    return (
        <Link className={styles.item} href={`/player/${props.profileId}`}>
            <div className={styles.img_wrapper}>
                <div className={styles.img_bg}></div>
                <UbisoftProfileImage profileId={props.profileId} large />
                <div className={styles.info}>
                    <p className={styles.level}>{ `Level ${props.level}`}</p>
                    <p className={styles.time}>{timeAgo(props.lastSeen)}</p>
                </div>
            </div>
            <p className={styles.rank}>{props.ranked[0].rank_text}</p>
            <p className={styles.name}>{props.nickname}</p>
        </Link>
    )
}

export default SearchResultsGridItem