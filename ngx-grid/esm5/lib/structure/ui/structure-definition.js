/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { StructurePagingDefinition } from './paging/structure-paging-definition';
var StructureDefinitionBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDefinitionBuilder, _super);
    function StructureDefinitionBuilder(headerEnabled, bottomPaging, topPaging) {
        var _this = _super.call(this) || this;
        _this.headerEnabled = headerEnabled;
        _this.bottomPaging = bottomPaging;
        _this.topPaging = topPaging;
        _this.border = true;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.buildObject = /**
     * @protected
     * @return {?}
     */
    function () {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withHeader = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.headerEnabled = enabled;
        return this;
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withBottomPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        this.bottomPaging = paging;
        return this;
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withTopPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        this.topPaging = paging;
        return this;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withBorder = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.border = enabled;
        return this;
    };
    return StructureDefinitionBuilder;
}(GenericBuilder));
export { StructureDefinitionBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.border;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.headerEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.bottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.topPaging;
}
var StructureDefinitionDefaultBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDefinitionDefaultBuilder, _super);
    function StructureDefinitionDefaultBuilder() {
        return _super.call(this, StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging) || this;
    }
    StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
    StructureDefinitionDefaultBuilder.defaultBottomPaging = new StructurePagingDefinition.DefaultBuilder().build();
    StructureDefinitionDefaultBuilder.defaultTopPaging = new StructurePagingDefinition.DefaultBuilder().build();
    return StructureDefinitionDefaultBuilder;
}(StructureDefinitionBuilder));
export { StructureDefinitionDefaultBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultHeaderEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultBottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultTopPaging;
}
var StructureDefinition = /** @class */ (function () {
    function StructureDefinition(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    /**
     * @return {?}
     */
    StructureDefinition.prototype.isHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.headerEnabled;
    };
    /**
     * @return {?}
     */
    StructureDefinition.prototype.isBorderEnabled = /**
     * @return {?}
     */
    function () {
        return this.border;
    };
    /**
     * @return {?}
     */
    StructureDefinition.prototype.getBottomPaging = /**
     * @return {?}
     */
    function () {
        return this.bottomPaging;
    };
    /**
     * @return {?}
     */
    StructureDefinition.prototype.getTopPaging = /**
     * @return {?}
     */
    function () {
        return this.topPaging;
    };
    StructureDefinition.Builder = StructureDefinitionBuilder;
    StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;
    return StructureDefinition;
}());
export { StructureDefinition };
if (false) {
    /** @type {?} */
    StructureDefinition.Builder;
    /** @type {?} */
    StructureDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.headerEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.bottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.topPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.border;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvc3RydWN0dXJlLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakY7SUFBZ0Qsc0RBQW1DO0lBSWxGLG9DQUFvQixhQUFzQixFQUMvQixZQUF1QyxFQUN2QyxTQUFvQztRQUYvQyxZQUdDLGlCQUFPLFNBQ1A7UUFKbUIsbUJBQWEsR0FBYixhQUFhLENBQVM7UUFDL0Isa0JBQVksR0FBWixZQUFZLENBQTJCO1FBQ3ZDLGVBQVMsR0FBVCxTQUFTLENBQTJCO1FBSnZDLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBTS9CLENBQUM7Ozs7O0lBRVMsZ0RBQVc7Ozs7SUFBckI7UUFDQyxPQUFPLElBQUksbUJBQW1CLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FDWCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELHFEQUFnQjs7OztJQUFoQixVQUFpQixNQUFpQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQsa0RBQWE7Ozs7SUFBYixVQUFjLE1BQWlDO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUYsaUNBQUM7QUFBRCxDQUFDLEFBdkNELENBQWdELGNBQWMsR0F1QzdEOzs7Ozs7O0lBckNBLDRDQUErQjs7Ozs7SUFFbkIsbURBQThCOzs7OztJQUN2QyxrREFBK0M7Ozs7O0lBQy9DLCtDQUE0Qzs7QUFtQ2hEO0lBQXVELDZEQUEwQjtJQU1oRjtlQUNDLGtCQUNDLGlDQUFpQyxDQUFDLG9CQUFvQixFQUN0RCxpQ0FBaUMsQ0FBQyxtQkFBbUIsRUFDckQsaUNBQWlDLENBQUMsZ0JBQWdCLENBQ2xEO0lBQ0YsQ0FBQztJQVZ1QixzREFBb0IsR0FBWSxJQUFJLENBQUM7SUFDckMscURBQW1CLEdBQThCLElBQUkseUJBQXlCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEcsa0RBQWdCLEdBQThCLElBQUkseUJBQXlCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFTOUgsd0NBQUM7Q0FBQSxBQWJELENBQXVELDBCQUEwQixHQWFoRjtTQWJZLGlDQUFpQzs7Ozs7O0lBRTdDLHVEQUE2RDs7Ozs7SUFDN0Qsc0RBQWdJOzs7OztJQUNoSSxtREFBNkg7O0FBVzlIO0lBVUMsNkJBQVksYUFBc0IsRUFDL0IsWUFBdUMsRUFDdkMsU0FBb0MsRUFDcEMsTUFBZTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7O0lBTUQsNkNBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFsQk0sMkJBQU8sR0FBRywwQkFBMEIsQ0FBQztJQUVyQyxrQ0FBYyxHQUFHLGlDQUFpQyxDQUFDO0lBa0IzRCwwQkFBQztDQUFBLEFBeENELElBd0NDO1NBeENZLG1CQUFtQjs7O0lBb0IvQiw0QkFBNEM7O0lBRTVDLG1DQUEwRDs7Ozs7SUFwQjFELDRDQUF3Qzs7Ozs7SUFFeEMsMkNBQXlEOzs7OztJQUV6RCx3Q0FBc0Q7Ozs7O0lBRXRELHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9nZW5lcmljLWJ1aWxkZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiB9IGZyb20gJy4vcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmctZGVmaW5pdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciBleHRlbmRzIEdlbmVyaWNCdWlsZGVyPFN0cnVjdHVyZURlZmluaXRpb24+IHtcblxuXHRwcml2YXRlIGJvcmRlcjogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIGJvdHRvbVBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSB0b3BQYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJ1aWxkT2JqZWN0KCk6IFN0cnVjdHVyZURlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbihcblx0XHRcdHRoaXMuaGVhZGVyRW5hYmxlZCxcblx0XHRcdHRoaXMuYm90dG9tUGFnaW5nLFxuXHRcdFx0dGhpcy50b3BQYWdpbmcsXG5cdFx0XHR0aGlzLmJvcmRlclxuXHRcdCk7XG5cdH1cblxuXHR3aXRoSGVhZGVyKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5oZWFkZXJFbmFibGVkID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhCb3R0b21QYWdpbmcocGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuYm90dG9tUGFnaW5nID0gcGFnaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aFRvcFBhZ2luZyhwYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy50b3BQYWdpbmcgPSBwYWdpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoQm9yZGVyKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5ib3JkZXIgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlciBleHRlbmRzIFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0SGVhZGVyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRCb3R0b21QYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24gPSBuZXcgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRUb3BQYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24gPSBuZXcgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEhlYWRlckVuYWJsZWQsXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEJvdHRvbVBhZ2luZyxcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0VG9wUGFnaW5nXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYm90dG9tUGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdG9wUGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYm9yZGVyOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGhlYWRlckVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdGJvdHRvbVBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0dG9wUGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHRib3JkZXI6IGJvb2xlYW4pIHtcblx0XHR0aGlzLmhlYWRlckVuYWJsZWQgPSBoZWFkZXJFbmFibGVkO1xuXHRcdHRoaXMuYm90dG9tUGFnaW5nID0gYm90dG9tUGFnaW5nO1xuXHRcdHRoaXMudG9wUGFnaW5nID0gdG9wUGFnaW5nO1xuXHRcdHRoaXMuYm9yZGVyID0gYm9yZGVyO1xuXHR9XG5cblx0c3RhdGljIEJ1aWxkZXIgPSBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlcjtcblxuXHRzdGF0aWMgRGVmYXVsdEJ1aWxkZXIgPSBTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXI7XG5cblx0aXNIZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc0JvcmRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYm9yZGVyO1xuXHR9XG5cblx0Z2V0Qm90dG9tUGFnaW5nKCk6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmJvdHRvbVBhZ2luZztcblx0fVxuXG5cdGdldFRvcFBhZ2luZygpOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy50b3BQYWdpbmc7XG5cdH1cblxufVxuIl19