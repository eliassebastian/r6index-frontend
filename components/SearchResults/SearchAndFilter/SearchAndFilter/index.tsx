import { Children, ReactNode } from "react";

import styles from './SearchAndFilter.module.scss';

const SearchAndFilter = ({query, children}: {query: string, children: ReactNode}) => {

    const childrenArray = Children.toArray(children)

    return (
        <>
            {/* Filter */}
            <section className={styles.filter}>
                <div className={styles.filter_header}>
                    <h2 className={styles.filter_text}>Filter</h2>
                </div>
                <div className={styles.content}>
                    { childrenArray[0] }
                </div>
            </section>
            {/* Search Results */}
            <section className={styles.search}>
                <div className={styles.search_header}>
                    <h1 className={styles.search_text}>Results for &quot;{query}&quot;</h1>
                    <button className={styles.filter_btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className={styles.content}>
                    { childrenArray[1] }
                </div>
            </section>
        </>
    )
}

export default SearchAndFilter;