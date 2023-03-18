'use client';

import Image from "next/image";
import { useState, ReactNode } from "react";
import styles from './FilterAccordion.module.scss';

interface FilterAccordionProps {
    id: string;
    title: string;
    icon: string;
    count: number;
    children?: ReactNode;
}

const FilterAccordion = ( props: FilterAccordionProps ) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.border}>
            <button className={styles.button} aria-expanded={isOpen} onClick={ () => { setIsOpen(value => !value) } } >
                <span className={styles.text}>
                    {/* <Image src={props.icon} width={28} height={28} alt={`${props.title} section accordion`}  /> */}
                    {props.title}
                    {
                        props.count > 0 && <span className={styles.count}>{props.count}</span>
                    }
                </span>
                <div className={`${styles.icon_container} ${isOpen && styles.rotate}`}>
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                    </svg>
                </div>
            </button>
            { isOpen && <div className={styles.content}>{props.children}</div> }
        </div>
    )
}

export default FilterAccordion