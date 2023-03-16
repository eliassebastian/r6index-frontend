'use client';

import HardSearchBtn from '@/components/HardSearch/HardSearchBtn';
import Notification from '@/components/Notification';
import { SearchResult } from '@/types/SearchResults';
import SearchResultsGridItem from '../SearchResultsGridItem';
import styles from './SearchResultsGrid.module.scss';

interface SearchResultsGridProps {
    results: SearchResult;
}

const SearchResultsGrid = ({ results }: SearchResultsGridProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.filters}>
                    <h3 className={styles.h3}>Filters</h3>
                    <span className={styles.filter_nr}>5</span>
                </div>
                <h3 className={`${styles.h3} ${styles.results_count}`}>{ results.data.hits.length } Results Found ({ (results.duration/1000).toFixed(2) } seconds)</h3>
            </div>
            <div className={styles.notification}>
                <Notification variant='info' isCloseable={false}>
                    Not found the player you were looking for? Try a <HardSearchBtn />
                </Notification>
            </div>
            {
                results.data.hits.length > 0 &&
                <div className={styles.results}>
                    {results.data.hits.map((hit) => <SearchResultsGridItem key={hit.profileId} info={hit} query={results.data.query} />)} 
                </div>
            }
        </div>
    )
};

export default SearchResultsGrid;