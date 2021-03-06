import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { SearchConfig } from '../../../../../ui-api/structure/search/search-config';
export declare class StructureSetConfigSearchingCommand extends Command {
    readonly structureId: StructureId;
    private readonly searchConfig;
    constructor(structureId: StructureId, searchConfig: SearchConfig);
    getConfig(): SearchConfig;
}
