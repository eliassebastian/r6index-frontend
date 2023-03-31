import PlayerBanner from '@/components/Player/PlayerBanner/PlayerBanner';
import PlayerBasicInfo from '@/components/Player/PlayerBasicInfo';
import PlayerBasicInfoLoading from '@/components/Player/PlayerBasicInfo/Loading';
import PlayerFadeBackground from '@/components/Player/PlayerFadeBackground';
import PlayerNavigation from '@/components/Player/PlayerNavigation';
import PlayerScroll from '@/components/Player/PlayerScroll';
import PlayerScrollBtn from '@/components/Player/PlayerScrollBtn';
import { Suspense } from 'react';
import styles from './Layout.module.scss';

export default function Layout({ children, params }: { children: React.ReactNode, params: { uuid: string } }) {

    console.log("Player Layout Rendered");

    return (
        <main className={styles.main}>
            <PlayerScroll/>
            <div className={styles.fixed}>
                {/* Scroll Opacity Client Side Component */}
                <PlayerFadeBackground/>
                <Suspense>
                    {/* @ts-expect-error Async Server Component */}
                    <PlayerBanner uuid={params.uuid} />
                </Suspense>
            </div>
            <div className={styles.container}>
                <section className={styles.container_header}>
                    <div className={styles.full}>
                        <Suspense fallback={<PlayerBasicInfoLoading />}>
                            {/* @ts-expect-error Async Server Component */}
                            <PlayerBasicInfo id={params.uuid} platform={"uplay"} mobile />
                        </Suspense>
                    </div>
                    <div className={styles.navigation}>
                        <PlayerNavigation slug={params.uuid}/>
                        <PlayerScrollBtn/>
                    </div>
                </section>
                <div className={styles.page}>
                    { children}
                </div>
            </div>
        </main>
    )
}