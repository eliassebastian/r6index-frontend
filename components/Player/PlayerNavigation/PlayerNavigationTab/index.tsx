'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

interface PlayerNavigationTabProps {

}

const PlayerNavigationTab = (props: PlayerNavigationTabProps) => {
    const selectedSegment = useSelectedLayoutSegment();

    console.log(selectedSegment);

    return (
        <div>

        </div>
    )
}

export default PlayerNavigationTab;