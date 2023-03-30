import styles from './OverviewEmpty.module.scss';

interface OverviewEmptyProps {
    message: string;
    subtitle?: string;
}

const OverviewEmpty = (props: OverviewEmptyProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            </div>
            <h2 className={styles.text}>{props.message}</h2>
            {props.subtitle && <span className={styles.subtitle}>{props.subtitle}</span>}
        </div>
    )
}

export default OverviewEmpty;