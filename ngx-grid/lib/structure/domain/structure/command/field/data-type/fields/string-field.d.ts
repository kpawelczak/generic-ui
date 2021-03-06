import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnAggregationConfig } from '../../../../../composition/column-aggregation.config';
import { AggregationType } from '../../../aggregation/aggregation.type';
export declare class StringField extends Field {
    constructor(id: FieldId, accessor: any, aggregationConfig?: ColumnAggregationConfig);
    assignDefaultAggregations(): AggregationType;
    assignPossibleAggregations(): AggregationType;
}
