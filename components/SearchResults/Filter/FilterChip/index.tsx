'use client';

import { convertNumberToTwoDecimals } from '@/utils/Numbers';
import styles from './FilterChip.module.scss';

interface FilterChipProps {
    id: string;
    name: string;
    value: any;
    onDelete: (idToRemove: string) => void;
}

const FilterChip = (props: FilterChipProps) => {
    const value = props.name + ": " + (Array.isArray(props.value) ? `Between ${convertNumberToTwoDecimals(props.value[0])} & ${convertNumberToTwoDecimals(props.value[1])}` : props.value);

    const onDelete = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        props.onDelete(props.id);
    }

    return (
        <li className={styles.filter_item}>
            <button className={styles.button} onClick={onDelete}>
                <span className={styles.text}>{value}</span>
                <span className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </span>
            </button>
        </li>
    )
}

export default FilterChip;