'use client';

import { FilterContext } from "@/context/FilterContext";
import type { FilterCondition, SortCriteria } from "@/types/Filter";
import type { Hit } from "@/types/SearchResults";
import { minAndMax, uniqueFieldValues } from "@/utils/Filter";
import { useCallback, useContext } from "react";
import FilterAccordion from "../FilterAccordion";
import FilterCheckbox from "../FilterCheckbox";
import FilterSection from "../FilterSection";

interface FilterProps {
    results: Hit[];
}


const Filter = ({ results }: FilterProps) => {
    const getPlatforms = uniqueFieldValues( results, 'platform' );
    const getKDs = uniqueFieldValues( results, 'ranked.0.kill_death_ratio' );
    const getRanks = uniqueFieldValues( results, 'ranked.0.rank_text' );
    const minMaxs = minAndMax( results, 'ranked.0.kill_death_ratio' );

    console.log(getPlatforms, getKDs, minMaxs, getRanks);

    return (
        <div>
            <FilterSection
                name={"rank"}
                title={"Rank"}
                type={"text"}
                icon={"/icons/rank.svg"}
                field={"ranked.0.rank_text"}
                data={getRanks}  
                sort={"ranked.0.rank"} 
            />
            <FilterSection
                name={"platform"}
                title={"Platform"}
                type={"text"}
                icon={"/icons/rank.svg"}
                field={"platform"}
                data={getPlatforms}  
            />
            <FilterSection
                name={"kd"}
                title={"K/D"}
                type={"range"}
                icon={"/icons/rank.svg"}
                field={"ranked.0.kill_death_ratio"}
                data={getKDs}
                sort={"ranked.0.kill_death_ratio"}
            />
        </div>
    )
}

export default Filter;