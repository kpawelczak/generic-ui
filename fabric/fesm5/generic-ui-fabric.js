import { __extends, __spread } from 'tslib';
import { Input, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, NgModule, EventEmitter, Output, ComponentFactoryResolver, ChangeDetectorRef, Inject, forwardRef, ViewChild, ViewContainerRef, Injectable, ApplicationRef, Injector, PLATFORM_ID, HostListener, ViewChildren, Optional } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, debounceTime, map, throttleTime, filter, takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import * as elementResizeDetectorMaker_ from 'element-resize-detector';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var Indicator = /** @class */ (function () {
    function Indicator(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.outline = false;
        this.PRIMARY_CLASS_NAME = 'gui-primary';
        this.SECONDARY_CLASS_NAME = 'gui-secondary';
        this.OUTLINE_CLASS_NAME = 'gui-outline';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    Indicator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.primary) {
            if (this.primary) {
                this.addClass(this.PRIMARY_CLASS_NAME);
            }
            else {
                this.removeClass(this.PRIMARY_CLASS_NAME);
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass(this.SECONDARY_CLASS_NAME);
            }
            else {
                this.removeClass(this.SECONDARY_CLASS_NAME);
            }
        }
        if (changes.outline) {
            if (this.outline) {
                this.addClass(this.OUTLINE_CLASS_NAME);
            }
            else {
                this.removeClass(this.OUTLINE_CLASS_NAME);
            }
        }
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    Indicator.prototype.addClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    Indicator.prototype.removeClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    Indicator.propDecorators = {
        primary: [{ type: Input }],
        secondary: [{ type: Input }],
        outline: [{ type: Input }]
    };
    return Indicator;
}());
if (false) {
    /** @type {?} */
    Indicator.prototype.primary;
    /** @type {?} */
    Indicator.prototype.secondary;
    /** @type {?} */
    Indicator.prototype.outline;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.PRIMARY_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.SECONDARY_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    Indicator.prototype.OUTLINE_CLASS_NAME;
    /**
     * @type {?}
     * @protected
     */
    Indicator.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    Indicator.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricBadgeComponent = /** @class */ (function (_super) {
    __extends(FabricBadgeComponent, _super);
    function FabricBadgeComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    FabricBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-badge',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-badge]': 'true'
                    },
                    styles: [".gui-badge{background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:12px;font-weight:700;margin:0 0 0 2px;padding:4px 9.6px;position:relative;-webkit-transform:translateX(-70%) translateY(-80%);-ms-transform:translateX(-70%) translateY(-80%);transform:translateX(-70%) translateY(-80%);z-index:1}.gui-badge.gui-primary{background:#2185d0;color:#fefdfc}.gui-badge.gui-primary.gui-outline{color:#2185d0}.gui-badge.gui-primary.gui-button:hover{background:#1e77ba}.gui-badge.gui-primary.gui-button:active{background:#1a69a4;color:#fefdfc}.gui-badge.gui-primary.gui-button:disabled{background:#6fb4e8;color:#439de1}.gui-badge.gui-primary.gui-badge{background:#439de1}.gui-badge.gui-secondary{background:#3cb371;color:#fefdfc}.gui-badge.gui-secondary.gui-outline{color:#3cb371}.gui-badge.gui-secondary.gui-button:hover{background:#36a065}.gui-badge.gui-secondary.gui-button:active{background:#32945e;color:#fefdfc}.gui-badge.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-badge.gui-secondary.gui-badge{background:#5ac88b}.gui-badge.gui-outline{color:#999;background:0 0;border:1px solid #d6d6d6}.gui-badge.gui-outline.gui-button:hover{color:#fefdfc;background:#ccc}.gui-badge.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-badge.gui-outline.gui-badge{background:#fefdfc}.gui-badge.gui-outline.gui-primary{border-color:#439de1}.gui-badge.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-badge.gui-outline.gui-primary.gui-badge{background:#fefdfc;border-color:#439de1;color:#439de1}.gui-badge.gui-outline.gui-secondary{border-color:#5ac88b}.gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-badge.gui-outline.gui-secondary.gui-badge{background:#fefdfc;border-color:#5ac88b;color:#5ac88b}", ".gui-material .gui-badge{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}.gui-material .gui-badge.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-badge.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-badge.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-badge.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-badge.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-badge.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-badge.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-badge.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-badge.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-badge.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-badge.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-badge.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-badge.gui-outline{color:#3949ab;background:0 0;border-color:#5262c5}.gui-material .gui-badge.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-badge.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-badge.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-badge.gui-outline.gui-badge{background:#fff}.gui-material .gui-badge.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-badge.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-badge.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-badge.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}", ".gui-dark .gui-badge{background:#333;color:#bdbdbd}.gui-dark .gui-badge.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-badge.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-badge.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-badge.gui-primary.gui-button:disabled{background:#ce93d8;opacity:.5;color:#212121}.gui-dark .gui-badge.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-badge.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-badge.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-badge.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-button:disabled{background:#80cbc4;opacity:.5;color:#212121}.gui-dark .gui-badge.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-badge.gui-outline{color:#bdbdbd;background:0 0;border:1px solid #616161}.gui-dark .gui-badge.gui-outline.gui-button:hover{color:#bdbdbd;background:#616161}.gui-dark .gui-badge.gui-outline.gui-badge{background:#121212}.gui-dark .gui-badge.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-badge.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-badge.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-badge.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-badge.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricBadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return FabricBadgeComponent;
}(Indicator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricBadgeModule = /** @class */ (function () {
    function FabricBadgeModule() {
    }
    FabricBadgeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricBadgeComponent
                    ],
                    exports: [
                        FabricBadgeComponent
                    ]
                },] }
    ];
    return FabricBadgeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricButtonComponent = /** @class */ (function (_super) {
    __extends(FabricButtonComponent, _super);
    function FabricButtonComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.link = false;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.link) {
            if (this.link) {
                this.addClass('gui-link');
            }
            else {
                this.removeClass('gui-link');
            }
        }
    };
    FabricButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'button[gui-button], a[gui-button]',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-button]': 'true'
                    },
                    styles: [".gui-button{-webkit-writing-mode:horizontal-tb!important;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;background:#e6e6e6;box-sizing:border-box;border-style:none;border-radius:4px;color:#595959;cursor:pointer;display:inline-block;font-family:Arial;font-size:13.3333px;outline:0;padding:10px 20px;-webkit-transition:background .2s;transition:background .2s;text-align:center;text-rendering:auto;text-transform:none;text-indent:0;text-shadow:none;letter-spacing:normal;word-spacing:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button:hover{background:#ccc;color:#333}.gui-button:active{background:#999;color:#333}.gui-button:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-button.gui-outline:focus{box-shadow:0 0 0 2px #d6d6d6}.gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #439de1}.gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #5ac88b}.gui-button.gui-primary{background:#2185d0;color:#fefdfc}.gui-button.gui-primary.gui-outline{color:#2185d0}.gui-button.gui-primary.gui-button:hover{background:#1e77ba}.gui-button.gui-primary.gui-button:active{background:#1a69a4;color:#fefdfc}.gui-button.gui-primary.gui-button:disabled{background:#6fb4e8;color:#439de1}.gui-button.gui-primary.gui-badge{background:#439de1}.gui-button.gui-secondary{background:#3cb371;color:#fefdfc}.gui-button.gui-secondary.gui-outline{color:#3cb371}.gui-button.gui-secondary.gui-button:hover{background:#36a065}.gui-button.gui-secondary.gui-button:active{background:#32945e;color:#fefdfc}.gui-button.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-button.gui-secondary.gui-badge{background:#5ac88b}.gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-button.gui-link:focus{text-decoration:underline}.gui-button.gui-outline{color:#999;background:0 0;border:1px solid #d6d6d6}.gui-button.gui-outline.gui-button:hover{color:#fefdfc;background:#ccc}.gui-button.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-button.gui-outline.gui-badge{background:#fefdfc}.gui-button.gui-outline.gui-primary{border-color:#439de1}.gui-button.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-button.gui-outline.gui-primary.gui-badge{background:#fefdfc;border-color:#439de1;color:#439de1}.gui-button.gui-outline.gui-secondary{border-color:#5ac88b}.gui-button.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-button.gui-outline.gui-secondary.gui-badge{background:#fefdfc;border-color:#5ac88b;color:#5ac88b}", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-button:hover{background:#616161}.gui-dark .gui-button:active{background:#212121}.gui-dark .gui-button:disabled{opacity:.36}.gui-dark .gui-button.gui-outline:focus{box-shadow:0 0 0 2px #616161}.gui-dark .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 2px #ce93d8}.gui-dark .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 2px #80cbc4}.gui-dark .gui-button.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-button.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-button.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-button.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-button.gui-primary.gui-button:disabled{background:#ce93d8;opacity:.5;color:#212121}.gui-dark .gui-button.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-button.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-button.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-button.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-button.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-button.gui-secondary.gui-button:disabled{background:#80cbc4;opacity:.5;color:#212121}.gui-dark .gui-button.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-dark .gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-dark .gui-button.gui-link:focus{text-decoration:underline}.gui-dark .gui-button.gui-outline{color:#bdbdbd;background:0 0;border:1px solid #616161}.gui-dark .gui-button.gui-outline.gui-button:hover{color:#bdbdbd;background:#616161}.gui-dark .gui-button.gui-outline.gui-badge{background:#121212}.gui-dark .gui-button.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-button.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-button.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-button.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}", ".gui-light .gui-button{background:#f6f5f4;border-color:#d8d7d6;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light .gui-button:hover{background:#ecebeb}.gui-light .gui-button:active{background:#f6f5f4}.gui-light .gui-button:disabled{opacity:.5}.gui-light .gui-button.gui-link{background:0 0;border:0;color:#2185d0}.gui-light .gui-button.gui-link:hover{background:0 0;color:#1e77ba;text-decoration:underline}.gui-light .gui-button.gui-link:focus{text-decoration:underline}", ".gui-material .gui-button{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-button:hover{background:#5262c5}.gui-material .gui-button:active{background:#4051bf}.gui-material .gui-button:disabled{background:#c5cae9;color:#7885d2}.gui-material .gui-button.gui-outline:focus{box-shadow:0 0 0 1px #5262c5}.gui-material .gui-button.gui-outline.gui-primary:focus{box-shadow:0 0 0 1px #6200ee}.gui-material .gui-button.gui-outline.gui-secondary:focus{box-shadow:0 0 0 1px #0097a7}.gui-material .gui-button.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-button.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-button.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-button.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-button.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-button.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-button.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-button.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-button.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-button.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-button.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-button.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-button.gui-link{background:0 0;border:0;color:#3949ab}.gui-material .gui-button.gui-link:hover{color:#4051bf}.gui-material .gui-button.gui-outline{color:#3949ab;background:0 0;border-color:#5262c5}.gui-material .gui-button.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-button.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-button.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-button.gui-outline.gui-badge{background:#fff}.gui-material .gui-button.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-button.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-button.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-button.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-button.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}"]
                }] }
    ];
    /** @nocollapse */
    FabricButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricButtonComponent.propDecorators = {
        link: [{ type: Input }]
    };
    return FabricButtonComponent;
}(Indicator));
if (false) {
    /** @type {?} */
    FabricButtonComponent.prototype.link;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricButtonModule = /** @class */ (function () {
    function FabricButtonModule() {
    }
    FabricButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricButtonComponent
                    ],
                    exports: [
                        FabricButtonComponent
                    ]
                },] }
    ];
    return FabricButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricButtonGroupComponent = /** @class */ (function () {
    function FabricButtonGroupComponent() {
    }
    FabricButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-button-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-button-group]': 'true'
                    },
                    styles: [".gui-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-button-group .gui-button{border-radius:0}.gui-button-group .gui-button:not(:last-child){border-right:none;margin:0}.gui-button-group .gui-button:last-child{border-radius:0 4px 4px 0}.gui-button-group .gui-button:first-child{border-radius:4px 0 0 4px}.gui-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}"]
                }] }
    ];
    return FabricButtonGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricButtonGroupModule = /** @class */ (function () {
    function FabricButtonGroupModule() {
    }
    FabricButtonGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricButtonGroupComponent
                    ],
                    exports: [
                        FabricButtonGroupComponent
                    ]
                },] }
    ];
    return FabricButtonGroupModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricCardComponent = /** @class */ (function () {
    function FabricCardComponent() {
        this.contentBlock = [];
    }
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isTitleEnabled = /**
     * @return {?}
     */
    function () {
        return !!this.title;
    };
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isImgEnabled = /**
     * @return {?}
     */
    function () {
        return !!this.image;
    };
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isContentBlockEnabled = /**
     * @return {?}
     */
    function () {
        return !!this.contentBlock;
    };
    /**
     * @return {?}
     */
    FabricCardComponent.prototype.isOnlyContentBlockEnabled = /**
     * @return {?}
     */
    function () {
        return !this.title && !this.image && !!this.contentBlock;
    };
    FabricCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-card',
                    template: "<div class=\"gui-card-body\"\n\t [ngClass]=\"{'gui-content-block': isOnlyContentBlockEnabled()}\">\n\n\t<img [ngClass]=\"{'gui-card-img': isImgEnabled()}\"\n\t\t src=\"{{image}}\" alt=\"{{alt}}\"/>\n\n\t<div [ngClass]=\"{'gui-card-title': isTitleEnabled()}\">\n\t\t{{title}}\n\t</div>\n\n\t<div [ngClass]=\"{'gui-card-content-block': isContentBlockEnabled()}\">\n\t\t<div\n\t\t\t*ngFor=\"let block of contentBlock\"\n\t\t\t[ngClass]=\"{'gui-card-content-block-item': isContentBlockEnabled()}\">\n\t\t\t{{block}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"gui-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-card]': 'true'
                    },
                    styles: [".gui-card .gui-card-img{margin:0 0 12px;border-radius:4px 4px 0 0;width:350px;height:auto}.gui-card .gui-card-body{box-sizing:border-box;background:#fefdfc;border-radius:4px;width:352px;margin:0;padding:0 0 20px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;border:1px solid #d6d6d6}.gui-card .gui-card-body .gui-card-title{font-size:20px;font-weight:700;margin:0 0 12px;padding:0 20px}.gui-card .gui-card-body .gui-card-content-block{margin:0 0 12px}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{padding:12px 20px;border-top:1px solid #d6d6d6}.gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom:1px solid #d6d6d6}.gui-card .gui-card-body .gui-content{padding:0 20px}.gui-content-block.gui-card-body{padding:0;border:none}.gui-content-block .gui-card-content-block{border-color:#d6d6d6;border-style:solid;border-width:0 1px}", ".gui-material .gui-card .gui-card-body{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-card .gui-card-body{background:#121212;color:#bdbdbd;border-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item{border-top-color:#616161}.gui-dark .gui-card .gui-card-body .gui-card-content-block .gui-card-content-block-item:last-child{border-bottom-color:#616161}.gui-dark .gui-content-block .gui-card-content-block{border-color:#616161}"]
                }] }
    ];
    FabricCardComponent.propDecorators = {
        title: [{ type: Input }],
        image: [{ type: Input }],
        alt: [{ type: Input }],
        contentBlock: [{ type: Input }]
    };
    return FabricCardComponent;
}());
if (false) {
    /** @type {?} */
    FabricCardComponent.prototype.title;
    /** @type {?} */
    FabricCardComponent.prototype.image;
    /** @type {?} */
    FabricCardComponent.prototype.alt;
    /** @type {?} */
    FabricCardComponent.prototype.contentBlock;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricCardModule = /** @class */ (function () {
    function FabricCardModule() {
    }
    FabricCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricCardComponent
                    ],
                    exports: [
                        FabricCardComponent
                    ]
                },] }
    ];
    return FabricCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricCheckboxComponent = /** @class */ (function () {
    function FabricCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.changed = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricCheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabled) {
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
            }
        }
    };
    /**
     * @return {?}
     */
    FabricCheckboxComponent.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this.changed.emit(this.checked);
    };
    FabricCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-checkbox',
                    template: "<label>\n\t<input\n\t\t[name]=name\n\t\t[checked]=checked\n\t\t[disabled]=disabled\n\t\ttype=\"checkbox\"\n\t\t(click)='check()'>\n\t<span class=\"gui-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-checkbox]': 'true'
                    },
                    styles: [".gui-checkbox{display:inline-block;font:14px/22px Arial;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-checkbox label{cursor:pointer}.gui-checkbox label:hover .gui-checkmark{border-color:#999}.gui-checkbox input{position:absolute;opacity:0;height:0;width:0}.gui-checkbox .gui-checkmark{box-sizing:content-box;border-radius:4px;position:absolute;left:0;height:20px;width:20px;border:1px solid #d6d6d6}.gui-checkbox input:checked+.gui-checkmark{border-color:#333}.gui-checkbox.gui-disabled.gui-checkbox{color:#ccc;pointer-events:none}.gui-checkbox .gui-checkmark:after{content:\" \";position:absolute;left:6px;-webkit-transform:rotate(45deg) scale(0);-ms-transform:rotate(45deg) scale(0);transform:rotate(45deg) scale(0);-webkit-transition:ease-in-out,-webkit-transform .2s;transition:transform .2s,ease-in-out,-webkit-transform .2s;border-color:#333;border-style:solid;border-width:0 3.2px 3.2px 0;width:5.2px;height:12px}.gui-checkbox input:checked+.gui-checkmark:after{box-sizing:content-box;-webkit-transform:rotate(45deg) scale(1);-ms-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}", ".gui-material .gui-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-checkbox input:checked+.gui-checkmark{border-color:#3949ab;background:#3949ab}.gui-material .gui-checkbox input:focus+.gui-checkmark{border-color:#3949ab}.gui-material .gui-checkbox .gui-checkmark:after{border-color:#fff}", ".gui-dark .gui-checkbox{color:#bdbdbd}.gui-dark .gui-checkbox .gui-checkmark,.gui-dark .gui-checkbox .gui-checkmark:after,.gui-dark .gui-checkbox input:checked+.gui-checkmark{border-color:#878787}.gui-dark .gui-checkbox.gui-disabled.gui-checkbox{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricCheckboxComponent.propDecorators = {
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricCheckboxComponent;
}());
if (false) {
    /** @type {?} */
    FabricCheckboxComponent.prototype.name;
    /** @type {?} */
    FabricCheckboxComponent.prototype.checked;
    /** @type {?} */
    FabricCheckboxComponent.prototype.disabled;
    /** @type {?} */
    FabricCheckboxComponent.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    FabricCheckboxComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricCheckboxComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricCheckboxModule = /** @class */ (function () {
    function FabricCheckboxModule() {
    }
    FabricCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricCheckboxComponent
                    ],
                    exports: [
                        FabricCheckboxComponent
                    ]
                },] }
    ];
    return FabricCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricChipComponent = /** @class */ (function (_super) {
    __extends(FabricChipComponent, _super);
    function FabricChipComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    FabricChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-chip',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-chip]': 'true'
                    },
                    styles: [".gui-chip{box-sizing:border-box;background:#e6e6e6;border-radius:4px;color:#595959;display:inline-block;font-family:Arial;font-size:14px;font-weight:700;margin:0 2px;padding:9.6px 12px}.gui-chip.gui-primary{background:#2185d0;color:#fefdfc}.gui-chip.gui-primary.gui-outline{color:#2185d0}.gui-chip.gui-primary.gui-button:hover{background:#1e77ba}.gui-chip.gui-primary.gui-button:active{background:#1a69a4;color:#fefdfc}.gui-chip.gui-primary.gui-button:disabled{background:#6fb4e8;color:#439de1}.gui-chip.gui-primary.gui-badge{background:#439de1}.gui-chip.gui-secondary{background:#3cb371;color:#fefdfc}.gui-chip.gui-secondary.gui-outline{color:#3cb371}.gui-chip.gui-secondary.gui-button:hover{background:#36a065}.gui-chip.gui-secondary.gui-button:active{background:#32945e;color:#fefdfc}.gui-chip.gui-secondary.gui-button:disabled{background:#80d5a6;color:#5ac88b}.gui-chip.gui-secondary.gui-badge{background:#5ac88b}.gui-chip.gui-outline{color:#999;background:0 0;border:1px solid #d6d6d6}.gui-chip.gui-outline.gui-button:hover{color:#fefdfc;background:#ccc}.gui-chip.gui-outline.gui-button:disabled{border-color:#ccc;color:#ccc}.gui-chip.gui-outline.gui-badge{background:#fefdfc}.gui-chip.gui-outline.gui-primary{border-color:#439de1}.gui-chip.gui-outline.gui-primary.gui-button:hover{background:#2185d0;border-color:#2185d0}.gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#6fb4e8;color:#6fb4e8}.gui-chip.gui-outline.gui-primary.gui-badge{background:#fefdfc;border-color:#439de1;color:#439de1}.gui-chip.gui-outline.gui-secondary{border-color:#5ac88b}.gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#3cb371;border-color:#3cb371}.gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#80d5a6;color:#80d5a6}.gui-chip.gui-outline.gui-secondary.gui-badge{background:#fefdfc;border-color:#5ac88b;color:#5ac88b}", ".gui-material .gui-chip{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500;padding:10px 16px}.gui-material .gui-chip.gui-primary{background:#6200ee;color:#fff}.gui-material .gui-chip.gui-primary.gui-outline{color:#6200ee}.gui-material .gui-chip.gui-primary.gui-button:hover{background:#974dff}.gui-material .gui-chip.gui-primary.gui-button:active{background:#791aff;color:#fff}.gui-material .gui-chip.gui-primary.gui-button:disabled{background:#d1c4e9;color:#7d22ff}.gui-material .gui-chip.gui-primary.gui-badge{background:#6200ee}.gui-material .gui-chip.gui-secondary{background:#0097a7;color:#fff}.gui-material .gui-chip.gui-secondary.gui-outline{color:#0097a7}.gui-material .gui-chip.gui-secondary.gui-button:hover{background:#00a1b3}.gui-material .gui-chip.gui-secondary.gui-button:active{background:#00808e;color:#fff}.gui-material .gui-chip.gui-secondary.gui-button:disabled{background:#b2ebf2;color:#00c5da}.gui-material .gui-chip.gui-secondary.gui-badge{background:#0097a7}.gui-material .gui-chip.gui-outline{color:#3949ab;background:0 0;border-color:#5262c5}.gui-material .gui-chip.gui-outline.gui-button:hover{background:#e8eaf6;color:#3949ab}.gui-material .gui-chip.gui-outline.gui-button:active{background:#c5cae9}.gui-material .gui-chip.gui-outline.gui-button:disabled{border-color:#c5cae9;color:#c5cae9}.gui-material .gui-chip.gui-outline.gui-badge{background:#fff}.gui-material .gui-chip.gui-outline.gui-primary{border-color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ede7f6;border-color:#6200ee;color:#6200ee}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:active{background:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#d1c4e9;color:#d1c4e9}.gui-material .gui-chip.gui-outline.gui-primary.gui-badge{background:#fff;border-color:#6200ee;color:#7d22ff}.gui-material .gui-chip.gui-outline.gui-secondary{border-color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#e0f7fa;border-color:#0097a7;color:#0097a7}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:active{background:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-material .gui-chip.gui-outline.gui-secondary.gui-badge{background:#fff;border-color:#0097a7;color:#0097a7}", ".gui-dark .gui-chip{background:#333;color:#bdbdbd}.gui-dark .gui-chip.gui-primary{background:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-primary.gui-outline{color:#ce93d8}.gui-dark .gui-chip.gui-primary.gui-button:hover{background:#c680d1}.gui-dark .gui-chip.gui-primary.gui-button:active{background:#b55bc4;color:#212121}.gui-dark .gui-chip.gui-primary.gui-button:disabled{background:#ce93d8;opacity:.5;color:#212121}.gui-dark .gui-chip.gui-primary.gui-badge{background:#dfb8e6}.gui-dark .gui-chip.gui-secondary{background:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-outline{color:#80cbc4}.gui-dark .gui-chip.gui-secondary.gui-button:hover{background:#6ec4bc}.gui-dark .gui-chip.gui-secondary.gui-button:active{background:#26a69a;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-button:disabled{background:#80cbc4;opacity:.5;color:#212121}.gui-dark .gui-chip.gui-secondary.gui-badge{background:#a4dad5}.gui-dark .gui-chip.gui-outline{color:#bdbdbd;background:0 0;border:1px solid #616161}.gui-dark .gui-chip.gui-outline.gui-button:hover{color:#bdbdbd;background:#616161}.gui-dark .gui-chip.gui-outline.gui-badge{background:#121212}.gui-dark .gui-chip.gui-outline.gui-primary{border-color:#ce93d8}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:hover{background:#ce93d8;border-color:#ce93d8;color:#212121}.gui-dark .gui-chip.gui-outline.gui-primary.gui-button:disabled{background:0 0;border-color:#f0def3;color:#f0def3}.gui-dark .gui-chip.gui-outline.gui-primary.gui-badge{background:#121212;border-color:#ce93d8;color:#dfb8e6}.gui-dark .gui-chip.gui-outline.gui-secondary{border-color:#80cbc4}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:hover{background:#80cbc4;border-color:#80cbc4;color:#212121}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-button:disabled{background:0 0;border-color:#b2ebf2;color:#b2ebf2}.gui-dark .gui-chip.gui-outline.gui-secondary.gui-badge{background:#121212;border-color:#80cbc4;color:#80cbc4}", ".gui-light .gui-chip{background:#f6f5f4;color:#333;border:1px solid #333}"]
                }] }
    ];
    /** @nocollapse */
    FabricChipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return FabricChipComponent;
}(Indicator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricChipModule = /** @class */ (function () {
    function FabricChipModule() {
    }
    FabricChipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricChipComponent
                    ],
                    exports: [
                        FabricChipComponent
                    ]
                },] }
    ];
    return FabricChipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InlineDialogCords = /** @class */ (function () {
    function InlineDialogCords(element, pageXOffset, pageYOffset) {
        this.element = element;
        this.calculateCords(element, pageXOffset, pageYOffset);
    }
    /**
     * @return {?}
     */
    InlineDialogCords.prototype.getVerticalPosition = /**
     * @return {?}
     */
    function () {
        return this.verticalPosition;
    };
    /**
     * @return {?}
     */
    InlineDialogCords.prototype.getHorizontalPosition = /**
     * @return {?}
     */
    function () {
        return this.horizontalPosition;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} pageXOffset
     * @param {?} pageYOffset
     * @return {?}
     */
    InlineDialogCords.prototype.calculateCords = /**
     * @private
     * @param {?} element
     * @param {?} pageXOffset
     * @param {?} pageYOffset
     * @return {?}
     */
    function (element, pageXOffset, pageYOffset) {
        /** @type {?} */
        var elementRect = element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var elementBottom = elementRect.bottom;
        /** @type {?} */
        var elementLeft = elementRect.left;
        this.horizontalPosition = pageXOffset + elementLeft;
        this.verticalPosition = pageYOffset + elementBottom;
    };
    return InlineDialogCords;
}());
if (false) {
    /** @type {?} */
    InlineDialogCords.prototype.verticalPosition;
    /** @type {?} */
    InlineDialogCords.prototype.horizontalPosition;
    /**
     * @type {?}
     * @private
     */
    InlineDialogCords.prototype.element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricInlineDialogComponent = /** @class */ (function () {
    function FabricInlineDialogComponent(componentFactoryResolver, changeDetectorRef, inlineDialogService, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.inlineDialogService = inlineDialogService;
        this.elementRef = elementRef;
        this.spaceBetweenElementAndInlineDialog = 8;
    }
    /**
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.inlineDialogCordsSubscription =
            this.inlineDialogService.observeInlineDialogCords()
                .subscribe((/**
             * @param {?} inlineDialogCords
             * @return {?}
             */
            function (inlineDialogCords) {
                _this.dialogTopAttribute = inlineDialogCords.getVerticalPosition() + _this.spaceBetweenElementAndInlineDialog;
                _this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
            }));
    };
    /**
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.inlineDialogCordsSubscription) {
            this.inlineDialogCordsSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createNestedComponent(this.inlineDialogNestedComponent);
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.clickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerClicked(event)) {
            this.inlineDialogService.close();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.isContainerClicked = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricInlineDialogComponent.prototype.createNestedComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(componentFactory);
    };
    FabricInlineDialogComponent.decorators = [
        { type: Component, args: [{
                    template: "<div [style.top.px]=\"dialogTopAttribute\"\n\t [style.left.px]=\"dialogLeftAttribute\"\n\t class=\"gui-inline-dialog-wrapper\">\n\n\t<div (document:click)=\"clickOutside($event)\"\n\t\t class=\"gui-inline-dialog-content\">\n\n\t\t<ng-template #container></ng-template>\n\n\t</div>\n\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-inline-dialog-wrapper{position:absolute}.gui-inline-dialog-wrapper .gui-inline-dialog-content{background-color:#fefdfc;max-width:400px;box-shadow:0 3px 7px #999;border-radius:4px;z-index:1000;display:block}", ".gui-dark .gui-inline-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}"]
                }] }
    ];
    /** @nocollapse */
    FabricInlineDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: FabricInlineDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricInlineDialogService; })),] }] },
        { type: ElementRef }
    ]; };
    FabricInlineDialogComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
    };
    return FabricInlineDialogComponent;
}());
if (false) {
    /** @type {?} */
    FabricInlineDialogComponent.prototype.container;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.inlineDialogNestedComponent;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.dialogTopAttribute;
    /** @type {?} */
    FabricInlineDialogComponent.prototype.dialogLeftAttribute;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.inlineDialogCordsSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.spaceBetweenElementAndInlineDialog;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.inlineDialogService;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricInlineDialogService = /** @class */ (function () {
    function FabricInlineDialogService(componentFactoryResolver, applicationRef, injector, platformId, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.platformId = platformId;
        this.document = document;
        this.inlineDialogRef = null;
        this.inlineDialogState$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
    };
    /**
     * @param {?} element
     * @param {?} component
     * @return {?}
     */
    FabricInlineDialogService.prototype.open = /**
     * @param {?} element
     * @param {?} component
     * @return {?}
     */
    function (element, component) {
        event.stopPropagation();
        if (!this.inlineDialogRef) {
            this.appendInlineDialogToElement(component);
            this.getInlineDialogCords(element);
        }
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeInlineDialog();
    };
    /**
     * @return {?}
     */
    FabricInlineDialogService.prototype.observeInlineDialogCords = /**
     * @return {?}
     */
    function () {
        return this.inlineDialogState$.asObservable();
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricInlineDialogService.prototype.appendInlineDialogToElement = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricInlineDialogComponent)
            .create(this.injector);
        componentRef.instance.inlineDialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.inlineDialogRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricInlineDialogService.prototype.removeInlineDialog = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.inlineDialogRef) {
            this.applicationRef.detachView(this.inlineDialogRef.hostView);
            this.inlineDialogRef.destroy();
            this.inlineDialogRef = null;
        }
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    FabricInlineDialogService.prototype.getInlineDialogCords = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var inlineDialogCords = new InlineDialogCords(element, window.pageXOffset, window.pageYOffset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    };
    FabricInlineDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricInlineDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricInlineDialogService;
}());
if (false) {
    /** @type {?} */
    FabricInlineDialogService.prototype.inlineDialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.inlineDialogState$;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FabricInlineDialogService.prototype.document;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daysOfTheWeek = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var quarters = [
    [{
            nr: 0,
            name: 'Jan'
        }, {
            nr: 1,
            name: 'Feb'
        }, {
            nr: 2,
            name: 'Mar'
        }],
    [{
            nr: 3,
            name: 'Apr'
        }, {
            nr: 4,
            name: 'May'
        }, {
            nr: 5,
            name: 'Jun'
        }],
    [{
            nr: 6,
            name: 'Jul'
        }, {
            nr: 7,
            name: 'Aug'
        }, {
            nr: 8,
            name: 'Sep'
        }],
    [{
            nr: 9,
            name: 'Oct'
        }, {
            nr: 10,
            name: 'Nov'
        }, {
            nr: 11,
            name: 'Dec'
        }]
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDatePickerService = /** @class */ (function () {
    function FabricDatePickerService() {
        this.dateMonth$ = new Subject();
        this.dateYear$ = new Subject();
        this.initialDate = new Date();
        this.selectedDate$ = new BehaviorSubject(this.initialDate);
    }
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeDateMonth = /**
     * @return {?}
     */
    function () {
        return this.dateMonth$.asObservable();
    };
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeDateYear = /**
     * @return {?}
     */
    function () {
        return this.dateYear$.asObservable();
    };
    /**
     * @return {?}
     */
    FabricDatePickerService.prototype.observeSelectedDate = /**
     * @return {?}
     */
    function () {
        return this.selectedDate$.asObservable();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerService.prototype.dateSelected = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDate$.next(date);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerService.prototype.nextMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 11) {
            this.dateYear$.next(year + 1);
            this.dateMonth$.next(0);
        }
        else {
            this.dateMonth$.next(month + 1);
        }
    };
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerService.prototype.prevMonth = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (month === 0) {
            this.dateYear$.next(year - 1);
            this.dateMonth$.next(11);
        }
        else {
            this.dateMonth$.next(month - 1);
        }
    };
    FabricDatePickerService.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.dateMonth$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.dateYear$;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.initialDate;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerService.prototype.selectedDate$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDatePickerWeeks = /** @class */ (function () {
    function FabricDatePickerWeeks() {
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.getDaysInMonths = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        this.resetWeeks();
        /** @type {?} */
        var numberOfDaysInMonth = (new Date(year, month + 1, 0)).getDate();
        for (var i = 1; i <= numberOfDaysInMonth; i++) {
            this.createWeeks(new Date(year, month, i));
        }
        return this.weeks;
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.createWeeks = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var day = date.getDate();
        if (this.weeks[0].length === 0 && day === 1) {
            this.createWeek(date, this.weeks[0]);
        }
        if (this.weeks[1].length === 0 && day > this.getLastDayNumber(this.weeks[0])) {
            this.createWeek(this.getLastDayDate(this.weeks[0]), this.weeks[1]);
        }
        if (this.weeks[2].length === 0 && day > this.getLastDayNumber(this.weeks[1])) {
            this.createWeek(this.getLastDayDate(this.weeks[1]), this.weeks[2]);
        }
        if (this.weeks[3].length === 0 && day > this.getLastDayNumber(this.weeks[2])) {
            this.createWeek(this.getLastDayDate(this.weeks[2]), this.weeks[3]);
        }
        if (this.weeks[4].length === 0 && day >= this.getLastDayNumber(this.weeks[3])) {
            this.createWeek(this.getLastDayDate(this.weeks[3]), this.weeks[4]);
        }
        if (this.weeks[5].length === 0 && day >= this.getLastDayNumber(this.weeks[4])) {
            this.createWeek(this.getLastDayDate(this.weeks[4]), this.weeks[5]);
        }
        this.weeks = [this.weeks[0], this.weeks[1], this.weeks[2], this.weeks[3], this.weeks[4], this.weeks[5]];
    };
    /**
     * @private
     * @param {?} date
     * @param {?} week
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.createWeek = /**
     * @private
     * @param {?} date
     * @param {?} week
     * @return {?}
     */
    function (date, week) {
        for (var i = 1; i <= 7; i++) {
            /** @type {?} */
            var isFirstDaySunday = date.getDay() === 0 && this.weeks[0].length === 0;
            /** @type {?} */
            var day = void 0;
            if (isFirstDaySunday) {
                day = date.getDate() - 6;
            }
            else {
                day = date.getDate() - date.getDay() + i;
            }
            /** @type {?} */
            var dayOfWeek = new Date(date.setDate(day));
            if (week.length < 7) {
                week.push(dayOfWeek);
            }
        }
    };
    /**
     * @private
     * @param {?} week
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.getLastDayNumber = /**
     * @private
     * @param {?} week
     * @return {?}
     */
    function (week) {
        if (week.length === 7) {
            return week[week.length - 1].getDate();
        }
    };
    /**
     * @private
     * @param {?} week
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.getLastDayDate = /**
     * @private
     * @param {?} week
     * @return {?}
     */
    function (week) {
        /** @type {?} */
        var lastDay = week[week.length - 1].getDate();
        return new Date(week[week.length - 1].setDate(lastDay));
    };
    /**
     * @private
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.resetWeeks = /**
     * @private
     * @return {?}
     */
    function () {
        this.weeks = [];
        this.weeks[0] = [];
        this.weeks[1] = [];
        this.weeks[2] = [];
        this.weeks[3] = [];
        this.weeks[4] = [];
        this.weeks[5] = [];
    };
    FabricDatePickerWeeks.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerWeeks;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerWeeks.prototype.weeks;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDatePickerYears = /** @class */ (function () {
    function FabricDatePickerYears() {
        this.year = new Date().getFullYear();
        this.inc = 10;
    }
    /**
     * @param {?} selectedYear
     * @return {?}
     */
    FabricDatePickerYears.prototype.getYears = /**
     * @param {?} selectedYear
     * @return {?}
     */
    function (selectedYear) {
        this.minYear = selectedYear - 50;
        this.maxYear = selectedYear + 50;
        /** @type {?} */
        var yearsRange = this.maxYear - this.minYear;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var rows = [];
        years = this.createYearsPool(this.minYear, yearsRange, years);
        rows = this.divideYearsPool(years, rows);
        return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
    };
    /**
     * @return {?}
     */
    FabricDatePickerYears.prototype.prevYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year > this.minYear) {
            this.year -= this.inc;
        }
        if (this.year > this.minYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerYears.prototype.nextYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year < this.maxYear) {
            this.year += this.inc;
        }
        if (this.year < this.maxYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    FabricDatePickerYears.prototype.createYearsPool = /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    function (minYear, yearsRange, years) {
        for (var i = 0; i <= yearsRange; i++) {
            years.push(minYear + i);
        }
        return years;
    };
    /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    FabricDatePickerYears.prototype.divideYearsPool = /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    function (years, rows) {
        for (var i = 0; i < years.length; i += 5) {
            rows.push(years.slice(i, i + 5));
        }
        return rows;
    };
    /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    FabricDatePickerYears.prototype.createRowsForDisplay = /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    function (rows, selectedYear) {
        if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
            for (var i = 0; i < rows.length; i++) {
                if (rows[i].indexOf(selectedYear) > -1) {
                    if (!rows[i - 1]) {
                        return [rows[i], rows[i + 1], rows[i + 2], rows[i + 3], rows[i + 4]];
                    }
                    if (!rows[i - 2]) {
                        return [rows[i - 1], rows[i], rows[i + 1], rows[i + 2], rows[i + 3]];
                    }
                    if (!rows[i + 1]) {
                        return [rows[i - 4], rows[i - 3], rows[i - 2], rows[i - 1], rows[i]];
                    }
                    if (!rows[i + 2]) {
                        return [rows[i - 3], rows[i - 2], rows[i - 1], rows[i], rows[i + 1]];
                    }
                    return this.rowsForDisplay = [rows[i - 2], rows[i - 1], rows[i], rows[i + 1], rows[i + 2]];
                }
            }
        }
    };
    FabricDatePickerYears.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerYears;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.rowsForDisplay;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.minYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.maxYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.year;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.inc;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDatePickerCalendarComponent = /** @class */ (function () {
    function FabricDatePickerCalendarComponent(datePickerService, datePickerWeeks, datePickerYears) {
        this.datePickerService = datePickerService;
        this.datePickerWeeks = datePickerWeeks;
        this.datePickerYears = datePickerYears;
        this.currentDay = new Date();
        this.daysOfTheWeek = daysOfTheWeek;
        this.quarters = quarters;
        this.selectedMonth = new Date().getMonth() + 1;
        this.enableMonthSelection = false;
        this.enableYearSelection = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.minYear || changes.maxYear) {
            this.years = this.datePickerYears.getYears(this.selectedYear);
        }
        if (changes.selectDate) {
            this.calculateDatePickerData();
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.monthSubscription =
            this.datePickerService.observeDateMonth().subscribe((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return _this.selectedMonth = month; }));
        this.yearSubscription =
            this.datePickerService.observeDateYear().subscribe((/**
             * @param {?} year
             * @return {?}
             */
            function (year) { return _this.selectedYear = year; }));
        this.selectedDateSubscription =
            this.datePickerService.observeSelectedDate().subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.selectDate = date;
                _this.selectedYear = date.getFullYear();
                _this.selectedMonth = date.getMonth();
            }));
        this.calculateDatePickerData();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.monthSubscription.unsubscribe();
        this.yearSubscription.unsubscribe();
        this.selectedDateSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.calculateDatePickerData = /**
     * @return {?}
     */
    function () {
        this.selectedMonthName = months[this.selectedMonth];
        this.weeks = this.datePickerWeeks.getDaysInMonths(this.selectedYear, this.selectedMonth);
        this.years = this.datePickerYears.getYears(this.selectedYear);
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.prevCard = /**
     * @return {?}
     */
    function () {
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            this.datePickerService.prevMonth(this.selectedYear, this.selectedMonth);
            this.calculateDatePickerData();
        }
        if (this.enableMonthSelection && this.selectedYear) {
            this.selectedYear = this.selectedYear - 1;
        }
        if (this.enableYearSelection) {
            this.years = this.datePickerYears.prevYearRange();
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.nextCard = /**
     * @return {?}
     */
    function () {
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            this.datePickerService.nextMonth(this.selectedYear, this.selectedMonth);
            this.calculateDatePickerData();
        }
        if (this.enableMonthSelection && this.selectedYear) {
            this.selectedYear = this.selectedYear + 1;
        }
        if (this.enableYearSelection) {
            this.years = this.datePickerYears.nextYearRange();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.onSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.datePickerService.dateSelected(date);
        this.selectDate = date;
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.switchViewedList = /**
     * @return {?}
     */
    function () {
        event.stopPropagation();
        if (this.enableMonthSelection) {
            return 'monthList';
        }
        if (this.enableYearSelection) {
            return 'yearsList';
        }
        if (!this.enableMonthSelection && !this.enableYearSelection) {
            return 'daysList';
        }
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.displayMonthDays = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return day === this.selectedMonth;
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isDateSelected = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (this.selectDate) {
            return day.getDate() === this.selectDate.getDate() &&
                day.getMonth() === this.selectDate.getMonth() &&
                day.getFullYear() === this.selectDate.getFullYear();
        }
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return day.getDate() === this.currentDay.getDate() &&
            day.getMonth() === this.currentDay.getMonth() &&
            day.getFullYear() === this.currentDay.getFullYear();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return month === this.currentDay.getMonth() &&
            this.selectedYear === this.currentDay.getFullYear();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isSelectedMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        if (this.selectDate) {
            return this.selectDate.getMonth() === month &&
                this.selectDate.getFullYear() === this.selectedYear;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isYearSelected = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        if (this.selectDate) {
            return year === this.selectedYear;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.isCurrentYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return this.currentDay.getFullYear() === year;
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.selectYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.selectedYear = year;
        this.enableYearSelection = false;
        this.enableMonthSelection = true;
        this.calculateDatePickerData();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.selectMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.selectedMonth = month;
        this.enableMonthSelection = false;
        this.calculateDatePickerData();
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.showMonthsList = /**
     * @return {?}
     */
    function () {
        this.enableMonthSelection = !this.enableMonthSelection;
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.showYearsList = /**
     * @return {?}
     */
    function () {
        this.enableMonthSelection = false;
        this.enableYearSelection = !this.enableYearSelection;
    };
    /**
     * @return {?}
     */
    FabricDatePickerCalendarComponent.prototype.getDisplayedYearRange = /**
     * @return {?}
     */
    function () {
        return this.years[0][0].toString() + '-' + this.years[4][this.years[4].length - 1].toString();
    };
    FabricDatePickerCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker-toggle',
                    template: "<div class=\"gui-date-picker-container\">\n\t<div [ngSwitch]=\"switchViewedList()\">\n\n\t\t<div *ngSwitchCase=\"'daysList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<h3 (click)=\"showMonthsList()\">{{selectedMonthName}} {{selectedYear}}</h3>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<th *ngFor=\"let dayOfTheWeek of daysOfTheWeek\">\n\t\t\t\t\t\t<span>{{dayOfTheWeek}}</span>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr *ngFor=\"let week of weeks\">\n\n\t\t\t\t\t<td *ngFor=\"let day of week\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"displayMonthDays(day.getMonth())\"\n\t\t\t\t\t\t[class.gui-date-picker-current-day]=\"isCurrentDay(day)\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-day]=\"isDateSelected(day)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-day\">\n\t\t\t\t<span (click)=\"onSelect(day)\">\n\t\t\t\t\t{{day.getDate()}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'monthList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<h3 (click)=\"showYearsList()\">{{selectedYear}}</h3>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let quarter of quarters\">\n\t\t\t\t\t<td *ngFor=\"let month of quarter\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-month]=\"isSelectedMonth(month.nr)\"\n\t\t\t\t\t\t[class.gui-date-picker-current-month]=\"isCurrentMonth(month.nr)\"\n\t\t\t\t\t\t(click)=\"selectMonth(month.nr)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-month\">\n\t\t\t\t<span>\n\t\t\t\t\t{{month.name}}\n\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"'yearsList'\">\n\t\t\t<div class=\"gui-date-picker-interface\">\n\n\t\t\t\t<h3>{{getDisplayedYearRange()}}</h3>\n\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"prevCard()\"><</button>\n\t\t\t\t\t<button (click)=\"nextCard()\">></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<table>\n\t\t\t\t<tr *ngFor=\"let yearsChunk of years\">\n\t\t\t\t\t<td *ngFor=\"let year of yearsChunk\"\n\t\t\t\t\t\t[class.gui-date-picker-selected-year]=\"isYearSelected(year)\"\n\t\t\t\t\t\t[class.gui-date-picker-current-year]=\"isCurrentYear(year)\"\n\t\t\t\t\t\t(click)=\"selectYear(year)\"\n\t\t\t\t\t\tclass=\"gui-date-picker-year\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{year}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-date-picker-calendar]': 'true'
                    },
                    styles: [".gui-date-picker-calendar{box-sizing:border-box;font-family:Roboto,\"Helvetica Neue\",sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-date-picker-calendar .gui-date-picker-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-radius:4px;width:250px;padding:0 0 12px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:24px 18px}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface h3{margin:0;cursor:pointer;pointer-events:auto}.gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{background:0 0;border:none;font-size:18px;margin-left:12px;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table{height:250px;width:250px;padding:0 12px}.gui-date-picker-calendar .gui-date-picker-container table td{height:31px;width:31px;text-align:center;position:relative}.gui-date-picker-calendar .gui-date-picker-container table td span{border-radius:4px;padding:2px 4px;border:1px solid transparent}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day span{display:none;pointer-events:none}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year{cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year span{font-size:13px}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-month span{display:block;pointer-events:auto;cursor:pointer}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#c7e2f6}.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border:1px solid #1a69a4}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerCalendarComponent.ctorParameters = function () { return [
        { type: FabricDatePickerService },
        { type: FabricDatePickerWeeks },
        { type: FabricDatePickerYears }
    ]; };
    return FabricDatePickerCalendarComponent;
}());
if (false) {
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.currentDay;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.daysOfTheWeek;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.weeks;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.quarters;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.years;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedMonth;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedMonthName;
    /** @type {?} */
    FabricDatePickerCalendarComponent.prototype.selectedYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.selectedDateSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.monthSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.yearSubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.enableMonthSelection;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.enableYearSelection;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerWeeks;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerCalendarComponent.prototype.datePickerYears;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDatePickerComponent = /** @class */ (function () {
    function FabricDatePickerComponent(inlineDialogService, datePickerService, formBuilder) {
        this.inlineDialogService = inlineDialogService;
        this.datePickerService = datePickerService;
        this.formBuilder = formBuilder;
        this.dateSelected = new EventEmitter();
        this.datePickerForm = formBuilder.group({
            'date': ['']
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDatePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.selectDate) {
            this.datePickerService.dateSelected(this.selectDate);
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.datePickerSubscription =
            this.datePickerService.observeSelectedDate()
                .pipe(distinctUntilChanged())
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                _this.pickedDate = date;
                _this.dateSelected.emit(date);
                _this.inlineDialogService.close();
            }));
        this.observeDayChanges();
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.datePickerSubscription.unsubscribe();
        this.datePickerDaySubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    FabricDatePickerComponent.prototype.openDatePicker = /**
     * @return {?}
     */
    function () {
        this.inlineDialogService.open(this.datePickerRef, FabricDatePickerCalendarComponent);
    };
    /**
     * @private
     * @return {?}
     */
    FabricDatePickerComponent.prototype.observeDayChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.datePickerDaySubscription =
            this.datePickerForm.controls['date'].valueChanges
                .pipe(distinctUntilChanged(), debounceTime(1000), map((/**
             * @param {?} day
             * @return {?}
             */
            function (day) { return _this.parse(day); })))
                .subscribe((/**
             * @param {?} day
             * @return {?}
             */
            function (day) {
                _this.datePickerService.dateSelected(day);
            }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FabricDatePickerComponent.prototype.parse = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((typeof value === 'string') && (value.includes('/'))) {
            /** @type {?} */
            var str = value.split('/');
            /** @type {?} */
            var year = +str[2];
            /** @type {?} */
            var month = +str[1] - 1;
            /** @type {?} */
            var date = +str[0];
            return new Date(year, month, date);
        }
        else
            return this.pickedDate;
    };
    FabricDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-date-picker',
                    template: "<div #datePicker class=\"gui-date-picker\">\n\t<form [formGroup]=\"datePickerForm\">\n\t\t<input gui-input formControlName='date'\n\t\t\t   [value]=\"pickedDate| date: 'd/M/yyyy'\">\n\t</form>\n\t<div class=\"gui-date-picker-icon\" (click)=\"openDatePicker()\"></div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-date-picker{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gui-date-picker input{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;padding:4px;border-radius:0;border-width:0 0 1px}.gui-date-picker .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABHSURBVDhPY0AGERER/6FMnABdDSOIIEYjNrBixQpGJiibbECxAWBAjhdgegbeCygGgJwFw1AhgmA0FgaDARRnJiiTXMDAAABL+xpWANMN2gAAAABJRU5ErkJggg==);height:16px;width:16px;margin-left:-16px;cursor:pointer;opacity:.8}.gui-date-picker .gui-date-picker-icon:hover{opacity:1}", ".gui-dark .gui-date-picker-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACNSURBVDhPY0AGe/fu/Q9l4gToahhBBC6NbOzsDP//szDcuP6Qwcxcg+HtmzdQGQhwdnZmZIKysYJfP38xCPBzM1hZ6zL8+PEDKooK8BrAwPCf4fXrVwyvXr5g+PrlC1QMCyDG7+gApoeACwgD6hoAchYMQ4UIgoH3AhgMo1ggB+DNTIQAKDNBmeQCBgYAklU89fLLqHkAAAAASUVORK5CYII=)}.gui-dark .gui-date-picker-calendar .gui-date-picker-container .gui-date-picker-interface button{color:#bdbdbd}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-selected-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-selected-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-selected-year span{border-color:#ce93d8}.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-day.gui-date-picker-current-day span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-month.gui-date-picker-current-month span,.gui-dark .gui-date-picker-calendar .gui-date-picker-container table .gui-date-picker-year.gui-date-picker-current-year span{background:#757575}"]
                }] }
    ];
    /** @nocollapse */
    FabricDatePickerComponent.ctorParameters = function () { return [
        { type: FabricInlineDialogService },
        { type: FabricDatePickerService },
        { type: FormBuilder }
    ]; };
    FabricDatePickerComponent.propDecorators = {
        datePickerRef: [{ type: ViewChild, args: ['datePicker', { static: false },] }],
        selectDate: [{ type: Input }],
        dateSelected: [{ type: Output }]
    };
    return FabricDatePickerComponent;
}());
if (false) {
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerRef;
    /** @type {?} */
    FabricDatePickerComponent.prototype.selectDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.dateSelected;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerForm;
    /** @type {?} */
    FabricDatePickerComponent.prototype.pickedDate;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerSubscription;
    /** @type {?} */
    FabricDatePickerComponent.prototype.datePickerDaySubscription;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.inlineDialogService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerComponent.prototype.formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricInlineDialogModule = /** @class */ (function () {
    function FabricInlineDialogModule() {
    }
    FabricInlineDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricInlineDialogComponent
                    ],
                    providers: [
                        FabricInlineDialogService
                    ],
                    entryComponents: [
                        FabricInlineDialogComponent
                    ]
                },] }
    ];
    return FabricInlineDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricInputComponent = /** @class */ (function () {
    function FabricInputComponent() {
    }
    FabricInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'input[gui-input]',
                    template: "\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-input]': 'true'
                    },
                    styles: [".gui-input{background:0 0;border-radius:4px;color:#333;font:14px Arial;margin:0;max-width:100%;outline:0;padding:8px 12px;text-align:left;border:1px solid #d6d6d6}.gui-input:hover{border-color:#999}.gui-input:focus{border-color:#6fb4e8}.gui-input:disabled{color:#ccc;cursor:default;pointer-events:none}.gui-input:disabled::-webkit-input-placeholder{color:#ccc}.gui-input:disabled::-moz-placeholder{color:#ccc}.gui-input:disabled:-ms-input-placeholder{color:#ccc}.gui-input:disabled::-ms-input-placeholder{color:#ccc}.gui-input:disabled::placeholder{color:#ccc}", ".gui-material .gui-input{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-input{background:0 0;border-color:#616161;color:#bdbdbd}.gui-dark .gui-input:hover{border-color:#757575}.gui-dark .gui-input:focus{border-color:#ce93d8}.gui-dark .gui-input:disabled{opacity:.36}"]
                }] }
    ];
    return FabricInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricInputModule = /** @class */ (function () {
    function FabricInputModule() {
    }
    FabricInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricInputComponent
                    ],
                    exports: [
                        FabricInputComponent
                    ]
                },] }
    ];
    return FabricInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDatePickerModule = /** @class */ (function () {
    function FabricDatePickerModule() {
    }
    FabricDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricInlineDialogModule,
                        ReactiveFormsModule,
                        FabricInputModule
                    ],
                    declarations: [
                        FabricDatePickerCalendarComponent,
                        FabricDatePickerComponent
                    ],
                    exports: [
                        FabricDatePickerCalendarComponent,
                        FabricDatePickerComponent
                    ],
                    entryComponents: [
                        FabricDatePickerCalendarComponent
                    ],
                    providers: [
                        FabricDatePickerService,
                        FabricDatePickerWeeks,
                        FabricDatePickerYears
                    ]
                },] }
    ];
    return FabricDatePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Geometry = /** @class */ (function () {
    function Geometry(container, menu, windowSize) {
        this.container = container;
        this.menu = menu;
        this.windowSize = windowSize;
        this.calculate(this.menu, this.windowSize);
    }
    /**
     * @return {?}
     */
    Geometry.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.containerHeight;
    };
    /**
     * @return {?}
     */
    Geometry.prototype.getContainerWidth = /**
     * @return {?}
     */
    function () {
        return this.containerWidth;
    };
    /**
     * @return {?}
     */
    Geometry.prototype.canOpenDownward = /**
     * @return {?}
     */
    function () {
        return this.availableBottomSpace > 0;
    };
    /**
     * @return {?}
     */
    Geometry.prototype.canOpenUpward = /**
     * @return {?}
     */
    function () {
        return this.availableTopSpace > 0;
    };
    /**
     * @private
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    Geometry.prototype.calculate = /**
     * @private
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    function (menu, windowSize) {
        /** @type {?} */
        var containerEl = this.container.nativeElement;
        /** @type {?} */
        var menuHeight = menu.nativeElement.offsetHeight;
        /** @type {?} */
        var rectBottom = containerEl.getBoundingClientRect().bottom;
        this.containerHeight = containerEl.offsetHeight;
        this.containerWidth = containerEl.offsetWidth;
        this.availableBottomSpace = windowSize - rectBottom - menuHeight;
        this.availableTopSpace = rectBottom - menuHeight - this.containerHeight;
    };
    return Geometry;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.containerWidth;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.availableBottomSpace;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.availableTopSpace;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.container;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.menu;
    /**
     * @type {?}
     * @private
     */
    Geometry.prototype.windowSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GeometryService = /** @class */ (function () {
    function GeometryService() {
        this.geometryResults$ = new Subject();
    }
    /**
     * @return {?}
     */
    GeometryService.prototype.watchGeometry = /**
     * @return {?}
     */
    function () {
        return this.geometryResults$.asObservable();
    };
    /**
     * @param {?} container
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    GeometryService.prototype.changeGeometry = /**
     * @param {?} container
     * @param {?} menu
     * @param {?} windowSize
     * @return {?}
     */
    function (container, menu, windowSize) {
        /** @type {?} */
        var geometry = new Geometry(container, menu, windowSize);
        this.geometryResults$.next(geometry);
    };
    GeometryService.decorators = [
        { type: Injectable }
    ];
    return GeometryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GeometryService.prototype.geometryResults$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Placement = {
    Right: 0,
    Left: 1,
};
Placement[Placement.Right] = 'Right';
Placement[Placement.Left] = 'Left';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDropdownComponent = /** @class */ (function () {
    function FabricDropdownComponent(elementRef, renderer, changeDetectorRef, geometryService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.geometryService = geometryService;
        this.disabled = false;
        this.dropdownText = 'Dropdown';
        this.arrow = true;
        this.isArrowEnabled = this.arrow;
        this.open = false;
        this.onResize();
    }
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.windowSize = window.innerHeight;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.placement) {
            this.changePlacement();
        }
    };
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeGeometry();
    };
    /**
     * @return {?}
     */
    FabricDropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.tryToOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.openMenu(!this.open);
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.clickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerClicked(event)) {
            this.openMenu(false);
        }
    };
    /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    FabricDropdownComponent.prototype.openMenu = /**
     * @private
     * @param {?} opened
     * @return {?}
     */
    function (opened) {
        this.open = opened;
        if (this.open) {
            this.showItems();
        }
        else {
            this.hideItems();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.showItems = /**
     * @private
     * @return {?}
     */
    function () {
        this.addClass(this.elementRef.nativeElement, 'gui-menu-opened');
        this.geometryService.changeGeometry(this.containerRef, this.dropdownMenuRef, this.windowSize);
        if (this.canOpenDownward || !this.canOpenUpward) {
            this.openDownward();
        }
        else {
            this.openUpward();
        }
        if (this.placement === Placement.Right) {
            this.openRight();
        }
        if (this.placement === Placement.Left) {
            this.openLeft();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.observeGeometry = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription =
            this.geometryService
                .watchGeometry()
                .subscribe((/**
             * @param {?} geometry
             * @return {?}
             */
            function (geometry) {
                _this.containerHeight = geometry.getContainerHeight();
                _this.containerWidth = geometry.getContainerWidth();
                _this.canOpenUpward = geometry.canOpenUpward();
                _this.canOpenDownward = geometry.canOpenDownward();
            }));
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openDownward = /**
     * @private
     * @return {?}
     */
    function () {
        this.topPosition = null;
        this.bottomPosition = this.containerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openUpward = /**
     * @private
     * @return {?}
     */
    function () {
        this.bottomPosition = null;
        this.topPosition = this.containerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openRight = /**
     * @private
     * @return {?}
     */
    function () {
        this.bottomPosition = 0;
        this.topPosition = null;
        this.horizontalPosition = this.containerWidth;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.openLeft = /**
     * @private
     * @return {?}
     */
    function () {
        this.bottomPosition = 0;
        this.topPosition = null;
        this.horizontalPosition = -(this.containerWidth + 1);
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.changePlacement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.placement === Placement.Right) {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
        }
        else {
            this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
            this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricDropdownComponent.prototype.hideItems = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');
        if (itemsElHasOpenClass) {
            this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.isContainerClicked = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricDropdownComponent.prototype.isContainerDisabled = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.target.classList.contains('gui-disabled');
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricDropdownComponent.prototype.addClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        this.renderer.addClass(element, name);
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricDropdownComponent.prototype.removeClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        this.renderer.removeClass(element, name);
    };
    FabricDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-dropdown',
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t class=\"gui-dropdown-container\">\n\t<div>{{dropdownText}}</div>\n\t<span [ngClass]=\"{'gui-dropdown-arrow': isArrowEnabled}\"></span>\n\t<div #dropdownMenu\n\t\t [style.left.px]=\"horizontalPosition\"\n\t\t [style.top.px]=\"bottomPosition\"\n\t\t [style.bottom.px]=\"topPosition\"\n\t\t class=\"gui-dropdown-menu\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-dropdown]': 'true'
                    },
                    providers: [GeometryService],
                    styles: [".gui-dropdown .gui-dropdown-container{background:#fefdfc;box-sizing:content-box;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 32px 8px 12px;position:relative;width:70px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container:hover{border-color:#999}.gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;position:absolute;top:5px;right:10px;margin:8px;width:0;height:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-left.gui-dropdown-menu,.gui-dropdown .gui-dropdown-container .gui-dropdown-right.gui-dropdown-menu{margin:0}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu{background:inherit;display:none;left:-1px;overflow:hidden;position:absolute;z-index:2;border-radius:4px;border:1px solid #d6d6d6}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{padding:8px 32px 8px 12px;width:70px;list-style-type:none}.gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#dcdcdc}.gui-dropdown.gui-menu-opened .gui-dropdown-container{border-color:#999}.gui-dropdown.gui-menu-opened .gui-dropdown-menu{display:block}.gui-dropdown .gui-disabled{color:#ccc;pointer-events:none}", ".gui-material .gui-dropdown .gui-dropdown-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-dropdown .gui-dropdown-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-dropdown .gui-dropdown-container:hover{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu{border-color:#ce93d8}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item{border-top-color:#757575}.gui-dark .gui-dropdown .gui-dropdown-container .gui-dropdown-menu .gui-item:hover{background:#616161}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-container{border-color:#ce93d8}.gui-dark .gui-dropdown.gui-options-opened .gui-dropdown-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-dropdown .gui-disabled{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: GeometryService }
    ]; };
    FabricDropdownComponent.propDecorators = {
        dropdownMenuRef: [{ type: ViewChild, args: ['dropdownMenu', { static: true },] }],
        containerRef: [{ type: ViewChild, args: ['container', { static: true },] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }],
        disabled: [{ type: Input }],
        dropdownText: [{ type: Input }],
        arrow: [{ type: Input }],
        placement: [{ type: Input }]
    };
    return FabricDropdownComponent;
}());
if (false) {
    /** @type {?} */
    FabricDropdownComponent.prototype.dropdownMenuRef;
    /** @type {?} */
    FabricDropdownComponent.prototype.containerRef;
    /** @type {?} */
    FabricDropdownComponent.prototype.disabled;
    /** @type {?} */
    FabricDropdownComponent.prototype.dropdownText;
    /** @type {?} */
    FabricDropdownComponent.prototype.arrow;
    /** @type {?} */
    FabricDropdownComponent.prototype.placement;
    /** @type {?} */
    FabricDropdownComponent.prototype.isArrowEnabled;
    /** @type {?} */
    FabricDropdownComponent.prototype.containerWidth;
    /** @type {?} */
    FabricDropdownComponent.prototype.containerHeight;
    /** @type {?} */
    FabricDropdownComponent.prototype.windowSize;
    /** @type {?} */
    FabricDropdownComponent.prototype.horizontalPosition;
    /** @type {?} */
    FabricDropdownComponent.prototype.bottomPosition;
    /** @type {?} */
    FabricDropdownComponent.prototype.topPosition;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.canOpenDownward;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.open;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricDropdownComponent.prototype.geometryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownItemComponent = /** @class */ (function () {
    function DropdownItemComponent() {
    }
    DropdownItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-dropdown-item',
                    template: "<div class=\"gui-item\">\n\t<ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return DropdownItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDropdownModule = /** @class */ (function () {
    function FabricDropdownModule() {
    }
    FabricDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricDropdownComponent,
                        DropdownItemComponent
                    ],
                    exports: [
                        FabricDropdownComponent,
                        DropdownItemComponent
                    ]
                },] }
    ];
    return FabricDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDialogService = /** @class */ (function () {
    function FabricDialogService(componentFactoryResolver, applicationRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.dialogRef = null;
    }
    /**
     * @return {?}
     */
    FabricDialogService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeDialog();
    };
    /**
     * @param {?} component
     * @return {?}
     */
    FabricDialogService.prototype.open = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        if (!this.dialogRef) {
            this.appendDialogToBody(component);
        }
    };
    /**
     * @return {?}
     */
    FabricDialogService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeDialog();
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricDialogService.prototype.appendDialogToBody = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricDialogComponent)
            .create(this.injector);
        componentRef.instance.dialogNestedComponent = component;
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domDialogElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domDialogElement);
        this.dialogRef = componentRef;
    };
    /**
     * @private
     * @return {?}
     */
    FabricDialogService.prototype.removeDialog = /**
     * @private
     * @return {?}
     */
    function () {
        this.applicationRef.detachView(this.dialogRef.hostView);
        this.dialogRef.destroy();
        this.dialogRef = null;
    };
    FabricDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricDialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricDialogService;
}());
if (false) {
    /** @type {?} */
    FabricDialogService.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricDialogService.prototype.document;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDialogComponent = /** @class */ (function () {
    function FabricDialogComponent(componentFactoryResolver, changeDetectorRef, dialogService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.dialogService = dialogService;
    }
    /**
     * @return {?}
     */
    FabricDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createNestedComponent(this.dialogNestedComponent);
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricDialogComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.dialogService.close();
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    FabricDialogComponent.prototype.createNestedComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(componentFactory);
    };
    FabricDialogComponent.decorators = [
        { type: Component, args: [{
                    template: "<div class=\"gui-dialog-blanket\"></div>\n<div class=\"gui-dialog-wrapper\">\n\t<div class=\"gui-dialog-content\">\n\t\t<a (click)=\"closeDialog()\" class=\"gui-dialog-close\"></a>\n\t\t<ng-template #container></ng-template>\n\t</div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-dialog-blanket{background:rgba(0,0,0,.32);position:fixed;height:100%;width:100%;left:0;top:0;pointer-events:none;z-index:1000}.gui-dialog-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;height:100%;width:100%;left:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;z-index:1000}.gui-dialog-wrapper .gui-dialog-content{background-color:#fefdfc;max-width:400px;position:relative;border-radius:4px;box-shadow:0 3px 7px #999;-webkit-animation:.1s ease-in display-dialog;animation:.1s ease-in display-dialog}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close{position:absolute;cursor:pointer;right:8px;top:8px;width:16px;height:16px;opacity:.4}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:hover{opacity:.8}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{position:absolute;left:7px;content:' ';height:16px;width:2px;background-color:#333}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes display-dialog{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes display-dialog{from{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}", ".gui-dark .gui-dialog-wrapper .gui-dialog-content{background:#424242;color:#bdbdbd;box-shadow:0 1px 2px #424242}.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:after,.gui-dark .gui-dialog-wrapper .gui-dialog-content .gui-dialog-close:before{background:#bdbdbd}"]
                }] }
    ];
    /** @nocollapse */
    FabricDialogComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: FabricDialogService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricDialogService; })),] }] }
    ]; };
    FabricDialogComponent.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: false },] }]
    };
    return FabricDialogComponent;
}());
if (false) {
    /** @type {?} */
    FabricDialogComponent.prototype.container;
    /** @type {?} */
    FabricDialogComponent.prototype.dialogNestedComponent;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricDialogComponent.prototype.dialogService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricDialogModule = /** @class */ (function () {
    function FabricDialogModule() {
    }
    FabricDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricDialogComponent
                    ],
                    providers: [
                        FabricDialogService
                    ],
                    entryComponents: [
                        FabricDialogComponent
                    ]
                },] }
    ];
    return FabricDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricProgressBarComponent = /** @class */ (function () {
    function FabricProgressBarComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricProgressBarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.primary) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass('gui-secondary');
            }
            else {
                this.removeClass('gui-secondary');
            }
        }
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricProgressBarComponent.prototype.addClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricProgressBarComponent.prototype.removeClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    FabricProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-progress-bar',
                    template: "<div\n\t[style.height.px]=\"height\"\n\t[style.width.px]=\"width\"\n\t[style.text-align]=\"textAlign\"\n\tclass=\"gui-progress-bar\">\n\t<div\n\t\t[style.background]=\"color\"\n\t\t[style.width.%]=\"progress\"\n\t\tclass=\"gui-progress\">\n        <span\n\t\t\t[style.top]=\"textTop\"\n\t\t\tclass=\"gui-progress-text\">\n        <ng-content></ng-content>\n        </span>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-progress]': 'true'
                    },
                    styles: [".gui-progress-bar{display:block;font-family:Arial;height:18px;margin-bottom:10px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-progress-bar .gui-progress{background:#999;border-bottom:inherit;height:inherit;width:0}.gui-primary .gui-progress-bar .gui-progress.gui-progress{background:#2185d0}.gui-secondary .gui-progress-bar .gui-progress.gui-progress{background:#3cb371}.gui-progress-bar .gui-progress-text{position:relative}", ".gui-material .gui-progress-bar{border-color:#5262c5;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-progress{background:#3949ab}.gui-material .gui-progress.gui-primary .gui-progress{background:#6200ee}.gui-material .gui-progress.gui-primary .gui-progress-bar{border-color:#6200ee}.gui-material .gui-progress.gui-secondary .gui-progress{background:#0097a7}.gui-material .gui-progress.gui-secondary .gui-progress-bar{border-color:#0097a7}", ".gui-dark .gui-progress-bar{border-color:#616161;color:#bdbdbd}.gui-dark .gui-progress{background:#424242}.gui-dark .gui-progress.gui-primary .gui-progress{background:#ce93d8}.gui-dark .gui-progress.gui-primary .gui-progress-bar{border-color:#ce93d8;color:#212121}.gui-dark .gui-progress.gui-secondary .gui-progress{background:#80cbc4}.gui-dark .gui-progress.gui-secondary .gui-progress-bar{border-color:#80cbc4;color:#212121}"]
                }] }
    ];
    /** @nocollapse */
    FabricProgressBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricProgressBarComponent.propDecorators = {
        progress: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        textTop: [{ type: Input }],
        textAlign: [{ type: Input }],
        primary: [{ type: Input }],
        secondary: [{ type: Input }]
    };
    return FabricProgressBarComponent;
}());
if (false) {
    /** @type {?} */
    FabricProgressBarComponent.prototype.progress;
    /** @type {?} */
    FabricProgressBarComponent.prototype.color;
    /** @type {?} */
    FabricProgressBarComponent.prototype.height;
    /** @type {?} */
    FabricProgressBarComponent.prototype.width;
    /** @type {?} */
    FabricProgressBarComponent.prototype.textTop;
    /** @type {?} */
    FabricProgressBarComponent.prototype.textAlign;
    /** @type {?} */
    FabricProgressBarComponent.prototype.primary;
    /** @type {?} */
    FabricProgressBarComponent.prototype.secondary;
    /**
     * @type {?}
     * @private
     */
    FabricProgressBarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricProgressBarComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricProgressBarModule = /** @class */ (function () {
    function FabricProgressBarModule() {
    }
    FabricProgressBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricProgressBarComponent
                    ],
                    exports: [
                        FabricProgressBarComponent
                    ]
                },] }
    ];
    return FabricProgressBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var AbstractSpinner = /** @class */ (function () {
    function AbstractSpinner(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.width = 5;
        this.diameter = 90;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractSpinner.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculateCircle();
        if (changes.primary) {
            if (this.primary) {
                this.addClass('gui-primary');
            }
            else {
                this.removeClass('gui-primary');
            }
        }
        if (changes.secondary) {
            if (this.secondary) {
                this.addClass('gui-secondary');
            }
            else {
                this.removeClass('gui-secondary');
            }
        }
    };
    /**
     * @return {?}
     */
    AbstractSpinner.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateCircle();
    };
    /**
     * @private
     * @return {?}
     */
    AbstractSpinner.prototype.calculateCircle = /**
     * @private
     * @return {?}
     */
    function () {
        this.circumference = this.calculateCircumference(this.diameter);
        this.r = this.calculateR(this.diameter);
        this.croppedCircle = this.calculateDashes(this.circumference);
        this.circleSize = this.calculateSize(this.diameter, this.width);
    };
    /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    AbstractSpinner.prototype.calculateCircumference = /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    function (diameter) {
        return diameter * Math.PI;
    };
    /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    AbstractSpinner.prototype.calculateR = /**
     * @private
     * @param {?} diameter
     * @return {?}
     */
    function (diameter) {
        return diameter / 2;
    };
    /**
     * @private
     * @param {?} circumference
     * @return {?}
     */
    AbstractSpinner.prototype.calculateDashes = /**
     * @private
     * @param {?} circumference
     * @return {?}
     */
    function (circumference) {
        return circumference * 0.25;
    };
    /**
     * @private
     * @param {?} diameter
     * @param {?} width
     * @return {?}
     */
    AbstractSpinner.prototype.calculateSize = /**
     * @private
     * @param {?} diameter
     * @param {?} width
     * @return {?}
     */
    function (diameter, width) {
        return diameter + width;
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    AbstractSpinner.prototype.addClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    AbstractSpinner.prototype.removeClass = /**
     * @protected
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    AbstractSpinner.propDecorators = {
        width: [{ type: Input }],
        diameter: [{ type: Input }],
        primary: [{ type: Input }],
        secondary: [{ type: Input }]
    };
    return AbstractSpinner;
}());
if (false) {
    /** @type {?} */
    AbstractSpinner.prototype.width;
    /** @type {?} */
    AbstractSpinner.prototype.diameter;
    /** @type {?} */
    AbstractSpinner.prototype.primary;
    /** @type {?} */
    AbstractSpinner.prototype.secondary;
    /** @type {?} */
    AbstractSpinner.prototype.r;
    /** @type {?} */
    AbstractSpinner.prototype.circumference;
    /** @type {?} */
    AbstractSpinner.prototype.croppedCircle;
    /** @type {?} */
    AbstractSpinner.prototype.circleSize;
    /**
     * @type {?}
     * @protected
     */
    AbstractSpinner.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    AbstractSpinner.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var SpinnerMode = {
    Spin: 0,
};
SpinnerMode[SpinnerMode.Spin] = 'Spin';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricProgressSpinnerComponent = /** @class */ (function (_super) {
    __extends(FabricProgressSpinnerComponent, _super);
    function FabricProgressSpinnerComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.value = 0;
        _this.animationsDisabled = true;
        _this.secondCircleDisabled = true;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        this.calculateValuePercentage(this.circumference, this.value);
        if (this.mode === SpinnerMode.Spin) {
            this.animationsDisabled = false;
            this.secondCircleDisabled = false;
            this.value = 0;
            this.circumference = this.croppedCircle;
        }
        if (this.animationsDisabled) {
            this.addClass('gui-animations-disabled');
        }
        else {
            this.removeClass('gui-animations-disabled');
        }
        if (this.secondCircleDisabled) {
            this.addClass('gui-second-circle-disabled');
        }
        else {
            this.removeClass('gui-second-circle-disabled');
        }
    };
    /**
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateValuePercentage(this.circumference, this.value);
    };
    /**
     * @protected
     * @param {?} circumference
     * @param {?} value
     * @return {?}
     */
    FabricProgressSpinnerComponent.prototype.calculateValuePercentage = /**
     * @protected
     * @param {?} circumference
     * @param {?} value
     * @return {?}
     */
    function (circumference, value) {
        this.valuePercentage = circumference - (value * circumference / 100);
    };
    FabricProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-progress-spinner',
                    template: "<div\n\t[style.width.px]=\"circleSize\"\n\t[style.height.px]=\"circleSize\"\n\tclass=\"gui-progress-spinner\">\n\t<svg\n\t\t[style.width.px]=\"circleSize\"\n\t\t[style.height.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[style.stroke-dashoffset]=\"valuePercentage\"\n\t\t\t[style.stroke-dasharray]=\"circumference\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\t[attr.r]=\"r\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.width.px]=\"circleSize\"\n\t\t[style.height.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\t[attr.r]=\"r\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-progress-spinner{display:inline-block;position:relative;margin:4px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-progress-spinner circle{fill:transparent;stroke:#999}.gui-progress-spinner svg{position:absolute}.gui-progress-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-progress-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner .circle-outer,.gui-animations-disabled .gui-progress-spinner.gui-progress-spinner.gui-progress-spinner{-webkit-animation:none;animation:none}.gui-second-circle-disabled .gui-progress-spinner.gui-progress-spinner .circle-inner{opacity:0}.gui-primary .gui-progress-spinner.gui-progress-spinner circle{stroke:#2185d0}.gui-secondary .gui-progress-spinner.gui-progress-spinner circle{stroke:#3cb371}", ".gui-material .gui-progress-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-progress-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-progress-spinner circle{stroke:#0097a7}", ".gui-dark .gui-progress-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-progress-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-progress-spinner circle{stroke:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricProgressSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricProgressSpinnerComponent.propDecorators = {
        value: [{ type: Input }],
        mode: [{ type: Input }],
        color: [{ type: Input }]
    };
    return FabricProgressSpinnerComponent;
}(AbstractSpinner));
if (false) {
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.value;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.mode;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.color;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.animationsDisabled;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.secondCircleDisabled;
    /** @type {?} */
    FabricProgressSpinnerComponent.prototype.valuePercentage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricProgressSpinnerModule = /** @class */ (function () {
    function FabricProgressSpinnerModule() {
    }
    FabricProgressSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricProgressSpinnerComponent
                    ],
                    exports: [
                        FabricProgressSpinnerComponent
                    ]
                },] }
    ];
    return FabricProgressSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricRadioButtonComponent = /** @class */ (function () {
    function FabricRadioButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.changed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FabricRadioButtonComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
        }
    };
    /**
     * @return {?}
     */
    FabricRadioButtonComponent.prototype.check = /**
     * @return {?}
     */
    function () {
        this.checked = true;
        this.changed.emit(this.checked);
    };
    FabricRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-radio-button',
                    template: "<label>\n\t<input\n\t\t[name]=name\n\t\t[checked]=checked\n\t\t[disabled]=disabled\n\t\ttype=\"radio\"\n\t\t(click)=\"check()\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-radio-button]': 'true'
                    },
                    styles: [".gui-radio-button{display:inline-block;font:14px/18px Arial;padding-left:32px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{position:absolute;opacity:0;height:0;width:0}.gui-radio-button .gui-radio-checkmark{box-sizing:content-box;border-radius:50%;position:absolute;left:0;height:16px;width:16px;border:1px solid #d6d6d6}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";position:absolute;display:none;background:#333;border-radius:50%;width:16px;height:16px;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}", ".gui-material .gui-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark,.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}"]
                }] }
    ];
    /** @nocollapse */
    FabricRadioButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricRadioButtonComponent.propDecorators = {
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricRadioButtonComponent;
}());
if (false) {
    /** @type {?} */
    FabricRadioButtonComponent.prototype.name;
    /** @type {?} */
    FabricRadioButtonComponent.prototype.checked;
    /** @type {?} */
    FabricRadioButtonComponent.prototype.disabled;
    /** @type {?} */
    FabricRadioButtonComponent.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    FabricRadioButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricRadioButtonComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricRadioButtonModule = /** @class */ (function () {
    function FabricRadioButtonModule() {
    }
    FabricRadioButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricRadioButtonComponent
                    ],
                    exports: [
                        FabricRadioButtonComponent
                    ]
                },] }
    ];
    return FabricRadioButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricRadioGroupComponent = /** @class */ (function () {
    function FabricRadioGroupComponent() {
    }
    FabricRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-radio-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-radio-group]': 'true'
                    },
                    styles: [".gui-radio-group .gui-radio-button{margin-bottom:10px;display:block}"]
                }] }
    ];
    return FabricRadioGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricRadioGroupModule = /** @class */ (function () {
    function FabricRadioGroupModule() {
    }
    FabricRadioGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricRadioGroupComponent
                    ],
                    exports: [
                        FabricRadioGroupComponent
                    ]
                },] }
    ];
    return FabricRadioGroupModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricTabComponent = /** @class */ (function () {
    function FabricTabComponent(renderer) {
        this.renderer = renderer;
        this.scrollActive = false;
        this.listPosition = 0;
        this.menuListWidth = 0;
        this.scrollAmount = 60;
        this.ACTIVE_TAB_CLASS_NAME = 'gui-active';
    }
    /**
     * @return {?}
     */
    FabricTabComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.toggleTab(this.active);
        this.calculateMenuWidth();
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    FabricTabComponent.prototype.toggleTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.removeActive();
        this.setActive(tab);
    };
    /**
     * @param {?} scrollRightClicked
     * @return {?}
     */
    FabricTabComponent.prototype.scrollTabList = /**
     * @param {?} scrollRightClicked
     * @return {?}
     */
    function (scrollRightClicked) {
        /** @type {?} */
        var listWidth = this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').offsetWidth;
        /** @type {?} */
        var menuOverflow = this.menuListWidth - listWidth;
        if (scrollRightClicked && menuOverflow > this.listPosition) {
            this.listPosition += this.scrollAmount;
        }
        else if (!scrollRightClicked && this.listPosition > 0) {
            this.listPosition -= this.scrollAmount;
        }
        this.tabRef.nativeElement.querySelector('.' + 'gui-tab-menu-list').scrollLeft = this.listPosition;
    };
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    FabricTabComponent.prototype.setActive = /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var navMenuTabEl = this.tabRef.nativeElement.querySelector('[data-tab="' + tab, '"]');
        /** @type {?} */
        var navTabItemEl = this.tabItemRef.nativeElement.querySelector('[data-tab="' + tab, '"]');
        this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    };
    /**
     * @private
     * @return {?}
     */
    FabricTabComponent.prototype.removeActive = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var navMenuTabEl = this.tabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        /** @type {?} */
        var navTabItemEl = this.tabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
        if (navMenuTabEl) {
            this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
        }
        if (navTabItemEl) {
            this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricTabComponent.prototype.addClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        this.renderer.addClass(element, name);
    };
    /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    FabricTabComponent.prototype.removeClass = /**
     * @private
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    function (element, name) {
        this.renderer.removeClass(element, name);
    };
    /**
     * @private
     * @return {?}
     */
    FabricTabComponent.prototype.calculateMenuWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.scrollActive) {
            this.tabMenuList
                .forEach((/**
             * @param {?} listItem
             * @return {?}
             */
            function (listItem) { return _this.menuListWidth += listItem.nativeElement.offsetWidth; }));
        }
    };
    FabricTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-tab',
                    template: "<div #tab>\n\n\t<div class=\"gui-tab-menu\">\n\n\t\t<div *ngIf=\"scrollActive\"\n\t\t\t (click)=\"scrollTabList(false)\"\n\t\t\t class=\"scroll-button\">\n\t\t\t<\n\t\t</div>\n\n\t\t<div class=\"gui-tab-menu-list\" >\n\t\t\t<div #tabMenuList\n\t\t\t\t*ngFor=\"let tab of menu\"\n\t\t\t\t[attr.data-tab]=\"tab\"\n\t\t\t\t(click)=\"toggleTab(tab)\"\n\t\t\t\tclass=\"gui-tab-menu-item\">\n\t\t\t\t{{tab}}\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"scrollActive\"\n\t\t\t (click)=\"scrollTabList(true)\"\n\t\t\t class=\"scroll-button\">\n\t\t\t>\n\t\t</div>\n\n\t</div>\n\n\t<div #tabitem\n\t\t class=\"gui-tab-content\">\n\t\t<ng-content></ng-content>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-tab]': 'true'
                    },
                    styles: [".gui-tab{font:14px Arial}.gui-tab .gui-tab-content{background:#fefdfc;border-radius:0 0 4px 4px;padding:12px;border:1px solid #d6d6d6}.gui-tab .gui-tab-menu{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.gui-tab .gui-tab-menu .gui-tab-menu-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden}.gui-tab .gui-tab-menu .gui-tab-menu-item{position:relative;cursor:pointer;display:inline-block;padding:8px 16px;text-align:center;border:1px solid transparent}.gui-tab .gui-tab-menu .scroll-button{color:#ccc;background:0 0;font-weight:700;padding:8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-tab .gui-tab-item{display:none}.gui-tab .gui-active.gui-tab-menu-item{background:#fefdfc;border-color:#d6d6d6 #d6d6d6 #fefdfc;border-style:solid;border-width:1px;border-radius:4px 4px 0 0}.gui-tab .gui-active.gui-tab-item{display:block}", ".gui-material .gui-tab{font:14px Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-tab{color:#bdbdbd}.gui-dark .gui-tab .gui-tab-content{background:#424242;border-color:#616161}.gui-dark .gui-tab .gui-tab-menu-item{border-color:transparent}.gui-dark .gui-tab .gui-active.gui-tab-menu-item{background:#424242;border-color:#616161 #616161 transparent}"]
                }] }
    ];
    /** @nocollapse */
    FabricTabComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    FabricTabComponent.propDecorators = {
        tabRef: [{ type: ViewChild, args: ['tab', { static: false },] }],
        tabItemRef: [{ type: ViewChild, args: ['tabitem', { static: false },] }],
        tabMenuList: [{ type: ViewChildren, args: ['tabMenuList',] }],
        menu: [{ type: Input }],
        active: [{ type: Input }],
        scrollActive: [{ type: Input }]
    };
    return FabricTabComponent;
}());
if (false) {
    /** @type {?} */
    FabricTabComponent.prototype.tabRef;
    /** @type {?} */
    FabricTabComponent.prototype.tabItemRef;
    /** @type {?} */
    FabricTabComponent.prototype.tabMenuList;
    /** @type {?} */
    FabricTabComponent.prototype.menu;
    /** @type {?} */
    FabricTabComponent.prototype.active;
    /** @type {?} */
    FabricTabComponent.prototype.scrollActive;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.listPosition;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.menuListWidth;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.scrollAmount;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.ACTIVE_TAB_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    FabricTabComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabItemComponent = /** @class */ (function () {
    function TabItemComponent() {
    }
    TabItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-tab-item',
                    template: "<div [attr.data-tab]=\"tab\"\n\t class=\"gui-tab-item\">\n\t<ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    TabItemComponent.propDecorators = {
        tab: [{ type: Input }]
    };
    return TabItemComponent;
}());
if (false) {
    /** @type {?} */
    TabItemComponent.prototype.tab;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricTabModule = /** @class */ (function () {
    function FabricTabModule() {
    }
    FabricTabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricTabComponent,
                        TabItemComponent
                    ],
                    exports: [
                        FabricTabComponent,
                        TabItemComponent
                    ]
                },] }
    ];
    return FabricTabModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricSelectComponent = /** @class */ (function () {
    function FabricSelectComponent(elementRef, renderer, changeDetectorRef) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.options = [];
        this.width = 100;
        this.disabled = false;
        this.optionChanged = new EventEmitter();
        this.initAnimationDisabled = true;
        this.open = false;
        this.SELECTED_OPTION_CLASS_NAME = 'gui-selected-option';
        this.onResize();
    }
    /**
     * @return {?}
     */
    FabricSelectComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.windowSize = window.innerHeight;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.placeholder) {
            this.selectedOption = this.placeholder;
        }
        else if (this.placeholder === undefined) {
            this.selectedOption = '...';
        }
        if (changes.selected) {
            this.tryToSelect(this.selected);
        }
    };
    /**
     * @return {?}
     */
    FabricSelectComponent.prototype.calculateDirection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var containerEl = this.containerRef.nativeElement;
        /** @type {?} */
        var containerHeight = containerEl.offsetHeight;
        /** @type {?} */
        var rectBottom = containerEl.getBoundingClientRect().bottom;
        /** @type {?} */
        var optionsHeight = containerHeight * this.options.length;
        /** @type {?} */
        var availableBottomSpace = this.windowSize - rectBottom - optionsHeight;
        /** @type {?} */
        var availableTopSpace = rectBottom - optionsHeight - containerHeight;
        this.canOpenUpward = availableTopSpace > 0;
        this.canOpenDownward = availableBottomSpace > 0;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.tryToOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerDisabled(event)) {
            event.stopPropagation();
        }
        else {
            this.toggleOptions(!this.open);
            this.initAnimationDisabled = false;
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.clickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isContainerClicked(event)) {
            this.toggleOptions(false);
        }
    };
    /**
     * @param {?} opened
     * @return {?}
     */
    FabricSelectComponent.prototype.toggleOptions = /**
     * @param {?} opened
     * @return {?}
     */
    function (opened) {
        this.open = opened;
        if (this.open) {
            this.openOptions();
        }
        else {
            this.closeOptions();
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.isOptionSelected = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option === this.selectedOption;
    };
    /**
     * @param {?} option
     * @param {?} optionIndex
     * @return {?}
     */
    FabricSelectComponent.prototype.onSelect = /**
     * @param {?} option
     * @param {?} optionIndex
     * @return {?}
     */
    function (option, optionIndex) {
        this.emitSelectedOption(option);
        this.selectedOption = option;
        this.removeSelectedOption();
        this.setSelectedOption(optionIndex);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.tryToSelect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (this.options.indexOf(option) !== -1) {
            this.selectedOption = option;
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    FabricSelectComponent.prototype.emitSelectedOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!this.isOptionSelected(option)) {
            this.optionChanged.emit(option);
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.openOptions = /**
     * @private
     * @return {?}
     */
    function () {
        this.calculateDirection();
        if (this.canOpenDownward || !this.canOpenUpward) {
            this.openDownward();
        }
        else {
            this.openUpward();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.openDownward = /**
     * @private
     * @return {?}
     */
    function () {
        this.addClass('gui-options-opened');
        this.addClass('gui-downward');
        this.removeClass('gui-upward');
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.openUpward = /**
     * @private
     * @return {?}
     */
    function () {
        this.addClass('gui-options-opened');
        this.addClass('gui-upward');
        this.removeClass('gui-downward');
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.closeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');
        if (optionsElHasOpenClass) {
            this.removeClass('gui-options-opened');
        }
        if (!optionsElHasOpenClass) {
            this.initAnimationDisabled = true;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.isContainerClicked = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return !this.elementRef.nativeElement.contains(event.target);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FabricSelectComponent.prototype.isContainerDisabled = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.target.classList.contains('gui-disabled');
    };
    /**
     * @private
     * @param {?} optionIndex
     * @return {?}
     */
    FabricSelectComponent.prototype.setSelectedOption = /**
     * @private
     * @param {?} optionIndex
     * @return {?}
     */
    function (optionIndex) {
        /** @type {?} */
        var optionEl = this.optionListRef.nativeElement.querySelector('[data-option-index="' + optionIndex, '"]');
        this.renderer.addClass(optionEl, this.SELECTED_OPTION_CLASS_NAME);
    };
    /**
     * @private
     * @return {?}
     */
    FabricSelectComponent.prototype.removeSelectedOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedOptionEl = this.optionListRef.nativeElement.querySelector('.' + this.SELECTED_OPTION_CLASS_NAME);
        if (selectedOptionEl) {
            this.renderer.removeClass(selectedOptionEl, this.SELECTED_OPTION_CLASS_NAME);
        }
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricSelectComponent.prototype.addClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    FabricSelectComponent.prototype.removeClass = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
    };
    FabricSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-select',
                    template: "<div #container\n\t (click)=\"tryToOpen($event)\"\n\t (document:click)=\"clickOutside($event)\"\n\t [style.width.px]=\"width\"\n\t [ngClass]=\"{'gui-disabled': disabled}\"\n\t class=\"gui-select-container\">\n\n\t<div class=\"gui-select-value\">\n\t\t{{selectedOption}}\n\t</div>\n\n\t<span class=\"gui-select-arrow\"></span>\n\n\t<div #optionlist\n\t\t [ngClass]=\"{initAnimationDisabled: initAnimationDisabled}\"\n\t\t class=\"gui-options\">\n\n\t\t<div *ngFor=\"let option of options; let optionIndex=index\"\n\t\t\t (click)=\"onSelect(option, optionIndex)\"\n\t\t\t [style.width.px]=\"width\"\n\t\t\t [class.gui-selected-option]=\"isOptionSelected(option)\"\n\t\t\t [attr.data-option-index]=\"optionIndex\"\n\t\t\t class=\"gui-option\">\n\t\t\t{{option}}\n\t\t</div>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-select]': 'true'
                    },
                    styles: [".gui-select .gui-select-container{box-sizing:content-box;background:#fefdfc;border-radius:4px;cursor:pointer;color:#333;display:inline-block;font:14px Arial;padding:8px 24px 8px 12px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d6d6d6}.gui-select .gui-select-container:hover{border-color:#999}.gui-select .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:#595959 transparent transparent;position:absolute;top:5px;right:5px;margin:8px;width:0;height:0}.gui-select .gui-select-container .gui-options{background:inherit;left:-1px;margin:8px 0 0;overflow:hidden;padding:0;position:absolute;z-index:2;-webkit-animation:.1s forwards close;animation:.1s forwards close}.gui-select .gui-select-container .gui-options .gui-option{box-sizing:content-box;padding:8px 24px 8px 12px;list-style-type:none}.gui-select .gui-select-container .gui-options .gui-option:hover{background:#dcdcdc}.gui-select.gui-options-opened .gui-select-container{border-color:#6fb4e8;border-radius:4px 4px 0 0}.gui-select.gui-options-opened .gui-options{-webkit-animation:.2s forwards load;animation:.2s forwards load}.gui-select.gui-downward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-downward .gui-option{border-style:solid;border-width:1px 0 0;border-color:#e6e6e6}.gui-select.gui-upward .gui-select-container{padding:8px 12px 8px 24px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-value{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select.gui-upward .gui-select-container .gui-select-arrow{border:4px solid transparent;border-color:transparent transparent #595959;top:auto;left:5px;bottom:5px}.gui-select.gui-upward .gui-options{border-color:#6fb4e8;border-style:solid;border-width:1px;border-top:none;border-radius:0 0 4px 4px}.gui-select.gui-upward .gui-option{border-style:solid;border-width:0 0 1px;border-color:#e6e6e6;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.gui-select .gui-selected-option{background:#e6e6e6;font-weight:700}.gui-select .gui-disabled{color:#ccc;pointer-events:none}.gui-select .gui-disabled .gui-select-arrow{border-color:#ccc transparent transparent}.gui-select .initAnimationDisabled.gui-options{display:none}@-webkit-keyframes load{0%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}100%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}}@keyframes load{0%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}100%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}}@-webkit-keyframes close{0%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}100%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}}@keyframes close{0%{-webkit-transform:translateY(0) scaleY(1);transform:translateY(0) scaleY(1)}100%{-webkit-transform:translateY(-50%) scaleY(0);transform:translateY(-50%) scaleY(0)}}", ".gui-material .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif}", ".gui-dark .gui-select .gui-select-container{background:#424242;border-color:#616161;color:#bdbdbd}.gui-dark .gui-select .gui-select-container:hover{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-select-arrow{border-color:#ce93d8 transparent transparent}.gui-dark .gui-select .gui-select-container .gui-options{border-color:#ce93d8}.gui-dark .gui-select .gui-select-container .gui-options .gui-option{border-color:#757575}.gui-dark .gui-select .gui-select-container .gui-options .gui-option:hover{background:#616161}.gui-dark .gui-select.gui-options-opened .gui-select-container{border-color:#ce93d8}.gui-dark .gui-select.gui-upward .gui-select-container .gui-select-arrow{border-color:transparent transparent #ce93d8}.gui-dark .gui-select .gui-selected-option{background:#757575}.gui-dark .gui-select .gui-disabled{opacity:.36}", ".gui-light .gui-select .gui-select-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;background:#fff;color:#333}.gui-light .gui-select .gui-select-container .gui-options .gui-option:hover{background:#f6f6f5}"]
                }] }
    ];
    /** @nocollapse */
    FabricSelectComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    FabricSelectComponent.propDecorators = {
        optionListRef: [{ type: ViewChild, args: ['optionlist', { static: false },] }],
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }],
        options: [{ type: Input }],
        placeholder: [{ type: Input }],
        selected: [{ type: Input }],
        width: [{ type: Input }],
        disabled: [{ type: Input }],
        optionChanged: [{ type: Output }]
    };
    return FabricSelectComponent;
}());
if (false) {
    /** @type {?} */
    FabricSelectComponent.prototype.optionListRef;
    /** @type {?} */
    FabricSelectComponent.prototype.containerRef;
    /** @type {?} */
    FabricSelectComponent.prototype.options;
    /** @type {?} */
    FabricSelectComponent.prototype.placeholder;
    /** @type {?} */
    FabricSelectComponent.prototype.selected;
    /** @type {?} */
    FabricSelectComponent.prototype.width;
    /** @type {?} */
    FabricSelectComponent.prototype.disabled;
    /** @type {?} */
    FabricSelectComponent.prototype.optionChanged;
    /** @type {?} */
    FabricSelectComponent.prototype.selectedOption;
    /** @type {?} */
    FabricSelectComponent.prototype.initAnimationDisabled;
    /** @type {?} */
    FabricSelectComponent.prototype.windowSize;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.canOpenDownward;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.canOpenUpward;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.open;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.SELECTED_OPTION_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FabricSelectComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricSelectModule = /** @class */ (function () {
    function FabricSelectModule() {
    }
    FabricSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricSelectComponent
                    ],
                    exports: [
                        FabricSelectComponent
                    ]
                },] }
    ];
    return FabricSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricSpinnerComponent = /** @class */ (function (_super) {
    __extends(FabricSpinnerComponent, _super);
    function FabricSpinnerComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    /**
     * @return {?}
     */
    FabricSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    FabricSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-spinner',
                    template: "<div\n\t[style.width.px]=\"circleSize\"\n\t[style.height.px]=\"circleSize\"\n\tclass=\"gui-spinner\">\n\t<svg\n\t\t[style.width.px]=\"circleSize\"\n\t\t[style.height.px]=\"circleSize\"\n\t\tclass=\"circle-outer\">\n\t\t<circle\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\t[attr.r]=\"r\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n\t<svg\n\t\t[style.width.px]=\"circleSize\"\n\t\t[style.height.px]=\"circleSize\"\n\t\tclass=\"circle-inner\">\n\t\t<circle\n\t\t\t[style.stroke-dashoffset]=\"circumference\"\n\t\t\t[style.stroke-dasharray]=\"croppedCircle\"\n\t\t\t[style.stroke-width]=\"width\"\n\t\t\t[style.stroke]=\"color\"\n\t\t\t[attr.r]=\"r\"\n\t\t\tcx=\"50%\"\n\t\t\tcy=\"50%\">\n\t\t</circle>\n\t</svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@-webkit-keyframes gui-spin{from{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes gui-spin{from{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}to{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@-webkit-keyframes gui-spin-reverse{from{-webkit-transform:rotate(-90deg) scale(.8);transform:rotate(-90deg) scale(.8)}to{-webkit-transform:rotate(270deg) scale(.8);transform:rotate(270deg) scale(.8)}}@keyframes gui-spin-reverse{from{-webkit-transform:rotate(-90deg) scale(.8);transform:rotate(-90deg) scale(.8)}to{-webkit-transform:rotate(270deg) scale(.8);transform:rotate(270deg) scale(.8)}}.gui-spinner{display:inline-block;position:relative;margin:4px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.gui-spinner circle{fill:transparent;stroke:#999}.gui-spinner svg{position:absolute}.gui-spinner .circle-inner{animation:2s linear infinite reverse forwards gui-spin-reverse}.gui-spinner .circle-outer{-webkit-animation:2s linear infinite forwards gui-spin;animation:2s linear infinite forwards gui-spin}.gui-primary .gui-spinner.gui-spinner circle{stroke:#2185d0}.gui-secondary .gui-spinner.gui-spinner circle{stroke:#3cb371}", ".gui-material .gui-spinner circle{stroke:#3949ab}.gui-material .gui-primary .gui-spinner circle{stroke:#6200ee}.gui-material .gui-secondary .gui-spinner circle{stroke:#0097a7}", ".gui-dark .gui-spinner circle{stroke:#424242}.gui-dark .gui-primary .gui-spinner circle{stroke:#ce93d8}.gui-dark .gui-secondary .gui-spinner circle{stroke:#80cbc4}"]
                }] }
    ];
    /** @nocollapse */
    FabricSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    FabricSpinnerComponent.propDecorators = {
        color: [{ type: Input }]
    };
    return FabricSpinnerComponent;
}(AbstractSpinner));
if (false) {
    /** @type {?} */
    FabricSpinnerComponent.prototype.color;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricSpinnerModule = /** @class */ (function () {
    function FabricSpinnerModule() {
    }
    FabricSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricSpinnerComponent
                    ],
                    exports: [
                        FabricSpinnerComponent
                    ]
                },] }
    ];
    return FabricSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleButtonGroupService = /** @class */ (function () {
    function ToggleButtonGroupService() {
        this.toggleButtonId$ = new Subject();
    }
    /**
     * @return {?}
     */
    ToggleButtonGroupService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.toggleButtonId$.next();
        this.toggleButtonId$.complete();
    };
    /**
     * @return {?}
     */
    ToggleButtonGroupService.prototype.observeToggledButton = /**
     * @return {?}
     */
    function () {
        return this.toggleButtonId$.asObservable();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ToggleButtonGroupService.prototype.toggleButton = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.toggleButtonId$.next(id);
    };
    ToggleButtonGroupService.decorators = [
        { type: Injectable }
    ];
    return ToggleButtonGroupService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleButtonGroupService.prototype.toggleButtonId$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricToggleButtonComponent = /** @class */ (function (_super) {
    __extends(FabricToggleButtonComponent, _super);
    function FabricToggleButtonComponent(elementRef, renderer, toggleButtonGroupService) {
        var _this = _super.call(this, elementRef, renderer) || this;
        _this.toggleButtonGroupService = toggleButtonGroupService;
        _this.checked = false;
        _this.disabled = false;
        _this.changed = new EventEmitter();
        _this.buttonChecked = false;
        _this.buttonId = Math.floor(Math.random() * 1000000);
        _this.generateButtonId();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.checked) {
            this.setButtonChecked(this.checked);
        }
        if (changes.disabled) {
            this.toggleDisabledCssClass();
        }
    };
    /**
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeToggleButtonGroup();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.tryToToggle = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.target.disabled) {
            e.stopPropagation();
        }
        else
            this.toggle();
    };
    /**
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.toggleButtonChecked();
        this.changed.emit(this.buttonChecked);
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.toggleButtonChecked = /**
     * @private
     * @return {?}
     */
    function () {
        this.setButtonChecked(!this.buttonChecked);
    };
    /**
     * @private
     * @param {?} checked
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.setButtonChecked = /**
     * @private
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.buttonChecked = checked;
        if (this.toggleButtonGroupService !== null) {
            this.toggleButtonGroupService.toggleButton(this.buttonId);
        }
        if (this.buttonChecked) {
            this.addClass('gui-checked');
        }
        else {
            this.removeClass('gui-checked');
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.observeToggleButtonGroup = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.toggleButtonGroupService !== null) {
            this.toggleButtonGroupService.observeToggledButton().subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                if (id != _this.buttonId) {
                    _this.buttonChecked = !_this.buttonChecked;
                    _this.removeClass('gui-checked');
                }
                else {
                    _this.buttonChecked = true;
                }
                _this.changed.emit(_this.buttonChecked);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.generateButtonId = /**
     * @private
     * @return {?}
     */
    function () {
        return this.buttonId;
    };
    /**
     * @private
     * @return {?}
     */
    FabricToggleButtonComponent.prototype.toggleDisabledCssClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this.addClass('gui-disabled');
        }
        else {
            this.removeClass('gui-disabled');
        }
    };
    FabricToggleButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-button-toggle',
                    template: "<button gui-button\n\t\t[primary]=\"primary\"\n\t\t[secondary]=\"secondary\"\n\t\t[outline]=\"outline\"\n\t\t[disabled]=\"disabled\"\n\t\t(click)=\"tryToToggle($event)\">\n\t<ng-content></ng-content>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-button-toggle]': 'true'
                    },
                    styles: [".gui-checked .gui-button{background:#e6e6e6;box-shadow:inset 0 10px 0 -5px #999;color:#333}.gui-checked .gui-button:hover{background:#ccc}.gui-checked .gui-button:active{background:#999}.gui-checked .gui-button.gui-outline{background:0 0;box-shadow:0 0 0 2px #d6d6d6}.gui-checked .gui-button.gui-outline.gui-primary{background:0 0;box-shadow:0 0 0 2px #439de1;color:#2185d0}.gui-checked .gui-button.gui-outline.gui-primary:hover{color:#fefdfc}.gui-checked .gui-button.gui-outline.gui-secondary{background:0 0;box-shadow:0 0 0 2px #5ac88b;color:#3cb371}.gui-checked .gui-button.gui-outline.gui-secondary:hover{color:#fefdfc}.gui-checked .gui-button.gui-primary{background:#2185d0;box-shadow:inset 0 10px 0 -5px #175b8e;color:#fefdfc}.gui-checked .gui-button.gui-secondary{background:#3cb371;box-shadow:inset 0 10px 0 -5px #2b8152;color:#fefdfc}.gui-disabled{pointer-events:none}", ".gui-material .gui-button{background:#3949ab;color:#fff}.gui-material .gui-checked .gui-button{background:#3949ab;box-shadow:inset 0 10px 0 -5px #7885d2;color:#fff}.gui-material .gui-checked .gui-button:hover{background:#5262c5}.gui-material .gui-checked .gui-button:active{background:#4051bf}.gui-material .gui-checked .gui-button.gui-outline{background:#c5cae9;box-shadow:0 0 0 1px #5262c5;color:#3949ab}.gui-material .gui-checked .gui-button.gui-outline.gui-primary{background:#d1c4e9;box-shadow:0 0 0 1px #6200ee;color:#6200ee}.gui-material .gui-checked .gui-button.gui-outline.gui-secondary{background:#b2ebf2;box-shadow:0 0 0 1px #0097a7;color:#0097a7}.gui-material .gui-checked .gui-button.gui-primary{background:#6200ee;box-shadow:inset 0 10px 0 -5px #d1c4e9;color:#fff}.gui-material .gui-checked .gui-button.gui-secondary{background:#0097a7;box-shadow:inset 0 10px 0 -5px #b2ebf2;color:#fff}", ".gui-dark .gui-button{background:#424242;color:#bdbdbd}.gui-dark .gui-checked .gui-button{color:#bdbdbd}.gui-dark .gui-checked .gui-button:hover{background:#616161}.gui-dark .gui-checked .gui-button:active{background:#212121}.gui-dark .gui-checked .gui-button.gui-outline{background:#2e2e2e;box-shadow:0 0 0 1px #616161;color:#bdbdbd}.gui-dark .gui-checked .gui-button.gui-outline.gui-primary{background:#b55bc4;box-shadow:0 0 0 1px #ce93d8;color:#212121}.gui-dark .gui-checked .gui-button.gui-outline.gui-secondary{background:#26a69a;box-shadow:0 0 0 1px #80cbc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-primary{background:#ce93d8;box-shadow:inset 0 10px 0 -5px #b55bc4;color:#212121}.gui-dark .gui-checked .gui-button.gui-secondary{background:#80cbc4;box-shadow:inset 0 10px 0 -5px #26a69a;color:#212121}"]
                }] }
    ];
    /** @nocollapse */
    FabricToggleButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ToggleButtonGroupService, decorators: [{ type: Optional }] }
    ]; };
    FabricToggleButtonComponent.propDecorators = {
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return FabricToggleButtonComponent;
}(Indicator));
if (false) {
    /** @type {?} */
    FabricToggleButtonComponent.prototype.checked;
    /** @type {?} */
    FabricToggleButtonComponent.prototype.disabled;
    /** @type {?} */
    FabricToggleButtonComponent.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    FabricToggleButtonComponent.prototype.buttonChecked;
    /**
     * @type {?}
     * @private
     */
    FabricToggleButtonComponent.prototype.buttonId;
    /**
     * @type {?}
     * @private
     */
    FabricToggleButtonComponent.prototype.toggleButtonGroupService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricToggleButtonModule = /** @class */ (function () {
    function FabricToggleButtonModule() {
    }
    FabricToggleButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricButtonModule
                    ],
                    declarations: [
                        FabricToggleButtonComponent
                    ],
                    exports: [
                        FabricToggleButtonComponent,
                        FabricButtonModule
                    ]
                },] }
    ];
    return FabricToggleButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricToggleButtonGroupComponent = /** @class */ (function () {
    function FabricToggleButtonGroupComponent() {
    }
    FabricToggleButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-toggle-button-group',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-toggle-button-group]': 'true'
                    },
                    providers: [ToggleButtonGroupService],
                    styles: [".gui-toggle-button-group{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gui-toggle-button-group .gui-button-toggle .gui-button{border-radius:0}.gui-toggle-button-group .gui-button-toggle:not(:last-child) .gui-button{border-right:none;margin:0}.gui-toggle-button-group .gui-button-toggle:last-child .gui-button{border-radius:0 4px 4px 0}.gui-toggle-button-group .gui-button-toggle:first-child .gui-button{border-radius:4px 0 0 4px}"]
                }] }
    ];
    return FabricToggleButtonGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabricToggleButtonGroupModule = /** @class */ (function () {
    function FabricToggleButtonGroupModule() {
    }
    FabricToggleButtonGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricToggleButtonGroupComponent
                    ],
                    exports: [
                        FabricToggleButtonGroupComponent
                    ]
                },] }
    ];
    return FabricToggleButtonGroupModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var elementResizeDetectorMaker = elementResizeDetectorMaker_;
