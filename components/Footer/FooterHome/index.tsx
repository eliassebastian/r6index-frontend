import Logo from '@/components/Logo';
import styles from "./FooterHome.module.scss";

const FooterHome = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.first_row}>
                    <div className={styles.first_inner}>
                        <div className={styles.logo_wrapper}>
                            <Logo full/>
                        </div>
                        <span>Copyright © {currentYear} R6 Index All rights reserved.</span>
                    </div>
                    <div>
                        <a className={styles.status}>
                            <span style={{fontWeight: "bold"}}>Status:</span>
                            <span>&nbsp;Normal</span>
                        </a>
                    </div>
                </div>
                <div className={styles.second_row}>
                    <div className={styles.grid}>
                        <h1>About</h1>
                        <h1>Changelog</h1>
                        <h1>Community</h1>
                        <h1>Contact</h1>
                        <h1>API</h1>
                        <h1>Status</h1>
                    </div>
                    <div className={styles.socials}>
                        <a>
                            <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="currentColor" fillRule="nonzero"></path></svg>
                        </a>
                        <a>
                            <svg aria-label="twitter" fill="currentColor" width="19" viewBox="0 0 40 40">
                                <path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.resources}>
                        <h2>Cookies Policy</h2>
                        <h2>Legal Terms</h2>
                        <h2>Privacy Policy</h2>
                    </div>
                    <div className={styles.disclaimer}>
                        <span>
                        R6 Index is not affiliated with Microsoft, Xbox, PlayStation or Ubisoft.
All product names, logos, and brands are property of their respective owners.
All company, product and service names used in this website are for identification purposes only.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterHome