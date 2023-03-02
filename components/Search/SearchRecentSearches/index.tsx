'use client';

import type { RecentSearch } from '@/types/RecentSearch';
import { useRecentSearchesStore } from '@/stores/RecentSearchesStore';
import styles from './SearchRecentSearches.module.scss';
import Link from 'next/link';
    
const RecentSearchItem = ( props: RecentSearch  ) => {
    return (
        <li className={styles.item}>
            <Link href={`/player/${ props.id }`}>
                {props.name}
            </Link>
        </li>
    )
}

const SearchRecentSearches = () => {
    const recentSearches = useRecentSearchesStore(state => state.searches);

    return (
        <ul className={styles.list}>
            {/* {recentSearches.map((search) => <RecentSearchItem key={search.id} {...search} />)} */}
            <RecentSearchItem name="leongids.koi" id="test" platform={0} />
            <RecentSearchItem name="spoit.koi" id="reddit" platform={0} />
            <RecentSearchItem name="antwerp.koi" id="reddit" platform={0} />
            <RecentSearchItem name="radfasdfasdfasdfasdfasfdadfasdfaf.koi" id="reddit" platform={0} />
            <RecentSearchItem name="memmememe.koi" id="reddit" platform={0} />
        </ul>
    )
};

export default SearchRecentSearches;