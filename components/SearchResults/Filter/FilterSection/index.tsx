'use client';

import { FilterContext } from "@/context/FilterContext";
import type { FilterCondition, SortCriteria } from "@/types/Filter";
import { findFilter } from "@/utils/Filter";
import { ReactNode, useCallback, useContext } from "react";
import FilterAccordion from "../FilterAccordion";
import FilterCheckbox from "../FilterCheckbox";
import FilterSlider from "../FilterSlider";
import styles from './FilterSection.module.scss';

interface FilterSectionProps {
    name: string;
    field: string;
    title: string;
    icon: string;
    data: any[];
    sort?: string;
    type: "text" | "number" | "range";
    children?: ReactNode;
}

const FilterSection = (props: FilterSectionProps) => {

    const {filters, setFilters} = useContext(FilterContext);
    const countFilters = filters.filterConditions.filter(condition => condition.name === props.name).length + filters.sortCriteria.filter(criteria => criteria.name === props.name).length;
    
    const addFilterCondition = useCallback((newCondition: FilterCondition) => {
        setFilters(prevState => ({
          ...prevState,
          filterConditions: [
            ...prevState.filterConditions,
            newCondition
          ],
        }));
    }, [])
      
    const addSortCriteria = useCallback((newCriteria: SortCriteria) => {
        setFilters(prevState => ({
          ...prevState,
          sortCriteria: [
            ...prevState.sortCriteria,
            newCriteria
          ],
        }));
    }, [])

    const removeFilterCondition = useCallback((idToRemove: string) => {
        setFilters(prevState => ({
            ...prevState,
            filterConditions: prevState.filterConditions.filter(condition => condition.id !== idToRemove),
        }));
    }, []);
      
    const removeSortCriteria = useCallback((idToRemove: string) => {
        setFilters(prevState => ({
            ...prevState,
            sortCriteria: prevState.sortCriteria.filter(criteria => criteria.id !== idToRemove),
        }));
    }, []);

    return (
        <div>
            <FilterAccordion
                id={props.name} 
                icon={props.icon}
                title={props.title}
                count={countFilters}
            >
                {
                    props.sort !== undefined && 
                    <div className={styles.sort}>
                        <FilterCheckbox 
                            name={props.name} 
                            index={0} 
                            type={"sort"} 
                            field={props.sort} 
                            value={"asc"} 
                            label={"Ascending"} 
                            onAdd={ addSortCriteria } 
                            onRemove={ removeSortCriteria } 
                            isChecked={ filters.sortCriteria.some(criteria => criteria.id === props.name + 0) }
                        />
                        <FilterCheckbox 
                            name={props.name} 
                            index={1} 
                            type={"sort"} 
                            field={props.sort} 
                            value={"desc"} 
                            label={"Descending"} 
                            onAdd={ addSortCriteria } 
                            onRemove={ removeSortCriteria }
                            isChecked={ filters.sortCriteria.some(criteria => criteria.id === props.name + 1) }
                        />
                    </div>
                }
                {
                    props.type === "text" && props.data.map((item, index) => 
                        <FilterCheckbox 
                            key={`${props.name}-${index+2}`}  
                            name={props.name}
                            index={index+2}
                            type={"filter"}
                            field={props.field}
                            value={item}
                            label={item}
                            onAdd={ addFilterCondition }
                            onRemove={ removeFilterCondition }
                            isChecked={ filters.filterConditions.some(condition => condition.id === props.name + (index+2)) }
                        />
                    )
                }
                {
                    props.type === "range" &&
                    <FilterSlider
                        index={2}
                        name={props.name}
                        field={props.field}
                        title={props.title}
                        minMax={props.data as [number, number]}
                        value={props.data as [number, number]}
                        currentValue={findFilter(filters.filterConditions, props.field)}
                        onAdd={ addFilterCondition }
                        onRemove={ removeFilterCondition }
                    /> 
                }
                {props.children}
            </FilterAccordion>
        </div>
    )
}

export default FilterSection;