var ResizeDetector = /** @class */ (function () {
    function ResizeDetector() {
        this.throttleTime = 25;
        this.unsubscribe$ = new Subject();
        this.elementResizeDetector = elementResizeDetectorMaker({
            strategy: 'scroll'
        });
    }
    /**
     * @param {?} element
     * @return {?}
     */
    ResizeDetector.prototype.observe = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        /** @type {?} */
        var producer = (/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.elementResizeDetector.listenTo(element, (/**
             * @param {?} htmlElement
             * @return {?}
             */
            function (htmlElement) {
                observer.next(htmlElement);
            }));
        });
        /** @type {?} */
        var source$ = new Observable(producer);
        return source$.pipe(throttleTime(this.throttleTime), filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f !== undefined; })), takeUntil(this.unsubscribe$));
    };
    /**
     * @param {?} element
     * @return {?}
     */
    ResizeDetector.prototype.destroy = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.elementResizeDetector.uninstall(element);
    };
    ResizeDetector.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ResizeDetector.ctorParameters = function () { return []; };
    return ResizeDetector;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.throttleTime;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.elementResizeDetector;
    /**
     * @type {?}
     * @private
     */
    ResizeDetector.prototype.unsubscribe$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResizeDetectorModule = /** @class */ (function () {
    function ResizeDetectorModule() {
    }
    ResizeDetectorModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        ResizeDetector
                    ]
                },] }
    ];
    return ResizeDetectorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var modules = [
    FabricBadgeModule,
    FabricButtonModule,
    FabricButtonGroupModule,
    FabricCardModule,
    FabricCheckboxModule,
    FabricChipModule,
    FabricDatePickerModule,
    FabricDropdownModule,
    FabricDialogModule,
    FabricInlineDialogModule,
    FabricRadioButtonModule,
    FabricRadioGroupModule,
    FabricTabModule,
    FabricProgressBarModule,
    FabricProgressSpinnerModule,
    FabricSelectModule,
    FabricSpinnerModule,
    FabricToggleButtonModule,
    FabricToggleButtonGroupModule,
    FabricInputModule,
    ResizeDetectorModule
];
var FabricModule = /** @class */ (function () {
    function FabricModule() {
    }
    FabricModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread([
                        CommonModule
                    ], modules),
                    exports: __spread(modules),
                    providers: []
                },] }
    ];
    return FabricModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FabricBadgeModule, FabricButtonComponent, FabricButtonGroupModule, FabricButtonModule, FabricCardModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDialogModule, FabricDialogService, FabricDropdownModule, FabricInputComponent, FabricInputModule, FabricModule, FabricProgressBarModule, FabricProgressSpinnerModule, FabricRadioButtonModule, FabricRadioGroupModule, FabricSelectModule, FabricSpinnerModule, FabricTabModule, FabricToggleButtonGroupModule, FabricToggleButtonModule, Placement, ResizeDetector, ResizeDetectorModule, SpinnerMode, FabricBadgeComponent as ɵa, Indicator as ɵb, FabricToggleButtonComponent as ɵba, ToggleButtonGroupService as ɵbb, FabricToggleButtonGroupComponent as ɵbc, FabricButtonGroupComponent as ɵc, FabricCardComponent as ɵd, FabricDatePickerModule as ɵe, FabricInlineDialogModule as ɵf, FabricInlineDialogComponent as ɵg, FabricInlineDialogService as ɵh, FabricDatePickerCalendarComponent as ɵi, FabricDatePickerService as ɵj, FabricDatePickerWeeks as ɵk, FabricDatePickerYears as ɵl, FabricDatePickerComponent as ɵm, FabricDropdownComponent as ɵn, GeometryService as ɵo, DropdownItemComponent as ɵp, FabricDialogComponent as ɵq, FabricRadioButtonComponent as ɵr, FabricRadioGroupComponent as ɵs, FabricTabComponent as ɵt, TabItemComponent as ɵu, FabricProgressBarComponent as ɵv, FabricProgressSpinnerComponent as ɵw, AbstractSpinner as ɵx, FabricSelectComponent as ɵy, FabricSpinnerComponent as ɵz };
//# sourceMappingURL=generic-ui-fabric.js.map
