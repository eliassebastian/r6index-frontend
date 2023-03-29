'use client';

import styles from './OverviewCardError.module.scss';

interface OverviewCardErrorProps {
    error?: string;
    reset?: () => void;
}

const OverviewCardError = ({ error, reset }: OverviewCardErrorProps) => {  
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            </div>
            <h1 className={styles.text}>An Error Occured</h1>
            <h2 style={{marginTop: "-1rem"}} className={styles.text}>{error}</h2>
            <button
                className={styles.button}
                onClick={
                // Attempt to recover by trying to re-render the segment
                () => { console.log("error click"); reset && reset() }
                }
            >
                Retry
            </button>
        </div>
    );
}
  

export default OverviewCardError;
