'use client';

import SearchDialogContext from '@/context/SearchDialogContext';
import { useContext, useLayoutEffect } from 'react';
import SearchBar from '../SearchBar';
import styles from './SearchDialog.module.scss';

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
        <div className={styles.wrapper}>
            <div className={styles.background}>
                <div className={styles.backdrop} onPointerDown={closeDialog}></div>
                <div className={styles.container}>
                    <div className={styles.padding}>
                        <div className={styles.content}>
                            <div className={styles.searchbar_wrapper}>
                                <SearchBar onClose={closeDialog}/>
                            </div>
                        </div>
                    </div>
                    <button className={styles.close_btn} onClick={closeDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default SearchDialog;