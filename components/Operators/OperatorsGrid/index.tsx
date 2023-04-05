'use client';

import { FilterContext } from "@/context/FilterContext";
import type { Operator } from "@/types/Operators"
import { filterAndSortData } from "@/utils/Filter";
import { useContext } from "react";
import OperatorsGridItem from "../OperatorsGridItem";
import styles from "./OperatorsGrid.module.scss";

interface OperatorsGridProps {
    data: Operator[];
}

const OperatorsGrid = ({ data }: OperatorsGridProps) => {
    const { filters, setFilters } = useContext( FilterContext );
    //const filteredData = filterAndSortData( operators, filters.filterConditions, filters.sortCriteria );

    console.log("count", data.length)

    return (
        <div className={styles.grid}>
            {
                data.map((operator) => <OperatorsGridItem key={operator.statsDetail} data={operator} />)
            }
        </div>
    )
}

export default OperatorsGrid