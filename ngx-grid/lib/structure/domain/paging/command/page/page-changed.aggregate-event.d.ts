import { AggregateEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
export declare class PageChangedAggregateEvent extends AggregateEvent {
    constructor(structureId: StructureId);
}
