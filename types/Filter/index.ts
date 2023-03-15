export type SortCriteria = {
    field: string;
    direction: "asc" | "desc";
}

export type FilterCondition = {
    field: string;
    value: string | number | [number, number];
    type: "text" | "number" | "range";
}
