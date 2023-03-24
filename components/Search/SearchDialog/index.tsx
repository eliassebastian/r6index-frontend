'use client';

import SearchDialogContext from '@/context/SearchDialogContext';
import dynamic from 'next/dynamic';
import { useContext, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import SearchBar from '../SearchBar';
import SearchRecentSearches from '../SearchRecentSearches';
import SearchRow from '../SearchRow';
import styles from './SearchDialog.module.scss';

const SearchFavourites = dynamic(() => import('../SearchFavourites'), { ssr: false });

const SearchDialog = () => {
    const { isVisible, setVisible } = useContext(SearchDialogContext);

    const closeDialog = () => {
        setVisible(false);
    }

    useLayoutEffect(() => {
        if (!isVisible) return;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        createPortal(
        <div className={styles.wrapper}>
            <div className={styles.background}>
                <div className={styles.backdrop} onPointerDown={closeDialog}></div>
                <div className={styles.container}>
                    <button className={styles.close_btn} onClick={closeDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                    <div className={styles.inner}>
                        <div className={styles.flex_wrapper}>
                            <div className={styles.searchbar_wrapper}>
                                <SearchBar onClose={closeDialog}/>
                            </div>
                            <div className={styles.searchbar_content}>
                                <SearchRow title={"Favourites"}>
                                    <SearchFavourites/>
                                </SearchRow>
                                <SearchRow title={"Recent Searches"}>
                                    <SearchRecentSearches/>
                                </SearchRow>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        , document.body)
    )
};

export default SearchDialog;