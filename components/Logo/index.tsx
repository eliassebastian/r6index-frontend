import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.r6}>R6</span>
            <span className={styles.index}>INDEX</span>
        </div>
    )
}

export default Logo