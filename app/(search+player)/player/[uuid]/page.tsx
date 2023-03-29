import ErrorBoundary from '@/components/ErrorBoundary';
import MapsCard from '@/components/Overview/Map';
import OperatorsCard from '@/components/Overview/Operators';
import OverviewCard from '@/components/Overview/OverviewCard';
import OverviewCardError from '@/components/Overview/OverviewCardError';
import SummaryCard from '@/components/Overview/SummaryCard';
import TrendsCard from '@/components/Overview/Trends';
import WeaponsCard from '@/components/Overview/WeaponsCard';
import { Suspense } from 'react';
import styles from './OverviewPage.module.scss';

export default function Overview({ params }: { params: { uuid: string } }) {
    return (
        <div className={styles.page}>
            {/* <SummaryCard uuid={params.uuid}/>
            <WeaponsCard uuid={params.uuid}/>
            <OperatorsCard uuid={params.uuid}/>
            <MapsCard uuid={params.uuid}/>
            <TrendsCard uuid={params.uuid}/> */}
            <OverviewCard uuid={params.uuid} path={"summary"}>
                <ErrorBoundary fallback={<OverviewCardError />} >
                    <Suspense>
                        {/* @ts-expect-error Async Server Component */}
                        <SummaryCard uuid={params.uuid} />
                    </Suspense>
                </ErrorBoundary>
            </OverviewCard>
            <OverviewCard uuid={params.uuid} path={"weapons"}>
                <ErrorBoundary fallback={<OverviewCardError />} >
                    <Suspense>
                        {/* @ts-expect-error Async Server Component */}
                        <WeaponsCard uuid={params.uuid} />
                    </Suspense>
                </ErrorBoundary>
            </OverviewCard>
            <OverviewCard uuid={params.uuid} path={"operators"}>

            </OverviewCard>
            <OverviewCard uuid={params.uuid} path={"maps"}>

            </OverviewCard>
            <OverviewCard uuid={params.uuid} path={"trends"}>

            </OverviewCard>
        </div>
    )
}