import { AggregateId } from '../aggregate-id';
import { Command } from '../command/command';
import { DomainEventPayload } from './domain-event.payload';
import { Message } from '../message';
export declare abstract class DomainEvent extends Message {
    private requestCommandId;
    private payload;
    protected constructor(aggregateId: AggregateId, messageType: string, payload?: any);
    isSameType(event: DomainEvent): boolean;
    setRequestCommand(command: Command): void;
    fromCommand(command: Command): boolean;
    setPayload(payload: DomainEventPayload): void;
    getPayload(): DomainEventPayload;
}
