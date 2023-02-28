'use client';

import SearchDialogContext from '@/context/SearchDialogContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import styles from './SearchDialog.module.scss';

const SearchDialog = () => {
    const { isVisible, setVisible } = useContext(SearchDialogContext);

    if (!isVisible) return null;

    return (
        <div className={styles.wrapper}>
            
        </div>
    )
};

export default SearchDialog;