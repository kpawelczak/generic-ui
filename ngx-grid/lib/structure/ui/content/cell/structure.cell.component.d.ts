import { ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../domain/composition/query/definition/cell-template-with-accessor';
import { Entity } from '../../../domain/source/entity';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandService } from '../../../app/source/source-command.service';
export declare class StructureCellComponent extends SmartComponent {
    private changeDetectorRef;
    private structureCellEditArchive;
    private structureCellEditStore;
    private sourceCommandService;
    entity: Entity;
    cell: CellTemplateWithAccessor;
    editMode: boolean;
    cellEditingEnabled: boolean;
    inEditMode: boolean;
    editContext: any;
    valueChanges$: any;
    status$: any;
    actualValue: any;
    constructor(changeDetectorRef: ChangeDetectorRef, structureCellEditArchive: StructureCellEditArchive, structureCellEditStore: StructureCellEditStore, sourceCommandService: SourceCommandService);
    ngOnChanges(changes: SimpleChanges): void;
    enterEditMode(forceCheck?: boolean): void;
    exitEditMode(): void;
    submitChangesAndExit(): void;
    private observeFieldStatus;
    private observeValueChanges;
    private publishEditState;
    private publishEditEnter;
    private publishEditCancel;
    private publishEditSubmit;
}
