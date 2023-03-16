import SearchAndFilter from "../SearchAndFilter";
import styles from './SearchAndFilterLoading.module.scss';


const FilterItem = () => {
    return (
        <div className={`${styles.filter_item} ${styles.pulse}`}>
            <div className={styles.first}></div>
            <div className={styles.second}></div>
        </div>
    )
}

const GridItem = () => {
    return (
        <div className={`${styles.grid_item}`}>
            <div className={styles.img_wrapper}></div>
            <div className={styles.second}></div>
            <div className={styles.second}></div>
        </div>
    )
}


const SearchAndFilterLoading = ({ query }: { query: string }) => {
    return (
        <SearchAndFilter query={query}>
            {/* Filter Loading */}
            <div className={styles.filter}>
                <FilterItem/>  
                <FilterItem/>
                <FilterItem/>
                <FilterItem/>
                <FilterItem/>
                <FilterItem/>            
            </div>
            {/* Search Results Loading */}
            <div className={styles.search}>
                <div className={`${styles.short} ${styles.pulse}`}></div>
                <div className={`${styles.short} ${styles.pulse}`}></div>
                <div className={`${styles.grid} ${styles.pulse}`}>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                </div>
            </div>
        </SearchAndFilter>
    )
}

export default SearchAndFilterLoading;