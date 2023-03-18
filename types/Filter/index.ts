export type SortCriteria = {
    id: string; //unique id of the sort
    name: string;
    field: string;
    direction: "asc" | "desc";
}

export type FilterCondition = {
    id: string; //unique id of the filter
    name: string; //name of the filter
    field: string; //object path/field
    value: string | number | [number, number]; //value to filter
    type: "text" | "number" | "range"; //type of filter
}
