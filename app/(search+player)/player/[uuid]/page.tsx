import ErrorBoundary from '@/components/ErrorBoundary';
import MapsCard from '@/components/Overview/MapsCard';
import OperatorsCard from '@/components/Overview/OperatorsCard';
import OverviewCard from '@/components/Overview/OverviewCard';
import OverviewCardError from '@/components/Overview/OverviewCardError';
import SummaryCard from '@/components/Overview/SummaryCard';
import TrendsCard from '@/components/Overview/Trends';
import WeaponsCard from '@/components/Overview/WeaponsCard';
import { fetchPlayer } from '@/lib/api/fetchPlayer';
import { Suspense } from 'react';
import styles from './OverviewPage.module.scss';

export const dynamic = 'force-static', dynamicParams = true;
export function generateStaticParams() {
    return [];
}

export default async function Overview({ params }: { params: { uuid: string } }) {

    const data = await fetchPlayer(params.uuid, "uplay");

    return (
        <div className={styles.page}>
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
                <ErrorBoundary fallback={<OverviewCardError />} >
                    <Suspense>
                        {/* @ts-expect-error Async Server Component */}
                        <OperatorsCard uuid={params.uuid} />
                    </Suspense>
                </ErrorBoundary>
            </OverviewCard>
            <OverviewCard uuid={params.uuid} path={"maps"}>
                <ErrorBoundary fallback={<OverviewCardError />} >
                    <Suspense>
                        {/* @ts-expect-error Async Server Component */}
                        <MapsCard uuid={params.uuid} />
                    </Suspense>
                </ErrorBoundary>
            </OverviewCard>
            <OverviewCard uuid={params.uuid} path={"trends"}>
                <ErrorBoundary fallback={<OverviewCardError />} >
                    <Suspense>
                        {/* @ts-expect-error Async Server Component */}
                        <TrendsCard uuid={params.uuid} />
                    </Suspense>
                </ErrorBoundary>
            </OverviewCard>
        </div>
    )
}