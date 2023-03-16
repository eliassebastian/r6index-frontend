export type SortCriteria = {
    name: string;
    field: string;
    direction: "asc" | "desc";
}

export type FilterCondition = {
    name: string;
    field: string;
    value: string | number | [number, number];
    type: "text" | "number" | "range";
}
