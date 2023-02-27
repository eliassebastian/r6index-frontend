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
                            <Logo/>
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
                            <svg aria-label="twitter" fill="currentColor" width="19" viewBox="0 0 18 15"><path d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z" fillRule="nonzero"></path></svg>
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
                        R6 Index is not affiliated with Ubisoft, Microsoft, PlayStation or Xbox.
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