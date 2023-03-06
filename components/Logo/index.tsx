import styles from "./Logo.module.scss";

interface LogoProps {
    full: boolean;
}

const Logo = ( { full }: LogoProps ) => {
    return (
        <div className={styles.wrapper}>
            {full && <span className={styles.r6}>R6</span>}
            <span className={styles.index}>INDEX</span>
        </div>
    )
}

export default Logo