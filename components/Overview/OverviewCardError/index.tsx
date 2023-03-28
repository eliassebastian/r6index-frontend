'use client';

import styles from './OverviewCardError.module.scss';

interface OverviewCardErrorProps {
    error?: string;
    reset?: () => void;
}

const OverviewCardError = ({ error, reset }: OverviewCardErrorProps) => {  
    return (
        <div className={styles.container}>
            <h2>{error}</h2>
            <button
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
