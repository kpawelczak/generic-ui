/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceCommandService } from '../../../app/source/source-command.service';
import { StructureId } from '../../../domain/structure-id';
import { SourceDispatcher } from '../../../domain/source/command/source.dispatcher';
import { StructureFieldUiRepository } from '../../../ui-api/structure/field/structure.field.ui-repository';
import { SourceQueryService } from '../../../app/source/source-query.service';
import { StructureEditSourceItemParams } from '../../../domain/source/command/origin/edit/structure.edit-source-item.params';
var LocalSourceCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSourceCommandService, _super);
    function LocalSourceCommandService(structureId, sourceDispatcher, structureFieldUiRepository, sourceQueryService) {
        var _this = _super.call(this, sourceDispatcher, structureFieldUiRepository, sourceQueryService) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    LocalSourceCommandService.prototype.setOrigin = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        _super.prototype.setOrigin.call(this, items, this.structureId);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    LocalSourceCommandService.prototype.setLoading = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        _super.prototype.setLoading.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    LocalSourceCommandService.prototype.editItem = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        _super.prototype.editItem.call(this, params, this.structureId);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    LocalSourceCommandService.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    function (itemIndex, fieldIndex, value) {
        _super.prototype.editItemByIndex.call(this, itemIndex, fieldIndex, value, this.structureId);
    };
    LocalSourceCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSourceCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: SourceDispatcher },
        { type: StructureFieldUiRepository },
        { type: SourceQueryService }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "setOrigin", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "setLoading", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [StructureEditSourceItemParams]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "editItem", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Number, Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "editItemByIndex", null);
    return LocalSourceCommandService;
}(SourceCommandService));
export { LocalSourceCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUc3SDtJQUMrQyxxREFBb0I7SUFFbEUsbUNBQTZCLFdBQXdCLEVBQ2xELGdCQUFrQyxFQUNsQywwQkFBc0QsRUFDdEQsa0JBQXNDO1FBSHpDLFlBSUMsa0JBQU0sZ0JBQWdCLEVBQUUsMEJBQTBCLEVBQUUsa0JBQWtCLENBQUMsU0FDdkU7UUFMNEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBS3JELENBQUM7Ozs7O0lBR0QsNkNBQVM7Ozs7SUFBVCxVQUFVLEtBQWlCO1FBQzFCLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsOENBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQzFCLGlCQUFNLFVBQVUsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsNENBQVE7Ozs7SUFBUixVQUFTLE1BQXFDO1FBQzdDLGlCQUFNLFFBQVEsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7SUFHRCxtREFBZTs7Ozs7O0lBQWYsVUFBZ0IsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVU7UUFDaEUsaUJBQU0sZUFBZSxZQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkE1QkQsVUFBVTs7OztnQkFQRixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsMEJBQTBCO2dCQUMxQixrQkFBa0I7O0lBZTFCO1FBREMsUUFBUTs7aURBQ1EsS0FBSzs7OERBRXJCO0lBR0Q7UUFEQyxRQUFROzs7OytEQUdSO0lBR0Q7UUFEQyxRQUFROztpREFDUSw2QkFBNkI7OzZEQUU3QztJQUdEO1FBREMsUUFBUTs7OztvRUFHUjtJQUVGLGdDQUFDO0NBQUEsQUE5QkQsQ0FDK0Msb0JBQW9CLEdBNkJsRTtTQTdCWSx5QkFBeUI7Ozs7OztJQUV6QixnREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU291cmNlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvc291cmNlL3NvdXJjZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9zb3VyY2Uvc291cmNlLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTb3VyY2VDb21tYW5kU2VydmljZSBleHRlbmRzIFNvdXJjZUNvbW1hbmRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LFxuXHRcdFx0XHRzb3VyY2VRdWVyeVNlcnZpY2U6IFNvdXJjZVF1ZXJ5U2VydmljZSkge1xuXHRcdHN1cGVyKHNvdXJjZURpc3BhdGNoZXIsIHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LCBzb3VyY2VRdWVyeVNlcnZpY2UpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdHN1cGVyLnNldE9yaWdpbihpdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0TG9hZGluZyhlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogdm9pZCB7XG5cdFx0c3VwZXIuZWRpdEl0ZW0ocGFyYW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHN1cGVyLmVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXgsIGZpZWxkSW5kZXgsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=