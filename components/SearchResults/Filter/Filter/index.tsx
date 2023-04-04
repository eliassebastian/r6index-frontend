'use client';

import type { Hit } from "@/types/SearchResults";
import { minAndMax, uniqueFieldValues } from "@/utils/Filter";
import FilterSection from "../FilterSection";

interface FilterProps {
    results: Hit[];
}

const Filter = ({ results }: FilterProps) => {
    // Get unique values for each filter
    const getPlatforms = uniqueFieldValues( results, 'platform' );
    const getKDs = minAndMax( results, 'ranked.kill_death_ratio' );
    const getRanks = uniqueFieldValues( results, 'ranked.rank_text' );
    const getWL = minAndMax( results, 'ranked.win_lose_ratio' );
    const getLevels = minAndMax( results, 'level' );

    return (
        <div>
            <FilterSection
                name={"platform"}
                title={"Platform"}
                type={"text"}
                icon={"/icons/platform.png"}
                field={"platform"}
                data={getPlatforms}  
            />
            <FilterSection
                name={"rank"}
                title={"Rank"}
                type={"text"}
                icon={"/icons/rank.png"}
                field={"ranked.rank_text"}
                data={getRanks}  
                sort={"ranked.rank"} 
            />
            <FilterSection
                name={"level"}
                title={"Level"}
                type={"range"}
                icon={"/icons/level-up.png"}
                field={"level"}
                data={getLevels}
                sort={"level"}
            />
            <FilterSection
                name={"kd"}
                title={"K/D"}
                type={"range"}
                icon={"/icons/kill.png"}
                field={"ranked.kill_death_ratio"}
                data={getKDs}
                sort={"ranked.kill_death_ratio"}
            />
            <FilterSection
                name={"wl"}
                title={"W/L"}
                type={"range"}
                icon={"/icons/ratio.png"}
                field={"ranked.win_lose_ratio"}
                data={getWL}
                sort={"ranked.win_lose_ratio"}
            />
        </div>
    )
}

export default Filter;