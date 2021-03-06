import { FieldIdGenerator } from '../field-id.generator';
import { ColumnConfig } from '../../../../composition/column.config';
import { Field } from './field';
export declare class FieldFactory {
    private readonly fieldIdGenerator;
    constructor(fieldIdGenerator: FieldIdGenerator);
    create(column: ColumnConfig): Field;
}
