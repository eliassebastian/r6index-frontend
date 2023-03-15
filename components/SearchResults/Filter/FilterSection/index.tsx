import styles from './FilterSection.module.scss';

const FilterSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.header_text}>Filter</h2>
            </div>
        </section>
    )
}

export default FilterSection