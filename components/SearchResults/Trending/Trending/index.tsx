import TrendingList from '../TrendingList';
import styles from './Trending.module.scss';

const Trending = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.header_text}>Trending Players</h2>
            </div>
            <TrendingList/>
        </section>
    )
}

export default Trending;