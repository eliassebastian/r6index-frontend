import FooterHome from '@/components/Footer/FooterHome'
import HomeAction from '@/components/Home/HomeAction'
import styles from './page.module.scss'

import HomeBackground from '@/components/Backgrounds/BackgroundHome'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeBackground/>
          {/* <div className={styles.gradient}></div> */}
        <HomeAction/>
      </main>
      <FooterHome/>
    </>
  )
}
