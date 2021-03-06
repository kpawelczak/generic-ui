/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InMemoryCompositionAggregateStore } from './command/in-memory.composition.aggregate-store';
import { CompositionAggregateRepository } from '../../../domain/composition/command/composition.aggregate-repository';
import { InMemoryCompositionAggregateRepository } from './command/in-memory.composition.aggregate-repository';
import { InMemoryCompositionQueryStore } from './query/in-memory.composition.query-store';
import { CompositionRepository } from '../../../domain/composition/query/composition.repository';
import { InMemoryCompositionRepository } from './query/in-memory.composition.repository';
import { InMemoryCompositionStore } from './in-memory.composition.store';
/** @type {?} */
export var inMemoryCompositionCommandProviders = [
    InMemoryCompositionAggregateStore,
    {
        provide: CompositionAggregateRepository,
        useClass: InMemoryCompositionAggregateRepository
    },
];
/** @type {?} */
export var inMemoryCompositionQueryProviders = [
    InMemoryCompositionQueryStore,
    {
        provide: CompositionRepository,
        useClass: InMemoryCompositionRepository
    }
];
/** @type {?} */
export var inMemoryCompositionProviders = [
    InMemoryCompositionStore
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvY29tcG9zaXRpb24vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDdEgsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRXpFLE1BQU0sS0FBTyxtQ0FBbUMsR0FBRztJQUNsRCxpQ0FBaUM7SUFDakM7UUFDQyxPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLFFBQVEsRUFBRSxzQ0FBc0M7S0FDaEQ7Q0FDRDs7QUFFRCxNQUFNLEtBQU8saUNBQWlDLEdBQUc7SUFDaEQsNkJBQTZCO0lBQzdCO1FBQ0MsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsNkJBQTZCO0tBQ3ZDO0NBQ0Q7O0FBRUQsTUFBTSxLQUFPLDRCQUE0QixHQUFHO0lBQzNDLHdCQUF3QjtDQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vY29tbWFuZC9pbi1tZW1vcnkuY29tcG9zaXRpb24uYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb21tYW5kL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZSB9IGZyb20gJy4vcXVlcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnF1ZXJ5LXN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9jb21wb3NpdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi9xdWVyeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeUNvbXBvc2l0aW9uQ29tbWFuZFByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVN0b3JlLFxuXHR7XG5cdFx0cHJvdmlkZTogQ29tcG9zaXRpb25BZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdHVzZUNsYXNzOiBJbk1lbW9yeUNvbXBvc2l0aW9uQWdncmVnYXRlUmVwb3NpdG9yeVxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5Q29tcG9zaXRpb25RdWVyeVByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmUsXG5cdHtcblx0XHRwcm92aWRlOiBDb21wb3NpdGlvblJlcG9zaXRvcnksXG5cdFx0dXNlQ2xhc3M6IEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5XG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCBpbk1lbW9yeUNvbXBvc2l0aW9uUHJvdmlkZXJzID0gW1xuXHRJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmVcbl07XG4iXX0=