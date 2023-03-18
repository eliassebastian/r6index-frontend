'use client';

import HardSearchBtn from '@/components/HardSearch/HardSearchBtn';
import Notification from '@/components/Notification';
import { FilterContext } from '@/context/FilterContext';
import { SearchResult } from '@/types/SearchResults';
import { filterAndSortData } from '@/utils/Filter';
import { useCallback, useContext } from 'react';
import FilterChip from '../../Filter/FilterChip';
import SearchResultsGridItem from '../SearchResultsGridItem';
import styles from './SearchResultsGrid.module.scss';

interface SearchResultsGridProps {
    results: SearchResult;
}

const SearchResultsGrid = ({ results }: SearchResultsGridProps) => {
    const { filters, setFilters } = useContext(FilterContext);
    const filteredData = filterAndSortData( results.data.hits, filters.filterConditions, filters.sortCriteria );
    const filterCount = filters.filterConditions.length + filters.sortCriteria.length;

    const removeFilterCondition = useCallback((idToRemove: string) => {
        setFilters(prevState => ({
            ...prevState,
            filterConditions: prevState.filterConditions.filter(condition => condition.id !== idToRemove),
        }));
    }, []);
      
    const removeSortCriteria = useCallback((idToRemove: string) => {
        setFilters(prevState => ({
            ...prevState,
            sortCriteria: prevState.sortCriteria.filter(criteria => criteria.id !== idToRemove),
        }));
    }, []);

    // console.log(results);
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.filters}>
                    <h3 className={styles.h3}>Filters</h3>
                    <span className={styles.filter_nr}>{ filterCount }</span>
                    <div className={styles.overflow}>
                        {
                            filterCount > 0 && 
                            <ul className={styles.chips}>
                                {filters.filterConditions.map((condition) => 
                                    <FilterChip 
                                        id={condition.id} 
                                        name={condition.name} 
                                        value={condition.value} 
                                        onDelete={removeFilterCondition}  
                                />)}
                                {filters.sortCriteria.map((criteria) => 
                                    <FilterChip 
                                        id={criteria.id}
                                        name={criteria.name}
                                        value={criteria.direction}  
                                        onDelete={removeSortCriteria}  
                                />)}
                            </ul>
                        }
                    </div>
                </div>
                <h3 className={`${styles.h3} ${styles.results_count}`}>{ filteredData.length } Results Found ({ (results.duration/1000).toFixed(2) } seconds)</h3>
            </div>
            <div className={styles.notification}>
                <Notification variant='info' isCloseable={false}>
                    Not found the player you were looking for? Try a <HardSearchBtn />
                </Notification>
            </div>
            {
                filteredData.length > 0 &&
                <div className={styles.results}>
                    {filteredData.map((hit) => <SearchResultsGridItem key={hit.profileId} info={hit} query={results.data.query} />)} 
                </div>
            }
        </div>
    )
};

export default SearchResultsGrid;