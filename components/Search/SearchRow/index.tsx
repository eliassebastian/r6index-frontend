'use client';

import styles from './SearchRow.module.scss';

interface SearchRowProps {
    children: React.ReactNode;
    title: string;
}

const SearchRow = ({ children, title }: SearchRowProps) => {
    return (
        <div className={styles.row}>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </div>
    )
}

export default SearchRow