import styles from '../PlayerBasicInfo.module.scss';
const PlayerBasicInfoLoading = () => {
    return (
        <div className={styles.flex}>
            <div className={styles.img_loading}></div>
            <div>
                <div>
                    <div className={styles.subtitle_loading}></div>
                </div>
                <div className={styles.nickname_wrapper}>
                    <h1 className={styles.nickname_loading}></h1>
                </div>
            </div>
        </div>
    )
}

export default PlayerBasicInfoLoading;