import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandService } from '../../../app/structure/structure-command.service';
import { StructureId } from '../../../domain/structure-id';
import { CompositionId } from '../../../domain/composition/composition-id';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { SourceDispatcher } from '../../../domain/source/command/source.dispatcher';
import { SortingConfig } from '../../../ui-api/structure/sorting-config';
import { FieldId } from '../../../domain/structure/command/field/data-type/field.id';
import { FilterConfig } from '../../../ui-api/structure/filter/filter-config';
import { QuickFiltersConfig } from '../../../ui-api/structure/filter/quick-filters.config';
import { SearchConfig } from '../../../ui-api/structure/search/search-config';
import { ColumnConfig } from '../../../domain/composition/column.config';
export declare class LocalStructureCommandService extends StructureCommandService {
    private readonly structureId;
    private readonly compositionId;
    constructor(structureId: StructureId, compositionId: CompositionId, commandDispatcher: CommandDispatcher, structureFilterCommandService: StructureFilterCommandService, sourceDispatcher: SourceDispatcher);
    init(): void;
    enableVerticalScroll(): void;
    disableVerticalScroll(): void;
    setOrigin(items: Array<any>): void;
    setScrollPosition(position: number): void;
    setSortingConfig(config: SortingConfig, structureId?: StructureId): void;
    toggleSort(fieldId: FieldId): void;
    setFilterConfig(config: FilterConfig, structureId?: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId?: StructureId): void;
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    initFields(columns: Array<ColumnConfig>): void;
}
