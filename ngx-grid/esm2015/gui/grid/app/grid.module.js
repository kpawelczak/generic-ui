/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GridComponent } from '../ui/grid/grid.component';
import { StructureModule } from '../../../lib/structure/ui/structure.module';
import { GridIdGenerator } from '../ui/grid/register/grid-id.generator';
import { GridRegister } from '../ui/grid/register/grid.register';
/** @type {?} */
const imports = [
    StructureModule.withConfig({
        cssClassName: 'grid',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
/** @type {?} */
const declarations = [
    GridComponent
];
/** @type {?} */
const providers = (/** @type {?} */ ([
    GridIdGenerator,
    GridRegister
]));
/** @type {?} */
const exportDeclarations = [
    GridComponent
];
/** @type {?} */
const entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
const elementComponents = [
    GridComponent
];
export class GridModule {
}
GridModule.entryComponents = [...entryComponents];
GridModule.exportDeclarations = [...exportDeclarations];
GridModule.elementComponents = [...elementComponents];
GridModule.decorators = [
    { type: NgModule, args: [{
                imports,
                declarations,
                providers,
                exports: exportDeclarations,
                entryComponents
            },] }
];
if (false) {
    /** @type {?} */
    GridModule.entryComponents;
    /** @type {?} */
    GridModule.exportDeclarations;
    /** @type {?} */
    GridModule.elementComponents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2FwcC9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O01BRzNELE9BQU8sR0FBRztJQUNmLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDekIsWUFBWSxFQUFFLE1BQU07UUFDcEIsa0JBQWtCLEVBQUU7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDYjtLQUNELENBQUM7Q0FDSDs7TUFFSyxZQUFZLEdBQUc7SUFDcEIsYUFBYTtDQUNiOztNQUVLLFNBQVMsR0FBRyxtQkFBQTtJQUNqQixlQUFlO0lBQ2YsWUFBWTtDQUNaLEVBQW1COztNQUVkLGtCQUFrQixHQUFHO0lBQzFCLGFBQWE7Q0FDYjs7TUFFSyxlQUFlLEdBQUcsbUJBQUEsRUFBRSxFQUFjOztNQUVsQyxpQkFBaUIsR0FBRztJQUN6QixhQUFhO0NBQ2I7QUFTRCxNQUFNLE9BQU8sVUFBVTs7QUFFZiwwQkFBZSxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUV2Qyw2QkFBa0IsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztBQUU3Qyw0QkFBaUIsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQzs7WUFibEQsUUFBUSxTQUFDO2dCQUNULE9BQU87Z0JBQ1AsWUFBWTtnQkFDWixTQUFTO2dCQUNULE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWU7YUFDZjs7OztJQUdBLDJCQUE4Qzs7SUFFOUMsOEJBQW9EOztJQUVwRCw2QkFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3VpL2dyaWQvZ3JpZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL3VpL3N0cnVjdHVyZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBHcmlkSWRHZW5lcmF0b3IgfSBmcm9tICcuLi91aS9ncmlkL3JlZ2lzdGVyL2dyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEdyaWRSZWdpc3RlciB9IGZyb20gJy4uL3VpL2dyaWQvcmVnaXN0ZXIvZ3JpZC5yZWdpc3Rlcic7XG5cblxuY29uc3QgaW1wb3J0cyA9IFtcblx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdFx0Y3NzQ2xhc3NOYW1lOiAnZ3JpZCcsXG5cdFx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdEdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcblx0R3JpZElkR2VuZXJhdG9yLFxuXHRHcmlkUmVnaXN0ZXJcbl0gYXMgQXJyYXk8UHJvdmlkZXI+O1xuXG5jb25zdCBleHBvcnREZWNsYXJhdGlvbnMgPSBbXG5cdEdyaWRDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtdIGFzIEFycmF5PGFueT47XG5cbmNvbnN0IGVsZW1lbnRDb21wb25lbnRzID0gW1xuXHRHcmlkQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdHByb3ZpZGVycyxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHNcbn0pXG5leHBvcnQgY2xhc3MgR3JpZE1vZHVsZSB7XG5cblx0c3RhdGljIGVudHJ5Q29tcG9uZW50cyA9IFsuLi5lbnRyeUNvbXBvbmVudHNdO1xuXG5cdHN0YXRpYyBleHBvcnREZWNsYXJhdGlvbnMgPSBbLi4uZXhwb3J0RGVjbGFyYXRpb25zXTtcblxuXHRzdGF0aWMgZWxlbWVudENvbXBvbmVudHMgPSBbLi4uZWxlbWVudENvbXBvbmVudHNdO1xufVxuIl19