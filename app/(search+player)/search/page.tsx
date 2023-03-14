import FilterSection from '@/components/SearchResults/Filter/FilterSection';
import SearchResultsSection from '@/components/SearchResults/SearchResults/SearchResultsSection';
import Trending from '@/components/SearchResults/Trending/Trending';
import { redirect } from 'next/navigation';
import styles from './Search.module.scss';

interface SearchParams {
    q: string;
    p: string;
}


export default function Search({ searchParams }: { searchParams: SearchParams }) {

    // if (!searchParams.q) {
    //     redirect("/");
    // }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* <Trending/> */}
                {/* <section className={styles.filter}>
                
                </section>
                <section className={styles.search}>

                </section> */}
                {/* <section className={styles.searchfilter}>
                    <div className={styles.searchfilter_headers}>
                        <div className={styles.filter_header}>
                            <h2 className={styles.header_text}>Filter</h2>
                        </div>
                        <div className={styles.searchresults_header}>
                            <h1 className={styles.header_text}>Search Results for "{searchParams.q}"</h1>
                        </div>
                    </div>
                    <div>

                    </div>
                </section> */}
                <FilterSection/>
                <SearchResultsSection query={searchParams.q} platform={searchParams.p}/>
                <Trending/>
            </div>
        </main>
    )
}