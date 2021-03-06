import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureAggregateFactory } from '../../structure.aggregate-factory';
import { InitFieldsCommand } from './init-fields.command';
export declare class InitFieldsCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private readonly structureAggregateFactory;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, structureAggregateFactory: StructureAggregateFactory, domainEventPublisher: DomainEventPublisher);
    handle(command: InitFieldsCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
