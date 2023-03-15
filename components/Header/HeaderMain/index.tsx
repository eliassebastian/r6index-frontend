import Logo from '@/components/Logo';
import styles from './HeaderMain.module.scss';

const HeaderMain = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo full={false}/>
            </div>

        </header>
    )
}

export default HeaderMain;