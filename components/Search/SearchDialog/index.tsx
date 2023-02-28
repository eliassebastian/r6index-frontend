'use client';

import SearchDialogContext from '@/context/SearchDialogContext';
import { useContext, useLayoutEffect } from 'react';
import SearchBar from '../SearchBar';
import styles from './SearchDialog.module.scss';

const SearchDialog = () => {
    const { isVisible, setVisible } = useContext(SearchDialogContext);

    useLayoutEffect(() => {
        if (!isVisible) return;
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.background}>
                <div className={styles.backdrop} onPointerDown={() => { setVisible(false) }}></div>
                <div className={styles.container}>
                    <div className={styles.padding}>
                        <div className={styles.content}>
                            <div className={styles.searchbar_wrapper}>
                                <SearchBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchDialog;