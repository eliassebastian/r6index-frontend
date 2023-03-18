'use client';

import type { FilterCondition, SortCriteria } from '@/types/Filter';
import styles from './FilterCheckbox.module.scss';

interface FilterCheckboxProps {
    name: string;
    type?: 'filter' | 'sort';
    field: string;
    index: number;
    label: string;
    value: string;
    onAdd: (newCriteria: any) => void;
    onRemove: (idToRemove: string) => void;
    isChecked?: boolean;
}

const FilterCheckbox = (props: FilterCheckboxProps) => {
    const id = props.name + props.index;

    const onChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const checked =  e.target.checked;

        if (props.type === 'filter') {
            checked 
            ? props.onAdd( { id, name: props.name, field: props.field, value: props.value, type: "text" } satisfies FilterCondition )
            : props.onRemove( id );
            return
        }

        if (props.type === 'sort') {
            checked 
            ? props.onAdd({ id, name: props.name, field: props.field, direction: props.value } as SortCriteria) 
            : props.onRemove( id );
            return
        }
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} checked={props.isChecked} onChange={onChange} type="checkbox" id={`${ id }`} name={props.name} value={props.value} />
            <label className={styles.label} htmlFor={id}>{props.label}</label>
        </div>
    )
}

export default FilterCheckbox