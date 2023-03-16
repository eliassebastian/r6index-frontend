import type { FilterCondition, SortCriteria } from "@/types/Filter";
import type { Hit } from "@/types/SearchResults";

const getValueByPath = (obj: any, path: string) => {
    const parts = path.split('.');
    let value = obj;
    for (let part of parts) {
      value = value[part];
      if (value === undefined) {
        return undefined;
      }
    }
    return value;
};

const getNestedProperty = (obj: any, path: string) => {
    const properties = path.split('.');
    let currentObj = obj;
    for (const property of properties) {
        if (currentObj && currentObj.hasOwnProperty(property)) {
            currentObj = currentObj[property];
        } else {
            return undefined;
        }
    }

    return currentObj;
}
  
export const filterAndSortData = (
    data: Hit[],
    filterConditions: FilterCondition[],
    sortCriteria: SortCriteria[]
) => {
    const filterData = (player: Hit, condition: FilterCondition) => {
        const value = getValueByPath(player, condition.field);
        switch (condition.type) {
        case "text":
            return value === condition.value;
        case "number":
            return value === condition.value;
        case "range":
            return (
                value >= (condition.value as [number, number])[0] &&
                value <= (condition.value as [number, number])[1]
            );
        default:
            return true;
        }
    };
  
    let filteredData = data.filter((player) => {
      return filterConditions.every((condition) => filterData(player, condition));
    });
  
    filteredData.sort((a, b) => {
        for (let criteria of sortCriteria) {
            const aValue = getValueByPath(a, criteria.field);
            const bValue = getValueByPath(b, criteria.field);
    
            if (criteria.direction === "asc") {
                if (aValue > bValue) return 1;
                if (aValue < bValue) return -1;
            } else {
                if (aValue < bValue) return 1;
                if (aValue > bValue) return -1;
            }
        }
        return 0;
    });
  
    return filteredData;
};

export const minAndMax = (data: any[], field: string) => {
    const fieldValues = data.map(item => getNestedProperty(item, field))
    const min = Math.min.apply(null, fieldValues);
    const max = Math.max.apply(null, fieldValues);
    return [min, max];
}

export const uniqueFieldValues = (data: any[], field: string) => {
    const fieldValues = data.map(item => getNestedProperty(item, field))
    const uniqueValues = [...new Set(fieldValues)];
    return uniqueValues;
}