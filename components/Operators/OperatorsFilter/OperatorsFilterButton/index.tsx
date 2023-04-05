'use client';

import { Operator } from "@/types/Operators";
import { useState } from "react";
import styles from "./OperatorsFilterButton.module.scss";

interface OperatorsFilterButtonProps {
    data: Operator[]
}

const OperatorsFilterButton = (props: OperatorsFilterButtonProps) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(value => !value);
    }

    return (
        <div className={styles.container}>
            <button className={`${styles.button} ${active && styles.button_active}`} onClick={toggleActive}>
                {
                    active && 
                    <div className={`${styles.wrapper} ${styles.large}`}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>                            
                        </div>
                        <span className={styles.text}>Close</span>
                    </div>
                }
                <div className={styles.wrapper}>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>
                    </div>
                    <span className={styles.text}>Filter</span>
                </div>
            </button>
            {
                active && 
                <div className={styles.modal}>
                    Test
                </div>
            }
        </div>
    )
}

export default OperatorsFilterButton;