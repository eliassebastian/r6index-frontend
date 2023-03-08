'use client';

import styles from "./Logo.module.scss";

interface LogoProps {
    full: boolean;
    color?: string;
    background?: string;
}

const Logo = ( { full, color, background }: LogoProps ) => {
    return (
        <div className={styles.wrapper}>
            {full && <span className={styles.r6} style={{ color: color }}>R6</span>}
            <span className={styles.index} style={{ color: color, backgroundColor: background }}>INDEX</span>
        </div>
    )
}

export default Logo