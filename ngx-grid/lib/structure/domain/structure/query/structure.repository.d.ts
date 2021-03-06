import { Observable } from 'rxjs/';
import { AggregateId } from '@generic-ui/hermes';
import { Structure } from './structure';
export declare abstract class StructureRepository {
    abstract select(aggregateId: AggregateId): Observable<Structure>;
}
