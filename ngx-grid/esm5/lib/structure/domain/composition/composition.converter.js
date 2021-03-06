/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnDefinitionFactory } from './query/definition/column-definition.factory';
import { Composition } from './query/composition';
var CompositionConverter = /** @class */ (function () {
    function CompositionConverter(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    CompositionConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var ready = aggregate.isReady();
        /** @type {?} */
        var columns = aggregate.getColumns();
        /** @type {?} */
        var columnDefs = this.convertColumnsToColumnDef(columns);
        /** @type {?} */
        var width = aggregate.getWidth();
        /** @type {?} */
        var resizeWidth = aggregate.isResizeEnabled();
        /** @type {?} */
        var id = aggregate.getId();
        return new Composition(id, ready, columnDefs, width, resizeWidth);
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionConverter.prototype.convertColumnsToColumnDef = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        /** @type {?} */
        var columnDefs = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var columnDef = _this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    };
    CompositionConverter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionConverter.ctorParameters = function () { return [
        { type: ColumnDefinitionFactory }
    ]; };
    return CompositionConverter;
}());
export { CompositionConverter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionConverter.prototype.columnDefinitionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS2xEO0lBR0MsOEJBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUcsQ0FBQzs7Ozs7SUFFeEUsc0NBQU87Ozs7SUFBUCxVQUFRLFNBQStCOztZQUVoQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRTs7WUFDaEMsT0FBTyxHQUF3QixTQUFTLENBQUMsVUFBVSxFQUFFOztZQUNyRCxVQUFVLEdBQTRCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7O1lBQzdFLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFOztZQUM1QixXQUFXLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRTs7WUFDekMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFFdkIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRU8sd0RBQXlCOzs7OztJQUFqQyxVQUFrQyxPQUE0QjtRQUE5RCxpQkFZQzs7WUFWTSxVQUFVLEdBQTRCLEVBQUU7UUFFOUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQW9COztnQkFFOUIsU0FBUyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTdELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOztnQkE3QkQsVUFBVTs7OztnQkFQRix1QkFBdUI7O0lBc0NoQywyQkFBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLG9CQUFvQjs7Ozs7O0lBRXBCLHVEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL3F1ZXJ5L2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb24gfSBmcm9tICcuL3F1ZXJ5L2NvbXBvc2l0aW9uJztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29tbWFuZC9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9xdWVyeS9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uRGVmaW5pdGlvbkZhY3Rvcnk6IENvbHVtbkRlZmluaXRpb25GYWN0b3J5KSB7fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IENvbXBvc2l0aW9uIHtcblxuXHRcdGNvbnN0IHJlYWR5ID0gYWdncmVnYXRlLmlzUmVhZHkoKSxcblx0XHRcdGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0Q29sdW1ucygpLFxuXHRcdFx0Y29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRDb2x1bW5zVG9Db2x1bW5EZWYoY29sdW1ucyksXG5cdFx0XHR3aWR0aCA9IGFnZ3JlZ2F0ZS5nZXRXaWR0aCgpLFxuXHRcdFx0cmVzaXplV2lkdGggPSBhZ2dyZWdhdGUuaXNSZXNpemVFbmFibGVkKCksXG5cdFx0XHRpZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbihpZCwgcmVhZHksIGNvbHVtbkRlZnMsIHdpZHRoLCByZXNpemVXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRDb2x1bW5zVG9Db2x1bW5EZWYoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxufVxuIl19