import ErrorBoundary from '@/components/ErrorBoundary';
import FilterContextProvider from '@/components/SearchResults/Filter/FilterContextProvider';
import SearchAndFilterLoading from '@/components/SearchResults/SearchAndFilter/SearchAndFilterLoading';
import SearchResults from '@/components/SearchResults/SearchResults/SearchResults';
import SearchResultsError from '@/components/SearchResults/SearchResults/SearchResultsError';
import Trending from '@/components/SearchResults/Trending/Trending';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import styles from './Search.module.scss';

export const dynamic = 'force-dynamic';

interface SearchParams {
    q: string;
    p: string;
}

export default function Search({ searchParams }: { searchParams: SearchParams }) {

    console.log("SearchParams: ", searchParams);

    // if (!searchParams.q) {
    //     redirect("/");
    // }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <FilterContextProvider>
                    <ErrorBoundary fallback={<SearchResultsError/>}>
                        <Suspense fallback={<SearchAndFilterLoading query={searchParams.q}/>}>
                            {/* @ts-expect-error Async Server Component */}
                            <SearchResults user={searchParams.q} platform={searchParams.p}/>
                        </Suspense>
                    </ErrorBoundary>
                    <Trending/>
                </FilterContextProvider>
            </div>
        </main>
    )
}