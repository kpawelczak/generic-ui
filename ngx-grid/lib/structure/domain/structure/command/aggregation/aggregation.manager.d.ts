import { AggregateEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
import { AggregationCalculator } from './calculation/aggregation.calculator';
import { Field } from '../field/data-type/field';
import { OriginItemEntity } from '../../../source/command/origin/origin-item-entity';
export declare class AggregationManager {
    private readonly calculators;
    private readonly structureId;
    private enabled;
    private readonly values;
    constructor(structureId: StructureId, calculators: Array<AggregationCalculator<any, any>>);
    calculate(fields: Array<Field>, entities: Array<OriginItemEntity>): Array<AggregateEvent>;
    setEnabled(enabled: boolean): void;
    add(): void;
    remove(): void;
    update(): void;
}
