/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormationDispatcher } from '../../domain/formation/command/formation.dispatcher';
import { globalStructureId } from '../../domain/global-structure-id';
var FormationCommandService = /** @class */ (function () {
    function FormationCommandService(formationDispatcher) {
        this.formationDispatcher = formationDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandService.prototype.setDefaultFormation = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.formationDispatcher.setDefault(structureId);
    };
    /**
     * @param {?} selectedRow
     * @param {?=} structureId
     * @return {?}
     */
    FormationCommandService.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @param {?=} structureId
     * @return {?}
     */
    function (selectedRow, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.formationDispatcher.toggleSelectedRow(structureId, selectedRow);
    };
    FormationCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationCommandService.ctorParameters = function () { return [
        { type: FormationDispatcher }
    ]; };
    return FormationCommandService;
}());
export { FormationCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationCommandService.prototype.formationDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvZm9ybWF0aW9uL2Zvcm1hdGlvbi1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFMUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHckU7SUFHQyxpQ0FBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxxREFBbUI7Ozs7SUFBbkIsVUFBb0IsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDL0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFRCxtREFBaUI7Ozs7O0lBQWpCLFVBQWtCLFdBQW1CLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFaRCxVQUFVOzs7O2dCQUxGLG1CQUFtQjs7SUFtQjVCLDhCQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksdUJBQXVCOzs7Ozs7SUFFdkIsc0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWF0aW9uRGlzcGF0Y2hlcjogRm9ybWF0aW9uRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0RGVmYXVsdEZvcm1hdGlvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuZm9ybWF0aW9uRGlzcGF0Y2hlci5zZXREZWZhdWx0KHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KHNlbGVjdGVkUm93OiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5mb3JtYXRpb25EaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdGVkUm93KHN0cnVjdHVyZUlkLCBzZWxlY3RlZFJvdyk7XG5cdH1cblxufVxuIl19