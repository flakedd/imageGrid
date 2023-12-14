export interface BoardDataPoint {
    identity: any;
    selected: boolean;
    category?: string;
    value?: number;
    mouseOver?: boolean;
    mouseOut?: boolean;
    isSelectAllDataPoint?: boolean;
    imageURL?: string;
    selectable?: boolean;
    filtered?: boolean;
    id?: number;
    columnName?: any;
}