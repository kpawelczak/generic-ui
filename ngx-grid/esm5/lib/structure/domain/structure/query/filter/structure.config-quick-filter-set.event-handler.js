/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
import { StructureConfigQuickFilterSetEvent } from '../../command/filter/quick/structure.config-quick-filter-set.event';
var StructureConfigQuickFilterSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureConfigQuickFilterSetEventHandler, _super);
    function StructureConfigQuickFilterSetEventHandler(structureQuickFilterRepository) {
        var _this = _super.call(this) || this;
        _this.structureQuickFilterRepository = structureQuickFilterRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigQuickFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigQuickFilterSetEvent) {
            this.structureQuickFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigQuickFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigQuickFilterSetEventHandler.ctorParameters = function () { return [
        { type: StructureQuickFilterRepository }
    ]; };
    return StructureConfigQuickFilterSetEventHandler;
}(DomainEventHandler));
export { StructureConfigQuickFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9xdWVyeS9maWx0ZXIvc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBSXhIO0lBQytELHFFQUFrQjtJQUVoRixtREFBb0IsOEJBQThEO1FBQWxGLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixvQ0FBOEIsR0FBOUIsOEJBQThCLENBQWdDOztJQUVsRixDQUFDOzs7OztJQUVELDBEQUFNOzs7O0lBQU4sVUFBTyxLQUF5QztRQUUvQyxJQUFJLEtBQUssWUFBWSxrQ0FBa0MsRUFBRTtZQUN4RCxJQUFJLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUMzRjtJQUVGLENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTEYsOEJBQThCOztJQW9CdkMsZ0RBQUM7Q0FBQSxBQWZELENBQytELGtCQUFrQixHQWNoRjtTQWRZLHlDQUF5Qzs7Ozs7O0lBRXpDLG1GQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uL2NvbW1hbmQvZmlsdGVyL3F1aWNrL3N0cnVjdHVyZS5jb25maWctcXVpY2stZmlsdGVyLXNldC5ldmVudCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29uZmlnUXVpY2tGaWx0ZXJTZXRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVF1aWNrRmlsdGVyUmVwb3NpdG9yeS5zZXRFbmFibGVkKGV2ZW50LmdldEVuYWJsZWQoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19