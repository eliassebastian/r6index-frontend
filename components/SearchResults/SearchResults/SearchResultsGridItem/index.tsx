'use client';

import UbisoftProfileImage from '@/components/UbisoftProfileImage';
import { Hit } from '@/types/SearchResults';
import { timeAgo } from '@/utils/Time';
import Link from 'next/link';
import styles from './SearchResultsGridItem.module.scss';

const SearchResultsGridItem = (props: { info: Hit, query: string }) => {
    const lowerCaseQuery = props.query.toLowerCase();
    const lowerCaseNickname = props.info.nickname.toLowerCase();

    // in case ubisoft returns a ranked array with no data
    let rank = 'Error: No Rank'
    if (props.info.ranked) {
        rank = props.info.ranked.rank_text;
    }

    return (
        <Link className={styles.item} href={`/player/${props.info.profileId}`}>
            <div className={`${styles.img_wrapper} ${lowerCaseNickname == lowerCaseQuery && styles.exactmatch}`}>
                <div className={styles.img_bg}></div>
                <UbisoftProfileImage profileId={props.info.profileId} large />
                <div className={styles.info}>
                    <p className={styles.info_text}>{ `Level ${props.info.level}`}</p>
                    <p className={styles.info_text}>{timeAgo(props.info.lastSeen)}</p>
                </div>
                {!lowerCaseNickname.includes(lowerCaseQuery) && <p className={styles.previousalias}>Previous Alias</p>}
            </div>
            <p className={styles.rank}>{rank}</p>
            <p className={styles.name}>{props.info.nickname}</p>
        </Link>
    )
}

export default SearchResultsGridItem