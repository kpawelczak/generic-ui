/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
export class StructureFieldUiRepository {
    /**
     * @param {?} structureFieldUiArchive
     */
    constructor(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    selectFields(structureId) {
        return this.structureFieldUiArchive.select(structureId);
    }
}
StructureFieldUiRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureFieldUiRepository.ctorParameters = () => [
    { type: StructureFieldUiArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiRepository.prototype.structureFieldUiArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N0cnVjdHVyZS9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU12RSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXRDLFlBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3BFLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFdBQXdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFSRCxVQUFVOzs7O1lBTEYsdUJBQXVCOzs7Ozs7O0lBUW5CLDZEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUFyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpTW9kZWwgfSBmcm9tICcuL3N0cnVjdHVyZS5maWVsZC51aS1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlOiBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSkge1xuXHR9XG5cblx0c2VsZWN0RmllbGRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8U3RydWN0dXJlRmllbGRVaU1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlLnNlbGVjdChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19