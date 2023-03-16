import type { FilterCondition, SortCriteria } from "@/types/Filter";
import { createContext, Dispatch, SetStateAction } from "react";

export interface FilterSortConditions {
    filterConditions: FilterCondition[];
    sortCriteria: SortCriteria[];
}

export const FilterContext = createContext<{ 
    filters: FilterSortConditions; 
    setFilters: Dispatch<SetStateAction<FilterSortConditions>>
}>({ 
    filters: { 
        filterConditions: [], 
        sortCriteria: [] 
    }, 
    setFilters: () => {}
});
