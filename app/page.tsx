import MotionBorderButton from '@/components/Buttons/MotionBorderButton'
import FooterHome from '@/components/Footer/FooterHome'
import HomeAction from '@/components/Home/HomeAction'
import Logo from '@/components/Logo'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.logo_wrapper}>
          <Logo/>
        </div>
        <MotionBorderButton><h1>Test</h1></MotionBorderButton>
        <HomeAction/>
      </main>
      <FooterHome/>
    </>
  )
}
