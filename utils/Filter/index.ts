import type { FilterCondition, SortCriteria } from "@/types/Filter";
import type { Hit } from "@/types/SearchResults";

// Get nested property from object
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

// Filter and sort data based on filter conditions and sort criteria against a list of players
export const filterAndSortData = (
    data: Hit[],
    filterConditions: FilterCondition[],
    sortCriteria: SortCriteria[]
  ) => {
    const groupedConditions = filterConditions.reduce<Record<string, FilterCondition[]>>(
        (groups, condition) => {
            if (!groups[condition.field]) {
                groups[condition.field] = [];
            }
            groups[condition.field].push(condition);
            return groups;
        },
        {}
    );
  
    const filterData = (player: Hit, conditions: FilterCondition[]) => {
        return conditions.some((condition) => {
            const value = getNestedProperty(player, condition.field);
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
        });
    };
  
    const filteredData = data.filter((player) => {
        return Object.values(groupedConditions).every((conditions) =>
            filterData(player, conditions)
        );
    });
  
    filteredData.sort((a, b) => {
        for (let criteria of sortCriteria) {
            const aValue = getNestedProperty(a, criteria.field);
            const bValue = getNestedProperty(b, criteria.field);
    
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

// Get min and max values for a object field
export const minAndMax = (data: any[], field: string) => {
    const fieldValues = data.map(item => getNestedProperty(item, field))
    const min = Math.min.apply(null, fieldValues);
    const max = Math.max.apply(null, fieldValues);
    return [min, max];
}

// Get unique values for a object field
export const uniqueFieldValues = (data: any[], field: string) => {
    const fieldValues = data.map(item => getNestedProperty(item, field))
    const uniqueValues = [...new Set(fieldValues)];
    return uniqueValues;
}

// Find filter condition by field
export const findFilter = (filterConditions: FilterCondition[], field: string) => {
    const filter = filterConditions.find((condition) => {
        return condition.field === field;
    });
  
    return filter ? filter.value : undefined;
};