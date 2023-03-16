'use client';

import { type FilterSortConditions, FilterContext } from "@/context/FilterContext";
import { ReactNode, useState } from "react";

const FilterContextProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<FilterSortConditions>({ filterConditions: [], sortCriteria: [] });
     
    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export default FilterContextProvider;