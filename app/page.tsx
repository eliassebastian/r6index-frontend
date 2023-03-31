import FooterHome from '@/components/Footer/FooterHome'
import HomeAction from '@/components/Home/HomeAction'
import styles from './page.module.scss'

import HomeBackground from '@/components/Backgrounds/BackgroundHome'
import PlayerScroll from '@/components/Player/PlayerScroll'
//      {/* <FooterHome/> */}
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <PlayerScroll/>
        <HomeBackground/>
          {/* <div className={styles.gradient}></div> */}
        <HomeAction/>
      </main>
      <FooterHome/>
    </>
  )
}
