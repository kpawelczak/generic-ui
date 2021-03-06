import { DataType } from '../structure/command/field/data-type/data-type';
import { CellView } from './cell-view';
import { ColumnAggregationConfig } from './column-aggregation.config';
export declare type ElementData = (element?: any, index?: number) => any;
export declare type CellTemplate = (element?: any, index?: number) => string;
export declare type HeaderTemplate = (index?: number) => string;
export interface ColumnConfig {
    type?: DataType;
    /**
     * Relates to column Header
     */
    header?: string | HeaderTemplate;
    /**
     * Template accessor
     */
    field?: string | ElementData;
    customTemplate?: string | CellTemplate;
    view?: CellView | any;
    width?: string | number;
    aggregation?: ColumnAggregationConfig;
}
