/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var ToggleSortCommand = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleSortCommand, _super);
    function ToggleSortCommand(structureId, compositionId, fieldId) {
        var _this = _super.call(this, structureId, 'ToggleSortCommand') || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.fieldId = fieldId;
        return _this;
    }
    /**
     * @return {?}
     */
    ToggleSortCommand.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    ToggleSortCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    return ToggleSortCommand;
}(Command));
export { ToggleSortCommand };
if (false) {
    /** @type {?} */
    ToggleSortCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommand.prototype.fieldId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNvcnQuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU03QztJQUF1Qyw2Q0FBTztJQUU3QywyQkFBNEIsV0FBd0IsRUFDaEMsYUFBNEIsRUFDNUIsT0FBZ0I7UUFGcEMsWUFHQyxrQkFBTSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsU0FDdkM7UUFKMkIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBTyxHQUFQLE9BQU8sQ0FBUzs7SUFFcEMsQ0FBQzs7OztJQUVELDRDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxzQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF1QyxPQUFPLEdBZ0I3Qzs7OztJQWRZLHdDQUF3Qzs7Ozs7SUFDakQsMENBQTZDOzs7OztJQUM3QyxvQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuXG5leHBvcnQgY2xhc3MgVG9nZ2xlU29ydENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnVG9nZ2xlU29ydENvbW1hbmQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG59XG4iXX0=