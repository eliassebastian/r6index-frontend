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
                <FilterSection/>
                <SearchResultsSection query={searchParams.q} platform={searchParams.p}/>
                <Trending/>
            </div>
        </main>
    )
}