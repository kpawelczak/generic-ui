import { __extends, __spread, __decorate, __metadata, __values, __assign } from 'tslib';
import { EventEmitter, Input, Output, InjectionToken, Injectable, Component, ViewEncapsulation, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, NgModule, Pipe, TemplateRef, ContentChild, Injector, ComponentFactoryResolver, RendererFactory2, Renderer2, NgZone, Optional } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FabricDialogService, FabricBadgeModule, FabricButtonModule, FabricButtonGroupModule, FabricCheckboxModule, FabricChipModule, FabricRadioButtonModule, FabricRadioGroupModule, FabricProgressBarModule, FabricProgressSpinnerModule, FabricSelectModule, FabricSpinnerModule, FabricToggleButtonModule, FabricInputModule, FabricDialogModule, FabricModule, FabricChipComponent, FabricCheckboxComponent, FabricButtonComponent, FabricInputComponent, ResizeDetector } from '@generic-ui/fabric';
import { AggregateId, Command, CommandDispatcher, AggregateEvent, Aggregate, InMemoryStore, AggregateStoreRegister, InMemoryAggregateStore, ReadModel, InMemoryReadModelStore, DomainEvent, DomainEventBus, DomainEventPublisher, CommandHandler, DomainEventHandler, COMMAND_HANDLERS, DOMAIN_EVENT_HANDLERS, ReactiveAggregateArchive, RandomStringGenerator, HermesModule, COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED } from '@generic-ui/hermes';
import { Subject, ReplaySubject, BehaviorSubject, fromEvent, Observable, zip, timer, combineLatest } from 'rxjs';
import { takeUntil, filter, map, take, distinctUntilChanged, debounceTime, skip, switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function GuiColumn() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumn.prototype.field;
    /** @type {?|undefined} */
    GuiColumn.prototype.type;
    /** @type {?|undefined} */
    GuiColumn.prototype.view;
    /** @type {?|undefined} */
    GuiColumn.prototype.header;
    /** @type {?|undefined} */
    GuiColumn.prototype.customTemplate;
    /** @type {?|undefined} */
    GuiColumn.prototype.width;
    /** @type {?|undefined} */
    GuiColumn.prototype.aggregation;
}
/** @enum {number} */
var GuiDataType = {
    UNKNOWN: 0,
    NUMBER: 1,
    STRING: 2,
    BOOLEAN: 3,
    DATE: 4,
    CUSTOM: 5,
};
GuiDataType[GuiDataType.UNKNOWN] = 'UNKNOWN';
GuiDataType[GuiDataType.NUMBER] = 'NUMBER';
GuiDataType[GuiDataType.STRING] = 'STRING';
GuiDataType[GuiDataType.BOOLEAN] = 'BOOLEAN';
GuiDataType[GuiDataType.DATE] = 'DATE';
GuiDataType[GuiDataType.CUSTOM] = 'CUSTOM';
/** @enum {number} */
var GuiCellView = {
    TEXT: 0,
    CHIP: 1,
    LINK: 2,
    IMAGE: 3,
    BOLD: 4,
    ITALIC: 5,
    CHECKBOX: 6,
    CUSTOM: 7,
};
GuiCellView[GuiCellView.TEXT] = 'TEXT';
GuiCellView[GuiCellView.CHIP] = 'CHIP';
GuiCellView[GuiCellView.LINK] = 'LINK';
GuiCellView[GuiCellView.IMAGE] = 'IMAGE';
GuiCellView[GuiCellView.BOLD] = 'BOLD';
GuiCellView[GuiCellView.ITALIC] = 'ITALIC';
GuiCellView[GuiCellView.CHECKBOX] = 'CHECKBOX';
GuiCellView[GuiCellView.CUSTOM] = 'CUSTOM';
/** @enum {number} */
var GuiNumberCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
GuiNumberCellView[GuiNumberCellView.TEXT] = 'TEXT';
GuiNumberCellView[GuiNumberCellView.BOLD] = 'BOLD';
GuiNumberCellView[GuiNumberCellView.ITALIC] = 'ITALIC';
GuiNumberCellView[GuiNumberCellView.CHIP] = 'CHIP';
/** @enum {number} */
var GuiStringCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
GuiStringCellView[GuiStringCellView.TEXT] = 'TEXT';
GuiStringCellView[GuiStringCellView.BOLD] = 'BOLD';
GuiStringCellView[GuiStringCellView.ITALIC] = 'ITALIC';
GuiStringCellView[GuiStringCellView.CHIP] = 'CHIP';
/** @enum {number} */
var GuiBooleanCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
    CHECKBOX: 4,
};
GuiBooleanCellView[GuiBooleanCellView.TEXT] = 'TEXT';
GuiBooleanCellView[GuiBooleanCellView.BOLD] = 'BOLD';
GuiBooleanCellView[GuiBooleanCellView.ITALIC] = 'ITALIC';
GuiBooleanCellView[GuiBooleanCellView.CHIP] = 'CHIP';
GuiBooleanCellView[GuiBooleanCellView.CHECKBOX] = 'CHECKBOX';
/** @enum {number} */
var GuiDateCellView = {
    TEXT: 0,
    BOLD: 1,
    ITALIC: 2,
    CHIP: 3,
};
GuiDateCellView[GuiDateCellView.TEXT] = 'TEXT';
GuiDateCellView[GuiDateCellView.BOLD] = 'BOLD';
GuiDateCellView[GuiDateCellView.ITALIC] = 'ITALIC';
GuiDateCellView[GuiDateCellView.CHIP] = 'CHIP';
/**
 * @record
 */
function GuiPagingConfig() { }
if (false) {
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.enabled;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.page;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pageSize;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pageSizes;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pagerTop;
    /** @type {?|undefined} */
    GuiPagingConfig.prototype.pagerBottom;
}
/** @enum {number} */
var GuiTheme = {
    FABRIC: 0,
    MATERIAL: 1,
    LIGHT: 2,
    DARK: 3,
};
GuiTheme[GuiTheme.FABRIC] = 'FABRIC';
GuiTheme[GuiTheme.MATERIAL] = 'MATERIAL';
GuiTheme[GuiTheme.LIGHT] = 'LIGHT';
GuiTheme[GuiTheme.DARK] = 'DARK';
/** @enum {number} */
var GuiRowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
GuiRowColoring[GuiRowColoring.NONE] = 'NONE';
GuiRowColoring[GuiRowColoring.EVEN] = 'EVEN';
GuiRowColoring[GuiRowColoring.ODD] = 'ODD';
/**
 * @record
 */
function GuiSorting() { }
if (false) {
    /** @type {?|undefined} */
    GuiSorting.prototype.enabled;
    /**
     * \@experimental
     * @type {?|undefined}
     */
    GuiSorting.prototype.multiSorting;
}
/**
 * @record
 */
function GuiFiltering() { }
if (false) {
    /** @type {?|undefined} */
    GuiFiltering.prototype.enabled;
}
/**
 * @record
 */
function GuiQuickFilters() { }
if (false) {
    /** @type {?|undefined} */
    GuiQuickFilters.prototype.enabled;
}
/**
 * @record
 */
function GuiSearching() { }
if (false) {
    /** @type {?|undefined} */
    GuiSearching.prototype.enabled;
}
/**
 * @record
 */
function GuiAggregation() { }
if (false) {
    /** @type {?|undefined} */
    GuiAggregation.prototype.enabled;
    /** @type {?|undefined} */
    GuiAggregation.prototype.top;
    /** @type {?|undefined} */
    GuiAggregation.prototype.bottom;
}
/**
 * @record
 */
function GuiColumnAggregation() { }
if (false) {
    /** @type {?|undefined} */
    GuiColumnAggregation.prototype.enabled;
    /** @type {?|undefined} */
    GuiColumnAggregation.prototype.aggregationTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var DataType = {
    UNKNOWN: 0,
    NUMBER: 1,
    STRING: 2,
    BOOLEAN: 3,
    DATE: 4,
    CUSTOM: 5,
};
DataType[DataType.UNKNOWN] = 'UNKNOWN';
DataType[DataType.NUMBER] = 'NUMBER';
DataType[DataType.STRING] = 'STRING';
DataType[DataType.BOOLEAN] = 'BOOLEAN';
DataType[DataType.DATE] = 'DATE';
DataType[DataType.CUSTOM] = 'CUSTOM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridColumnTypeConverter = /** @class */ (function () {
    function GridColumnTypeConverter() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    GridColumnTypeConverter.prototype.convertType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (typeof type === 'string') {
            return this.convertTypeString(type);
        }
        else {
            return this.convertTypeEnum(type);
        }
    };
    /**
     * @private
     * @param {?} enumType
     * @return {?}
     */
    GridColumnTypeConverter.prototype.convertTypeEnum = /**
     * @private
     * @param {?} enumType
     * @return {?}
     */
    function (enumType) {
        switch (enumType) {
            case GuiDataType.STRING:
                return DataType.STRING;
            case GuiDataType.NUMBER:
                return DataType.NUMBER;
            case GuiDataType.BOOLEAN:
                return DataType.BOOLEAN;
            case GuiDataType.DATE:
                return DataType.DATE;
            case GuiDataType.UNKNOWN:
                return DataType.UNKNOWN;
            case GuiDataType.CUSTOM:
                return DataType.CUSTOM;
            default:
                return DataType.STRING;
        }
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    GridColumnTypeConverter.prototype.convertTypeString = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var loweredType = type.toLocaleLowerCase();
        switch (loweredType) {
            case 'string':
                return DataType.STRING;
            case 'number':
                return DataType.NUMBER;
            case 'boolean':
                return DataType.BOOLEAN;
            case 'date':
                return DataType.DATE;
            case 'unknown':
                return DataType.UNKNOWN;
            case 'custom':
                return DataType.CUSTOM;
            default:
                return DataType.STRING;
        }
    };
    return GridColumnTypeConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var AggregationType = {
    COUNT: 1024,
    DISTINCT: 1,
    SUM: 2,
    AVERAGE: 4,
    MIN: 8,
    MAX: 16,
    MEDIAN: 32,
    TRUTHY: 64,
    FALSY: 128,
    EARLIEST: 256,
    LATEST: 512,
};
AggregationType[AggregationType.COUNT] = 'COUNT';
AggregationType[AggregationType.DISTINCT] = 'DISTINCT';
AggregationType[AggregationType.SUM] = 'SUM';
AggregationType[AggregationType.AVERAGE] = 'AVERAGE';
AggregationType[AggregationType.MIN] = 'MIN';
AggregationType[AggregationType.MAX] = 'MAX';
AggregationType[AggregationType.MEDIAN] = 'MEDIAN';
AggregationType[AggregationType.TRUTHY] = 'TRUTHY';
AggregationType[AggregationType.FALSY] = 'FALSY';
AggregationType[AggregationType.EARLIEST] = 'EARLIEST';
AggregationType[AggregationType.LATEST] = 'LATEST';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridColumnAggregationConverter = /** @class */ (function () {
    function GridColumnAggregationConverter() {
    }
    /**
     * @param {?} aggregationConfig
     * @return {?}
     */
    GridColumnAggregationConverter.prototype.convert = /**
     * @param {?} aggregationConfig
     * @return {?}
     */
    function (aggregationConfig) {
        /** @type {?} */
        var columnAggregationConfig = {};
        if (aggregationConfig.enabled !== undefined && aggregationConfig.enabled !== null) {
            columnAggregationConfig.enabled = aggregationConfig.enabled;
        }
        if (aggregationConfig.aggregationTypes !== undefined && aggregationConfig.aggregationTypes !== null) {
            columnAggregationConfig.aggregationTypes = this.convertAggregationTypes(aggregationConfig.aggregationTypes);
        }
        return columnAggregationConfig;
    };
    /**
     * @private
     * @param {?} configAggregationTypes
     * @return {?}
     */
    GridColumnAggregationConverter.prototype.convertAggregationTypes = /**
     * @private
     * @param {?} configAggregationTypes
     * @return {?}
     */
    function (configAggregationTypes) {
        var _this = this;
        /** @type {?} */
        var aggregationTypes = [];
        configAggregationTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /** @type {?} */
            var aggregationType = _this.convertAggregationType(type);
            if (aggregationType !== undefined && aggregationType !== null) {
                aggregationTypes.push(aggregationType);
            }
        }));
        return aggregationTypes;
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    GridColumnAggregationConverter.prototype.convertAggregationType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var loweredAggregationType = type.toLocaleLowerCase();
        switch (loweredAggregationType) {
            case 'count':
                return AggregationType.COUNT;
            case 'distinct':
                return AggregationType.DISTINCT;
            case 'sum':
                return AggregationType.SUM;
            case 'average':
                return AggregationType.AVERAGE;
            case 'min':
                return AggregationType.MIN;
            case 'max':
                return AggregationType.MAX;
            case 'median':
                return AggregationType.MEDIAN;
            case 'truthy':
                return AggregationType.TRUTHY;
            case 'falsy':
                return AggregationType.FALSY;
            case 'earliest':
                return AggregationType.EARLIEST;
            case 'latest':
                return AggregationType.LATEST;
            default:
                return null;
        }
    };
    return GridColumnAggregationConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var CellView = {
    TEXT: 0,
    CHIP: 1,
    LINK: 2,
    IMAGE: 3,
    BOLD: 4,
    ITALIC: 5,
    CHECKBOX: 6,
    CUSTOM: 7,
    FUNCTION: 8,
};
CellView[CellView.TEXT] = 'TEXT';
CellView[CellView.CHIP] = 'CHIP';
CellView[CellView.LINK] = 'LINK';
CellView[CellView.IMAGE] = 'IMAGE';
CellView[CellView.BOLD] = 'BOLD';
CellView[CellView.ITALIC] = 'ITALIC';
CellView[CellView.CHECKBOX] = 'CHECKBOX';
CellView[CellView.CUSTOM] = 'CUSTOM';
CellView[CellView.FUNCTION] = 'FUNCTION';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridColumnViewConverter = /** @class */ (function () {
    function GridColumnViewConverter() {
    }
    /**
     * @param {?} view
     * @return {?}
     */
    GridColumnViewConverter.prototype.convert = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (typeof view === 'string') {
            return this.convertString(view);
        }
        else if (typeof view === 'function') {
            return view;
        }
        else {
            return this.convertEnum(view);
        }
    };
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    GridColumnViewConverter.prototype.convertString = /**
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        /** @type {?} */
        var loweredView = view.toLocaleLowerCase();
        switch (loweredView) {
            case 'text':
                return CellView.TEXT;
            case 'chip':
                return CellView.CHIP;
            case 'link':
                return CellView.LINK;
            case 'image':
                return CellView.IMAGE;
            case 'bold':
                return CellView.BOLD;
            case 'italic':
                return CellView.ITALIC;
            case 'checkbox':
                return CellView.CHECKBOX;
            case 'custom':
                return CellView.CUSTOM;
            default:
                return CellView.TEXT;
        }
    };
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    GridColumnViewConverter.prototype.convertEnum = /**
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        switch (view) {
            case GuiCellView.TEXT:
                return CellView.TEXT;
            case GuiCellView.CHIP:
                return CellView.CHIP;
            case GuiCellView.LINK:
                return CellView.LINK;
            case GuiCellView.IMAGE:
                return CellView.IMAGE;
            case GuiCellView.BOLD:
                return CellView.BOLD;
            case GuiCellView.ITALIC:
                return CellView.ITALIC;
            case GuiCellView.CHECKBOX:
                return CellView.CHECKBOX;
            case GuiCellView.CUSTOM:
                return CellView.CUSTOM;
            default:
                return CellView.TEXT;
        }
    };
    return GridColumnViewConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridColumnConverter = /** @class */ (function () {
    function GridColumnConverter() {
        this.columnTypeConverter = new GridColumnTypeConverter();
        this.columnAggregationConverter = new GridColumnAggregationConverter();
        this.columnViewConverter = new GridColumnViewConverter();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GridColumnConverter.prototype.convert = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return config.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return _this.convertColumn(c); }));
    };
    /**
     * @private
     * @param {?} guiColumn
     * @return {?}
     */
    GridColumnConverter.prototype.convertColumn = /**
     * @private
     * @param {?} guiColumn
     * @return {?}
     */
    function (guiColumn) {
        /** @type {?} */
        var columnConfig = {};
        if (guiColumn.type !== undefined && guiColumn.type !== null) {
            columnConfig.type = this.columnTypeConverter.convertType(guiColumn.type);
        }
        if (guiColumn.header !== undefined && guiColumn.header !== null) {
            columnConfig.header = guiColumn.header;
        }
        if (guiColumn.field !== undefined && guiColumn.field !== null) {
            columnConfig.field = guiColumn.field;
        }
        if (guiColumn.width !== undefined && guiColumn.width !== null) {
            columnConfig.width = guiColumn.width;
        }
        if (guiColumn.view !== undefined && guiColumn.view !== null) {
            columnConfig.view = this.columnViewConverter.convert(guiColumn.view);
        }
        if (guiColumn.aggregation !== undefined && guiColumn.aggregation !== null) {
            columnConfig.aggregation = this.columnAggregationConverter.convert(guiColumn.aggregation);
        }
        return columnConfig;
    };
    return GridColumnConverter;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnTypeConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnAggregationConverter;
    /**
     * @type {?}
     * @private
     */
    GridColumnConverter.prototype.columnViewConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var SchemaTheme = {
    FABRIC: 0,
    MATERIAL: 1,
    LIGHT: 2,
    DARK: 3,
};
SchemaTheme[SchemaTheme.FABRIC] = 'FABRIC';
SchemaTheme[SchemaTheme.MATERIAL] = 'MATERIAL';
SchemaTheme[SchemaTheme.LIGHT] = 'LIGHT';
SchemaTheme[SchemaTheme.DARK] = 'DARK';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridThemeConverter = /** @class */ (function () {
    function GridThemeConverter() {
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    GridThemeConverter.prototype.convert = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        if (typeof theme === 'string') {
            return this.convertString(theme);
        }
        else {
            return this.convertEnum(theme);
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    GridThemeConverter.prototype.convertString = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        /** @type {?} */
        var loweredTheme = theme.toLocaleLowerCase();
        switch (loweredTheme) {
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    GridThemeConverter.prototype.convertEnum = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case GuiTheme.MATERIAL:
                return SchemaTheme.MATERIAL;
            case GuiTheme.FABRIC:
                return SchemaTheme.FABRIC;
            case GuiTheme.LIGHT:
                return SchemaTheme.LIGHT;
            case GuiTheme.DARK:
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    };
    return GridThemeConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var RowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
RowColoring[RowColoring.NONE] = 'NONE';
RowColoring[RowColoring.EVEN] = 'EVEN';
RowColoring[RowColoring.ODD] = 'ODD';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridRowColoringConverter = /** @class */ (function () {
    function GridRowColoringConverter() {
    }
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    GridRowColoringConverter.prototype.convert = /**
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
        if (typeof rowColoring === 'string') {
            return this.convertString(rowColoring);
        }
        else {
            return this.convertEnum(rowColoring);
        }
    };
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    GridRowColoringConverter.prototype.convertString = /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
        /** @type {?} */
        var loweredRowColoring = rowColoring.toLocaleLowerCase();
        switch (loweredRowColoring) {
            case 'none':
                return RowColoring.NONE;
            case 'even':
                return RowColoring.EVEN;
            case 'odd':
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    };
    /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    GridRowColoringConverter.prototype.convertEnum = /**
     * @private
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
        switch (rowColoring) {
            case GuiRowColoring.NONE:
                return RowColoring.NONE;
            case GuiRowColoring.EVEN:
                return RowColoring.EVEN;
            case GuiRowColoring.ODD:
                return RowColoring.ODD;
            default:
                return RowColoring.EVEN;
        }
    };
    return GridRowColoringConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var GridGateway = /** @class */ (function () {
    function GridGateway() {
        this.source = [];
        this.columns = [];
        /**
         * OUTPUTS
         */
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.itemsSelected = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
        // RowColoring;
        this.gridColumnConverter = new GridColumnConverter();
        this.gridThemeConverter = new GridThemeConverter();
        this.gridRowColoringConverter = new GridRowColoringConverter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    GridGateway.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            this.columnsConfig = this.gridColumnConverter.convert(this.columns);
        }
        if (changes.theme !== undefined && changes.theme.currentValue !== undefined) {
            this.themeConfig = this.gridThemeConverter.convert(this.theme);
        }
        if (changes.rowColoring !== undefined && changes.rowColoring.currentValue !== undefined) {
            this.rowColoringConfig = this.gridRowColoringConverter.convert(this.rowColoring);
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    GridGateway.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    GridGateway.prototype.onPageSizeChange = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(pageSize);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridGateway.prototype.onItemSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemsSelected.emit(item);
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onColumnsChange = /**
     * @return {?}
     */
    function () {
        this.columnsChanged.emit();
    };
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    GridGateway.prototype.onContainerWidthChange = /**
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        this.containerWidthChanged.emit(containerWidth);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridGateway.prototype.onSourceEdit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.sourceEdited.emit(value);
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onCellEditEnter = /**
     * @return {?}
     */
    function () {
        this.cellEditEntered.emit();
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onCellEditSubmit = /**
     * @return {?}
     */
    function () {
        this.cellEditSubmitted.emit();
    };
    /**
     * @return {?}
     */
    GridGateway.prototype.onCellEditCancel = /**
     * @return {?}
     */
    function () {
        this.cellEditCanceled.emit();
    };
    GridGateway.propDecorators = {
        columnHeaderTop: [{ type: Input }],
        columnHeaderBottom: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        autoResizeWidth: [{ type: Input }],
        source: [{ type: Input }],
        columns: [{ type: Input }],
        paging: [{ type: Input }],
        verticalGrid: [{ type: Input }],
        horizontalGrid: [{ type: Input }],
        theme: [{ type: Input }],
        rowColoring: [{ type: Input }],
        loading: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        sorting: [{ type: Input }],
        filtering: [{ type: Input }],
        quickFilters: [{ type: Input }],
        searching: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }],
        summaryPanel: [{ type: Input }],
        aggregation: [{ type: Input }],
        pageChanged: [{ type: Output }],
        pageSizeChanged: [{ type: Output }],
        itemsSelected: [{ type: Output }],
        columnsChanged: [{ type: Output }],
        containerWidthChanged: [{ type: Output }],
        sourceEdited: [{ type: Output }],
        cellEditEntered: [{ type: Output }],
        cellEditCanceled: [{ type: Output }],
        cellEditSubmitted: [{ type: Output }]
    };
    return GridGateway;
}());
if (false) {
    /**
     * INPUTS
     * @type {?}
     */
    GridGateway.prototype.columnHeaderTop;
    /** @type {?} */
    GridGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    GridGateway.prototype.height;
    /** @type {?} */
    GridGateway.prototype.width;
    /** @type {?} */
    GridGateway.prototype.autoResizeWidth;
    /** @type {?} */
    GridGateway.prototype.source;
    /** @type {?} */
    GridGateway.prototype.columns;
    /** @type {?} */
    GridGateway.prototype.paging;
    /** @type {?} */
    GridGateway.prototype.verticalGrid;
    /** @type {?} */
    GridGateway.prototype.horizontalGrid;
    /** @type {?} */
    GridGateway.prototype.theme;
    /** @type {?} */
    GridGateway.prototype.rowColoring;
    /** @type {?} */
    GridGateway.prototype.loading;
    /** @type {?} */
    GridGateway.prototype.virtualScroll;
    /** @type {?} */
    GridGateway.prototype.sorting;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.filtering;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.quickFilters;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.searching;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.editMode;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.cellEditing;
    /** @type {?} */
    GridGateway.prototype.summaryPanel;
    /**
     * \@experimental
     * @type {?}
     */
    GridGateway.prototype.aggregation;
    /**
     * OUTPUTS
     * @type {?}
     */
    GridGateway.prototype.pageChanged;
    /** @type {?} */
    GridGateway.prototype.pageSizeChanged;
    /** @type {?} */
    GridGateway.prototype.itemsSelected;
    /** @type {?} */
    GridGateway.prototype.columnsChanged;
    /** @type {?} */
    GridGateway.prototype.containerWidthChanged;
    /** @type {?} */
    GridGateway.prototype.sourceEdited;
    /** @type {?} */
    GridGateway.prototype.cellEditEntered;
    /** @type {?} */
    GridGateway.prototype.cellEditCanceled;
    /** @type {?} */
    GridGateway.prototype.cellEditSubmitted;
    /**
     * \@internal
     * @type {?}
     */
    GridGateway.prototype.columnsConfig;
    /** @type {?} */
    GridGateway.prototype.themeConfig;
    /** @type {?} */
    GridGateway.prototype.rowColoringConfig;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridColumnConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridThemeConverter;
    /**
     * @type {?}
     * @private
     */
    GridGateway.prototype.gridRowColoringConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
GenericBuilder = /** @class */ (function () {
    function GenericBuilder() {
    }
    /**
     * @return {?}
     */
    GenericBuilder.prototype.build = /**
     * @return {?}
     */
    function () {
        return this.buildObject();
    };
    return GenericBuilder;
}());
if (false) {
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    GenericBuilder.prototype.buildObject = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructurePagingDefinitionBuilder = /** @class */ (function (_super) {
    __extends(StructurePagingDefinitionBuilder, _super);
    function StructurePagingDefinitionBuilder(enabled) {
        var _this = _super.call(this) || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    StructurePagingDefinitionBuilder.prototype.buildObject = /**
     * @protected
     * @return {?}
     */
    function () {
        return new StructurePagingDefinition(this.enabled);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructurePagingDefinitionBuilder.prototype.withEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
        return this;
    };
    return StructurePagingDefinitionBuilder;
}(GenericBuilder));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionBuilder.prototype.enabled;
}
var StructurePagingDefinitionDefaultBuilder = /** @class */ (function (_super) {
    __extends(StructurePagingDefinitionDefaultBuilder, _super);
    function StructurePagingDefinitionDefaultBuilder() {
        return _super.call(this, StructurePagingDefinitionDefaultBuilder.defaultEnabled) || this;
    }
    StructurePagingDefinitionDefaultBuilder.defaultEnabled = true;
    return StructurePagingDefinitionDefaultBuilder;
}(StructurePagingDefinitionBuilder));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionDefaultBuilder.defaultEnabled;
}
var StructurePagingDefinition = /** @class */ (function () {
    function StructurePagingDefinition(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    StructurePagingDefinition.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    StructurePagingDefinition.Builder = StructurePagingDefinitionBuilder;
    StructurePagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
    return StructurePagingDefinition;
}());
if (false) {
    /** @type {?} */
    StructurePagingDefinition.Builder;
    /** @type {?} */
    StructurePagingDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinition.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureDefinitionBuilder = /** @class */ (function (_super) {
    __extends(StructureDefinitionBuilder, _super);
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
    __extends(StructureDefinitionDefaultBuilder, _super);
    function StructureDefinitionDefaultBuilder() {
        return _super.call(this, StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging) || this;
    }
    StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
    StructureDefinitionDefaultBuilder.defaultBottomPaging = new StructurePagingDefinition.DefaultBuilder().build();
    StructureDefinitionDefaultBuilder.defaultTopPaging = new StructurePagingDefinition.DefaultBuilder().build();
    return StructureDefinitionDefaultBuilder;
}(StructureDefinitionBuilder));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @type {?}
 */
var gridStructureDefinition = new StructureDefinition.DefaultBuilder().build();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var gridProviders = (/** @type {?} */ ([{
        provide: StructureDefinition,
        useValue: gridStructureDefinition
    }]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var structureParentComponent = new InjectionToken('StructureParentComponent');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridIdGenerator = /** @class */ (function () {
    function GridIdGenerator() {
    }
    /**
     * @return {?}
     */
    GridIdGenerator.prototype.generateId = /**
     * @return {?}
     */
    function () {
        GridIdGenerator.index++;
        return GridIdGenerator.PREFIX + GridIdGenerator.index;
    };
    GridIdGenerator.PREFIX = 'gui-grid-';
    GridIdGenerator.index = 0;
    GridIdGenerator.decorators = [
        { type: Injectable }
    ];
    return GridIdGenerator;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.PREFIX;
    /**
     * @type {?}
     * @private
     */
    GridIdGenerator.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridRegister = /** @class */ (function () {
    function GridRegister() {
        this.gridMap = new Map();
    }
    // structureId: StructureId
    // structureId: StructureId
    /**
     * @param {?} gridId
     * @param {?} component
     * @param {?} structureId
     * @return {?}
     */
    GridRegister.prototype.register = 
    // structureId: StructureId
    /**
     * @param {?} gridId
     * @param {?} component
     * @param {?} structureId
     * @return {?}
     */
    function (gridId, component, structureId) {
        this.gridMap.set(gridId, { component: component, structureId: structureId });
    };
    /**
     * @param {?} gridId
     * @return {?}
     */
    GridRegister.prototype.unregister = /**
     * @param {?} gridId
     * @return {?}
     */
    function (gridId) {
        this.gridMap.delete(gridId);
    };
    /**
     * @param {?} gridId
     * @return {?}
     */
    GridRegister.prototype.getValues = /**
     * @param {?} gridId
     * @return {?}
     */
    function (gridId) {
        return this.gridMap.get(gridId);
    };
    GridRegister.decorators = [
        { type: Injectable }
    ];
    return GridRegister;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridRegister.prototype.gridMap;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function GridConsoleApi() { }
if (false) {
    /**
     * @param {?} enabled
     * @return {?}
     */
    GridConsoleApi.prototype.changeColumnHeaderTop = function (enabled) { };
}
var GridConsoleApiProvider = /** @class */ (function () {
    function GridConsoleApiProvider(gridComponent, structureId) {
        this.gridComponent = gridComponent;
        this.structureId = structureId;
    } // StructureId
    // StructureId
    /**
     * @return {?}
     */
    GridConsoleApiProvider.prototype.provide = 
    // StructureId
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.gridComponent;
        return {
            changeColumnHeaderTop: /**
             * @param {?} enabled
             * @return {?}
             */
            function (enabled) {
                component.columnHeaderTop = enabled;
                component.detectChanges();
            }
        };
    };
    return GridConsoleApiProvider;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridConsoleApiProvider.prototype.gridComponent;
    /**
     * @type {?}
     * @private
     */
    GridConsoleApiProvider.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var gridSelector = 'gui-grid';
var GridComponent = /** @class */ (function (_super) {
    __extends(GridComponent, _super);
    function GridComponent(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.gridRegister = gridRegister;
        _this.gridIdGenerator = gridIdGenerator;
        return _this;
    }
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (/**
             * @param {?} gridId
             * @return {?}
             */
            function (gridId) {
                /** @type {?} */
                var gridConsoleConfig = _this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return new GridConsoleApiProvider(gridConsoleConfig.component, gridConsoleConfig.structureId).provide();
                }
                else {
                    return undefined;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gridRegister.unregister(this.localGridId);
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.getGridId = /**
     * @return {?}
     */
    function () {
        return '';
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    GridComponent.prototype.exposeGridId = /**
     * @private
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.setAttribute('gui-grid-id', this.localGridId);
    };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: gridSelector,
                    template: "<gui-structure\n\t\t\t   [height]=\"height\"\n\t\t\t   [width]=\"width\"\n\t\t\t   [autoResizeWidth]=\"autoResizeWidth\"\n\t\t\t   [columns]=\"columnsConfig\"\n\t\t\t   [columnHeaderTop]=\"columnHeaderTop\"\n\t\t\t   [columnHeaderBottom]=\"columnHeaderBottom\"\n\t\t\t   [source]=\"source\"\n\t\t\t   [paging]=\"paging\"\n\t\t\t   [verticalGrid]=\"verticalGrid\"\n\t\t\t   [horizontalGrid]=\"horizontalGrid\"\n\t\t\t   [theme]=\"themeConfig\"\n\t\t\t   [rowColoring]=\"rowColoringConfig\"\n\t\t\t   [loading]=\"loading\"\n\t\t\t   [virtualScroll]=\"virtualScroll\"\n\t\t\t   [sorting]=\"sorting\"\n\t\t\t   [filtering]=\"filtering\"\n\t\t\t   [quickFilters]=\"quickFilters\"\n\t\t\t   [searching]=\"searching\"\n\t\t\t   [editMode]=\"editMode\"\n\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t   [summaryPanel]=\"summaryPanel\"\n\t\t\t   [aggregation]=\"aggregation\"\n\t\t\t   (pageChanged)=\"onPageChange($event)\"\n\t\t\t   (pageSizeChanged)=\"onPageSizeChange($event)\"\n\t\t\t   (itemsSelected)=\"onItemSelect($event)\"\n\t\t\t   (columnsChanged)=\"onColumnsChange()\"\n\t\t\t   (containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t\t\t   (sourceEdited)=\"onSourceEdit($event)\"\n\t\t\t   (cellEditEntered)=\"onCellEditEnter()\"\n\t\t\t   (cellEditSubmitted)=\"onCellEditSubmit()\"\n\t\t\t   (cellEditCanceled)=\"onCellEditCancel()\"\n\t\t\t   #structure >\n</gui-structure>\n",
                    providers: __spread(gridProviders, [
                        {
                            provide: structureParentComponent,
                            useExisting: GridComponent
                        }
                    ]),
                    host: {
                        '[class]': "\"" + gridSelector + "\"",
                        '[style.height]': 'height'
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-grid{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: GridRegister },
        { type: GridIdGenerator }
    ]; };
    GridComponent.propDecorators = {
        structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
        gridId: [{ type: Input }]
    };
    return GridComponent;
}(GridGateway));
if (false) {
    /** @type {?} */
    GridComponent.prototype.structureRef;
    /** @type {?} */
    GridComponent.prototype.gridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.localGridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridRegister;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridIdGenerator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureColumnConfigComponent = /** @class */ (function () {
    function StructureColumnConfigComponent() {
    }
    StructureColumnConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: '',
                    template: "\n\t\n\t\tCOLUMN CONFIG !!!\n\t\n\t"
                }] }
    ];
    return StructureColumnConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureColumnConfigService = /** @class */ (function () {
    function StructureColumnConfigService(dialogService) {
        this.dialogService = dialogService;
    }
    /**
     * @return {?}
     */
    StructureColumnConfigService.prototype.open = /**
     * @return {?}
     */
    function () {
        this.dialogService.open(StructureColumnConfigComponent);
    };
    /**
     * @return {?}
     */
    StructureColumnConfigService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogService.close();
    };
    StructureColumnConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureColumnConfigService.ctorParameters = function () { return [
        { type: FabricDialogService }
    ]; };
    return StructureColumnConfigService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigService.prototype.dialogService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fabricImports = [
    FabricBadgeModule,
    FabricButtonModule,
    FabricButtonGroupModule,
    FabricCheckboxModule,
    FabricChipModule,
    FabricRadioButtonModule,
    FabricRadioGroupModule,
    FabricProgressBarModule,
    FabricProgressSpinnerModule,
    FabricSelectModule,
    FabricSpinnerModule,
    FabricToggleButtonModule,
    FabricInputModule,
    FabricDialogModule
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
Reactive = /** @class */ (function () {
    function Reactive() {
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    Reactive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.unsubscribe = /**
     * @protected
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @protected
     * @return {?}
     */
    Reactive.prototype.takeUntil = /**
     * @protected
     * @return {?}
     */
    function () {
        return takeUntil(this.unsubscribe$);
    };
    return Reactive;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Reactive.prototype.unsubscribe$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
SmartComponent = /** @class */ (function (_super) {
    __extends(SmartComponent, _super);
    function SmartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SmartComponent;
}(Reactive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
StructureRepository = /** @class */ (function () {
    function StructureRepository() {
    }
    return StructureRepository;
}());
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureRepository.prototype.select = function (aggregateId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingRepository = /** @class */ (function () {
    function PagingRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingRepository.prototype.select = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getId().toString() === structureId.toString(); })), map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getPaging(); })));
    };
    PagingRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingRepository.ctorParameters = function () { return [
        { type: StructureRepository }
    ]; };
    return PagingRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureId = /** @class */ (function (_super) {
    __extends(StructureId, _super);
    function StructureId(id) {
        return _super.call(this, id) || this;
    }
    return StructureId;
}(AggregateId));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var globalStructureId = new StructureId('-1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingQueryService = /** @class */ (function () {
    function PagingQueryService(pagingRepository) {
        this.pagingRepository = pagingRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingQueryService.prototype.select = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.pagingRepository.select(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingQueryService.prototype.selectOne = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.select(structureId)
            .pipe(take(1));
    };
    PagingQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingQueryService.ctorParameters = function () { return [
        { type: PagingRepository }
    ]; };
    return PagingQueryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingQueryService.prototype.pagingRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetPagingCommand = /** @class */ (function (_super) {
    __extends(SetPagingCommand, _super);
    function SetPagingCommand(structureId, payload) {
        var _this = _super.call(this, structureId, 'SetPagingCommand') || this;
        _this.structureId = structureId;
        _this.payload = payload;
        return _this;
    }
    return SetPagingCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetPagingCommand.prototype.structureId;
    /** @type {?} */
    SetPagingCommand.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangePagesizeCommand = /** @class */ (function (_super) {
    __extends(ChangePagesizeCommand, _super);
    function ChangePagesizeCommand(structureId, pageSize) {
        var _this = _super.call(this, structureId, 'ChangePagesizeCommand') || this;
        _this.structureId = structureId;
        _this.pageSize = pageSize;
        return _this;
    }
    return ChangePagesizeCommand;
}(Command));
if (false) {
    /** @type {?} */
    ChangePagesizeCommand.prototype.structureId;
    /** @type {?} */
    ChangePagesizeCommand.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NextPageCommand = /** @class */ (function (_super) {
    __extends(NextPageCommand, _super);
    function NextPageCommand(structureId) {
        var _this = _super.call(this, structureId, 'NextPageCommand') || this;
        _this.structureId = structureId;
        return _this;
    }
    return NextPageCommand;
}(Command));
if (false) {
    /** @type {?} */
    NextPageCommand.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PrevPageCommand = /** @class */ (function (_super) {
    __extends(PrevPageCommand, _super);
    function PrevPageCommand(structureId) {
        var _this = _super.call(this, structureId, 'PrevPageCommand') || this;
        _this.structureId = structureId;
        return _this;
    }
    return PrevPageCommand;
}(Command));
if (false) {
    /** @type {?} */
    PrevPageCommand.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingDispatcher = /** @class */ (function () {
    function PagingDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} paging
     * @return {?}
     */
    PagingDispatcher.prototype.setPaging = /**
     * @param {?} structureId
     * @param {?} paging
     * @return {?}
     */
    function (structureId, paging) {
        this.commandDispatcher.dispatch(new SetPagingCommand(structureId, paging));
    };
    /**
     * @param {?} structureId
     * @param {?} pageSize
     * @return {?}
     */
    PagingDispatcher.prototype.changePageSize = /**
     * @param {?} structureId
     * @param {?} pageSize
     * @return {?}
     */
    function (structureId, pageSize) {
        this.commandDispatcher.dispatch(new ChangePagesizeCommand(structureId, pageSize));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDispatcher.prototype.nextPage = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new NextPageCommand(structureId));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingDispatcher.prototype.prevPage = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new PrevPageCommand(structureId));
    };
    PagingDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return PagingDispatcher;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingCommandService = /** @class */ (function () {
    function PagingCommandService(pagingDispatcher) {
        this.pagingDispatcher = pagingDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.enable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: true });
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.disable = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { enabled: false });
    };
    /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.setPaging = /**
     * @param {?} paging
     * @param {?=} structureId
     * @return {?}
     */
    function (paging, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, paging);
    };
    /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.changePageSize = /**
     * @param {?} pageSize
     * @param {?=} structureId
     * @return {?}
     */
    function (pageSize, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.changePageSize(structureId, pageSize);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.nextPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.nextPage(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.prevPage = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.prevPage(structureId);
    };
    /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    PagingCommandService.prototype.goToPage = /**
     * @param {?} pageNumber
     * @param {?} currentPage
     * @return {?}
     */
    function (pageNumber, currentPage) {
        if (currentPage < pageNumber) {
            while (currentPage !== pageNumber) {
                this.nextPage();
                currentPage += 1;
            }
        }
        else {
            while (currentPage !== pageNumber) {
                this.prevPage();
                currentPage -= 1;
            }
        }
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.changePagerTop = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { pagerTop: enabled });
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    PagingCommandService.prototype.changePagerBottom = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.pagingDispatcher.setPaging(structureId, { pagerBottom: enabled });
    };
    PagingCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingCommandService.ctorParameters = function () { return [
        { type: PagingDispatcher }
    ]; };
    return PagingCommandService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingCommandService.prototype.pagingDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSourceOriginRepository = /** @class */ (function () {
    function StructureSourceOriginRepository() {
        this.origin = new Map();
        this.origin$ = new ReplaySubject();
    }
    /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    StructureSourceOriginRepository.prototype.setOrigin = /**
     * @param {?} origin
     * @param {?} structureId
     * @return {?}
     */
    function (origin, structureId) {
        this.origin.set(structureId.toString(), origin);
        this.origin$.next(this.origin);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSourceOriginRepository.prototype.selectOrigin = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.origin$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    StructureSourceOriginRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSourceOriginRepository.ctorParameters = function () { return []; };
    return StructureSourceOriginRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    StructureSourceOriginRepository.prototype.origin$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceQueryService = /** @class */ (function () {
    function SourceQueryService(structureRepository, structureSourceOriginRepository) {
        this.structureRepository = structureRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.select = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.structureRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getEntities(); })), distinctUntilChanged((/**
         * @param {?} ents1
         * @param {?} ents2
         * @return {?}
         */
        function (ents1, ents2) {
            if (ents1.length !== ents2.length) {
                return false;
            }
            /** @type {?} */
            var flag = true;
            ents1.forEach((/**
             * @param {?} ent
             * @param {?} index
             * @return {?}
             */
            function (ent, index) {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            }));
            return flag;
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.selectOriginSize = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.structureSourceOriginRepository
            .selectOrigin(structureId)
            .pipe(map((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) { return origin.length; })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.selectOne = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.select(structureId)
            .pipe(take(1));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SourceQueryService.prototype.selectLoading = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.structureRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSource().isLoading(); })));
    };
    SourceQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceQueryService.ctorParameters = function () { return [
        { type: StructureRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    return SourceQueryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceQueryService.prototype.structureRepository;
    /**
     * @type {?}
     * @private
     */
    SourceQueryService.prototype.structureSourceOriginRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructurePagingComponent = /** @class */ (function (_super) {
    __extends(StructurePagingComponent, _super);
    function StructurePagingComponent(changeDetectorRef, pagingQueryService, pagingCommandService, sourceQueryService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.pagingQueryService = pagingQueryService;
        _this.pagingCommandService = pagingCommandService;
        _this.sourceQueryService = sourceQueryService;
        _this.alternativeDisplay = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructurePagingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pagingQueryService
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.paging = paging;
            _this.changeDetectorRef.detectChanges();
        }));
        this.sourceQueryService
            .selectOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.sourceSize = size;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    StructurePagingComponent.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pagingCommandService.changePageSize(pageSize);
    };
    /**
     * @return {?}
     */
    StructurePagingComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (!this.sourceSize) {
            return;
        }
        this.pagingCommandService.nextPage();
    };
    /**
     * @return {?}
     */
    StructurePagingComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.pagingCommandService.prevPage();
    };
    StructurePagingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-paging',
                    template: "<ng-container *ngIf=\"paging && !alternativeDisplay\">\n\n\t<gui-structure-paging-select\n\t\t[paging]=\"paging\"\n\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t</gui-structure-paging-select>\n\n\t<gui-structure-paging-stats\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\">\n\t</gui-structure-paging-stats>\n\n\t<gui-structure-paging-navigator\n\t\t[paging]=\"paging\"\n\t\t[sourceSize]=\"sourceSize\"\n\t\t(prevPageChanged)=\"prevPage()\"\n\t\t(nextPageChanged)=\"nextPage()\">\n\t</gui-structure-paging-navigator>\n\n</ng-container>\n\n<ng-container *ngIf=\"paging && alternativeDisplay\">\n\n\t\t<gui-structure-paging-select\n\t\t\t[paging]=\"paging\"\n\t\t\t(pageSizeChanged)=\"changePageSize($event)\">\n\t\t</gui-structure-paging-select>\n\n\t\t<gui-structure-alternative-paging-navigator\n\t\t\t[paging]=\"paging\"\n\t\t\t[sourceSize]=\"sourceSize\"\n\t\t\t(prevPageChanged)=\"prevPage()\"\n\t\t\t(nextPageChanged)=\"nextPage()\">\n\n\t\t\t<gui-structure-alternative-paging-pages\n\t\t\t\t[paging]=\"paging\"\n\t\t\t\t[sourceSize]=\"sourceSize\">\n\t\t\t</gui-structure-alternative-paging-pages>\n\n\t\t</gui-structure-alternative-paging-navigator>\n\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructurePagingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: PagingQueryService },
        { type: PagingCommandService },
        { type: SourceQueryService }
    ]; };
    return StructurePagingComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructurePagingComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingComponent.prototype.paging;
    /** @type {?} */
    StructurePagingComponent.prototype.alternativeDisplay;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingQueryService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.pagingCommandService;
    /**
     * @type {?}
     * @private
     */
    StructurePagingComponent.prototype.sourceQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Paging = /** @class */ (function () {
    function Paging(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
    }
    /**
     * @return {?}
     */
    Paging.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getPage = /**
     * @return {?}
     */
    function () {
        return this.page;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getPageSize = /**
     * @return {?}
     */
    function () {
        return this.pageSize;
    };
    /**
     * @return {?}
     */
    Paging.prototype.getPageSizes = /**
     * @return {?}
     */
    function () {
        return this.pageSizes;
    };
    /**
     * @return {?}
     */
    Paging.prototype.isPagerTop = /**
     * @return {?}
     */
    function () {
        return this.pagerTop;
    };
    /**
     * @return {?}
     */
    Paging.prototype.isPagerBottom = /**
     * @return {?}
     */
    function () {
        return this.pagerBottom;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    Paging.prototype.isNextPageDisabled = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        if (sourceSize === 0) {
            return true;
        }
        return this.page === Math.ceil(sourceSize / this.pageSize);
    };
    /**
     * @return {?}
     */
    Paging.prototype.isPrevPageDisabled = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    Paging.prototype.calculateStart = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    Paging.prototype.calculateEnd = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var lastItem = this.page * this.pageSize;
        if (sourceSize < lastItem) {
            return sourceSize;
        }
        return lastItem;
    };
    /**
     * @param {?} currentPage
     * @param {?} numberOfVisiblePages
     * @param {?} page
     * @return {?}
     */
    Paging.prototype.calculateVisiblePages = /**
     * @param {?} currentPage
     * @param {?} numberOfVisiblePages
     * @param {?} page
     * @return {?}
     */
    function (currentPage, numberOfVisiblePages, page) {
        return currentPage - numberOfVisiblePages < page && page < currentPage + numberOfVisiblePages;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    Paging.prototype.sample = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var sourceSize = source.length;
        /** @type {?} */
        var start = this.calculateStart(sourceSize);
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd(sourceSize));
    };
    return Paging;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.page;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    Paging.prototype.pagerBottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructurePagingNavigatorComponent = /** @class */ (function () {
    function StructurePagingNavigatorComponent() {
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.calculatePrev();
        this.calculateNext();
    };
    /**
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.prevPageChanged.emit();
    };
    /**
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.nextPageChanged.emit();
    };
    /**
     * @private
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.calculatePrev = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    };
    /**
     * @private
     * @return {?}
     */
    StructurePagingNavigatorComponent.prototype.calculateNext = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled(this.sourceSize);
    };
    StructurePagingNavigatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-paging-navigator',
                    template: "<gui-button-group>\n\t<button gui-button\n\t\t\t[disabled]=\"prevDisabled\"\n\t\t\t(click)=\"prevPage()\"\n\t\t\tclass=\"gui-structure-paging-navigator-prev\">\n\t\tPrev\n\t</button>\n\n\t<button gui-button\n\t\t\t[disabled]=\"nextDisabled\"\n\t\t\t(click)=\"nextPage()\"\n\t\t\tclass=\"gui-structure-paging-navigator-next\">\n\t\tNext\n\t</button>\n</gui-button-group>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    StructurePagingNavigatorComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }],
        nextPageChanged: [{ type: Output }],
        prevPageChanged: [{ type: Output }]
    };
    return StructurePagingNavigatorComponent;
}());
if (false) {
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    StructurePagingNavigatorComponent.prototype.nextDisabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructurePagingSelectComponent = /** @class */ (function () {
    function StructurePagingSelectComponent() {
        this.pageSizeChanged = new EventEmitter();
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    StructurePagingSelectComponent.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSizeChanged.emit(pageSize);
    };
    StructurePagingSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-paging-select',
                    template: "<span>Items per page:</span>\n<gui-select [options]=\"paging.getPageSizes()\"\n\t\t\t[selected]=\"paging.getPageSize()\"\n\t\t\t[width]=\"25\"\n\t\t\t(optionChanged)=\"changePageSize($event)\">\n</gui-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    StructurePagingSelectComponent.propDecorators = {
        paging: [{ type: Input }],
        pageSizeChanged: [{ type: Output }]
    };
    return StructurePagingSelectComponent;
}());
if (false) {
    /** @type {?} */
    StructurePagingSelectComponent.prototype.paging;
    /** @type {?} */
    StructurePagingSelectComponent.prototype.pageSizeChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructurePagingStatsComponent = /** @class */ (function () {
    function StructurePagingStatsComponent() {
        this.sourceSize = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructurePagingStatsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculate();
    };
    /**
     * @return {?}
     */
    StructurePagingStatsComponent.prototype.calculate = /**
     * @return {?}
     */
    function () {
        if (this.paging && this.sourceSize) {
            this.firstItemIndex = this.paging.calculateStart(this.sourceSize);
            this.lastItemIndex = this.paging.calculateEnd(this.sourceSize);
        }
    };
    /**
     * @return {?}
     */
    StructurePagingStatsComponent.prototype.isSourceNotEmpty = /**
     * @return {?}
     */
    function () {
        return this.sourceSize > 0;
    };
    StructurePagingStatsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-paging-stats',
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\t<span class=\"gui-structure-paging-source-stats\">\n\t\t<span>{{firstItemIndex}}</span>\n\t\t-\n\t\t<span>{{lastItemIndex}}</span>\n\t</span>\n\t<span>\n\t\tof\n\t</span>\n\t<span class=\"gui-structure-paging-source-size\">\n\t\t{{sourceSize}}\n\t</span>\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-structure-paging-source-stats gui-structure-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    StructurePagingStatsComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }]
    };
    return StructurePagingStatsComponent;
}());
if (false) {
    /** @type {?} */
    StructurePagingStatsComponent.prototype.paging;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.sourceSize;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.firstItemIndex;
    /** @type {?} */
    StructurePagingStatsComponent.prototype.lastItemIndex;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAlternativePagingNavigatorComponent = /** @class */ (function () {
    function StructureAlternativePagingNavigatorComponent(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.nextPageChanged = new EventEmitter();
        this.prevPageChanged = new EventEmitter();
        this.prevDisabled = false;
        this.nextDisabled = false;
    }
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.calculatePrev();
        this.calculateNext();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.prevPageChanged.emit();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.nextPageChanged.emit();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        this.pagingCommandService.goToPage(1, this.paging.getPage());
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.lastPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
        this.pagingCommandService.goToPage(numberOfPages, this.paging.getPage());
    };
    /**
     * @private
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.calculatePrev = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging) {
            return;
        }
        this.prevDisabled = this.paging.isPrevPageDisabled();
    };
    /**
     * @private
     * @return {?}
     */
    StructureAlternativePagingNavigatorComponent.prototype.calculateNext = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.paging && !this.sourceSize) {
            return;
        }
        this.nextDisabled = this.paging.isNextPageDisabled(this.sourceSize);
    };
    StructureAlternativePagingNavigatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-alternative-paging-navigator',
                    template: "<button gui-button\n\t\t[disabled]=\"prevDisabled\"\n\t\t(click)=\"firstPage()\">\n\t<<\n</button>\n\n<button gui-button\n\t\t[disabled]=\"prevDisabled\"\n\t\t(click)=\"prevPage()\"\n\t\tclass=\"gui-structure-paging-navigator-prev\">\n\t< Prev\n</button>\n\n<ng-content></ng-content>\n\n<button gui-button\n\t\t[disabled]=\"nextDisabled\"\n\t\t(click)=\"nextPage()\"\n\t\tclass=\"gui-structure-paging-navigator-next\">\n\tNext >\n</button>\n\n<button gui-button\n\t\t[disabled]=\"nextDisabled\"\n\t\t(click)=\"lastPage()\">\n\t>>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureAlternativePagingNavigatorComponent.ctorParameters = function () { return [
        { type: PagingCommandService }
    ]; };
    StructureAlternativePagingNavigatorComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }],
        nextPageChanged: [{ type: Output }],
        prevPageChanged: [{ type: Output }]
    };
    return StructureAlternativePagingNavigatorComponent;
}());
if (false) {
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.paging;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.sourceSize;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.nextPageChanged;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.prevPageChanged;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.prevDisabled;
    /** @type {?} */
    StructureAlternativePagingNavigatorComponent.prototype.nextDisabled;
    /**
     * @type {?}
     * @private
     */
    StructureAlternativePagingNavigatorComponent.prototype.pagingCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAlternativePagingPagesComponent = /** @class */ (function () {
    function StructureAlternativePagingPagesComponent(pagingCommandService) {
        this.pagingCommandService = pagingCommandService;
        this.sourceSize = 0;
        this.numberOfVisiblePages = 3;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculate();
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.calculate = /**
     * @return {?}
     */
    function () {
        if (this.paging && this.sourceSize) {
            /** @type {?} */
            var numberOfPages = Math.ceil(this.sourceSize / this.paging.getPageSize());
            this.currentPage = this.paging.getPage();
            this.pages = [];
            if (this.pages.length <= numberOfPages) {
                for (var i = 1; i <= numberOfPages; i++) {
                    this.pages.push(i);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.isSourceNotEmpty = /**
     * @return {?}
     */
    function () {
        return this.sourceSize > 0;
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.goToPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        /** @type {?} */
        var currentPage = this.paging.getPage();
        this.pagingCommandService.goToPage(pageNumber, currentPage);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.calculateVisiblePages = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.paging.calculateVisiblePages(this.currentPage, this.numberOfVisiblePages, page);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    StructureAlternativePagingPagesComponent.prototype.activePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return this.currentPage === page;
    };
    StructureAlternativePagingPagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-alternative-paging-pages',
                    template: "<ng-container *ngIf=\"isSourceNotEmpty(); else noSource;\">\n\n\t\t<div *ngFor=\"let page of pages\">\n\t\t\t<div [class.gui-paging-visible-page]=\"calculateVisiblePages(page)\" >\n\t\t\t\t<div\n\t\t\t\t\t[class.gui-paging-active-page]=\"activePage(page)\"\n\t\t\t\t\t(click)=\"goToPage(page)\" class=\"gui-paging-page\">\n\t\t\t\t\t{{page}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n</ng-container>\n\n<ng-template #noSource>\n\t<span class=\"gui-structure-paging-source-stats gui-structure-paging-no-items\">\n\t\tThere is no items.\n\t</span>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StructureAlternativePagingPagesComponent.ctorParameters = function () { return [
        { type: PagingCommandService }
    ]; };
    StructureAlternativePagingPagesComponent.propDecorators = {
        paging: [{ type: Input }],
        sourceSize: [{ type: Input }]
    };
    return StructureAlternativePagingPagesComponent;
}());
if (false) {
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.paging;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.sourceSize;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.currentPage;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.pages;
    /** @type {?} */
    StructureAlternativePagingPagesComponent.prototype.numberOfVisiblePages;
    /**
     * @type {?}
     * @private
     */
    StructureAlternativePagingPagesComponent.prototype.pagingCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructurePagingModule = /** @class */ (function () {
    function StructurePagingModule() {
    }
    StructurePagingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule
                    ],
                    declarations: [
                        StructurePagingComponent,
                        StructurePagingNavigatorComponent,
                        StructurePagingSelectComponent,
                        StructurePagingStatsComponent,
                        StructureAlternativePagingNavigatorComponent,
                        StructureAlternativePagingPagesComponent
                    ],
                    exports: [
                        StructurePagingComponent,
                        StructurePagingNavigatorComponent,
                        StructurePagingSelectComponent,
                        StructurePagingStatsComponent,
                        StructureAlternativePagingNavigatorComponent,
                        StructureAlternativePagingPagesComponent
                    ]
                },] }
    ];
    return StructurePagingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberFormatterPipe = /** @class */ (function () {
    function NumberFormatterPipe() {
    }
    /**
     * @param {?} number
     * @return {?}
     */
    NumberFormatterPipe.prototype.transform = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };
    NumberFormatterPipe.decorators = [
        { type: Pipe, args: [{ name: 'numberFormatter' },] }
    ];
    return NumberFormatterPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberFormatterModule = /** @class */ (function () {
    function NumberFormatterModule() {
    }
    NumberFormatterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NumberFormatterPipe
                    ],
                    exports: [
                        NumberFormatterPipe
                    ]
                },] }
    ];
    return NumberFormatterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureInfoPanel = /** @class */ (function () {
    function StructureInfoPanel() {
    }
    StructureInfoPanel.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t<div class=\"gui-structure-info-panel\">\n\t\t\t<p>Generic UI Grid</p>\n\t\t\t<p>version 0.5.1</p>\n\n\t\t\t<p>Links:</p>\n\t\t\t<ul>\n\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"http://generic-ui.com/\">Website</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"http://generic-ui.com/guide/\">Documentation</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"https://github.com/generic-ui/generic-ui/tree/master/ngx-grid\">Github</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<p>Feedback:</p>\n\t\t\t<ul>\n\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"https://github.com/generic-ui/generic-ui/issues\">Report a bug</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"https://github.com/generic-ui/generic-ui/issues\">Suggest an idea</a>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return StructureInfoPanel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
ReactiveArchive = /** @class */ (function () {
    function ReactiveArchive(value) {
        if (value) {
            this.archive$ = new BehaviorSubject(value);
        }
        else {
            this.archive$ = new ReplaySubject(1);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ReactiveArchive.prototype.set = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.archive$.next(value);
    };
    /**
     * @return {?}
     */
    ReactiveArchive.prototype.select = /**
     * @return {?}
     */
    function () {
        return this.archive$.asObservable();
    };
    return ReactiveArchive;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReactiveArchive.prototype.archive$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSummaryEnabledArchive = /** @class */ (function (_super) {
    __extends(StructureSummaryEnabledArchive, _super);
    function StructureSummaryEnabledArchive() {
        return _super.call(this, false) || this;
    }
    StructureSummaryEnabledArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSummaryEnabledArchive.ctorParameters = function () { return []; };
    return StructureSummaryEnabledArchive;
}(ReactiveArchive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSummaryComponent = /** @class */ (function (_super) {
    __extends(StructureSummaryComponent, _super);
    function StructureSummaryComponent(structureSummaryEnabledArchive, sourceQueryService, dialog, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        _this.sourceQueryService = sourceQueryService;
        _this.dialog = dialog;
        _this.changeDetectorRef = changeDetectorRef;
        _this.infoPanel = StructureInfoPanel;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSummaryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sourceQueryService
            .selectOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.originSize = size;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureSummaryComponent.prototype.openInfo = /**
     * @return {?}
     */
    function () {
        this.dialog.open(this.infoPanel);
    };
    StructureSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-summary',
                    template: "\n\n\t\t<p>\n\t\t\tShowing <b>{{originSize | numberFormatter}}</b> items\n\t\t</p>\n\t\t<div>\n\t\t\t<p (click)=\"openInfo()\">\n\t\t\t\t<button>i</button>\n\t\t\t\tInfo\n\t\t\t</p>\n\t\t</div>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSummaryComponent.ctorParameters = function () { return [
        { type: StructureSummaryEnabledArchive },
        { type: SourceQueryService },
        { type: FabricDialogService },
        { type: ChangeDetectorRef }
    ]; };
    return StructureSummaryComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureSummaryComponent.prototype.originSize;
    /** @type {?} */
    StructureSummaryComponent.prototype.infoPanel;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.structureSummaryEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.sourceQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    StructureSummaryComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSummaryModule = /** @class */ (function () {
    function StructureSummaryModule() {
    }
    StructureSummaryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NumberFormatterModule
                    ],
                    declarations: [
                        StructureSummaryComponent,
                        StructureInfoPanel
                    ],
                    exports: [
                        StructureInfoPanel,
                        StructureSummaryComponent
                    ],
                    entryComponents: [
                        StructureInfoPanel
                    ]
                },] }
    ];
    return StructureSummaryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewTemplatesComponent = /** @class */ (function () {
    function ViewTemplatesComponent() {
    }
    /**
     * @param {?} view
     * @return {?}
     */
    ViewTemplatesComponent.prototype.getTemplate = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        switch (view) {
            case CellView.TEXT:
                return this.textTemplate;
            case CellView.CHIP:
                return this.chipTemplate;
            case CellView.LINK:
                return this.linkTemplate;
            case CellView.IMAGE:
                return this.imageTemplate;
            case CellView.CHECKBOX:
                return this.checkboxTemplate;
            case CellView.BOLD:
                return this.boldTemplate;
            case CellView.ITALIC:
                return this.italicTemplate;
            case CellView.CUSTOM:
                return this.customTemplate;
            case CellView.FUNCTION:
                return this.functionTemplate;
            default:
                return this.textTemplate;
        }
    };
    ViewTemplatesComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<ng-template #text let-element=\"element\">\n\t\t\t{{ element }}\n\t\t</ng-template>\n\n\t\t<ng-template #number let-element=\"element\">\n\t\t\t<span class=\"gui-cell-number\">\n\t\t\t\t{{ element }}\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #chip let-element=\"element\">\n\t\t\t<gui-chip>\n\t\t\t\t{{ element }}\n\t\t\t</gui-chip>\n\t\t</ng-template>\n\n\t\t<ng-template #link let-element=\"element\">\n\t\t\t<a gui-button link=\"true\" href=\"{{ element }}\">\n\t\t\t\t{{ element }}\n\t\t\t</a>\n\t\t</ng-template>\n\n\t\t<ng-template #image let-element=\"element\">\n\t\t\t<img src=\"{{ element }}\"/>\n\t\t</ng-template>\n\n\t\t<ng-template #checkbox let-element=\"element\">\n\t\t\t<span class=\"gui-cell-boolean\">\n\t\t\t\t<gui-checkbox [checked]=\"!!element\" [disabled]=\"true\"></gui-checkbox>\n\t\t\t</span>\n\t\t</ng-template>\n\n\t\t<ng-template #bold let-element=\"element\">\n\t\t\t<span class=\"gui-bold\">{{ element }}</span>\n\t\t</ng-template>\n\n\t\t<ng-template #italic let-element=\"element\">\n\t\t\t<span class=\"gui-italic\">{{ element }}</span>\n\t\t</ng-template>\n\n\t\t<ng-template #custom let-element=\"element\" >\n\t\t\t{{ element }}\n\t\t</ng-template>\n\n\t\t<ng-template #function let-element=\"element\" >\n\t\t\t<gui-function-view [element]=\"element\" ></gui-function-view>\n\t\t</ng-template>\n\n\t"
                }] }
    ];
    ViewTemplatesComponent.propDecorators = {
        textTemplate: [{ type: ViewChild, args: ['text', { read: TemplateRef, static: true },] }],
        numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
        chipTemplate: [{ type: ViewChild, args: ['chip', { read: TemplateRef, static: true },] }],
        linkTemplate: [{ type: ViewChild, args: ['link', { read: TemplateRef, static: true },] }],
        imageTemplate: [{ type: ViewChild, args: ['image', { read: TemplateRef, static: true },] }],
        checkboxTemplate: [{ type: ViewChild, args: ['checkbox', { read: TemplateRef, static: true },] }],
        boldTemplate: [{ type: ViewChild, args: ['bold', { read: TemplateRef, static: true },] }],
        italicTemplate: [{ type: ViewChild, args: ['italic', { read: TemplateRef, static: true },] }],
        customTemplate: [{ type: ViewChild, args: ['custom', { read: TemplateRef, static: true },] }],
        functionTemplate: [{ type: ViewChild, args: ['function', { read: TemplateRef, static: true },] }]
    };
    return ViewTemplatesComponent;
}());
if (false) {
    /** @type {?} */
    ViewTemplatesComponent.prototype.textTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.numberTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.chipTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.linkTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.imageTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.checkboxTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.boldTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.italicTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.customTemplate;
    /** @type {?} */
    ViewTemplatesComponent.prototype.functionTemplate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
ChangedValueEmitter = /** @class */ (function () {
    function ChangedValueEmitter() {
        this.subject$ = new ReplaySubject(1);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ChangedValueEmitter.prototype.emit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subject$.next(value);
    };
    /**
     * @return {?}
     */
    ChangedValueEmitter.prototype.select = /**
     * @return {?}
     */
    function () {
        return this.subject$.asObservable();
    };
    return ChangedValueEmitter;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangedValueEmitter.prototype.subject$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var EditEventType = {
    SUBMIT: 0,
    BLUR: 1,
    CANCEL: 2,
};
EditEventType[EditEventType.SUBMIT] = 'SUBMIT';
EditEventType[EditEventType.BLUR] = 'BLUR';
EditEventType[EditEventType.CANCEL] = 'CANCEL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var EditCommunicationComponent = /** @class */ (function (_super) {
    __extends(EditCommunicationComponent, _super);
    function EditCommunicationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ENTER_KEY_CODE = 13;
        _this.ESC_KEY_CODE = 27;
        return _this;
    }
    /**
     * @return {?}
     */
    EditCommunicationComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.emitStatus(EditEventType.SUBMIT);
    };
    /**
     * @return {?}
     */
    EditCommunicationComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.emitStatus(EditEventType.CANCEL);
    };
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    EditCommunicationComponent.prototype.emitStatus = /**
     * @private
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.status) {
            this.status.emit(status);
        }
    };
    EditCommunicationComponent.propDecorators = {
        value: [{ type: Input }],
        valueChanges: [{ type: Input }],
        status: [{ type: Input }],
        focus: [{ type: Input }]
    };
    return EditCommunicationComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    EditCommunicationComponent.prototype.value;
    /** @type {?} */
    EditCommunicationComponent.prototype.valueChanges;
    /** @type {?} */
    EditCommunicationComponent.prototype.status;
    /** @type {?} */
    EditCommunicationComponent.prototype.focus;
    /**
     * @type {?}
     * @protected
     */
    EditCommunicationComponent.prototype.ENTER_KEY_CODE;
    /**
     * @type {?}
     * @protected
     */
    EditCommunicationComponent.prototype.ESC_KEY_CODE;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var InputEditTemplateComponent = /** @class */ (function (_super) {
    __extends(InputEditTemplateComponent, _super);
    function InputEditTemplateComponent(formBuilder) {
        var _a;
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.filterFieldName = 'phrase';
        _this.filterForm = _this.formBuilder.group((_a = {},
            _a[_this.filterFieldName] = [''],
            _a));
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    InputEditTemplateComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value !== undefined) {
            this.filterForm.get(this.filterFieldName).setValue(this.value);
        }
    };
    /**
     * @return {?}
     */
    InputEditTemplateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeChanges();
    };
    /**
     * @return {?}
     */
    InputEditTemplateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var inputElement = this.inputRef.nativeElement;
        this.focusField(inputElement);
        this.emitValueChange(inputElement.value);
        fromEvent(inputElement, 'blur')
            .pipe(this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
        /** @type {?} */
        var keyup$ = fromEvent(inputElement, 'keyup');
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === _this.ENTER_KEY_CODE; })), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
        keyup$
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.keyCode === _this.ESC_KEY_CODE; })), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.cancel();
        }));
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    InputEditTemplateComponent.prototype.focusField = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        if (this.focus) {
            inputElement.focus();
        }
    };
    /**
     * @private
     * @return {?}
     */
    InputEditTemplateComponent.prototype.observeChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.filterForm
            .controls[this.filterFieldName]
            .valueChanges
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.emitValueChange(value);
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    InputEditTemplateComponent.prototype.emitValueChange = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.valueChanges) {
            this.valueChanges.emit(value);
        }
    };
    InputEditTemplateComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['input', { static: true },] }]
    };
    return InputEditTemplateComponent;
}(EditCommunicationComponent));
if (false) {
    /** @type {?} */
    InputEditTemplateComponent.prototype.inputRef;
    /** @type {?} */
    InputEditTemplateComponent.prototype.filterForm;
    /** @type {?} */
    InputEditTemplateComponent.prototype.filterFieldName;
    /**
     * @type {?}
     * @private
     */
    InputEditTemplateComponent.prototype.formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberEditTemplateComponent = /** @class */ (function (_super) {
    __extends(NumberEditTemplateComponent, _super);
    function NumberEditTemplateComponent(fb) {
        return _super.call(this, fb) || this;
    }
    NumberEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-number-edit',
                    template: "\n\n\t\t<form [formGroup]=\"filterForm\" >\n\t\t\t<input #input [formControlName]=\"filterFieldName\" type=\"number\" class=\"gui-input\" />\n\t\t</form>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NumberEditTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return NumberEditTemplateComponent;
}(InputEditTemplateComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Override decorator
 *
 * class Car {
 *     drive() {}
 * }
 *
 * class FastCar {
 * \@Override
 *     drive() {}}
 * }
 * @param {?} container
 * @param {?} key
 * @return {?}
 */
function Override(container, key) {
    /** @type {?} */
    var basePrototype = Object.getPrototypeOf(container);
    if (typeof basePrototype[key] !== 'function') {
        throw new Error('Method "' + key + '" of class "' + container.constructor.name + '" doesn\'t override any method of base class.');
    }
}
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringEditTemplateComponent = /** @class */ (function (_super) {
    __extends(StringEditTemplateComponent, _super);
    function StringEditTemplateComponent(fb) {
        return _super.call(this, fb) || this;
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    StringEditTemplateComponent.prototype.focusField = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        if (this.focus) {
            inputElement.focus();
            inputElement.setSelectionRange(0, inputElement.value.length);
        }
    };
    StringEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-string-edit',
                    template: "\n\n\t\t<form [formGroup]=\"filterForm\" >\n\t\t\t<input #input [formControlName]=\"filterFieldName\" type=\"type\" class=\"gui-input\" />\n\t\t</form>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StringEditTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StringEditTemplateComponent.prototype, "focusField", null);
    return StringEditTemplateComponent;
}(InputEditTemplateComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditTemplatesComponent = /** @class */ (function () {
    function EditTemplatesComponent() {
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    EditTemplatesComponent.prototype.getTemplate = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        switch (dataType) {
            case DataType.STRING:
                return this.stringTemplate;
            case DataType.NUMBER:
                return this.numberTemplate;
            case DataType.BOOLEAN:
                return this.booleanTemplate;
            default:
                return this.emptyTemplate;
        }
    };
    EditTemplatesComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\n\t\t<ng-template #string let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\" >\n\t\t\t<gui-string-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-string-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #number let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\" >\n\t\t\t<gui-number-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-number-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #boolean let-valueChanges=\"valueChanges\" let-value=\"value\" let-status=\"status\" let-focus=\"focus\" >\n\t\t\t<gui-boolean-edit [valueChanges]=\"valueChanges\" [value]=\"value\" [status]=\"status\" [focus]=\"focus\">\n\t\t\t</gui-boolean-edit>\n\t\t</ng-template>\n\n\t\t<ng-template #empty>\n\n\t\t</ng-template>\n\n\t"
                }] }
    ];
    EditTemplatesComponent.propDecorators = {
        stringTemplate: [{ type: ViewChild, args: ['string', { read: TemplateRef, static: true },] }],
        numberTemplate: [{ type: ViewChild, args: ['number', { read: TemplateRef, static: true },] }],
        booleanTemplate: [{ type: ViewChild, args: ['boolean', { read: TemplateRef, static: true },] }],
        emptyTemplate: [{ type: ViewChild, args: ['empty', { read: TemplateRef, static: true },] }]
    };
    return EditTemplatesComponent;
}());
if (false) {
    /** @type {?} */
    EditTemplatesComponent.prototype.stringTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.numberTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.booleanTemplate;
    /** @type {?} */
    EditTemplatesComponent.prototype.emptyTemplate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanEditTemplateComponent = /** @class */ (function (_super) {
    __extends(BooleanEditTemplateComponent, _super);
    function BooleanEditTemplateComponent() {
        var _this = _super.call(this) || this;
        _this.filterFieldName = 'booleanEdit';
        return _this;
    }
    /**
     * @return {?}
     */
    BooleanEditTemplateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var inputElement = this.checkboxRef.nativeElement.querySelector('input[type="checkbox"]');
        inputElement.focus();
        fromEvent(inputElement, 'blur')
            .pipe(debounceTime(400), this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.unsubscribe();
            _this.submit();
        }));
    };
    /**
     * @param {?} changed
     * @return {?}
     */
    BooleanEditTemplateComponent.prototype.toggle = /**
     * @param {?} changed
     * @return {?}
     */
    function (changed) {
        this.valueChanges.emit(changed);
    };
    BooleanEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-boolean-edit',
                    template: "\n\n\t\t<gui-checkbox #checkbox\n\t\t\t\t\t  [checked]=\"value\"\n\t\t\t\t\t  [name]=\"filterFieldName\"\n\t\t\t\t\t  (changed)=\"toggle($event)\"></gui-checkbox>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    BooleanEditTemplateComponent.ctorParameters = function () { return []; };
    BooleanEditTemplateComponent.propDecorators = {
        checkboxRef: [{ type: ViewChild, args: ['checkbox', { read: ElementRef, static: true },] }]
    };
    return BooleanEditTemplateComponent;
}(EditCommunicationComponent));
if (false) {
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.checkboxRef;
    /** @type {?} */
    BooleanEditTemplateComponent.prototype.filterFieldName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnQueryComponent = /** @class */ (function () {
    function ColumnQueryComponent() {
    }
    ColumnQueryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-column',
                    template: ''
                }] }
    ];
    ColumnQueryComponent.propDecorators = {
        cellTemplate: [{ type: ContentChild, args: [TemplateRef, { static: false },] }],
        header: [{ type: Input }]
    };
    return ColumnQueryComponent;
}());
if (false) {
    /** @type {?} */
    ColumnQueryComponent.prototype.cellTemplate;
    /** @type {?} */
    ColumnQueryComponent.prototype.headerTemplate;
    /** @type {?} */
    ColumnQueryComponent.prototype.header;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FunctionViewComponent = /** @class */ (function () {
    function FunctionViewComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    FunctionViewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.element);
    };
    FunctionViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-function-view',
                    template: "\n\n\t\t<div [innerHTML]=\"safeHTML\"></div>\n\n\t"
                }] }
    ];
    /** @nocollapse */
    FunctionViewComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    FunctionViewComponent.propDecorators = {
        element: [{ type: Input }]
    };
    return FunctionViewComponent;
}());
if (false) {
    /** @type {?} */
    FunctionViewComponent.prototype.element;
    /** @type {?} */
    FunctionViewComponent.prototype.safeHTML;
    /**
     * @type {?}
     * @private
     */
    FunctionViewComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColumnWidthType = {
    PERCENTAGE: 0,
    NUMBER: 1,
    AUTO: 2,
};
ColumnWidthType[ColumnWidthType.PERCENTAGE] = 'PERCENTAGE';
ColumnWidthType[ColumnWidthType.NUMBER] = 'NUMBER';
ColumnWidthType[ColumnWidthType.AUTO] = 'AUTO';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnWidth = /** @class */ (function () {
    function ColumnWidth(width) {
        this.baseWidth = width;
        this.setWidthAndType(width);
    }
    /**
     * @return {?}
     */
    ColumnWidth.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.getColumnType = /**
     * @return {?}
     */
    function () {
        return this.template;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.isTypePercentage = /**
     * @return {?}
     */
    function () {
        return this.template === ColumnWidthType.PERCENTAGE;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.isTypeAuto = /**
     * @return {?}
     */
    function () {
        return this.template === ColumnWidthType.AUTO;
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.isTypeNumber = /**
     * @return {?}
     */
    function () {
        return this.template === ColumnWidthType.NUMBER;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.width = width;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.setWidthAndType = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        if (width === undefined || width === null || width === 'auto') {
            this.template = ColumnWidthType.AUTO;
            this.setWidth(null);
        }
        else if (this.isPercentage(width)) {
            this.template = ColumnWidthType.PERCENTAGE;
            this.setWidth(this.percentageToNumber('' + width));
        }
        else if (this.isStringNumber(width)) {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
        else {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
    };
    /**
     * @return {?}
     */
    ColumnWidth.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new ColumnWidth(this.baseWidth);
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.isPercentage = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return typeof width === 'string' && width[width.length - 1] === '%';
    };
    /**
     * Width needs to be in format '89%'
     * @param width
     */
    /**
     * Width needs to be in format '89%'
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.percentageToNumber = /**
     * Width needs to be in format '89%'
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return +(width.slice(0, -1));
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidth.prototype.isStringNumber = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        /** @type {?} */
        var widthAsNumber = +width;
        return Number.isNaN(widthAsNumber);
    };
    return ColumnWidth;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.template;
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.baseWidth;
    /**
     * @type {?}
     * @private
     */
    ColumnWidth.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionContainerWidthCalculator = /** @class */ (function () {
    function CompositionContainerWidthCalculator(MIN_COLUMN_WIDTH) {
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
    }
    /**
     * @param {?} columnWidths
     * @return {?}
     */
    CompositionContainerWidthCalculator.prototype.calculateMinWidth = /**
     * @param {?} columnWidths
     * @return {?}
     */
    function (columnWidths) {
        var _a = this.segregateColumns(columnWidths), staticColumns = _a.staticColumns, fluidColumns = _a.fluidColumns;
        // TODO reduce
        /** @type {?} */
        var sum = 0;
        staticColumns.forEach((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            sum += c.getWidth();
        }));
        sum += fluidColumns.length * this.MIN_COLUMN_WIDTH;
        return sum;
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionContainerWidthCalculator.prototype.segregateColumns = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        /** @type {?} */
        var staticColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        function (columnWidth) { return columnWidth.isTypeNumber() && columnWidth.getWidth() > _this.MIN_COLUMN_WIDTH; }));
        /** @type {?} */
        var fluidColumns = columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        function (columnWidth) { return columnWidth.isTypeAuto() || columnWidth.isTypePercentage() || (columnWidth.isTypeNumber() && columnWidth.getWidth() <= _this.MIN_COLUMN_WIDTH); }));
        return {
            staticColumns: staticColumns,
            fluidColumns: fluidColumns
        };
    };
    return CompositionContainerWidthCalculator;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionContainerWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionWidthCalculator = /** @class */ (function () {
    function CompositionWidthCalculator(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.clone(); }));
    }
    /**
     * @return {?}
     */
    CompositionWidthCalculator.prototype.calculate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var width = this.width;
        /** @type {?} */
        var columns = __spread(this.columns);
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        /** @type {?} */
        var newColumns = [];
        columns.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
            if (column.isTypeNumber()) {
                width -= column.getWidth();
            }
            else {
                newColumns.push(column);
            }
        }));
        columns = newColumns;
        // split even auto columns
        if (columns.length !== 0) {
            /** @type {?} */
            var evenWidth_1 = width / columns.length;
            columns.forEach((/**
             * @param {?} column
             * @param {?} index
             * @return {?}
             */
            function (column, index) {
                column.setWidth(evenWidth_1);
            }));
        }
        // adjust number columns
        // let numberColumns = this.columns.filter((columnWidth: ColumnWidth) => columnWidth.isTypeNumber());
        //
        // // sort by min values
        // numberColumns.sort((columnOne: ColumnWidth, columnTwo: ColumnWidth) => {
        // 	return columnOne.getWidth() - columnTwo.getWidth();
        // });
        //
        // numberColumns.forEach(() => {
        // });
        // this.adjustMinimalWidth(ColumnWidthType.NUMBER);
        //
        // this.adjustPercentageWidth();
        //
        // this.adjustAutoWidth();
        return this.columns;
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionWidthCalculator.prototype.adjustMinimalWidth = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (column.isTypeNumber()) {
                if (column.getWidth() < _this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(_this.MIN_COLUMN_WIDTH);
                }
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CompositionWidthCalculator.prototype.adjustPercentageWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var percentageColumns = this.columns.filter((/**
         * @param {?} columnWidth
         * @return {?}
         */
        function (columnWidth) { return columnWidth.isTypePercentage(); }));
        try {
            for (var _b = __values(this.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                var column = _c.value;
                if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                    column.setWidth(this.width * column.getWidth() * 0.01);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    CompositionWidthCalculator.prototype.adjustAutoWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var leftWidth = this.width;
        /** @type {?} */
        var autoColumns = [];
        for (var i = 0; i < this.columns.length; i += 1) {
            /** @type {?} */
            var column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            /** @type {?} */
            var splitWidth = leftWidth / autoColumns.length;
            try {
                for (var autoColumns_1 = __values(autoColumns), autoColumns_1_1 = autoColumns_1.next(); !autoColumns_1_1.done; autoColumns_1_1 = autoColumns_1.next()) {
                    var column = autoColumns_1_1.value;
                    column.setWidth(splitWidth);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (autoColumns_1_1 && !autoColumns_1_1.done && (_a = autoColumns_1.return)) _a.call(autoColumns_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    return CompositionWidthCalculator;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.source;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CompositionWidthCalculator.prototype.MIN_COLUMN_WIDTH;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnWidthCollection = /** @class */ (function () {
    function ColumnWidthCollection(MIN_COLUMN_WIDTH, columns, width) {
        if (columns === void 0) { columns = []; }
        if (width === void 0) { width = 100; }
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.baseColumnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.columnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.setContainerWidth(width);
        this.calculate();
    }
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.baseColumnWidths;
    };
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getColumnsWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getWidths = /**
     * @return {?}
     */
    function () {
        return this.columnWidths.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.getWidth(); }));
    };
    /**
     * @return {?}
     */
    ColumnWidthCollection.prototype.getMinWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        return calculator.calculateMinWidth(this.columnWidths);
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ColumnWidthCollection.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.setContainerWidth(width);
        this.calculate();
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    ColumnWidthCollection.prototype.setColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.baseColumnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.columnWidths = columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return new ColumnWidth(column.width); }));
        this.calculate();
    };
    /**
     * @private
     * @return {?}
     */
    ColumnWidthCollection.prototype.calculate = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.baseColumnWidths && this.width) {
            /** @type {?} */
            var calculator = new CompositionWidthCalculator(this.baseColumnWidths, this.width, this.MIN_COLUMN_WIDTH);
            this.columnWidths = calculator.calculate();
        }
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnWidthCollection.prototype.setContainerWidth = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        if (this.getMinWidth() > width) {
            this.width = this.getMinWidth();
        }
        else {
            this.width = width;
        }
        this.calculate();
    };
    return ColumnWidthCollection;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.baseColumnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.columnWidths;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.width;
    /**
     * @type {?}
     * @private
     */
    ColumnWidthCollection.prototype.MIN_COLUMN_WIDTH;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var SortStatus = {
    ASC: 0,
    DESC: 1,
    NONE: 2,
};
SortStatus[SortStatus.ASC] = 'ASC';
SortStatus[SortStatus.DESC] = 'DESC';
SortStatus[SortStatus.NONE] = 'NONE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewEntity = /** @class */ (function () {
    function ViewEntity(columnView) {
        this.templateFunction = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; });
        if (typeof columnView === 'function') {
            this.view = CellView.FUNCTION;
            this.templateFunction = columnView;
        }
        else {
            this.view = columnView;
        }
    }
    /**
     * @return {?}
     */
    ViewEntity.prototype.getCellView = /**
     * @return {?}
     */
    function () {
        return this.view;
    };
    /**
     * @return {?}
     */
    ViewEntity.prototype.getTemplateFunction = /**
     * @return {?}
     */
    function () {
        return this.templateFunction;
    };
    return ViewEntity;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.view;
    /**
     * @type {?}
     * @private
     */
    ViewEntity.prototype.templateFunction;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnEntity = /** @class */ (function () {
    function ColumnEntity(columnField, header, view, width) {
        this.sortStatus = SortStatus.NONE;
        this.view = new ViewEntity(CellView.TEXT);
        this.columnField = columnField;
        if (header) {
            this.header = header;
        }
        if (view) {
            this.view = view;
        }
        if (width) {
            this.width = width;
        }
    }
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.columnField;
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getHeader = /**
     * @return {?}
     */
    function () {
        return this.header;
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.columnField.getDataType();
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getCellView = /**
     * @return {?}
     */
    function () {
        return this.view.getCellView();
    };
    /**
     * @return {?}
     */
    ColumnEntity.prototype.getTemplateFunction = /**
     * @return {?}
     */
    function () {
        return this.view.getTemplateFunction();
    };
    /**
     * @param {?} status
     * @return {?}
     */
    ColumnEntity.prototype.setSortStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.sortStatus = status;
    };
    /**
     * @param {?} view
     * @return {?}
     */
    ColumnEntity.prototype.setView = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        this.view = view;
    };
    return ColumnEntity;
}());
if (false) {
    /** @type {?} */
    ColumnEntity.prototype.columnId;
    /** @type {?} */
    ColumnEntity.prototype.columnField;
    /** @type {?} */
    ColumnEntity.prototype.header;
    /** @type {?} */
    ColumnEntity.prototype.sortStatus;
    /** @type {?} */
    ColumnEntity.prototype.width;
    /** @type {?} */
    ColumnEntity.prototype.sortable;
    /**
     * @type {?}
     * @private
     */
    ColumnEntity.prototype.view;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnEntityFactory = /** @class */ (function () {
    function ColumnEntityFactory() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ColumnEntityFactory.prototype.create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (Array.isArray(data)) {
            return this.createColumns(data);
        }
        else {
            return this.createColumn(data);
        }
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    ColumnEntityFactory.prototype.createColumn = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var column = params.getColumn();
        /** @type {?} */
        var field = params.getField();
        /** @type {?} */
        var columnEntity = new ColumnEntity(field);
        if (column.header !== undefined) {
            columnEntity.header = column.header;
        }
        if (column.view !== undefined) {
            columnEntity.setView(new ViewEntity(column.view));
        }
        if (column.width !== undefined) {
            columnEntity.width = this.convertWidth(column.width);
        }
        return columnEntity;
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    ColumnEntityFactory.prototype.createColumns = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        /** @type {?} */
        var columnEntities = (/** @type {?} */ ([]));
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            columnEntities.push(_this.createColumn(column));
        }));
        return columnEntities;
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    ColumnEntityFactory.prototype.convertWidth = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return +width;
    };
    ColumnEntityFactory.decorators = [
        { type: Injectable }
    ];
    return ColumnEntityFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnsSetAggregateEvent = /** @class */ (function (_super) {
    __extends(ColumnsSetAggregateEvent, _super);
    function ColumnsSetAggregateEvent(aggregateId, columns) {
        var _this = _super.call(this, aggregateId, 'ColumnsSetAggregateEvent') || this;
        _this.columns = columns;
        return _this;
    }
    return ColumnsSetAggregateEvent;
}(AggregateEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnsSetAggregateEvent.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionWidthSetAggregateEvent = /** @class */ (function (_super) {
    __extends(CompositionWidthSetAggregateEvent, _super);
    function CompositionWidthSetAggregateEvent(aggregateId) {
        return _super.call(this, aggregateId, 'CompositionWidthSetAggregateEvent') || this;
    }
    return CompositionWidthSetAggregateEvent;
}(AggregateEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionContainerWidthSetAggregateEvent = /** @class */ (function (_super) {
    __extends(CompositionContainerWidthSetAggregateEvent, _super);
    function CompositionContainerWidthSetAggregateEvent(compositionId, containerWidth) {
        var _this = _super.call(this, compositionId, 'CompositionContainerWidthSetAggregateEvent') || this;
        _this.containerWidth = containerWidth;
        return _this;
    }
    return CompositionContainerWidthSetAggregateEvent;
}(AggregateEvent));
if (false) {
    /** @type {?} */
    CompositionContainerWidthSetAggregateEvent.prototype.containerWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionResizeWidthSetAggregateEvent = /** @class */ (function (_super) {
    __extends(CompositionResizeWidthSetAggregateEvent, _super);
    function CompositionResizeWidthSetAggregateEvent(compositionId) {
        return _super.call(this, compositionId, 'CompositionResizeWidthSetAggregateEvent') || this;
    }
    return CompositionResizeWidthSetAggregateEvent;
}(AggregateEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionAggregate = /** @class */ (function (_super) {
    __extends(CompositionAggregate, _super);
    function CompositionAggregate(id, columnsParams, width, resizeWidth) {
        if (columnsParams === void 0) { columnsParams = []; }
        var _this = _super.call(this, id) || this;
        _this.MIN_COLUMN_WIDTH = 50;
        /**
         * Columns taken from user config.
         * This should not be modified and it should be used as a reference point.
         */
        _this.columnWidthCollection = new ColumnWidthCollection(_this.MIN_COLUMN_WIDTH);
        /**
         * Collection of columns which are used in the composition.
         */
        _this.activeColumns = [];
        _this.resizeWidthEnabled = true;
        /**
         * Autowired
         */
        _this.columnFactory = new ColumnEntityFactory();
        /** @type {?} */
        var columns = columnsParams.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        _this.baseParams = columnsParams;
        _this.baseColumns = columns;
        _this.width = width;
        _this.activeColumns = _this.columnFactory.create(columnsParams);
        _this.columnWidthCollection = new ColumnWidthCollection(_this.MIN_COLUMN_WIDTH, columns, width);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            _this.resizeWidthEnabled = resizeWidth;
        }
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.activeColumns;
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        if (this.resizeWidthEnabled) {
            return this.containerWidth;
        }
        else {
            return this.width;
        }
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isResizeEnabled = /**
     * @return {?}
     */
    function () {
        return this.resizeWidthEnabled;
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return !!this.getWidth() && this.activeColumns.length > 0;
    };
    /**
     * @return {?}
     */
    CompositionAggregate.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeColumns = __spread(this.activeColumns);
        /** @type {?} */
        var composition = new CompositionAggregate(this.getId(), this.baseParams, this.width, this.resizeWidthEnabled);
        composition.containerWidth = this.containerWidth;
        composition.activeColumns = activeColumns;
        composition.columnWidthCollection = this.columnWidthCollection;
        return composition;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    CompositionAggregate.prototype.setColumns = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var columns = params.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param.getColumn(); }));
        this.columnWidthCollection.setColumns(columns);
        /** @type {?} */
        var newColumns = this.columnFactory.create(params);
        /** @type {?} */
        var widths = this.columnWidthCollection.getWidths();
        this.updateColumnsWidths(newColumns, widths);
        this.setActiveColumnsWithEvent(newColumns);
    };
    /**
     * @param {?} containerWidth
     * @return {?}
     */
    CompositionAggregate.prototype.setContainerWidth = /**
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    };
    /**
     * @param {?} width
     * @return {?}
     */
    CompositionAggregate.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.setResizeWidthWithEvent(enabled);
    };
    // TODO Aggregate events
    // TODO Aggregate events
    /**
     * @param {?} sortParams
     * @return {?}
     */
    CompositionAggregate.prototype.changeSort = 
    // TODO Aggregate events
    /**
     * @param {?} sortParams
     * @return {?}
     */
    function (sortParams) {
        var e_1, _a;
        this.activeColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            column.setSortStatus(SortStatus.NONE);
        }));
        var _loop_1 = function (param) {
            /** @type {?} */
            var fieldId = param.fieldId;
            /** @type {?} */
            var direction = param.direction;
            /** @type {?} */
            var sortStatus = direction ? SortStatus.ASC : SortStatus.DESC;
            /** @type {?} */
            var columns = this_1.activeColumns.filter((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                return column.getField().getId().getId() === fieldId.getId();
            }));
            if (columns.length > 0) {
                columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    column.setSortStatus(sortStatus);
                }));
            }
        };
        var this_1 = this;
        try {
            for (var sortParams_1 = __values(sortParams), sortParams_1_1 = sortParams_1.next(); !sortParams_1_1.done; sortParams_1_1 = sortParams_1.next()) {
                var param = sortParams_1_1.value;
                _loop_1(param);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sortParams_1_1 && !sortParams_1_1.done && (_a = sortParams_1.return)) _a.call(sortParams_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    CompositionAggregate.prototype.recalculateColumns = /**
     * @private
     * @return {?}
     */
    function () {
        this.columnWidthCollection.setWidth(this.getWidth());
        /** @type {?} */
        var newColumns = __spread(this.activeColumns);
        /** @type {?} */
        var widths = this.columnWidthCollection.getWidths();
        this.updateColumnsWidths(newColumns, widths);
        this.setActiveColumnsWithEvent(newColumns);
    };
    /**
     * @private
     * @param {?} columns
     * @param {?} widths
     * @return {?}
     */
    CompositionAggregate.prototype.updateColumnsWidths = /**
     * @private
     * @param {?} columns
     * @param {?} widths
     * @return {?}
     */
    function (columns, widths) {
        columns.forEach((/**
         * @param {?} columnEntity
         * @param {?} index
         * @return {?}
         */
        function (columnEntity, index) {
            columnEntity.width = widths[index];
        }));
    };
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    CompositionAggregate.prototype.setActiveColumnsWithEvent = /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.activeColumns = columns;
        this.addEvent(new ColumnsSetAggregateEvent(this.getId(), columns));
    };
    // TODO Refactor
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    CompositionAggregate.prototype.setWidthWithEvent = 
    // TODO Refactor
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.columnWidthCollection.getColumns());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.addEvent(new CompositionWidthSetAggregateEvent(this.getId()));
    };
    // TODO Refactor
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    CompositionAggregate.prototype.setContainerWidthWithEvent = 
    // TODO Refactor
    /**
     * @private
     * @param {?} containerWidth
     * @return {?}
     */
    function (containerWidth) {
        /** @type {?} */
        var calculator = new CompositionContainerWidthCalculator(this.MIN_COLUMN_WIDTH);
        /** @type {?} */
        var minWidth = calculator.calculateMinWidth(this.columnWidthCollection.getColumns());
        if (minWidth > containerWidth) {
            this.containerWidth = minWidth;
        }
        else {
            this.containerWidth = containerWidth;
        }
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    };
    /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    CompositionAggregate.prototype.setResizeWidthWithEvent = /**
     * @private
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.resizeWidthEnabled = enabled;
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    };
    return CompositionAggregate;
}(Aggregate));
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.MIN_COLUMN_WIDTH;
    /**
     * Columns taken from user config.
     * This should not be modified and it should be used as a reference point.
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnWidthCollection;
    /**
     * Collection of columns which are used in the composition.
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.activeColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseColumns;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.baseParams;
    /**
     * Value taken from user config [width]
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.width;
    /**
     * DOM element's width
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.containerWidth;
    /**
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.resizeWidthEnabled;
    /**
     * Autowired
     * @type {?}
     * @private
     */
    CompositionAggregate.prototype.columnFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryCompositionStore = /** @class */ (function (_super) {
    __extends(InMemoryCompositionStore, _super);
    function InMemoryCompositionStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InMemoryCompositionStore.decorators = [
        { type: Injectable }
    ];
    return InMemoryCompositionStore;
}(InMemoryStore));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryCompositionAggregateStore = /** @class */ (function (_super) {
    __extends(InMemoryCompositionAggregateStore, _super);
    function InMemoryCompositionAggregateStore(inMemoryCompositionStore, aggregateStoreRegister) {
        return _super.call(this, inMemoryCompositionStore, aggregateStoreRegister) || this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryCompositionAggregateStore.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var composition = _super.prototype.getById.call(this, aggregateId);
        if (composition) {
            return composition.clone();
        }
        else {
            return null;
        }
    };
    InMemoryCompositionAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionAggregateStore.ctorParameters = function () { return [
        { type: InMemoryCompositionStore },
        { type: AggregateStoreRegister }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [AggregateId]),
        __metadata("design:returntype", CompositionAggregate)
    ], InMemoryCompositionAggregateStore.prototype, "getById", null);
    return InMemoryCompositionAggregateStore;
}(InMemoryAggregateStore));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CompositionAggregateRepository = /** @class */ (function () {
    function CompositionAggregateRepository() {
    }
    return CompositionAggregateRepository;
}());
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionAggregateRepository.prototype.getById = function (compositionId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    CompositionAggregateRepository.prototype.save = function (aggregate) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryCompositionAggregateRepository = /** @class */ (function (_super) {
    __extends(InMemoryCompositionAggregateRepository, _super);
    function InMemoryCompositionAggregateRepository(inMemoryCompositionAggregateStore) {
        var _this = _super.call(this) || this;
        _this.inMemoryCompositionAggregateStore = inMemoryCompositionAggregateStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryCompositionAggregateRepository.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.inMemoryCompositionAggregateStore.getById(aggregateId);
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryCompositionAggregateRepository.prototype.save = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.inMemoryCompositionAggregateStore.save(aggregate);
    };
    InMemoryCompositionAggregateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionAggregateRepository.ctorParameters = function () { return [
        { type: InMemoryCompositionAggregateStore }
    ]; };
    return InMemoryCompositionAggregateRepository;
}(CompositionAggregateRepository));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionAggregateRepository.prototype.inMemoryCompositionAggregateStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
TemplateFactory = /** @class */ (function () {
    function TemplateFactory(templatesComponentDefinition, componentFactoryResolver) {
        this.templatesComponentDefinition = templatesComponentDefinition;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templates = new Map();
        this.templatesComponent = null;
        this.createTemplatesComponent();
    }
    /**
     * @return {?}
     */
    TemplateFactory.prototype.getTemplates = /**
     * @return {?}
     */
    function () {
        return this.templates;
    };
    /**
     * @return {?}
     */
    TemplateFactory.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.templatesComponent) {
            this.templatesComponent.destroy();
            this.templatesComponent = null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    TemplateFactory.prototype.createTemplatesComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.templatesComponentDefinition);
        /** @type {?} */
        var injector = Injector.create({ providers: [] });
        this.templatesComponent = componentFactory.create(injector);
        this.generateMap();
    };
    /**
     * @private
     * @return {?}
     */
    TemplateFactory.prototype.generateMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.generateMapKeys()
            .forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.findAndSetTemplate(type);
        }));
    };
    ;
    /**
     * @private
     * @param {?} dt
     * @return {?}
     */
    TemplateFactory.prototype.findAndSetTemplate = /**
     * @private
     * @param {?} dt
     * @return {?}
     */
    function (dt) {
        /** @type {?} */
        var template = this.templatesComponent.instance.getTemplate(dt);
        this.templates.set(dt, template);
    };
    return TemplateFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templates;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponent;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponentDefinition;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.componentFactoryResolver;
    /* Skipping unhandled member: ;*/
    /**
     * @abstract
     * @return {?}
     */
    TemplateFactory.prototype.generateMapKeys = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewTemplateFactory = /** @class */ (function (_super) {
    __extends(ViewTemplateFactory, _super);
    function ViewTemplateFactory(componentFactoryResolver) {
        return _super.call(this, ViewTemplatesComponent, componentFactoryResolver) || this;
    }
    /**
     * @return {?}
     */
    ViewTemplateFactory.prototype.generateMapKeys = /**
     * @return {?}
     */
    function () {
        return Object.keys(CellView)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return CellView[key]; }));
    };
    ViewTemplateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewTemplateFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return ViewTemplateFactory;
}(TemplateFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewTemplateRepository = /** @class */ (function () {
    function ViewTemplateRepository(columnTemplateFactory) {
        this.columnTemplateFactory = columnTemplateFactory;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    ViewTemplateRepository.prototype.findTemplate = /**
     * @param {?} view
     * @return {?}
     */
    function (view) {
        /** @type {?} */
        var typeToTemplate = this.columnTemplateFactory.getTemplates();
        return typeToTemplate.get(view);
    };
    ViewTemplateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewTemplateRepository.ctorParameters = function () { return [
        { type: ViewTemplateFactory }
    ]; };
    return ViewTemplateRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ViewTemplateRepository.prototype.columnTemplateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditTemplateFactory = /** @class */ (function (_super) {
    __extends(EditTemplateFactory, _super);
    function EditTemplateFactory(componentFactoryResolver) {
        return _super.call(this, EditTemplatesComponent, componentFactoryResolver) || this;
    }
    /**
     * @return {?}
     */
    EditTemplateFactory.prototype.generateMapKeys = /**
     * @return {?}
     */
    function () {
        return Object.keys(DataType)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return DataType[key]; }));
    };
    EditTemplateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EditTemplateFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return EditTemplateFactory;
}(TemplateFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditTemplateRepository = /** @class */ (function () {
    function EditTemplateRepository(editTemplateFactory) {
        this.editTemplateFactory = editTemplateFactory;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    EditTemplateRepository.prototype.findTemplate = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        /** @type {?} */
        var typeToTemplate = this.editTemplateFactory.getTemplates();
        return typeToTemplate.get(dataType);
    };
    EditTemplateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EditTemplateRepository.ctorParameters = function () { return [
        { type: EditTemplateFactory }
    ]; };
    return EditTemplateRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditTemplateRepository.prototype.editTemplateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CellTemplateWithContext = /** @class */ (function () {
    function CellTemplateWithContext(viewTemplate, editTemplate, context, width, fieldId, sortStatus) {
        this.viewTemplate = viewTemplate;
        this.editTemplate = editTemplate;
        this.context = context;
        this.width = width;
        this.fieldId = fieldId;
        this.sortStatus = sortStatus;
    }
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    CellTemplateWithContext.prototype.getSortStatus = /**
     * @return {?}
     */
    function () {
        return this.sortStatus;
    };
    return CellTemplateWithContext;
}());
if (false) {
    /** @type {?} */
    CellTemplateWithContext.prototype.viewTemplate;
    /** @type {?} */
    CellTemplateWithContext.prototype.editTemplate;
    /** @type {?} */
    CellTemplateWithContext.prototype.context;
    /** @type {?} */
    CellTemplateWithContext.prototype.width;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    CellTemplateWithContext.prototype.sortStatus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CellContext = /** @class */ (function () {
    function CellContext(element) {
        this.element = element;
    }
    return CellContext;
}());
if (false) {
    /** @type {?} */
    CellContext.prototype.element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldId = /** @class */ (function () {
    function FieldId(id) {
        this.id = id;
    }
    /**
     * @return {?}
     */
    FieldId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    FieldId.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    FieldId.prototype.equals = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        return fieldId.getId() === this.id;
    };
    return FieldId;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldId.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CellTemplateWithAccessor = /** @class */ (function () {
    function CellTemplateWithAccessor(template, editTemplate, editable, accessor, width, columnFieldId) {
        this.template = template;
        this.editTemplate = editTemplate;
        this.editable = editable;
        this.accessor = accessor;
        this.width = width;
        this.columnFieldId = columnFieldId;
    }
    return CellTemplateWithAccessor;
}());
if (false) {
    /** @type {?} */
    CellTemplateWithAccessor.prototype.template;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editTemplate;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.editable;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.accessor;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.width;
    /** @type {?} */
    CellTemplateWithAccessor.prototype.columnFieldId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnDefinition = /** @class */ (function () {
    function ColumnDefinition(field, header, sort) {
        if (sort === void 0) { sort = SortStatus.NONE; }
        this.field = field;
        this.header = header;
        this.sortStatus = sort;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    ColumnDefinition.prototype.setHeader = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.header = header;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    ColumnDefinition.prototype.setField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.field = field;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ColumnDefinition.prototype.getHeaderCellTemplateWithContext = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var header = this.header;
        /** @type {?} */
        var headerCellContext;
        if (typeof header === 'string') {
            headerCellContext = new CellContext(header);
        }
        else if (typeof header === 'function') {
            headerCellContext = new CellContext(header(index));
        }
        /** @type {?} */
        var fieldId = new FieldId(this.field.getId().getId());
        return new CellTemplateWithContext(this.headerTemplate, this.editTemplate, headerCellContext, this.width, fieldId, this.sortStatus);
    };
    /**
     * @return {?}
     */
    ColumnDefinition.prototype.getContentCellTemplateWithAccessor = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var accessor = (/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            return _this.templateFunction(_this.field.getAccessor()(entity));
        });
        return new CellTemplateWithAccessor(this.cellTemplate, this.editTemplate, true, accessor, this.width, this.field.getId());
    };
    return ColumnDefinition;
}());
if (false) {
    /** @type {?} */
    ColumnDefinition.prototype.cellTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.headerTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.editTemplate;
    /** @type {?} */
    ColumnDefinition.prototype.width;
    /** @type {?} */
    ColumnDefinition.prototype.templateFunction;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.field;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.sortStatus;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinition.prototype.header;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnDefinitionFactory = /** @class */ (function () {
    function ColumnDefinitionFactory(viewTemplateRepository, editTemplateRepository) {
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.create = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var columnDef = new ColumnDefinition(column.getField(), column.getHeader(), column.sortStatus);
        columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        columnDef.templateFunction = column.getTemplateFunction();
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.width;
        return columnDef;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.createColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        return columns.map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return _this.create(column); }));
    };
    /**
     * @private
     * @param {?} view
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.findViewTemplate = /**
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    };
    /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    ColumnDefinitionFactory.prototype.findEditTemplate = /**
     * @private
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    };
    ColumnDefinitionFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ColumnDefinitionFactory.ctorParameters = function () { return [
        { type: ViewTemplateRepository },
        { type: EditTemplateRepository }
    ]; };
    return ColumnDefinitionFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.viewTemplateRepository;
    /**
     * @type {?}
     * @private
     */
    ColumnDefinitionFactory.prototype.editTemplateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Composition = /** @class */ (function (_super) {
    __extends(Composition, _super);
    function Composition(uid, ready, columns, width, resizeWidth) {
        var _this = _super.call(this, uid) || this;
        _this.ready = ready;
        _this.columns = columns;
        _this.width = width;
        _this.resizeWidth = resizeWidth;
        return _this;
    }
    /**
     * @return {?}
     */
    Composition.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getHeaderColumns = /**
     * @return {?}
     */
    function () {
        return this.columns
            .map((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) { return column.getHeaderCellTemplateWithContext(index); }));
    };
    /**
     * @return {?}
     */
    Composition.prototype.getTemplateColumns = /**
     * @return {?}
     */
    function () {
        return this.columns
            .map((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.getContentCellTemplateWithAccessor(); }));
    };
    /**
     * @return {?}
     */
    Composition.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    Composition.prototype.getContainerWidth = /**
     * @return {?}
     */
    function () {
        return +this.width - 2;
    };
    /**
     * @return {?}
     */
    Composition.prototype.isReady = /**
     * @return {?}
     */
    function () {
        return this.ready;
    };
    /**
     * @return {?}
     */
    Composition.prototype.isResizeWidthEnabled = /**
     * @return {?}
     */
    function () {
        return this.resizeWidth;
    };
    /**
     * @param {?} composition
     * @return {?}
     */
    Composition.prototype.equals = /**
     * @param {?} composition
     * @return {?}
     */
    function (composition) {
        return this.width === composition.width &&
            this.resizeWidth === composition.resizeWidth &&
            this.equalsByColumns(composition.columns);
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    Composition.prototype.equalsByColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return this.columns.length === columns.length;
    };
    return Composition;
}(ReadModel));
if (false) {
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.width;
    /**
     * @type {?}
     * @private
     */
    Composition.prototype.resizeWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionConverter.prototype.columnDefinitionFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryCompositionQueryStore = /** @class */ (function (_super) {
    __extends(InMemoryCompositionQueryStore, _super);
    function InMemoryCompositionQueryStore(inMemoryCompositionStore, compositionConverter) {
        var _this = _super.call(this, inMemoryCompositionStore) || this;
        _this.inMemoryCompositionStore = inMemoryCompositionStore;
        _this.compositionConverter = compositionConverter;
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryCompositionQueryStore.prototype.toReadModel = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return this.compositionConverter.convert(aggregate);
    };
    InMemoryCompositionQueryStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionQueryStore.ctorParameters = function () { return [
        { type: InMemoryCompositionStore },
        { type: CompositionConverter }
    ]; };
    return InMemoryCompositionQueryStore;
}(InMemoryReadModelStore));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionQueryStore.prototype.inMemoryCompositionStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionQueryStore.prototype.compositionConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CompositionRepository = /** @class */ (function () {
    function CompositionRepository() {
    }
    return CompositionRepository;
}());
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionRepository.prototype.select = function (compositionId) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionInitedEvent = /** @class */ (function (_super) {
    __extends(CompositionInitedEvent, _super);
    function CompositionInitedEvent(aggregateId) {
        return _super.call(this, aggregateId, 'CompositionInitedEvent') || this;
    }
    return CompositionInitedEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionResizeWidthSetEvent = /** @class */ (function (_super) {
    __extends(CompositionResizeWidthSetEvent, _super);
    function CompositionResizeWidthSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'CompositionResizeWidthSetEvent') || this;
    }
    return CompositionResizeWidthSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnsSetEvent = /** @class */ (function (_super) {
    __extends(ColumnsSetEvent, _super);
    function ColumnsSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'ColumnsSetEvent') || this;
    }
    return ColumnsSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionContainerWidthSetEvent = /** @class */ (function (_super) {
    __extends(CompositionContainerWidthSetEvent, _super);
    function CompositionContainerWidthSetEvent(aggregateId, payload) {
        return _super.call(this, aggregateId, 'CompositionContainerWidthSetEvent', payload) || this;
    }
    return CompositionContainerWidthSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionWidthSetEvent = /** @class */ (function (_super) {
    __extends(CompositionWidthSetEvent, _super);
    function CompositionWidthSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'CompositionWidthSetEvent') || this;
    }
    return CompositionWidthSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionChangeSortStatusEvent = /** @class */ (function (_super) {
    __extends(CompositionChangeSortStatusEvent, _super);
    function CompositionChangeSortStatusEvent(aggregateId, columns) {
        var _this = _super.call(this, aggregateId, 'CompositionChangeSortStatusEvent') || this;
        _this.columns = columns;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionChangeSortStatusEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.aggregateId;
    };
    /**
     * @return {?}
     */
    CompositionChangeSortStatusEvent.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    return CompositionChangeSortStatusEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEvent.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryCompositionRepository = /** @class */ (function (_super) {
    __extends(InMemoryCompositionRepository, _super);
    function InMemoryCompositionRepository(domainEventBus, inMemoryCompositionQueryStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryCompositionQueryStore = inMemoryCompositionQueryStore;
        _this.composition$ = new ReplaySubject(1);
        _this.unsubscribe$ = new Subject();
        _this.domainEventBus
            .ofEvent(CompositionInitedEvent, CompositionResizeWidthSetEvent, ColumnsSetEvent, CompositionContainerWidthSetEvent, CompositionWidthSetEvent, (/** @type {?} */ (CompositionChangeSortStatusEvent)))
            .pipe(takeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var aggregateId = event.aggregateId;
            /** @type {?} */
            var composition = _this.inMemoryCompositionQueryStore.getById(aggregateId);
            _this.composition$.next(composition);
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryCompositionRepository.prototype.select = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.composition$
            .asObservable()
            .pipe(filter((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getId().toString() === aggregateId.toString(); })), filter((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.isReady(); })));
    };
    InMemoryCompositionRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryCompositionQueryStore }
    ]; };
    return InMemoryCompositionRepository;
}(CompositionRepository));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.composition$;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionRepository.prototype.inMemoryCompositionQueryStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var inMemoryCompositionCommandProviders = [
    InMemoryCompositionAggregateStore,
    {
        provide: CompositionAggregateRepository,
        useClass: InMemoryCompositionAggregateRepository
    },
];
/** @type {?} */
var inMemoryCompositionQueryProviders = [
    InMemoryCompositionQueryStore,
    {
        provide: CompositionRepository,
        useClass: InMemoryCompositionRepository
    }
];
/** @type {?} */
var inMemoryCompositionProviders = [
    InMemoryCompositionStore
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionAggregateFactory = /** @class */ (function () {
    function CompositionAggregateFactory() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    CompositionAggregateFactory.prototype.create = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new CompositionAggregate(id);
    };
    CompositionAggregateFactory.decorators = [
        { type: Injectable }
    ];
    return CompositionAggregateFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitCompositionCommand = /** @class */ (function (_super) {
    __extends(InitCompositionCommand, _super);
    function InitCompositionCommand(compositionId) {
        var _this = _super.call(this, compositionId, 'InitCompositionCommand') || this;
        _this.compositionId = compositionId;
        return _this;
    }
    return InitCompositionCommand;
}(Command));
if (false) {
    /** @type {?} */
    InitCompositionCommand.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetColumnsCommand = /** @class */ (function (_super) {
    __extends(SetColumnsCommand, _super);
    function SetColumnsCommand(compositionId, columns) {
        var _this = _super.call(this, compositionId, 'SetColumnsCommand') || this;
        _this.compositionId = compositionId;
        _this.columns = columns;
        return _this;
    }
    /**
     * @return {?}
     */
    SetColumnsCommand.prototype.getParams = /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    return SetColumnsCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetColumnsCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommand.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetCompositionWidthCommand = /** @class */ (function (_super) {
    __extends(SetCompositionWidthCommand, _super);
    function SetCompositionWidthCommand(structureId, width) {
        var _this = _super.call(this, structureId, 'SetCompositionWidthCommand') || this;
        _this.structureId = structureId;
        _this.width = width;
        return _this;
    }
    return SetCompositionWidthCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetCompositionWidthCommand.prototype.structureId;
    /** @type {?} */
    SetCompositionWidthCommand.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetCompositionContainerWidthCommand = /** @class */ (function (_super) {
    __extends(SetCompositionContainerWidthCommand, _super);
    function SetCompositionContainerWidthCommand(structureId, width) {
        var _this = _super.call(this, structureId, 'SetCompositionContainerWidthCommand') || this;
        _this.structureId = structureId;
        _this.width = width;
        return _this;
    }
    return SetCompositionContainerWidthCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetCompositionContainerWidthCommand.prototype.structureId;
    /** @type {?} */
    SetCompositionContainerWidthCommand.prototype.width;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetCompositionResizeWidthCommand = /** @class */ (function (_super) {
    __extends(SetCompositionResizeWidthCommand, _super);
    function SetCompositionResizeWidthCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'SetCompositionResizeWidthCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return SetCompositionResizeWidthCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetCompositionResizeWidthCommand.prototype.structureId;
    /** @type {?} */
    SetCompositionResizeWidthCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionChangeSortStatusCommand = /** @class */ (function (_super) {
    __extends(CompositionChangeSortStatusCommand, _super);
    function CompositionChangeSortStatusCommand(compositionId, sortParams) {
        var _this = _super.call(this, compositionId, 'CompositionChangeSortStatusCommand') || this;
        _this.compositionId = compositionId;
        _this.sortParams = sortParams;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionChangeSortStatusCommand.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    CompositionChangeSortStatusCommand.prototype.getSortParams = /**
     * @return {?}
     */
    function () {
        return this.sortParams;
    };
    return CompositionChangeSortStatusCommand;
}(Command));
if (false) {
    /** @type {?} */
    CompositionChangeSortStatusCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommand.prototype.sortParams;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionDispatcher = /** @class */ (function () {
    function CompositionDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionDispatcher.prototype.init = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        this.commandDispatcher.dispatch(new InitCompositionCommand(compositionId));
    };
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    CompositionDispatcher.prototype.setColumns = /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    function (compositionId, params) {
        this.commandDispatcher.dispatch(new SetColumnsCommand(compositionId, params));
    };
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    CompositionDispatcher.prototype.setWidth = /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    function (compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionWidthCommand(compositionId, width));
    };
    /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    CompositionDispatcher.prototype.setContainerWidth = /**
     * @param {?} compositionId
     * @param {?} width
     * @return {?}
     */
    function (compositionId, width) {
        this.commandDispatcher.dispatch(new SetCompositionContainerWidthCommand(compositionId, width));
    };
    /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    CompositionDispatcher.prototype.setResizeWidth = /**
     * @param {?} compositionId
     * @param {?} enabled
     * @return {?}
     */
    function (compositionId, enabled) {
        this.commandDispatcher.dispatch(new SetCompositionResizeWidthCommand(compositionId, enabled));
    };
    /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    CompositionDispatcher.prototype.changeSort = /**
     * @param {?} compositionId
     * @param {?} params
     * @return {?}
     */
    function (compositionId, params) {
        this.commandDispatcher.dispatch(new CompositionChangeSortStatusCommand(compositionId, params));
    };
    CompositionDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return CompositionDispatcher;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitCompositionCommandHandler = /** @class */ (function (_super) {
    __extends(InitCompositionCommandHandler, _super);
    function InitCompositionCommandHandler(compositionAggregateRepository, compositionAggregateFactory, domainEventPublisher) {
        var _this = _super.call(this, InitCompositionCommand, CompositionInitedEvent, domainEventPublisher) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.compositionAggregateFactory = compositionAggregateFactory;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    InitCompositionCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.compositionId;
        /** @type {?} */
        var compositionAggregate = this.compositionAggregateFactory.create(aggregateId);
        this.compositionAggregateRepository.save(compositionAggregate);
    };
    InitCompositionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitCompositionCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: CompositionAggregateFactory },
        { type: DomainEventPublisher }
    ]; };
    return InitCompositionCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitCompositionCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    InitCompositionCommandHandler.prototype.compositionAggregateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CompositionAggregateEvents = {
    CompositionResizeWidthSetAggregateEvent: 'CompositionResizeWidthSetAggregateEvent',
    ColumnsSetAggregateEvent: 'ColumnsSetAggregateEvent',
    CompositionContainerWidthSetAggregateEvent: 'CompositionContainerWidthSetAggregateEvent',
    CompositionWidthSetAggregateEvent: 'CompositionWidthSetAggregateEvent',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionEventConverter = /** @class */ (function () {
    function CompositionEventConverter() {
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    CompositionEventConverter.prototype.convert = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        if (Array.isArray(arg)) {
            return this.convertEvents(arg);
        }
        else {
            return this.convertEvent(arg);
        }
    };
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    CompositionEventConverter.prototype.convertEvents = /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    function (aggregateEvents) {
        var _this = this;
        return aggregateEvents.map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.convertEvent(event);
        }));
    };
    /**
     * @private
     * @param {?} aggregateEvent
     * @return {?}
     */
    CompositionEventConverter.prototype.convertEvent = /**
     * @private
     * @param {?} aggregateEvent
     * @return {?}
     */
    function (aggregateEvent) {
        switch (aggregateEvent.getType()) {
            case CompositionAggregateEvents.CompositionResizeWidthSetAggregateEvent:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.ColumnsSetAggregateEvent:
                return new ColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                /** @type {?} */
                var payload = ((/** @type {?} */ (aggregateEvent))).containerWidth;
                return new CompositionContainerWidthSetEvent(aggregateEvent.getAggregateId(), payload);
            case CompositionAggregateEvents.CompositionWidthSetAggregateEvent:
                return new CompositionWidthSetEvent(aggregateEvent.getAggregateId());
            default:
                break;
        }
    };
    CompositionEventConverter.decorators = [
        { type: Injectable }
    ];
    return CompositionEventConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetColumnsCommandHandler = /** @class */ (function (_super) {
    __extends(SetColumnsCommandHandler, _super);
    function SetColumnsCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        var _this = _super.call(this, SetColumnsCommand) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.compositionEventConverter = compositionEventConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetColumnsCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.getAggregateId();
        /** @type {?} */
        var setColumnsParams = command.getParams();
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setColumns(setColumnsParams);
        this.compositionAggregateRepository.save(composition);
        this.publishEvents(composition, command);
    };
    /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    SetColumnsCommandHandler.prototype.publishEvents = /**
     * @private
     * @param {?} composition
     * @param {?} command
     * @return {?}
     */
    function (composition, command) {
        /** @type {?} */
        var events = (/** @type {?} */ (composition.getEvents()));
        /** @type {?} */
        var domainEvents = this.compositionEventConverter.convert(events);
        this.domainEventPublisher.publish(domainEvents);
    };
    SetColumnsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetColumnsCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return SetColumnsCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetColumnsCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetCompositionWidthCommandHandler = /** @class */ (function (_super) {
    __extends(SetCompositionWidthCommandHandler, _super);
    function SetCompositionWidthCommandHandler(compositionAggregateRepository, columnConverter, domainEventPublisher) {
        var _this = _super.call(this, SetCompositionWidthCommand, CompositionWidthSetEvent, domainEventPublisher) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.columnConverter = columnConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetCompositionWidthCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var width = command.width;
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setWidth(width);
        this.compositionAggregateRepository.save(composition);
    };
    SetCompositionWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: ColumnEntityFactory },
        { type: DomainEventPublisher }
    ]; };
    return SetCompositionWidthCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetCompositionWidthCommandHandler.prototype.columnConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetCompositionResizeWidthCommandHandler = /** @class */ (function (_super) {
    __extends(SetCompositionResizeWidthCommandHandler, _super);
    function SetCompositionResizeWidthCommandHandler(compositionAggregateRepository, columnConverter, domainEventPublisher) {
        var _this = _super.call(this, SetCompositionResizeWidthCommand, CompositionResizeWidthSetEvent, domainEventPublisher) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.columnConverter = columnConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetCompositionResizeWidthCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setResizeWidth(enabled);
        this.compositionAggregateRepository.save(composition);
    };
    SetCompositionResizeWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionResizeWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: ColumnEntityFactory },
        { type: DomainEventPublisher }
    ]; };
    return SetCompositionResizeWidthCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetCompositionResizeWidthCommandHandler.prototype.columnConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetCompositionContainerWidthCommandHandler = /** @class */ (function (_super) {
    __extends(SetCompositionContainerWidthCommandHandler, _super);
    function SetCompositionContainerWidthCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        var _this = _super.call(this, SetCompositionContainerWidthCommand) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.compositionEventConverter = compositionEventConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var width = command.width;
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(aggregateId);
        composition.setContainerWidth(width);
        this.compositionAggregateRepository.save(composition);
        this.publishAggregateEvents((/** @type {?} */ (composition.getEvents())));
    };
    /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    SetCompositionContainerWidthCommandHandler.prototype.publishAggregateEvents = /**
     * @private
     * @param {?} aggregateEvents
     * @return {?}
     */
    function (aggregateEvents) {
        /** @type {?} */
        var domainEvents = this.compositionEventConverter.convert(aggregateEvents);
        this.domainEventPublisher.publish(domainEvents);
    };
    SetCompositionContainerWidthCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetCompositionContainerWidthCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return SetCompositionContainerWidthCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetCompositionContainerWidthCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    SetCompositionContainerWidthCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionChangeSortStatusCommandHandler = /** @class */ (function (_super) {
    __extends(CompositionChangeSortStatusCommandHandler, _super);
    function CompositionChangeSortStatusCommandHandler(compositionAggregateRepository, domainEventPublisher, compositionEventConverter) {
        var _this = _super.call(this, CompositionChangeSortStatusCommand) || this;
        _this.compositionAggregateRepository = compositionAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.compositionEventConverter = compositionEventConverter;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    CompositionChangeSortStatusCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var sortParams = command.getSortParams();
        /** @type {?} */
        var composition = this.compositionAggregateRepository.getById(compositionId);
        composition.changeSort(sortParams);
        this.compositionAggregateRepository.save(composition);
        /** @type {?} */
        var columns = composition.getColumns();
        this.domainEventPublisher.publish(new CompositionChangeSortStatusEvent(compositionId, columns));
    };
    CompositionChangeSortStatusCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionChangeSortStatusCommandHandler.ctorParameters = function () { return [
        { type: CompositionAggregateRepository },
        { type: DomainEventPublisher },
        { type: CompositionEventConverter }
    ]; };
    return CompositionChangeSortStatusCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.compositionAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    CompositionChangeSortStatusCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommandHandler.prototype.compositionEventConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnField = /** @class */ (function () {
    function ColumnField(fieldId, accessor, dataType) {
        this.fieldId = fieldId;
        this.accessor = accessor;
        this.dataType = dataType;
    }
    /**
     * @return {?}
     */
    ColumnField.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ColumnField.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.accessor(entity);
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getAccessor = /**
     * @return {?}
     */
    function () {
        return this.accessor;
    };
    /**
     * @return {?}
     */
    ColumnField.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.dataType;
    };
    return ColumnField;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    ColumnField.prototype.dataType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnFieldFactory = /** @class */ (function () {
    function ColumnFieldFactory() {
    }
    /**
     * @param {?} columnFieldId
     * @param {?} accessor
     * @param {?} dataType
     * @return {?}
     */
    ColumnFieldFactory.prototype.create = /**
     * @param {?} columnFieldId
     * @param {?} accessor
     * @param {?} dataType
     * @return {?}
     */
    function (columnFieldId, accessor, dataType) {
        return new ColumnField(columnFieldId, accessor, dataType);
    };
    ColumnFieldFactory.decorators = [
        { type: Injectable }
    ];
    return ColumnFieldFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionEventService = /** @class */ (function () {
    function CompositionEventService(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventService.prototype.selectColumnsChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(ColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === compositionId.toString(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventService.prototype.selectWidthChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(ColumnsSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === compositionId.toString(); })));
    };
    /**
     * @param {?} compositionId
     * @return {?}
     */
    CompositionEventService.prototype.selectContainerWidthChanged = /**
     * @param {?} compositionId
     * @return {?}
     */
    function (compositionId) {
        return this.domainEventBus
            .ofEvent(CompositionContainerWidthSetEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().equals(compositionId); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.getPayload();
        })), filter((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return !!width; })));
    };
    CompositionEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionEventService.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return CompositionEventService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionEventService.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionId = /** @class */ (function (_super) {
    __extends(CompositionId, _super);
    function CompositionId(id) {
        return _super.call(this, id) || this;
    }
    return CompositionId;
}(AggregateId));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var globalCompositionId = new CompositionId('-1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionQueryService = /** @class */ (function () {
    function CompositionQueryService(compositionRepository) {
        this.compositionRepository = compositionRepository;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionQueryService.prototype.selectWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getWidth(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionQueryService.prototype.selectContainerWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getContainerWidth(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionQueryService.prototype.selectWidthForEachColumn = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getColumns().map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.width; })); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionQueryService.prototype.selectHeaderColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getHeaderColumns(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionQueryService.prototype.selectTemplateColumns = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.getTemplateColumns(); })));
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionQueryService.prototype.selectResizeWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return this.compositionRepository
            .select(compositionId)
            .pipe(map((/**
         * @param {?} composition
         * @return {?}
         */
        function (composition) { return composition.isResizeWidthEnabled(); })));
    };
    CompositionQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionQueryService.ctorParameters = function () { return [
        { type: CompositionRepository }
    ]; };
    return CompositionQueryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionQueryService.prototype.compositionRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionCommandService = /** @class */ (function () {
    function CompositionCommandService(compositionDispatcher) {
        this.compositionDispatcher = compositionDispatcher;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.init = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.init(compositionId);
    };
    /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setColumns = /**
     * @param {?} params
     * @param {?=} compositionId
     * @return {?}
     */
    function (params, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setColumns(compositionId, params);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setWidth(compositionId, width);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setContainerWidth(compositionId, width);
    };
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionCommandService.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        this.compositionDispatcher.setResizeWidth(compositionId, enabled);
    };
    CompositionCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionCommandService.ctorParameters = function () { return [
        { type: CompositionDispatcher }
    ]; };
    return CompositionCommandService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionCommandService.prototype.compositionDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortToggledEvent = /** @class */ (function (_super) {
    __extends(SortToggledEvent, _super);
    function SortToggledEvent(aggregateId, compositionId, directions) {
        var _this = _super.call(this, aggregateId, 'ToggleSortEvent') || this;
        _this.compositionId = compositionId;
        _this.directions = directions;
        return _this;
    }
    /**
     * @return {?}
     */
    SortToggledEvent.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    SortToggledEvent.prototype.getDirections = /**
     * @return {?}
     */
    function () {
        return this.directions;
    };
    return SortToggledEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SortToggledEvent.prototype.directions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnFieldId = /** @class */ (function () {
    function ColumnFieldId(id) {
        this.id = id;
    }
    /**
     * @return {?}
     */
    ColumnFieldId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    return ColumnFieldId;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnFieldId.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangeSortParams = /** @class */ (function () {
    function ChangeSortParams(fieldId, direction) {
        this.fieldId = fieldId;
        this.direction = direction;
    }
    return ChangeSortParams;
}());
if (false) {
    /** @type {?} */
    ChangeSortParams.prototype.fieldId;
    /** @type {?} */
    ChangeSortParams.prototype.direction;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionChangeSortStatusEventHandler = /** @class */ (function (_super) {
    __extends(CompositionChangeSortStatusEventHandler, _super);
    function CompositionChangeSortStatusEventHandler(compositionDispatcher) {
        var _this = _super.call(this) || this;
        _this.compositionDispatcher = compositionDispatcher;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CompositionChangeSortStatusEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof SortToggledEvent) {
            /** @type {?} */
            var compositionId = event.getCompositionId();
            /** @type {?} */
            var dirs = event.getDirections();
            /** @type {?} */
            var params = dirs.map((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) {
                /** @type {?} */
                var columnFieldId = new ColumnFieldId(dir.fieldId.getId());
                return new ChangeSortParams(columnFieldId, dir.direction);
            }));
            this.compositionDispatcher.changeSort(compositionId, params);
        }
    };
    CompositionChangeSortStatusEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionChangeSortStatusEventHandler.ctorParameters = function () { return [
        { type: CompositionDispatcher }
    ]; };
    return CompositionChangeSortStatusEventHandler;
}(DomainEventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusEventHandler.prototype.compositionDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldsInitedEvent = /** @class */ (function (_super) {
    __extends(FieldsInitedEvent, _super);
    function FieldsInitedEvent(aggregateId, compositionId, columns, // TODO merge
    fields) {
        var _this = _super.call(this, aggregateId, 'FieldsInitedEvent') || this;
        _this.compositionId = compositionId;
        _this.columns = columns;
        _this.fields = fields;
        return _this;
    }
    /**
     * @return {?}
     */
    FieldsInitedEvent.prototype.getFields = /**
     * @return {?}
     */
    function () {
        return this.fields;
    };
    return FieldsInitedEvent;
}(DomainEvent));
if (false) {
    /** @type {?} */
    FieldsInitedEvent.prototype.compositionId;
    /** @type {?} */
    FieldsInitedEvent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEvent.prototype.fields;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnParams = /** @class */ (function () {
    function ColumnParams(column, field) {
        this.column = column;
        this.field = field;
    }
    /**
     * @return {?}
     */
    ColumnParams.prototype.getColumn = /**
     * @return {?}
     */
    function () {
        return this.column;
    };
    /**
     * @return {?}
     */
    ColumnParams.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.field;
    };
    return ColumnParams;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnParams.prototype.column;
    /**
     * @type {?}
     * @private
     */
    ColumnParams.prototype.field;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CompositionFieldsInitedEventHandler = /** @class */ (function (_super) {
    __extends(CompositionFieldsInitedEventHandler, _super);
    function CompositionFieldsInitedEventHandler(compositionDispatcher, columnFieldFactory) {
        var _this = _super.call(this) || this;
        _this.compositionDispatcher = compositionDispatcher;
        _this.columnFieldFactory = columnFieldFactory;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CompositionFieldsInitedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event instanceof FieldsInitedEvent) {
            // TODO Move to different layer
            /** @type {?} */
            var fields_1 = event.getFields();
            /** @type {?} */
            var columnFieldIds_1 = fields_1.map((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return new ColumnFieldId(field.getId().getId()); }));
            /** @type {?} */
            var columns = event.columns;
            /** @type {?} */
            var params = columns.map((/**
             * @param {?} column
             * @param {?} index
             * @return {?}
             */
            function (column, index) {
                /** @type {?} */
                var columnFieldId = columnFieldIds_1[index];
                /** @type {?} */
                var field = fields_1[index];
                /** @type {?} */
                var columnField = _this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType());
                return new ColumnParams(column, columnField);
            }));
            this.compositionDispatcher.setColumns(event.compositionId, params);
        }
    };
    CompositionFieldsInitedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionFieldsInitedEventHandler.ctorParameters = function () { return [
        { type: CompositionDispatcher },
        { type: ColumnFieldFactory }
    ]; };
    return CompositionFieldsInitedEventHandler;
}(DomainEventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionFieldsInitedEventHandler.prototype.compositionDispatcher;
    /**
     * @type {?}
     * @private
     */
    CompositionFieldsInitedEventHandler.prototype.columnFieldFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var commandProviders = __spread(inMemoryCompositionCommandProviders, [
    CompositionDispatcher,
    CompositionAggregateFactory,
    {
        provide: COMMAND_HANDLERS,
        useClass: InitCompositionCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: SetColumnsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionResizeWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetCompositionContainerWidthCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: CompositionChangeSortStatusCommandHandler,
        multi: true
    },
    ColumnEntityFactory,
    CompositionEventConverter,
    ColumnFieldFactory
]);
/** @type {?} */
var queryProviders = __spread(inMemoryCompositionQueryProviders, [
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionFieldsInitedEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: CompositionChangeSortStatusEventHandler,
        multi: true
    },
    ColumnDefinitionFactory,
    ViewTemplateRepository,
    ViewTemplateFactory,
    EditTemplateFactory,
    EditTemplateRepository
]);
/** @type {?} */
var compositionProviders = __spread(inMemoryCompositionProviders, commandProviders, queryProviders, [
    CompositionConverter,
    CompositionCommandService,
    CompositionQueryService,
    CompositionEventService
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent
];
/** @type {?} */
var exportDeclarations = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    ColumnQueryComponent,
    FabricChipModule,
    FabricCheckboxModule,
    FabricButtonModule,
    FabricInputModule,
    FunctionViewComponent
];
var CompositionModule = /** @class */ (function () {
    function CompositionModule() {
    }
    CompositionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FabricChipModule,
                        FabricCheckboxModule,
                        FabricButtonModule,
                        FabricInputModule
                    ],
                    providers: __spread(compositionProviders),
                    declarations: [
                        components
                    ],
                    exports: exportDeclarations,
                    entryComponents: [
                        ViewTemplatesComponent,
                        EditTemplatesComponent,
                        FabricChipComponent,
                        FabricCheckboxComponent,
                        FabricButtonComponent,
                        FabricInputComponent
                    ]
                },] }
    ];
    return CompositionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureIdGenerator = /** @class */ (function () {
    function StructureIdGenerator() {
        this.increment = 0;
    }
    /**
     * @return {?}
     */
    StructureIdGenerator.prototype.generateId = /**
     * @return {?}
     */
    function () {
        this.increment++;
        return this.increment;
    };
    return StructureIdGenerator;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureIdGenerator.prototype.increment;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
Logger = /** @class */ (function () {
    function Logger() {
    }
    return Logger;
}());
if (false) {
    /**
     * @abstract
     * @param {?} text
     * @return {?}
     */
    Logger.prototype.warn = function (text) { };
    /**
     * @abstract
     * @param {?} text
     * @return {?}
     */
    Logger.prototype.error = function (text) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageChangedAggregateEvent = /** @class */ (function (_super) {
    __extends(PageChangedAggregateEvent, _super);
    function PageChangedAggregateEvent(structureId) {
        return _super.call(this, structureId, 'PageChangedAggregateEvent') || this;
    }
    return PageChangedAggregateEvent;
}(AggregateEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagesizeChangedAggregateEvent = /** @class */ (function (_super) {
    __extends(PagesizeChangedAggregateEvent, _super);
    function PagesizeChangedAggregateEvent(structureId) {
        return _super.call(this, structureId, 'PagesizeChangedAggregateEvent') || this;
    }
    return PagesizeChangedAggregateEvent;
}(AggregateEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Aggregate
var 
// Aggregate
PagingAggregate = /** @class */ (function () {
    function PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, logger) {
        this.enabled = enabled;
        this.page = page;
        this.pageSize = pageSize;
        this.pageSizes = pageSizes;
        this.pagerTop = pagerTop;
        this.pagerBottom = pagerBottom;
        this.events = [];
        this.logger = logger;
    }
    // TODO Remove
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    PagingAggregate.default = 
    // TODO Remove
    /**
     * @param {?} logger
     * @return {?}
     */
    function (logger) {
        return new PagingAggregate(false, 1, 25, [10, 25, 50, 100], false, true, logger);
    };
    // TODO Remove
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    PagingAggregate.fromConfig = 
    // TODO Remove
    /**
     * @param {?} paging
     * @param {?} logger
     * @return {?}
     */
    function (paging, logger) {
        /** @type {?} */
        var defaultPaginDefinition = PagingAggregate.default(logger);
        /** @type {?} */
        var enabled = paging.enabled || defaultPaginDefinition.isEnabled();
        /** @type {?} */
        var page = paging.page || defaultPaginDefinition.getPage();
        /** @type {?} */
        var pageSize = paging.pageSize || defaultPaginDefinition.getPageSize();
        /** @type {?} */
        var pageSizes = paging.pageSizes || defaultPaginDefinition.getPageSizes();
        /** @type {?} */
        var pagerTop = paging.pagerTop || defaultPaginDefinition.isPagerTop();
        /** @type {?} */
        var pagerBottom = paging.pagerBottom || defaultPaginDefinition.isPagerBottom();
        return new PagingAggregate(enabled, page, pageSize, pageSizes, pagerTop, pagerBottom, logger);
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isDisabled = /**
     * @return {?}
     */
    function () {
        return !this.enabled;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.getPage = /**
     * @return {?}
     */
    function () {
        return this.page;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.getPageSize = /**
     * @return {?}
     */
    function () {
        return this.pageSize;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.getPageSizes = /**
     * @return {?}
     */
    function () {
        return this.pageSizes;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isPagerTop = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerTop;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isPagerBottom = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled()) {
            return false;
        }
        return this.pagerBottom;
    };
    /**
     * @param {?} pagingConfig
     * @return {?}
     */
    PagingAggregate.prototype.change = /**
     * @param {?} pagingConfig
     * @return {?}
     */
    function (pagingConfig) {
        if (pagingConfig.enabled !== undefined) {
            this.enabled = pagingConfig.enabled;
        }
        if (pagingConfig.page !== undefined) {
            this.page = pagingConfig.page;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSize !== undefined) {
            this.pageSize = pagingConfig.pageSize;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pageSizes !== undefined) {
            this.pageSizes = pagingConfig.pageSizes;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerTop !== undefined) {
            this.pagerTop = pagingConfig.pagerTop;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (pagingConfig.pagerBottom !== undefined) {
            this.pagerBottom = pagingConfig.pagerBottom;
            if (pagingConfig.enabled === undefined) {
                this.enabled = true;
            }
        }
        if (this.enabled === true &&
            pagingConfig.pagerTop === false &&
            pagingConfig.pagerBottom === false) {
            this.pagerBottom = true;
            this.logger.warn('Pagers cannot be turn of when paging is enabled.');
        }
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.nextPage = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var nextPage = this.page;
        if (!this.isNextPageDisabled(sourceSize)) {
            nextPage += 1;
        }
        this.page = nextPage;
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var prevPage = this.page;
        if (!this.isPrevPageDisabled()) {
            prevPage -= 1;
        }
        this.page = prevPage;
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    PagingAggregate.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        if (this.pageSizes.find((/**
         * @param {?} ps
         * @return {?}
         */
        function (ps) { return ps === pageSize; }))) {
            this.setPage(1);
            this.setPageSize(pageSize);
        }
        return this.events;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.isNextPageDisabled = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        return this.page === Math.ceil(sourceSize / this.pageSize);
    };
    /**
     * @return {?}
     */
    PagingAggregate.prototype.isPrevPageDisabled = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.calculateStart = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var firstItem = 1 + ((this.page - 1) * this.pageSize);
        if (sourceSize < firstItem) {
            return 0;
        }
        return firstItem;
    };
    /**
     * @param {?} sourceSize
     * @return {?}
     */
    PagingAggregate.prototype.calculateEnd = /**
     * @param {?} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        /** @type {?} */
        var lastItem = this.page * this.pageSize;
        if (sourceSize < lastItem) {
            return sourceSize;
        }
        return lastItem;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    PagingAggregate.prototype.sample = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        if (this.isDisabled()) {
            return source;
        }
        /** @type {?} */
        var sourceSize = source.length;
        /** @type {?} */
        var start = this.calculateStart(sourceSize);
        if (start !== 0) {
            start -= 1;
        }
        return source.slice(start, this.calculateEnd(sourceSize));
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    PagingAggregate.prototype.setPage = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page = page;
        this.events.push(new PageChangedAggregateEvent(new StructureId('TODO need to be changed')));
    };
    /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    PagingAggregate.prototype.setPageSize = /**
     * @private
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        this.pageSize = pageSize;
        this.events.push(new PagesizeChangedAggregateEvent(new StructureId('TODO need to be changed')));
    };
    return PagingAggregate;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.events;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.page;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pageSize;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pageSizes;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pagerTop;
    /**
     * @type {?}
     * @private
     */
    PagingAggregate.prototype.pagerBottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingAggregateFactory = /** @class */ (function () {
    function PagingAggregateFactory(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    PagingAggregateFactory.prototype.createDefault = /**
     * @return {?}
     */
    function () {
        return PagingAggregate.default(this.logger);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    PagingAggregateFactory.prototype.createFromConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return PagingAggregate.fromConfig(config, this.logger);
    };
    PagingAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingAggregateFactory.ctorParameters = function () { return [
        { type: Logger }
    ]; };
    return PagingAggregateFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingAggregateFactory.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalPagingCommandService = /** @class */ (function (_super) {
    __extends(LocalPagingCommandService, _super);
    function LocalPagingCommandService(structureId, aggregateFactory, pagingDispatcher) {
        var _this = _super.call(this, pagingDispatcher) || this;
        _this.structureId = structureId;
        _this.aggregateFactory = aggregateFactory;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingCommandService.prototype.setDefaultPaging = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultPaggingAggregate = this.aggregateFactory.createDefault();
        _super.prototype.setPaging.call(this, {
            page: defaultPaggingAggregate.getPage(),
            pageSize: defaultPaggingAggregate.getPageSize(),
            pageSizes: defaultPaggingAggregate.getPageSizes()
        }, this.structureId);
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    LocalPagingCommandService.prototype.setPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        _super.prototype.setPaging.call(this, paging, this.structureId);
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    LocalPagingCommandService.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        _super.prototype.changePageSize.call(this, pageSize, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingCommandService.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        _super.prototype.nextPage.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingCommandService.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        _super.prototype.prevPage.call(this, this.structureId);
    };
    LocalPagingCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingAggregateFactory },
        { type: PagingDispatcher }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "setPaging", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "changePageSize", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "nextPage", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalPagingCommandService.prototype, "prevPage", null);
    return LocalPagingCommandService;
}(PagingCommandService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalPagingCommandService.prototype.aggregateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalPagingQueryService = /** @class */ (function (_super) {
    __extends(LocalPagingQueryService, _super);
    function LocalPagingQueryService(structureId, pagingRepository) {
        var _this = _super.call(this, pagingRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalPagingQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalPagingQueryService.prototype.selectOne = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId)
            .pipe(take(1));
    };
    LocalPagingQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalPagingQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: PagingRepository }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalPagingQueryService.prototype, "select", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalPagingQueryService.prototype, "selectOne", null);
    return LocalPagingQueryService;
}(PagingQueryService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalPagingQueryService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaCommand = /** @class */ (function (_super) {
    __extends(SetSchemaCommand, _super);
    function SetSchemaCommand(structureId, height) {
        var _this = _super.call(this, structureId, 'SetSchemaCommand') || this;
        _this.structureId = structureId;
        _this.height = height;
        return _this;
    }
    return SetSchemaCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetSchemaCommand.prototype.structureId;
    /** @type {?} */
    SetSchemaCommand.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaVerticalGridCommand = /** @class */ (function (_super) {
    __extends(SetSchemaVerticalGridCommand, _super);
    function SetSchemaVerticalGridCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'SetSchemaVerticalGridCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return SetSchemaVerticalGridCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetSchemaVerticalGridCommand.prototype.structureId;
    /** @type {?} */
    SetSchemaVerticalGridCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaHorizontalGridCommand = /** @class */ (function (_super) {
    __extends(SetSchemaHorizontalGridCommand, _super);
    function SetSchemaHorizontalGridCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'SetSchemaHorizontalGridCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return SetSchemaHorizontalGridCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetSchemaHorizontalGridCommand.prototype.structureId;
    /** @type {?} */
    SetSchemaHorizontalGridCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaThemeCommand = /** @class */ (function (_super) {
    __extends(SetSchemaThemeCommand, _super);
    function SetSchemaThemeCommand(structureId, theme) {
        var _this = _super.call(this, structureId, 'SetSchemaThemeCommand') || this;
        _this.structureId = structureId;
        _this.theme = theme;
        return _this;
    }
    return SetSchemaThemeCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetSchemaThemeCommand.prototype.structureId;
    /** @type {?} */
    SetSchemaThemeCommand.prototype.theme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetRowColoringCommand = /** @class */ (function (_super) {
    __extends(SetRowColoringCommand, _super);
    function SetRowColoringCommand(structureId, coloring) {
        var _this = _super.call(this, structureId, 'SetRowColoringCommand') || this;
        _this.structureId = structureId;
        _this.coloring = coloring;
        return _this;
    }
    return SetRowColoringCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetRowColoringCommand.prototype.structureId;
    /** @type {?} */
    SetRowColoringCommand.prototype.coloring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangeSchemaTopHeaderCommand = /** @class */ (function (_super) {
    __extends(ChangeSchemaTopHeaderCommand, _super);
    function ChangeSchemaTopHeaderCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'ChangeSchemaTopHeaderCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return ChangeSchemaTopHeaderCommand;
}(Command));
if (false) {
    /** @type {?} */
    ChangeSchemaTopHeaderCommand.prototype.structureId;
    /** @type {?} */
    ChangeSchemaTopHeaderCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangeSchemaBottomHeaderCommand = /** @class */ (function (_super) {
    __extends(ChangeSchemaBottomHeaderCommand, _super);
    function ChangeSchemaBottomHeaderCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'ChangeSchemaBottomHeaderCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return ChangeSchemaBottomHeaderCommand;
}(Command));
if (false) {
    /** @type {?} */
    ChangeSchemaBottomHeaderCommand.prototype.structureId;
    /** @type {?} */
    ChangeSchemaBottomHeaderCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaDispatcher = /** @class */ (function () {
    function SchemaDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} height
     * @return {?}
     */
    SchemaDispatcher.prototype.setSchema = /**
     * @param {?} structureId
     * @param {?} height
     * @return {?}
     */
    function (structureId, height) {
        this.commandDispatcher.dispatch(new SetSchemaCommand(structureId, height));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeVerticalGrid = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaVerticalGridCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeHorizontalGrid = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SetSchemaHorizontalGridCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} theme
     * @return {?}
     */
    SchemaDispatcher.prototype.setTheme = /**
     * @param {?} structureId
     * @param {?} theme
     * @return {?}
     */
    function (structureId, theme) {
        this.commandDispatcher.dispatch(new SetSchemaThemeCommand(structureId, theme));
    };
    /**
     * @param {?=} structureId
     * @param {?=} coloring
     * @return {?}
     */
    SchemaDispatcher.prototype.setRowColoring = /**
     * @param {?=} structureId
     * @param {?=} coloring
     * @return {?}
     */
    function (structureId, coloring) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetRowColoringCommand(structureId, coloring));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeTopHeader = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaTopHeaderCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SchemaDispatcher.prototype.changeBottomHeader = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new ChangeSchemaBottomHeaderCommand(structureId, enabled));
    };
    SchemaDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return SchemaDispatcher;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaRepository = /** @class */ (function () {
    function SchemaRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SchemaRepository.prototype.select = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getId().toString() === structureId.toString(); })), map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSchema(); })));
    };
    SchemaRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaRepository.ctorParameters = function () { return [
        { type: StructureRepository }
    ]; };
    return SchemaRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaQueryService = /** @class */ (function () {
    function SchemaQueryService(schemaRepository) {
        this.schemaRepository = schemaRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.select = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository.select(structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectHeight = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        function (height) { return height !== undefined; })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectContainerHeight = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getContainerHeight();
        })), filter((/**
         * @param {?} height
         * @return {?}
         */
        function (height) { return height !== undefined; })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectOne = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.select(structureId)
            .pipe(take(1));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectCssClasses = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getCssClasses();
        })));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaQueryService.prototype.selectColumnHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.schemaRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            return schema.getColumnHeader();
        })));
    };
    SchemaQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaQueryService.ctorParameters = function () { return [
        { type: SchemaRepository }
    ]; };
    return SchemaQueryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaQueryService.prototype.schemaRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaCommandService = /** @class */ (function () {
    function SchemaCommandService(schemaDispatcher, schemaQueryService) {
        this.schemaDispatcher = schemaDispatcher;
        this.schemaQueryService = schemaQueryService;
        this.unsubscribe$ = new Subject();
    }
    /**
     * @return {?}
     */
    SchemaCommandService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setSchema = /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    function (height, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setSchema(structureId, height);
    };
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setHeight = /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    function (height, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setSchema(structureId, height);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeVerticalGrid = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeVerticalGrid(structureId, enabled);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeHorizontalGrid = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeHorizontalGrid(structureId, enabled);
    };
    /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setTheme = /**
     * @param {?} theme
     * @param {?=} structureId
     * @return {?}
     */
    function (theme, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setTheme(structureId, theme);
    };
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.setRowColoring = /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    function (coloring, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.setRowColoring(structureId, coloring);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeTopHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeTopHeader(structureId, enabled);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.changeBottomHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaDispatcher.changeBottomHeader(structureId, enabled);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleVerticalGrid = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        function (css) { return css.verticalGrid; })), filter((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) { return grid !== undefined; })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) {
            _this.changeVerticalGrid(!grid, structureId);
        }));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleHorizontalGrid = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectCssClasses(structureId)
            .pipe(map((/**
         * @param {?} css
         * @return {?}
         */
        function (css) { return css.horizontalGrid; })), filter((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) { return grid !== undefined; })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} grid
         * @return {?}
         */
        function (grid) {
            _this.changeHorizontalGrid(!grid, structureId);
        }));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleTopHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        function (columnHeader) { return columnHeader.isTopHeaderEnabled(); })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.changeTopHeader(!enabled, structureId);
        }));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandService.prototype.toggleBottomHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        this.schemaQueryService
            .selectColumnHeader(structureId)
            .pipe(map((/**
         * @param {?} columnHeader
         * @return {?}
         */
        function (columnHeader) { return columnHeader.isBottomHeaderEnabled(); })), take(1), takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.changeBottomHeader(!enabled, structureId);
        }));
    };
    SchemaCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCommandService.ctorParameters = function () { return [
        { type: SchemaDispatcher },
        { type: SchemaQueryService }
    ]; };
    return SchemaCommandService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaCommandService.prototype.schemaQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var SchemaRowColoring = {
    NONE: 0,
    EVEN: 1,
    ODD: 2,
};
SchemaRowColoring[SchemaRowColoring.NONE] = 'NONE';
SchemaRowColoring[SchemaRowColoring.EVEN] = 'EVEN';
SchemaRowColoring[SchemaRowColoring.ODD] = 'ODD';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalSchemaCommandService = /** @class */ (function (_super) {
    __extends(LocalSchemaCommandService, _super);
    function LocalSchemaCommandService(structureId, schemaQueryService, schemaDispatcher) {
        var _this = _super.call(this, schemaDispatcher, schemaQueryService) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setDefaultSchema = /**
     * @return {?}
     */
    function () {
        _super.prototype.setSchema.call(this, Number.MAX_SAFE_INTEGER, this.structureId);
    };
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setSchema = /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    function (height, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setSchema.call(this, height, this.structureId);
    };
    /**
     * @param {?} height
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        _super.prototype.setHeight.call(this, height, this.structureId);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeVerticalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        _super.prototype.changeVerticalGrid.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeHorizontalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        _super.prototype.changeHorizontalGrid.call(this, enabled, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleVerticalGrid = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleVerticalGrid.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleHorizontalGrid = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleHorizontalGrid.call(this, this.structureId);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        _super.prototype.setTheme.call(this, theme, this.structureId);
    };
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.setRowColoring = /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    function (coloring, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setRowColoring.call(this, coloring, this.structureId);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeTopHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.changeTopHeader.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaCommandService.prototype.changeBottomHeader = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.changeBottomHeader.call(this, enabled, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleTopHeader = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleTopHeader.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaCommandService.prototype.toggleBottomHeader = /**
     * @return {?}
     */
    function () {
        _super.prototype.toggleBottomHeader.call(this, this.structureId);
    };
    LocalSchemaCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: SchemaQueryService },
        { type: SchemaDispatcher }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setSchema", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setHeight", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeVerticalGrid", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeHorizontalGrid", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleVerticalGrid", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleHorizontalGrid", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setTheme", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "setRowColoring", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeTopHeader", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "changeBottomHeader", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleTopHeader", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalSchemaCommandService.prototype, "toggleBottomHeader", null);
    return LocalSchemaCommandService;
}(SchemaCommandService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalSchemaQueryService = /** @class */ (function (_super) {
    __extends(LocalSchemaQueryService, _super);
    function LocalSchemaQueryService(structureId, schemaRepository) {
        var _this = _super.call(this, schemaRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectContainerHeight = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectContainerHeight.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectOne = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectOne.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectCssClasses = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectCssClasses.call(this, this.structureId);
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    LocalSchemaQueryService.prototype.selectColumnHeader = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return _super.prototype.selectColumnHeader.call(this, this.structureId);
    };
    LocalSchemaQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: SchemaRepository }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "select", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectHeight", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectContainerHeight", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectOne", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectCssClasses", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [StructureId]),
        __metadata("design:returntype", Observable)
    ], LocalSchemaQueryService.prototype, "selectColumnHeader", null);
    return LocalSchemaQueryService;
}(SchemaQueryService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaQueryService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetFormationCommand = /** @class */ (function (_super) {
    __extends(SetFormationCommand, _super);
    function SetFormationCommand(structureId, payload) {
        var _this = _super.call(this, structureId, 'SetFormationCommand') || this;
        _this.structureId = structureId;
        _this.payload = payload;
        return _this;
    }
    return SetFormationCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetFormationCommand.prototype.structureId;
    /** @type {?} */
    SetFormationCommand.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleSelectedRowCommand = /** @class */ (function (_super) {
    __extends(ToggleSelectedRowCommand, _super);
    function ToggleSelectedRowCommand(structureId, selectedRow) {
        var _this = _super.call(this, structureId, 'ToggleSelectedRowCommand') || this;
        _this.structureId = structureId;
        _this.selectedRow = selectedRow;
        return _this;
    }
    return ToggleSelectedRowCommand;
}(Command));
if (false) {
    /** @type {?} */
    ToggleSelectedRowCommand.prototype.structureId;
    /** @type {?} */
    ToggleSelectedRowCommand.prototype.selectedRow;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationDispatcher = /** @class */ (function () {
    function FormationDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationDispatcher.prototype.setDefault = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        this.commandDispatcher.dispatch(new SetFormationCommand(structureId));
    };
    /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @return {?}
     */
    FormationDispatcher.prototype.toggleSelectedRow = /**
     * @param {?} structureId
     * @param {?} selectedRow
     * @return {?}
     */
    function (structureId, selectedRow) {
        this.commandDispatcher.dispatch(new ToggleSelectedRowCommand(structureId, selectedRow));
    };
    FormationDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return FormationDispatcher;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationCommandService.prototype.formationDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalFormationCommandService = /** @class */ (function (_super) {
    __extends(LocalFormationCommandService, _super);
    function LocalFormationCommandService(structureId, formationDispatcher) {
        var _this = _super.call(this, formationDispatcher) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationCommandService.prototype.setDefault = /**
     * @return {?}
     */
    function () {
        _super.prototype.setDefaultFormation.call(this, this.structureId);
    };
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    LocalFormationCommandService.prototype.toggleSelectedRow = /**
     * @param {?} selectedRow
     * @return {?}
     */
    function (selectedRow) {
        _super.prototype.toggleSelectedRow.call(this, selectedRow, this.structureId);
    };
    LocalFormationCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationDispatcher }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LocalFormationCommandService.prototype, "toggleSelectedRow", null);
    return LocalFormationCommandService;
}(FormationCommandService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationCommandService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationRepository = /** @class */ (function () {
    function FormationRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationRepository.prototype.select = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getId().toString() === structureId.toString(); })), map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getFormation(); })));
    };
    FormationRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationRepository.ctorParameters = function () { return [
        { type: StructureRepository }
    ]; };
    return FormationRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationQueryService = /** @class */ (function () {
    function FormationQueryService(formationRepository) {
        this.formationRepository = formationRepository;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    FormationQueryService.prototype.selectSelectedRows = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        return this.formationRepository
            .select(structureId)
            .pipe(map((/**
         * @param {?} formation
         * @return {?}
         */
        function (formation) { return formation.getSelectedRows(); })));
    };
    FormationQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationQueryService.ctorParameters = function () { return [
        { type: FormationRepository }
    ]; };
    return FormationQueryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationQueryService.prototype.formationRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalFormationQueryService = /** @class */ (function (_super) {
    __extends(LocalFormationQueryService, _super);
    function LocalFormationQueryService(structureId, formationRepository) {
        var _this = _super.call(this, formationRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalFormationQueryService.prototype.selectSelectedRows = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectSelectedRows.call(this, this.structureId);
    };
    LocalFormationQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalFormationQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: FormationRepository }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalFormationQueryService.prototype, "selectSelectedRows", null);
    return LocalFormationQueryService;
}(FormationQueryService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalFormationQueryService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetConfigFilterCommand = /** @class */ (function (_super) {
    __extends(StructureSetConfigFilterCommand, _super);
    function StructureSetConfigFilterCommand(structureId, filterConfig) {
        var _this = _super.call(this, structureId, 'StructureSetConfigFilterCommand') || this;
        _this.structureId = structureId;
        _this.filterConfig = filterConfig;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSetConfigFilterCommand.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.filterConfig;
    };
    return StructureSetConfigFilterCommand;
}(Command));
if (false) {
    /** @type {?} */
    StructureSetConfigFilterCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommand.prototype.filterConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureToggleFilterCommand = /** @class */ (function (_super) {
    __extends(StructureToggleFilterCommand, _super);
    function StructureToggleFilterCommand(structureId, fieldId, externalFilterId, filterValue) {
        var _this = _super.call(this, structureId, 'StructureToggleFilterCommand') || this;
        _this.structureId = structureId;
        _this.fieldId = fieldId;
        _this.externalFilterId = externalFilterId;
        _this.filterValue = filterValue;
        return _this;
    }
    return StructureToggleFilterCommand;
}(Command));
if (false) {
    /** @type {?} */
    StructureToggleFilterCommand.prototype.structureId;
    /** @type {?} */
    StructureToggleFilterCommand.prototype.fieldId;
    /** @type {?} */
    StructureToggleFilterCommand.prototype.externalFilterId;
    /** @type {?} */
    StructureToggleFilterCommand.prototype.filterValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFilterCommandService = /** @class */ (function () {
    function StructureFilterCommandService(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterCommandService.prototype.setFilteringEnabled = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        this.commandDispatcher.dispatch(new StructureSetConfigFilterCommand(structureId, config));
    };
    /**
     * @param {?} fieldId
     * @param {?} externalFieldId
     * @param {?} filterValue
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterCommandService.prototype.addFilter = /**
     * @param {?} fieldId
     * @param {?} externalFieldId
     * @param {?} filterValue
     * @param {?} structureId
     * @return {?}
     */
    function (fieldId, externalFieldId, filterValue, structureId) {
        this.commandDispatcher.dispatch(new StructureToggleFilterCommand(structureId, fieldId, externalFieldId, filterValue));
    };
    StructureFilterCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterCommandService.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return StructureFilterCommandService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterCommandService.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceSetLoadingCommand = /** @class */ (function (_super) {
    __extends(SourceSetLoadingCommand, _super);
    function SourceSetLoadingCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'SourceSetLoadingCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return SourceSetLoadingCommand;
}(Command));
if (false) {
    /** @type {?} */
    SourceSetLoadingCommand.prototype.structureId;
    /** @type {?} */
    SourceSetLoadingCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetOriginCommand = /** @class */ (function (_super) {
    __extends(SetOriginCommand, _super);
    function SetOriginCommand(structureId, items) {
        if (items === void 0) { items = []; }
        var _this = _super.call(this, structureId, 'SetOriginCommand') || this;
        _this.structureId = structureId;
        _this.items = items;
        return _this;
    }
    return SetOriginCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetOriginCommand.prototype.structureId;
    /** @type {?} */
    SetOriginCommand.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureEditSourceItemCommand = /** @class */ (function (_super) {
    __extends(StructureEditSourceItemCommand, _super);
    function StructureEditSourceItemCommand(structureId, params) {
        var _this = _super.call(this, structureId, 'StructureEditSourceItemCommand') || this;
        _this.structureId = structureId;
        _this.params = params;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureEditSourceItemCommand.prototype.getParams = /**
     * @return {?}
     */
    function () {
        return this.params;
    };
    return StructureEditSourceItemCommand;
}(Command));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommand.prototype.params;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceDispatcher = /** @class */ (function () {
    function SourceDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SourceDispatcher.prototype.setLoading = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SourceSetLoadingCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    SourceDispatcher.prototype.setOrigin = /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    function (structureId, items) {
        this.commandDispatcher.dispatch(new SetOriginCommand(structureId, items));
    };
    /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    SourceDispatcher.prototype.editItem = /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    function (structureId, params) {
        this.commandDispatcher.dispatch(new StructureEditSourceItemCommand(structureId, params));
    };
    SourceDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return SourceDispatcher;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDispatcher.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitStructureCommand = /** @class */ (function (_super) {
    __extends(InitStructureCommand, _super);
    function InitStructureCommand(structureId) {
        var _this = _super.call(this, structureId, 'InitStructureCommand') || this;
        _this.structureId = structureId;
        return _this;
    }
    return InitStructureCommand;
}(Command));
if (false) {
    /** @type {?} */
    InitStructureCommand.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetVerticalScrollEnabledCommand = /** @class */ (function (_super) {
    __extends(SetVerticalScrollEnabledCommand, _super);
    function SetVerticalScrollEnabledCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'SetVerticalScrollEnabledCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return SetVerticalScrollEnabledCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetVerticalScrollEnabledCommand.prototype.structureId;
    /** @type {?} */
    SetVerticalScrollEnabledCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetScrollPositionCommand = /** @class */ (function (_super) {
    __extends(SetScrollPositionCommand, _super);
    function SetScrollPositionCommand(structureId, position) {
        var _this = _super.call(this, structureId, 'SetScrollPositionCommand') || this;
        _this.structureId = structureId;
        _this.position = position;
        return _this;
    }
    return SetScrollPositionCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetScrollPositionCommand.prototype.structureId;
    /** @type {?} */
    SetScrollPositionCommand.prototype.position;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSortingCommand = /** @class */ (function (_super) {
    __extends(SetSortingCommand, _super);
    function SetSortingCommand(structureId, sortingConfig) {
        var _this = _super.call(this, structureId, 'SetSortingCommand') || this;
        _this.structureId = structureId;
        _this.sortingConfig = sortingConfig;
        return _this;
    }
    /**
     * @return {?}
     */
    SetSortingCommand.prototype.getSortingConfig = /**
     * @return {?}
     */
    function () {
        return this.sortingConfig;
    };
    return SetSortingCommand;
}(Command));
if (false) {
    /** @type {?} */
    SetSortingCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SetSortingCommand.prototype.sortingConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleSortCommand = /** @class */ (function (_super) {
    __extends(ToggleSortCommand, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetConfigQuickFilterCommand = /** @class */ (function (_super) {
    __extends(StructureSetConfigQuickFilterCommand, _super);
    function StructureSetConfigQuickFilterCommand(structureId, quickFiltersConfig) {
        var _this = _super.call(this, structureId, 'StructureSetConfigQuickFilterCommand') || this;
        _this.structureId = structureId;
        _this.quickFiltersConfig = quickFiltersConfig;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSetConfigQuickFilterCommand.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.quickFiltersConfig;
    };
    return StructureSetConfigQuickFilterCommand;
}(Command));
if (false) {
    /** @type {?} */
    StructureSetConfigQuickFilterCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommand.prototype.quickFiltersConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetConfigSearchingCommand = /** @class */ (function (_super) {
    __extends(StructureSetConfigSearchingCommand, _super);
    function StructureSetConfigSearchingCommand(structureId, searchConfig) {
        var _this = _super.call(this, structureId, 'StructureSetConfigSearchingCommand') || this;
        _this.structureId = structureId;
        _this.searchConfig = searchConfig;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSetConfigSearchingCommand.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.searchConfig;
    };
    return StructureSetConfigSearchingCommand;
}(Command));
if (false) {
    /** @type {?} */
    StructureSetConfigSearchingCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigSearchingCommand.prototype.searchConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitFieldsCommand = /** @class */ (function (_super) {
    __extends(InitFieldsCommand, _super);
    function InitFieldsCommand(structureId, compositionId, columns) {
        var _this = _super.call(this, structureId, 'InitFieldsCommand') || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.columns = columns;
        return _this;
    }
    return InitFieldsCommand;
}(Command));
if (false) {
    /** @type {?} */
    InitFieldsCommand.prototype.structureId;
    /** @type {?} */
    InitFieldsCommand.prototype.compositionId;
    /** @type {?} */
    InitFieldsCommand.prototype.columns;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureCommandService = /** @class */ (function () {
    function StructureCommandService(commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        this.commandDispatcher = commandDispatcher;
        this.structureFilterCommandService = structureFilterCommandService;
        this.sourceDispatcher = sourceDispatcher;
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.init = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new InitStructureCommand(structureId));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.enableVerticalScroll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, true));
    };
    /**
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.disableVerticalScroll = /**
     * @param {?=} structureId
     * @return {?}
     */
    function (structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, false));
    };
    /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setScrollPosition = /**
     * @param {?} position
     * @param {?=} structureId
     * @return {?}
     */
    function (position, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    };
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setOrigin = /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setSortingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new SetSortingCommand(structureId, config));
    };
    /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.toggleSort = /**
     * @param {?} fieldId
     * @param {?=} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    function (fieldId, compositionId, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new ToggleSortCommand(structureId, compositionId, fieldId));
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setFilterConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.structureFilterCommandService.setFilteringEnabled(config, structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new StructureSetConfigQuickFilterCommand(structureId, config));
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new StructureSetConfigSearchingCommand(structureId, config));
    };
    /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    StructureCommandService.prototype.initFields = /**
     * @param {?} columns
     * @param {?} compositionId
     * @param {?=} structureId
     * @return {?}
     */
    function (columns, compositionId, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, compositionId, columns));
    };
    StructureCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCommandService.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: StructureFilterCommandService },
        { type: SourceDispatcher }
    ]; };
    return StructureCommandService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureCommandService.prototype.sourceDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalStructureCommandService = /** @class */ (function (_super) {
    __extends(LocalStructureCommandService, _super);
    function LocalStructureCommandService(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        var _this = _super.call(this, commandDispatcher, structureFilterCommandService, sourceDispatcher) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureCommandService.prototype.init = /**
     * @return {?}
     */
    function () {
        _super.prototype.init.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandService.prototype.enableVerticalScroll = /**
     * @return {?}
     */
    function () {
        _super.prototype.enableVerticalScroll.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandService.prototype.disableVerticalScroll = /**
     * @return {?}
     */
    function () {
        _super.prototype.disableVerticalScroll.call(this, this.structureId);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    LocalStructureCommandService.prototype.setOrigin = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        _super.prototype.setOrigin.call(this, items, this.structureId);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    LocalStructureCommandService.prototype.setScrollPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        _super.prototype.setScrollPosition.call(this, position, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandService.prototype.setSortingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setSortingConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    LocalStructureCommandService.prototype.toggleSort = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        _super.prototype.toggleSort.call(this, fieldId, this.compositionId, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandService.prototype.setFilterConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setFilterConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandService.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setQuickFiltersConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandService.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setSearchingConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    LocalStructureCommandService.prototype.initFields = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        _super.prototype.initFields.call(this, columns, this.compositionId, this.structureId);
    };
    LocalStructureCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: CompositionId },
        { type: CommandDispatcher },
        { type: StructureFilterCommandService },
        { type: SourceDispatcher }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "init", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "enableVerticalScroll", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "disableVerticalScroll", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setOrigin", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setScrollPosition", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setSortingConfig", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FieldId]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "toggleSort", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setFilterConfig", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setQuickFiltersConfig", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, StructureId]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setSearchingConfig", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "initFields", null);
    return LocalStructureCommandService;
}(StructureCommandService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandService.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureQueryService = /** @class */ (function () {
    function StructureQueryService(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureQueryService.prototype.select = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = globalStructureId; }
        return this.structureRepository.select(aggregateId);
    };
    /**
     * @param {?=} aggregateId
     * @return {?}
     */
    StructureQueryService.prototype.selectVerticalScrollEnabled = /**
     * @param {?=} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        if (aggregateId === void 0) { aggregateId = globalStructureId; }
        return this.structureRepository
            .select(aggregateId)
            .pipe(map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.isVerticalScrollEnabled(); })), distinctUntilChanged());
    };
    StructureQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureQueryService.ctorParameters = function () { return [
        { type: StructureRepository }
    ]; };
    return StructureQueryService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureQueryService.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalStructureQueryService = /** @class */ (function (_super) {
    __extends(LocalStructureQueryService, _super);
    function LocalStructureQueryService(structureId, structureRepository) {
        var _this = _super.call(this, structureRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureQueryService.prototype.selectVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectVerticalScrollEnabled.call(this, this.structureId);
    };
    LocalStructureQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureRepository }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalStructureQueryService.prototype, "select", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalStructureQueryService.prototype, "selectVerticalScrollEnabled", null);
    return LocalStructureQueryService;
}(StructureQueryService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureQueryService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFieldUiArchive = /** @class */ (function (_super) {
    __extends(StructureFieldUiArchive, _super);
    function StructureFieldUiArchive() {
        return _super.call(this) || this;
    }
    StructureFieldUiArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFieldUiArchive.ctorParameters = function () { return []; };
    return StructureFieldUiArchive;
}(ReactiveAggregateArchive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFieldUiRepository = /** @class */ (function () {
    function StructureFieldUiRepository(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFieldUiRepository.prototype.selectFields = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFieldUiArchive.select(structureId);
    };
    StructureFieldUiRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFieldUiRepository.ctorParameters = function () { return [
        { type: StructureFieldUiArchive }
    ]; };
    return StructureFieldUiRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiRepository.prototype.structureFieldUiArchive;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureEditSourceItemParams = /** @class */ (function () {
    function StructureEditSourceItemParams(itemId, columnFieldId, // TODO Rethink
    value) {
        this.itemId = itemId;
        this.columnFieldId = columnFieldId;
        this.value = value;
    }
    /**
     * @return {?}
     */
    StructureEditSourceItemParams.prototype.getItemId = /**
     * @return {?}
     */
    function () {
        return this.itemId;
    };
    /**
     * @return {?}
     */
    StructureEditSourceItemParams.prototype.getColumnFieldId = /**
     * @return {?}
     */
    function () {
        return this.columnFieldId;
    };
    /**
     * @return {?}
     */
    StructureEditSourceItemParams.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    return StructureEditSourceItemParams;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemParams.prototype.itemId;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemParams.prototype.columnFieldId;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemParams.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceCommandService = /** @class */ (function (_super) {
    __extends(SourceCommandService, _super);
    function SourceCommandService(sourceDispatcher, structureFieldUiRepository, sourceQueryService) {
        var _this = _super.call(this) || this;
        _this.sourceDispatcher = sourceDispatcher;
        _this.structureFieldUiRepository = structureFieldUiRepository;
        _this.sourceQueryService = sourceQueryService;
        return _this;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.setOrigin = /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.setLoading = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.setLoading(structureId, enabled);
    };
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.editItem = /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    function (params, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        this.sourceDispatcher.editItem(structureId, params);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandService.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    function (itemIndex, fieldIndex, value, structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = globalStructureId; }
        /** @type {?} */
        var itemId$ = this.sourceQueryService
            .selectOne()
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities[itemIndex].getId();
        })));
        /** @type {?} */
        var fieldId$ = this.structureFieldUiRepository
            .selectFields(structureId);
        zip(itemId$, fieldId$)
            .pipe(take(1), this.takeUntil())
            .subscribe((/**
         * @param {?} array
         * @return {?}
         */
        function (array) {
            /** @type {?} */
            var itemId = array[0];
            /** @type {?} */
            var fields = array[1];
            _this.editItem(new StructureEditSourceItemParams(itemId, fields[fieldIndex], value), structureId);
        }));
    };
    SourceCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceCommandService.ctorParameters = function () { return [
        { type: SourceDispatcher },
        { type: StructureFieldUiRepository },
        { type: SourceQueryService }
    ]; };
    return SourceCommandService;
}(Reactive));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.structureFieldUiRepository;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalSourceCommandService = /** @class */ (function (_super) {
    __extends(LocalSourceCommandService, _super);
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
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "setOrigin", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "setLoading", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [StructureEditSourceItemParams]),
        __metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "editItem", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Object]),
        __metadata("design:returntype", void 0)
    ], LocalSourceCommandService.prototype, "editItemByIndex", null);
    return LocalSourceCommandService;
}(SourceCommandService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalSourceQueryService = /** @class */ (function (_super) {
    __extends(LocalSourceQueryService, _super);
    function LocalSourceQueryService(structureId, structureRepository, structureSourceOriginRepository) {
        var _this = _super.call(this, structureRepository, structureSourceOriginRepository) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.select = /**
     * @return {?}
     */
    function () {
        return _super.prototype.select.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.selectOriginSize = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectOriginSize.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.selectOne = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectOne.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalSourceQueryService.prototype.selectLoading = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectLoading.call(this, this.structureId);
    };
    LocalSourceQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSourceQueryService.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureRepository },
        { type: StructureSourceOriginRepository }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "select", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "selectOriginSize", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "selectOne", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalSourceQueryService.prototype, "selectLoading", null);
    return LocalSourceQueryService;
}(SourceQueryService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceQueryService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalCompositionCommandService = /** @class */ (function (_super) {
    __extends(LocalCompositionCommandService, _super);
    function LocalCompositionCommandService(compositionId, compositionDispatcher) {
        var _this = _super.call(this, compositionDispatcher) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.init = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.init.call(this, this.compositionId);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setColumns = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        _super.prototype.setColumns.call(this, params, this.compositionId);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.setWidth.call(this, width, this.compositionId);
    };
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setContainerWidth = /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    function (width, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.setContainerWidth.call(this, width, this.compositionId);
    };
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionCommandService.prototype.setResizeWidth = /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    function (enabled, compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        _super.prototype.setResizeWidth.call(this, enabled, this.compositionId);
    };
    LocalCompositionCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalCompositionCommandService.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionDispatcher }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CompositionId]),
        __metadata("design:returntype", void 0)
    ], LocalCompositionCommandService.prototype, "init", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], LocalCompositionCommandService.prototype, "setColumns", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, CompositionId]),
        __metadata("design:returntype", void 0)
    ], LocalCompositionCommandService.prototype, "setWidth", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, CompositionId]),
        __metadata("design:returntype", void 0)
    ], LocalCompositionCommandService.prototype, "setContainerWidth", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, CompositionId]),
        __metadata("design:returntype", void 0)
    ], LocalCompositionCommandService.prototype, "setResizeWidth", null);
    return LocalCompositionCommandService;
}(CompositionCommandService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandService.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalCompositionQueryService = /** @class */ (function (_super) {
    __extends(LocalCompositionQueryService, _super);
    function LocalCompositionQueryService(compositionId, compositionRepository) {
        var _this = _super.call(this, compositionRepository) || this;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectHeaderColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectHeaderColumns.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectTemplateColumns = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectTemplateColumns.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectWidthForEachColumn = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectWidthForEachColumn.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectWidth.call(this, this.compositionId);
    };
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectContainerWidth = /**
     * @param {?=} compositionId
     * @return {?}
     */
    function (compositionId) {
        if (compositionId === void 0) { compositionId = globalCompositionId; }
        return _super.prototype.selectContainerWidth.call(this, this.compositionId);
    };
    /**
     * @return {?}
     */
    LocalCompositionQueryService.prototype.selectResizeWidth = /**
     * @return {?}
     */
    function () {
        return _super.prototype.selectResizeWidth.call(this, this.compositionId);
    };
    LocalCompositionQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalCompositionQueryService.ctorParameters = function () { return [
        { type: CompositionId },
        { type: CompositionRepository }
    ]; };
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectHeaderColumns", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectTemplateColumns", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectWidthForEachColumn", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectWidth", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [CompositionId]),
        __metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectContainerWidth", null);
    __decorate([
        Override,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], LocalCompositionQueryService.prototype, "selectResizeWidth", null);
    return LocalCompositionQueryService;
}(CompositionQueryService));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionQueryService.prototype.compositionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var localProviders = [
    { provide: PagingCommandService, useClass: LocalPagingCommandService },
    { provide: PagingQueryService, useClass: LocalPagingQueryService },
    { provide: SchemaCommandService, useClass: LocalSchemaCommandService },
    { provide: SchemaQueryService, useClass: LocalSchemaQueryService },
    { provide: FormationCommandService, useClass: LocalFormationCommandService },
    { provide: FormationQueryService, useClass: LocalFormationQueryService },
    { provide: StructureCommandService, useClass: LocalStructureCommandService },
    { provide: StructureQueryService, useClass: LocalStructureQueryService },
    { provide: SourceCommandService, useClass: LocalSourceCommandService },
    { provide: SourceQueryService, useClass: LocalSourceQueryService },
    { provide: CompositionCommandService, useClass: LocalCompositionCommandService },
    { provide: CompositionQueryService, useClass: LocalCompositionQueryService },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaCssClassManager = /** @class */ (function () {
    function SchemaCssClassManager(rendererFactory2, schemaQueryService) {
        this.rendererFactory2 = rendererFactory2;
        this.schemaQueryService = schemaQueryService;
        this.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
        this.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
        this.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
        this.THEME_MATERIAL_CLASS_NAME = 'gui-material';
        this.THEME_LIGHT_CLASS_NAME = 'gui-light';
        this.THEME_DARK_CLASS_NAME = 'gui-dark';
        this.ROW_COLORING_ODD = 'gui-rows-odd';
        this.ROW_COLORING_EVEN = 'gui-rows-even';
        this.cssClass = null;
        this.unsubscribe$ = new Subject();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    SchemaCssClassManager.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} elementRef
     * @param {?} structureId
     * @return {?}
     */
    SchemaCssClassManager.prototype.init = /**
     * @param {?} elementRef
     * @param {?} structureId
     * @return {?}
     */
    function (elementRef, structureId) {
        var _this = this;
        this.cssHostRef = elementRef;
        this.schemaQueryService
            .selectCssClasses(structureId)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            /** @type {?} */
            var diff = _this.updateState(classes);
            _this.renderCssClasses(diff);
        }));
    };
    /**
     * @private
     * @param {?} css
     * @return {?}
     */
    SchemaCssClassManager.prototype.updateState = /**
     * @private
     * @param {?} css
     * @return {?}
     */
    function (css) {
        var _this = this;
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            /** @type {?} */
            var diff_1 = {};
            Object.keys(this.cssClass)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (css[key] !== _this.cssClass[key]) {
                    diff_1[key] = css[key];
                }
            }));
            this.cssClass = css;
            return diff_1;
        }
    };
    /**
     * @private
     * @param {?} diff
     * @return {?}
     */
    SchemaCssClassManager.prototype.renderCssClasses = /**
     * @private
     * @param {?} diff
     * @return {?}
     */
    function (diff) {
        if (diff.hasOwnProperty('verticalGrid')) {
            this.toggleCssClass(diff.verticalGrid, this.VERTICAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('horizontalGrid')) {
            this.toggleCssClass(diff.horizontalGrid, this.HORIZONTAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('theme')) {
            this.removeThemeCssClasses();
            this.addClass(this.resolveThemeClassName(diff.theme));
        }
        if (diff.hasOwnProperty('rowColoring')) {
            this.removeRowColoringClasses();
            this.addClass(this.resolveRowColoringClassName(diff.rowColoring));
        }
    };
    /**
     * @private
     * @param {?} toggle
     * @param {?} cssClassName
     * @return {?}
     */
    SchemaCssClassManager.prototype.toggleCssClass = /**
     * @private
     * @param {?} toggle
     * @param {?} cssClassName
     * @return {?}
     */
    function (toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SchemaCssClassManager.prototype.removeThemeCssClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaTheme[key]; }))
            .map((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) { return _this.resolveThemeClassName(theme); }))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        function (className) { return !!className; }))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        function (className) {
            _this.removeClass(className);
        }));
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    SchemaCssClassManager.prototype.resolveThemeClassName = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case SchemaTheme.FABRIC:
            case SchemaTheme[SchemaTheme.FABRIC]:
                return this.THEME_FABRIC_CLASS_NAME;
            case SchemaTheme.MATERIAL:
            case SchemaTheme[SchemaTheme.MATERIAL]:
                return this.THEME_MATERIAL_CLASS_NAME;
            case SchemaTheme.LIGHT:
            case SchemaTheme[SchemaTheme.LIGHT]:
                return this.THEME_LIGHT_CLASS_NAME;
            case SchemaTheme.DARK:
            case SchemaTheme[SchemaTheme.DARK]:
                return this.THEME_DARK_CLASS_NAME;
            default:
                return this.THEME_FABRIC_CLASS_NAME;
        }
    };
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    SchemaCssClassManager.prototype.resolveRowColoringClassName = /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        switch (coloring) {
            case SchemaRowColoring.ODD:
            case SchemaRowColoring[SchemaRowColoring.ODD]:
                return this.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return this.ROW_COLORING_EVEN;
            default:
                return null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    SchemaCssClassManager.prototype.removeRowColoringClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return SchemaRowColoring[key]; }))
            .map((/**
         * @param {?} coloring
         * @return {?}
         */
        function (coloring) { return _this.resolveRowColoringClassName(coloring); }))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        function (className) { return !!className; }))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        function (className) {
            _this.removeClass(className);
        }));
    };
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    SchemaCssClassManager.prototype.addClass = /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    function (cssClassName) {
        if (cssClassName) {
            this.renderer.addClass(this.cssHostRef.nativeElement, cssClassName);
        }
    };
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    SchemaCssClassManager.prototype.removeClass = /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    function (cssClassName) {
        if (cssClassName) {
            this.renderer.removeClass(this.cssHostRef.nativeElement, cssClassName);
        }
    };
    SchemaCssClassManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCssClassManager.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: SchemaQueryService }
    ]; };
    return SchemaCssClassManager;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.VERTICAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.HORIZONTAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_FABRIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_MATERIAL_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_LIGHT_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.THEME_DARK_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.ROW_COLORING_ODD;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.ROW_COLORING_EVEN;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssClass;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssHostRef;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.rendererFactory2;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.schemaQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureCellEditArchive = /** @class */ (function (_super) {
    __extends(StructureCellEditArchive, _super);
    function StructureCellEditArchive() {
        return _super.call(this) || this;
    }
    StructureCellEditArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCellEditArchive.ctorParameters = function () { return []; };
    return StructureCellEditArchive;
}(ReactiveArchive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureCellEditStore = /** @class */ (function (_super) {
    __extends(StructureCellEditStore, _super);
    function StructureCellEditStore() {
        return _super.call(this) || this;
    }
    StructureCellEditStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCellEditStore.ctorParameters = function () { return []; };
    return StructureCellEditStore;
}(ReactiveArchive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureEditModeArchive = /** @class */ (function (_super) {
    __extends(StructureEditModeArchive, _super);
    function StructureEditModeArchive() {
        return _super.call(this) || this;
    }
    StructureEditModeArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureEditModeArchive.ctorParameters = function () { return []; };
    return StructureEditModeArchive;
}(ReactiveArchive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationPanelConfig = /** @class */ (function () {
    function StructureAggregationPanelConfig(top, bottom) {
        this.top = false;
        this.bottom = true;
        if (top !== undefined && top !== null) {
            this.top = top;
        }
        if (bottom !== undefined && bottom !== null) {
            this.bottom = bottom;
        }
    }
    /**
     * @return {?}
     */
    StructureAggregationPanelConfig.prototype.itTopEnabled = /**
     * @return {?}
     */
    function () {
        return this.top;
    };
    /**
     * @return {?}
     */
    StructureAggregationPanelConfig.prototype.itBottomEnabled = /**
     * @return {?}
     */
    function () {
        return this.bottom;
    };
    return StructureAggregationPanelConfig;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelConfig.prototype.top;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelConfig.prototype.bottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationArchive = /** @class */ (function (_super) {
    __extends(StructureAggregationArchive, _super);
    function StructureAggregationArchive() {
        return _super.call(this, new StructureAggregationPanelConfig()) || this;
    }
    StructureAggregationArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationArchive.ctorParameters = function () { return []; };
    return StructureAggregationArchive;
}(ReactiveArchive));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationPanelConfigConverter = /** @class */ (function () {
    function StructureAggregationPanelConfigConverter() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregationPanelConfigConverter.prototype.convert = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.enabled) {
            return new StructureAggregationPanelConfig(config.top, config.bottom);
        }
        else {
            return new StructureAggregationPanelConfig(false, false);
        }
    };
    StructureAggregationPanelConfigConverter.decorators = [
        { type: Injectable }
    ];
    return StructureAggregationPanelConfigConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetAggregationEnabledCommand = /** @class */ (function (_super) {
    __extends(StructureSetAggregationEnabledCommand, _super);
    function StructureSetAggregationEnabledCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'StructureSetAggregationEnabledCommand') || this;
        _this.structureId = structureId;
        _this.enabled = enabled;
        return _this;
    }
    return StructureSetAggregationEnabledCommand;
}(Command));
if (false) {
    /** @type {?} */
    StructureSetAggregationEnabledCommand.prototype.structureId;
    /** @type {?} */
    StructureSetAggregationEnabledCommand.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationCommandService = /** @class */ (function () {
    function StructureAggregationCommandService(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureAggregationCommandService.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetAggregationEnabledCommand(structureId, enabled));
    };
    StructureAggregationCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationCommandService.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return StructureAggregationCommandService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationCommandService.prototype.commandDispatcher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationConfigService = /** @class */ (function () {
    function StructureAggregationConfigService(structureAggregationPanelConfigConverter, structureAggregationArchive, structureAggregationCommandService, structureId) {
        this.structureAggregationPanelConfigConverter = structureAggregationPanelConfigConverter;
        this.structureAggregationArchive = structureAggregationArchive;
        this.structureAggregationCommandService = structureAggregationCommandService;
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregationConfigService.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var aggregationPanelConfig = this.structureAggregationPanelConfigConverter.convert(config);
        this.structureAggregationArchive.set(aggregationPanelConfig);
        this.structureAggregationCommandService.setAggregationEnabled(config.enabled, this.structureId);
    };
    StructureAggregationConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationConfigService.ctorParameters = function () { return [
        { type: StructureAggregationPanelConfigConverter },
        { type: StructureAggregationArchive },
        { type: StructureAggregationCommandService },
        { type: StructureId }
    ]; };
    return StructureAggregationConfigService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationArchive;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureAggregationCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationConfigService.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var structureComponentToken = new InjectionToken('StructureComponentToken');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var StructureCellEditState = {
    ENTER: 0,
    SUBMIT: 1,
    CANCEL: 2,
};
StructureCellEditState[StructureCellEditState.ENTER] = 'ENTER';
StructureCellEditState[StructureCellEditState.SUBMIT] = 'SUBMIT';
StructureCellEditState[StructureCellEditState.CANCEL] = 'CANCEL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    __extends(StructureGateway, _super);
    function StructureGateway(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureSummaryEnabledArchive, structureAggregationConfigService, structureCellEditStore) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.structureCommandService = structureCommandService;
        _this.pagingCommandService = pagingCommandService;
        _this.pagingEventService = pagingEventService;
        _this.sourceCommandService = sourceCommandService;
        _this.sourceEventService = sourceEventService;
        _this.schemaCommandService = schemaCommandService;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionEventService = compositionEventService;
        _this.formationEventService = formationEventService;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        _this.structureAggregationConfigService = structureAggregationConfigService;
        _this.structureCellEditStore = structureCellEditStore;
        _this.source = [];
        _this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        _this.pageChanged = new EventEmitter();
        _this.pageSizeChanged = new EventEmitter();
        _this.itemsSelected = new EventEmitter();
        _this.columnsChanged = new EventEmitter();
        _this.containerWidthChanged = new EventEmitter();
        _this.sourceEdited = new EventEmitter();
        _this.cellEditEntered = new EventEmitter();
        _this.cellEditCanceled = new EventEmitter();
        _this.cellEditSubmitted = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    StructureGateway.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (simpleChanges.summaryPanel !== undefined && simpleChanges.summaryPanel.currentValue !== undefined) {
            this.structureSummaryEnabledArchive.set(this.summaryPanel);
        }
        if (simpleChanges.aggregation !== undefined && simpleChanges.aggregation.currentValue !== undefined) {
            this.structureAggregationConfigService.set(this.aggregation);
        }
        if (simpleChanges.editMode !== undefined && simpleChanges.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.set(this.editMode);
        }
        if (simpleChanges.cellEditing !== undefined && simpleChanges.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.set(this.cellEditing);
        }
        if (simpleChanges.width !== undefined && simpleChanges.width.currentValue !== undefined) {
            this.compositionCommandService.setWidth(this.width);
        }
        if (simpleChanges.autoResizeWidth !== undefined && simpleChanges.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandService.setResizeWidth(this.autoResizeWidth);
        }
        if (simpleChanges.columnHeaderTop !== undefined && simpleChanges.columnHeaderTop.currentValue !== undefined) {
            this.schemaCommandService.changeTopHeader(this.columnHeaderTop);
        }
        if (simpleChanges.columnHeaderBottom !== undefined && simpleChanges.columnHeaderBottom.currentValue !== undefined) {
            this.schemaCommandService.changeBottomHeader(this.columnHeaderBottom);
        }
        if (simpleChanges.loading !== undefined && simpleChanges.loading.currentValue !== undefined) {
            this.sourceCommandService.setLoading(this.loading);
        }
        if (simpleChanges.paging !== undefined && simpleChanges.paging.currentValue !== undefined) {
            /** @type {?} */
            var pagingConfig = void 0;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
            }
            this.pagingCommandService.setPaging(pagingConfig);
        }
        if (simpleChanges.columns) {
            this.structureCommandService.initFields(this.columns, this.compositionId, this.structureId);
            // this.compositionCommandService.setColumns(this.columns);
        }
        if (simpleChanges.verticalGrid !== undefined && simpleChanges.verticalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeVerticalGrid(this.verticalGrid);
        }
        if (simpleChanges.horizontalGrid !== undefined && simpleChanges.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeHorizontalGrid(this.horizontalGrid);
        }
        if (simpleChanges.theme !== undefined && simpleChanges.theme.currentValue !== undefined) {
            this.schemaCommandService.setTheme(this.theme);
        }
        if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
            this.schemaCommandService.setRowColoring(this.rowColoring);
        }
        if (simpleChanges.height && this.height) {
            this.schemaCommandService.setHeight(this.height);
        }
        if (simpleChanges.virtualScroll !== undefined && simpleChanges.virtualScroll.currentValue !== undefined) {
            if (this.virtualScroll) {
                this.structureCommandService.enableVerticalScroll();
            }
            else {
                this.structureCommandService.disableVerticalScroll();
            }
        }
        if (simpleChanges.sorting !== undefined && simpleChanges.sorting.currentValue !== undefined) {
            /** @type {?} */
            var sorting = void 0;
            if (typeof this.sorting === 'boolean') {
                sorting = {
                    enabled: this.sorting
                };
            }
            else {
                sorting = this.sorting;
            }
            this.structureCommandService.setSortingConfig(sorting);
        }
        if (simpleChanges.filtering !== undefined && simpleChanges.filtering.currentValue !== undefined) {
            /** @type {?} */
            var filtering = void 0;
            if (typeof this.filtering === 'boolean') {
                filtering = {
                    enabled: this.filtering
                };
            }
            else {
                filtering = this.filtering;
            }
            this.structureCommandService.setFilterConfig(filtering);
        }
        if (simpleChanges.quickFilters !== undefined && simpleChanges.quickFilters.currentValue !== undefined) {
            /** @type {?} */
            var quickFilters = void 0;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandService.setQuickFiltersConfig(quickFilters);
        }
        if (simpleChanges.searching !== undefined && simpleChanges.searching.currentValue !== undefined) {
            /** @type {?} */
            var searching = void 0;
            if (typeof this.searching === 'boolean') {
                searching = {
                    enabled: this.searching
                };
            }
            else {
                searching = this.searching;
            }
            this.structureCommandService.setSearchingConfig(searching);
        }
        /**
         * Setting source should be last step
         */
        if (simpleChanges.source) {
            this.sourceCommandService.setOrigin(this.source);
        }
    };
    /**
     * @return {?}
     */
    StructureGateway.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pagingEventService
            .selectPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            _this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventService
            .selectPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            _this.pageSizeChanged.emit(pageSize);
        }));
        this.formationEventService
            .selectItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.itemsSelected.emit(items);
        }));
        this.compositionEventService
            .selectColumnsChanged(this.compositionId)
            .pipe(skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.columnsChanged.emit();
        }));
        this.compositionEventService
            .selectContainerWidthChanged(this.compositionId)
            .pipe(
        // skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        function (containerWidth) {
            _this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .selectSourceEdited(this.structureId)
            .pipe(
        // this.takeUntil()
        )
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            _this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            switch (state) {
                case StructureCellEditState.ENTER:
                    _this.cellEditEntered.emit();
                    break;
                case StructureCellEditState.SUBMIT:
                    _this.cellEditSubmitted.emit();
                    break;
                case StructureCellEditState.CANCEL:
                    _this.cellEditCanceled.emit();
                    break;
            }
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    StructureGateway.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    StructureGateway.propDecorators = {
        columnHeaderTop: [{ type: Input }],
        columnHeaderBottom: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        autoResizeWidth: [{ type: Input }],
        source: [{ type: Input }],
        columns: [{ type: Input }],
        paging: [{ type: Input }],
        verticalGrid: [{ type: Input }],
        horizontalGrid: [{ type: Input }],
        theme: [{ type: Input }],
        rowColoring: [{ type: Input }],
        loading: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        sorting: [{ type: Input }],
        filtering: [{ type: Input }],
        quickFilters: [{ type: Input }],
        searching: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }],
        summaryPanel: [{ type: Input }],
        aggregation: [{ type: Input }],
        pageChanged: [{ type: Output }],
        pageSizeChanged: [{ type: Output }],
        itemsSelected: [{ type: Output }],
        columnsChanged: [{ type: Output }],
        containerWidthChanged: [{ type: Output }],
        sourceEdited: [{ type: Output }],
        cellEditEntered: [{ type: Output }],
        cellEditCanceled: [{ type: Output }],
        cellEditSubmitted: [{ type: Output }]
    };
    return StructureGateway;
}(SmartComponent));
if (false) {
    /**
     * ********************
     * INPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.columnHeaderTop;
    /** @type {?} */
    StructureGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    StructureGateway.prototype.height;
    /** @type {?} */
    StructureGateway.prototype.width;
    /** @type {?} */
    StructureGateway.prototype.autoResizeWidth;
    /** @type {?} */
    StructureGateway.prototype.source;
    /** @type {?} */
    StructureGateway.prototype.columns;
    /** @type {?} */
    StructureGateway.prototype.paging;
    /** @type {?} */
    StructureGateway.prototype.verticalGrid;
    /** @type {?} */
    StructureGateway.prototype.horizontalGrid;
    /** @type {?} */
    StructureGateway.prototype.theme;
    /** @type {?} */
    StructureGateway.prototype.rowColoring;
    /** @type {?} */
    StructureGateway.prototype.loading;
    /** @type {?} */
    StructureGateway.prototype.virtualScroll;
    /** @type {?} */
    StructureGateway.prototype.sorting;
    /** @type {?} */
    StructureGateway.prototype.filtering;
    /** @type {?} */
    StructureGateway.prototype.quickFilters;
    /** @type {?} */
    StructureGateway.prototype.searching;
    /** @type {?} */
    StructureGateway.prototype.editMode;
    /** @type {?} */
    StructureGateway.prototype.cellEditing;
    /** @type {?} */
    StructureGateway.prototype.summaryPanel;
    /** @type {?} */
    StructureGateway.prototype.aggregation;
    /**
     * ********************
     * OUTPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.pageChanged;
    /** @type {?} */
    StructureGateway.prototype.pageSizeChanged;
    /** @type {?} */
    StructureGateway.prototype.itemsSelected;
    /** @type {?} */
    StructureGateway.prototype.columnsChanged;
    /** @type {?} */
    StructureGateway.prototype.containerWidthChanged;
    /** @type {?} */
    StructureGateway.prototype.sourceEdited;
    /** @type {?} */
    StructureGateway.prototype.cellEditEntered;
    /** @type {?} */
    StructureGateway.prototype.cellEditCanceled;
    /** @type {?} */
    StructureGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    StructureGateway.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.formationEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureSummaryEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureAggregationConfigService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NextPageEvent = /** @class */ (function (_super) {
    __extends(NextPageEvent, _super);
    function NextPageEvent(aggregateId) {
        return _super.call(this, aggregateId, 'NextPageEvent') || this;
    }
    return NextPageEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PrevPageEvent = /** @class */ (function (_super) {
    __extends(PrevPageEvent, _super);
    function PrevPageEvent(aggregateId) {
        return _super.call(this, aggregateId, 'PrevPageEvent') || this;
    }
    return PrevPageEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageChangedEvent = /** @class */ (function (_super) {
    __extends(PageChangedEvent, _super);
    function PageChangedEvent(aggregateId) {
        return _super.call(this, aggregateId, 'PageChangedEvent') || this;
    }
    return PageChangedEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagesizeChangedEvent = /** @class */ (function (_super) {
    __extends(PagesizeChangedEvent, _super);
    function PagesizeChangedEvent(aggregateId) {
        return _super.call(this, aggregateId, 'PagesizeChangedEvent') || this;
    }
    return PagesizeChangedEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingEventService = /** @class */ (function () {
    function PagingEventService(domainEventBus, pagingQueryService) {
        this.domainEventBus = domainEventBus;
        this.pagingQueryService = pagingQueryService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventService.prototype.selectPageChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(NextPageEvent, PrevPageEvent, PageChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingQueryService
                .select(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPage(); })), take(1));
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventService.prototype.selectPageSizeChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(PagesizeChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingQueryService
                .select(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPageSize(); })), take(1));
        })));
    };
    PagingEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingEventService.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: PagingQueryService }
    ]; };
    return PagingEventService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    PagingEventService.prototype.pagingQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditemItemValues = /** @class */ (function () {
    function EditemItemValues(after, before) {
        this.after = after;
        this.before = before;
    }
    return EditemItemValues;
}());
if (false) {
    /** @type {?} */
    EditemItemValues.prototype.after;
    /** @type {?} */
    EditemItemValues.prototype.before;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSourceItemEditedEvent = /** @class */ (function (_super) {
    __extends(StructureSourceItemEditedEvent, _super);
    function StructureSourceItemEditedEvent(aggregateId, beforeItem, afterItem) {
        var _this = _super.call(this, aggregateId, 'StructureSourceItemEditedEvent') || this;
        _this.beforeItem = beforeItem;
        _this.afterItem = afterItem;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSourceItemEditedEvent.prototype.getBeforeItem = /**
     * @return {?}
     */
    function () {
        return this.beforeItem;
    };
    /**
     * @return {?}
     */
    StructureSourceItemEditedEvent.prototype.getAfterItem = /**
     * @return {?}
     */
    function () {
        return this.afterItem;
    };
    return StructureSourceItemEditedEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.beforeItem;
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedEvent.prototype.afterItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceEventService = /** @class */ (function () {
    function SourceEventService(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceEventService.prototype.selectSourceEdited = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.domainEventBus
            .ofEvent((/** @type {?} */ (StructureSourceItemEditedEvent)))
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var afterItem = event.getAfterItem().getData();
            /** @type {?} */
            var beforeItem = event.getBeforeItem().getData();
            return new EditemItemValues(afterItem, beforeItem);
        })));
    };
    SourceEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceEventService.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return SourceEventService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceEventService.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectedRowToggledEvent = /** @class */ (function (_super) {
    __extends(SelectedRowToggledEvent, _super);
    function SelectedRowToggledEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SelectedRowToggledEvent') || this;
    }
    return SelectedRowToggledEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationEventService = /** @class */ (function () {
    function FormationEventService(domainEventBus, structureQueryService) {
        this.domainEventBus = domainEventBus;
        this.structureQueryService = structureQueryService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    FormationEventService.prototype.selectItemSelected = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(SelectedRowToggledEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.structureQueryService
                .select(structureId)
                .pipe(map((/**
             * @param {?} str
             * @return {?}
             */
            function (str) { return str.getSelectedEntities(); })), map((/**
             * @param {?} entities
             * @return {?}
             */
            function (entities) { return entities.map((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) { return ent.getData(); })); })));
        })));
    };
    FormationEventService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormationEventService.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: StructureQueryService }
    ]; };
    return FormationEventService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    FormationEventService.prototype.structureQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
function structureIdFactory(generator) {
    return new StructureId('gui-' + generator.generateId());
}
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
function compositionIdFactory(generator) {
    return new CompositionId('gui-' + generator.generateId());
}
/**
 * \@internal
 * @type {?}
 */
var structureComponentSelfProviders = __spread([
    {
        provide: StructureId,
        useFactory: structureIdFactory,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: CompositionId,
        useFactory: compositionIdFactory,
        deps: [
            StructureIdGenerator
        ]
    }
], localProviders, [
    SchemaCssClassManager,
    StructureCellEditArchive,
    StructureCellEditStore,
    StructureEditModeArchive,
    StructureSummaryEnabledArchive,
    StructureAggregationArchive,
    StructureAggregationConfigService
]);
/**
 * \@internal
 */
var StructureComponent = /** @class */ (function (_super) {
    __extends(StructureComponent, _super);
    function StructureComponent(structureId, compositionId, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureCommandService, structureEditModeArchive, structureCellEditArchive, structureSummaryEnabledArchive, structureAggregationConfigService, structureCellEditStore, elementRef, changeDetectorRef, renderer, structureDefinition, structureQueryService, compositionQueryService, schemaQueryService, schemaStylesManager) {
        var _this = _super.call(this, structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureSummaryEnabledArchive, structureAggregationConfigService, structureCellEditStore) || this;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.structureDefinition = structureDefinition;
        _this.structureQueryService = structureQueryService;
        _this.compositionQueryService = compositionQueryService;
        _this.schemaQueryService = schemaQueryService;
        _this.schemaStylesManager = schemaStylesManager;
        _this.loaderEnabled = false;
        _this.circleLoaderEnabled = true;
        _this.initialLoaderAnimation = false;
        _this.structureCommandService.init();
        compositionCommandService.init();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.schemaQueryService
            .selectHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} height
         * @return {?}
         */
        function (height) {
            _this.structureHeight = height;
        }));
        this.schemaQueryService
            .selectColumnHeader()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columnHeader
         * @return {?}
         */
        function (columnHeader) {
            _this.columnHeader = columnHeader;
        }));
        this.structureQueryService
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            _this.structure = structure;
            _this.loaderEnabled = structure.getSource().isLoading();
            _this.circleLoaderEnabled = structure.isLoaderVisible();
            if (_this.loaderEnabled && !_this.initialLoaderAnimation) {
                _this.initialLoaderAnimation = true;
            }
        }));
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var width = this.elementRef.nativeElement.offsetWidth;
        if (width > 0) {
            this.compositionCommandService.setContainerWidth(width);
        }
        else {
            /**
             * When gui-grid is in dynamic container which is created later then grid.
             */
            timer(0)
                .pipe(this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            function () {
                width = _this.elementRef.nativeElement.offsetWidth;
                if (width > 0) {
                    _this.compositionCommandService.setContainerWidth(width);
                }
            }));
        }
        this.schemaStylesManager
            .init(this.elementRef, this.structureId);
        this.compositionQueryService
            .selectWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.renderer.setStyle(_this.elementRef.nativeElement, 'width', width + 'px');
        }));
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.isBorderEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.isBorderEnabled() && this.structure.isReadyToDisplay();
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.getStructureId = /**
     * @return {?}
     */
    function () {
        return this.structureId;
    };
    StructureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure',
                    template: "<gui-structure-blueprint></gui-structure-blueprint>\n\n<!---------- LOADING ---------->\n<div [ngClass]=\"{'gui-loader-visible': loaderEnabled, 'gui-loader-hidden': !loaderEnabled && initialLoaderAnimation}\"\n\t class=\"gui-loading\">\n\t<gui-spinner *ngIf=\"circleLoaderEnabled\"\n\t\t\t\t [primary]=\"true\"\n\t\t\t\t [diameter]=\"120\">\n\t</gui-spinner>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': "\"gui-structure\"",
                        '[style.min-height.px]': 'structureHeight',
                        '[class.gui-structure-border]': 'isBorderEnabled()',
                        '[id]': 'structureId.toString()'
                    },
                    providers: __spread(structureComponentSelfProviders, [
                        {
                            provide: structureComponentToken,
                            useExisting: StructureComponent
                        }
                    ]),
                    styles: [".gui-bold{font-weight:700}.gui-italic{font-style:italic}", ".gui-header{background:#f2f3f4;border-bottom:1px solid #d6d6d6;height:32px}.gui-header .gui-header-cell{border-right:1px solid transparent;box-sizing:border-box;cursor:pointer;line-height:1em;overflow:hidden;padding:0 16px 0 8px;position:relative;white-space:nowrap;text-overflow:ellipsis;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gui-header .gui-header-cell:last-of-type{border-right:0}.gui-header .gui-header-cell .gui-header-menu{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon{display:none;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABj0lEQVQ4ja2T261UMQxFV2znxdwvyqASOpgzf0jUQC1UQSkUgUQFCHHPnCQOPzeH+R8sRZHysLaXt8O2bT9ijC8hBFFVQgiUUmitcblcXFUZYwCQc8bMfIxBjJHW2m8D3o8xXswMgDknvXfM7PwoIsw5AWitEWNcd8mAz6pqIQTcnRgjMUYA3J0QwrkASimIyErQeTbC7Xb7JCICYGaICCklzIw5JyKCqhJjRFXJOTPnJKVECMHN3b+KSBERROSU6u6oKiklFshHLsdxMOfczcx+ikgBGGOQUmLOSQgBVT3BvolkjIGI0HtHRPanGTwdYdu272ZWgBNUjBEzo9bKvu/knFHVs81rb63tBnwAirufta94fX0lpQT849B7J+dM7x13383dv4wxLMZ4gltGWQ5cHZlzYmYcx0FKCXf/D0a6Xq8fxxip1irLsrXW1UJXVWqt9N65XC7s++5Lbe+925zzWynlHcCaxiXdzFBVWmuICPf7nfXurcRfpqp/eu/ySPdxCtf5mtaU0gKIiBx/ARsJ0yTj9LIKAAAAAElFTkSuQmCC);height:16px;width:16px;margin-right:8px}.gui-header .gui-header-cell .gui-header-menu .gui-sort{display:none;height:16px;width:16px}.gui-header .gui-header-cell .gui-header-menu .gui-sort-asc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFnElEQVR4Xu2dO6slRRSFvxF8gIiZiI9ERgMFB00MTNRf4DMTTUxEMBcRFRFzUTMDxUwZnD8wGoggqIyCBiomPjFTUHyAypY+eBjuub27q6qratfq7HJ3n+5a6+u9uoruc06gbWgFTgw9eg0eATA4BAJAAAyuwODDVwcQAIMrMPjw1QEEwOAKDD58dQABMKwCVwG3wn9rIR8CP4yoxIgd4ErgFeDuyXzz/R/gDPAo8ONIIIwGwEngLHDtAZO/Ae4CvhoFgpEAMPPfBa6eMfdb4M5RIBgFAK/5OzaGgWAEAJaaPxQE0QFYa/4wEEQGINX8ISCICkAu88NDEBGA3OaHhiAaAKXMDwtBJACuB95xzPNT13i+A+6Isk4QBYCtzN/BEwaCCABsbX4oCHoHoJb5YSDoGYDa5oeAoFcAWjG/ewh6BKA187uGoDcAUsy3hz68411Suz+t7G524BUkde6cY/8U878HXgaed57Ik8BjgD02tnTrCoJeAEg13x7wuBl40+nmA8Cn08JSaAh6AMDMtyd51hhhV76Z/wVw/0IA3gJuSITAjv2lE7oqZa0DkMt8E3cNALZfaAhaBiCn+SkAhIagVQBym58KQFgIWgSghPk5AAgJQWsAlDI/FwDhIGgJgJLm5wQgFAStAFDa/NwAhIGgBQC2ML8EACEgqA1Ayhx7f5HHs4iydh1g7rNTx2CPl1VbLKoJQKpwuxW+OYN2/y8FQGonMJCrQVALgK3NLxUB+/CljqkKBDUASBVq6ZW/RQfYHSN1bJtDsDUAqQKtNX+LDtAlBFsCUNP8LQHo6p5gKwBqm781AN1AsAUALZhfA4AuICgNQCvm1wKgeQhKAtCS+TUByAFBys3vseskpQC4GPgIuMm7SrNXt3SFz3uIkgtBnnNIuSA+m77T8E/PgZbUlALgGeDpJScy1ZYyv3YHyDFFNE2fXaFplQ5wDji18GRLmt8KAClxYJreslDT2fISHeAC4Hfgwtmj/19Q2vyWAFgLwV/AJcDfC3SdLS0BgB3UXo7wPsa9hfmtAbAGAtP0mllHFxaUAuA0cI/jXLYyv0UAlkJgmt7n0HRRSSkA7O7fZgE2Gzi0bWl+qwB4IfhjmgV8vshdR3EpAOzQjwAvHYDApjX3Tm/sOE4zS0ntaeBxg7Apol3hR02bzXx7T/HVLCqc9yElAbBD3Qg8B9wGXAGY8W8DLwDZ57QzArUMgJ36RcAT09fYGwg/AR8ATwHZr/ydVqUB2PfEZgdZ72AXXhGtA1BFqy0BWOhX9vKeAMg++EMfKACOVsZeD7e3g8NvAkAAhId8N0BFwBFWqwOoA6gDHKGA7gECYqEIUAQs+pIozQKCdQF1AHUAdYDzGdAsQLOAYI3+8HAUAYoARYAiwNfwtA7g06mrKkWAIkARoAjwNS1FgE+nrqoUAYoARYAiwNe0FAE+nbqqUgQoAhQBigBf01IE+HTqqkoRoAhQBCgCfE1LEeDTqasqRYAiQBGgCPA1LUWAT6euqhQBigBFgCLA17QUAT6duqpSBCgCFAGKAF/TUgT4dOqqShGgCFAEKAJ8TUsR4NOpqypFgCJAEaAI8DUtRYBPp66qFAGKAEWAIsDXtBQBPp26qlIEKAIUAYoAX9NSBPh06qpKEaAIUAQoAnxNSxHg06mrKkWAIkARMHIE3A685+xZVvu+s7brspG+KvZS4BfAfr3suM1+2ewy4LeunXWe/EgAmCSvAQ/NaPM68LBTv+7LRgPgcuBj4LoDzn09/UTrz9076xzAaACYLAbBi8CDe3Fgbf8N4HFgGPNNjBEB2F0bdk9wavrjE+BX50UTqmxkAEIZuXYwAmCtckH2EwBBjFw7DAGwVrkg+wmAIEauHYYAWKtckP0EQBAj1w5DAKxVLsh+AiCIkWuHIQDWKhdkv38BCBOikK5+TTcAAAAASUVORK5CYII=) center/contain no-repeat;display:block}.gui-header .gui-header-cell .gui-header-menu .gui-sort-desc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFcElEQVR4Xu2dPatcVRSGnwhRQUIqwc8mqIVC/ECwsFH/gEk0nWhjpZJeFFREf4AoNjaKnSL+Ak0hgo2EgBZGbJKIYJWA4gcksmAGhuvcO+t87H322us97aw7s9f7PrPec/acO3MIHakVOJS6ezWPAEgOgQAQAMkVSN6+JoAASK5A8vY1AQRAcgWSt68JIADSKnAL8NCq+3PAHxmVyDgBjgLvAc8BN6xMvwZ8CpwBrmQCIRsAZv73wLF9TP4FeCQTBNkA+Bh4fsc7/BPghSxTIBMAlvlXN8b+fh5bHBwB/swAQSYAHge+cZpqtd86a0OXZQLgWeAzp1ungc+dtaHLBMB2+wRAaKy3L14TYIsumgCaAB2+1zUB3KZqAmgCuGGJXqhzAJ0D6DJwLwOKAEVA9MnuXr8iQBGgCFAE+AaGdgJ9OoWqUgQoAhQBigDf0FIE+HQKVaUIUAQoAhQBvqGlCPDpFKpKEaAIUAQoAnxDSxHg0ylUlSJAEaAIUAT4hpYiwKdTqCpFgCJAEaAI8A0tRYBPp1BVigBFgCJAEeAbWooAn06hqhQBigBFgCLAN7QUAT6dQlUpAhQBigBFgG9oKQJ8OoWqUgQoAhQBigDf0FIE+HQKVaUIUAQoAhQBvqGlCPDpFKpKEaAIUAQoAnxDSxHg0ylUlSJAEaAIUAT4hpYiwKdTqCpFgCJAEaAI8A0tRYBPp1BVioCFI8B+pNF+kWupIxIA1bQq/WXRDwBvA48BtwI/Al8C7wL/VCahdQBuAl4FTgD3A78D3wGvr3QrIldJAF4E3gessb3HD8Ap4KciXW1/0pYBuA/4ArA3zN7jb+AV4KMSWpUCwBqxn2i98YBF/wo8WRGCVgEw878G7jhAK4PAftLWJuisRykAjOaTjpXWhKBFADzmr2U0TZ9xaDqopBQAl3cQvbnIWhC0BsAQ800v0/SuQe46iksAYGewfwGHHa+/LqkBQUsADDXfdPoXuHnuK6kSANhizwEPDgDASktD0AoAY8xfa/rwQE13lpcC4E3gjZ2v/v+CkhC0AMBY800p0/StEZoe+CelALCzf7sK2HZZs6uHUhAsDcAU8+2y2a4CZt87KQWAmTyl4RIQLAnAVC2eAC7seueMebwkAK1BsBQAzZpvBpUGoCUIlgCgafNrAdAKBLUBaN78mgC0AEFNAEKYXxuApSGoBUAY85cAYEkIagAQyvylAFgKgtIAhDN/SQCWgKAkACHNXxqA2hCUAmCK+fYJn90TUWSTx7MxVGMfYNc67gXODvj4ePP5huwYlgAgtPktTIC1mTUgmBuA8Oa3BICtpTQEcwLQhfmtAVAagrkA6Mb8FgEoCcEcAHRlfqsAlIJgKgDdmd8yACUgmAJAl+a3DsDcEIwFoFvzIwCwhsD+ceLOXRsKWx7f3CcYA8BU8+1Onp9HrLvan7SwEeRp1i4Rp0JwHAZ9P8B5x3/s7Ld22+Fr3vwoE2Bzs2gKBB8A73hoA14DXh65OxnG/GgATI2D6wNugRtSu8lUKPMjAjAVAucAGFUWzvyoALQIQUjzIwPQEgRhzY8OQAsQhDa/BwCWhCC8+b0AsAQEXZjfEwDWyz2rO4vG7BgOOe2/tLqNq+kdPm9DUXYCvf2UhqAr83ubAGtISkHQnfm9AlAiDro0v2cA5oSgW/N7B2AOCLo2PwMAUyDo3vwsAIyBIIX5mQAYAkEa87MBsIbgK+DufTYWLgJPtX4bl3dTxFPX20aQp+fbgA+BpzduELEbQOxr7F8CfvM8SS81GQFYe3c78Chg5tt3GtoNpOmOzACkM3tbwwIgOQYCQAAkVyB5+5oAAiC5Asnb1wQQAMkVSN6+JoAASK5A8vb/A4djo5Dd1KQLAAAAAElFTkSuQmCC) center/contain no-repeat;display:block}.gui-header .gui-header-cell:hover{background:#e6e7e8}.gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon{display:block}.gui-header-bottom .gui-header{border-bottom:0;border-top:1px solid #d6d6d6}gui-structure{background:#fff;box-sizing:border-box;color:#333;display:block;font-family:Arial;font-size:14px;position:relative}gui-structure *{box-sizing:border-box}gui-structure gui-structure-search-bar form{display:-webkit-box;display:-ms-flexbox;display:flex;background:#fff;height:30px;border-bottom:1px solid #d6d6d6}gui-structure gui-structure-search-bar form .gui-search-icon{position:absolute;top:5px;left:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACSSURBVDhPtZKLEUAwEAWD4lSgLYXQhxI0oAMNcM/cmUQuHwk78+bkczsizB8MlIVycCaey2akbBS7Cc+Yw1oS2RziKVdJvTbWcMwoOH+K4J6WaxUd156yU9Zr5CNHnbmqfPJhQeyK5b/JAk24KWnCjWBOxqqo4ZqDLXD63kiAKnorAZ6oRAIcUakE3KIaCSCRMSdEbCXGTdhJLAAAAABJRU5ErkJggg==);width:17px;height:17px}gui-structure gui-structure-search-bar form input{border:none;padding:6px 6px 6px 38px;height:100%;width:100%}gui-structure gui-structure-header{display:block;height:100%;width:100%}gui-structure gui-structure-header gui-structure-header-filters.gui-header{height:32px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell{padding:4px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell input{position:relative;box-sizing:border-box;font-size:13px;padding:2px;height:100%;width:100%;border:1px solid #d6d6d6}gui-structure-container{display:block;height:100%;overflow:auto;overflow-x:hidden;position:relative;width:100%}gui-structure-container .gui-structure-container{box-sizing:border-box;height:100%;position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content{height:100%;position:relative}gui-structure-container .gui-structure-container .gui-content .gui-row{height:30px;position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#f6f7f8}gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#d0e8fb}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell{border-right:1px solid transparent;box-sizing:border-box;line-height:1em;overflow:hidden;padding:0;white-space:nowrap}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-button{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-cell-boolean{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-checkbox{position:absolute;top:4px;padding-left:22px;line-height:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-chip{margin:0;padding:2px 8px}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-badge{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-input{background:0 0;font-size:14px;border-style:none;border-radius:0;padding:0}gui-structure-container gui-structure-cell{display:inline-block}gui-structure-container gui-structure-cell>span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 8px;height:100%;width:100%}gui-structure-container gui-structure-cell .gui-cell-edit-mode{border:2px solid #2185d0;height:100%;padding:6px}gui-structure-container gui-structure-cell .gui-cell-edit-mode gui-boolean-edit{margin-left:calc(50% - 11px)}.gui-vertical-grid .gui-structure-aggregation-cell,.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell{border-right:1px solid #d6d6d6}.gui-vertical-grid .gui-structure-aggregation-cell:last-of-type,.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell:last-of-type,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell:last-of-type{border-right:0}.gui-horizontal-grid gui-structure-container .gui-row .gui-cell{border-bottom:1px solid #d6d6d6}.gui-horizontal-grid gui-structure-container .gui-row:last-of-type .gui-cell{border-bottom:0}.gui-rows-even .gui-row:nth-child(even),.gui-rows-odd .gui-row:nth-child(odd){background:#f7f8f9}gui-structure-summary{box-sizing:border-box;background:#f2f3f4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 6px;width:100%;line-height:30px;border-top:1px solid #d6d6d6}gui-structure-summary p{margin:0}gui-structure-summary p b{font-weight:700}gui-structure-summary div{color:#333;cursor:pointer}gui-structure-summary div button{background:#999;border-radius:50%;color:#fff;cursor:pointer;font-weight:700;font-family:\"Comic Sans MS\",cursive,sans-serif;width:16px;height:16px;line-height:14px;padding:0;border:1px solid transparent}gui-structure-summary div button:focus{outline:0;box-shadow:0 0 4px #999}.gui-structure-info-panel{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:160px;padding:16px;font-family:Roboto,sans-serif}.gui-structure-info-panel ul{list-style:none;margin:0;padding-left:10px}.gui-structure-info-panel p{font-weight:700;margin:0;color:#333}.gui-structure-info-panel p:nth-child(2){margin:0 0 12px}.gui-structure-info-panel p:nth-child(5){margin:8px 0 0}.gui-structure-info-panel a{text-decoration:none;color:#2185d0;margin:0 0 8px}.gui-structure-info-panel a:hover{color:#59a9e5}.gui-structure-border{border:1px solid #d6d6d6}gui-structure-aggregation-panel{background:#f2f3f4;display:-webkit-box;display:-ms-flexbox;display:flex}gui-structure-aggregation-panel.gui-structure-aggregation-panel-bottom .gui-structure-aggregation-cell{border-top:1px solid #d6d6d6}gui-structure-aggregation-panel.gui-structure-aggregation-panel-top .gui-structure-aggregation-cell{border-bottom:1px solid #d6d6d6}gui-structure-aggregation-panel .gui-structure-aggregation-cell{font-size:14px}gui-structure-aggregation-panel .gui-structure-aggregation-value{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1em;height:30px;padding:8px 6px;overflow:hidden}gui-structure-aggregation-panel .gui-structure-aggregation-value div .gui-math-symbol{position:relative;top:-1px}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-mean,gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-median{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-mean span:nth-child(1){position:absolute;top:-15px;left:1px}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-median span:nth-child(1){position:absolute;top:-8px;left:1px}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.gui-loading{-webkit-animation-duration:.2s;animation-duration:.2s;-ms-flex-line-pack:center;align-content:center;background:rgba(255,255,255,.8);border:1px solid transparent;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;opacity:0;position:absolute;top:0;width:100%;visibility:hidden}.gui-loading gui-spinner{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.gui-loading.gui-loader-hidden{-webkit-animation-name:fadeOut;animation-name:fadeOut;opacity:0;visibility:visible;z-index:-1}.gui-loading.gui-loader-visible{-webkit-animation-name:fadeIn;animation-name:fadeIn;opacity:1;visibility:visible;z-index:1}", "gui-structure-paging{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px}gui-structure-paging>*{padding-left:16px}gui-structure-paging gui-structure-paging-select span{display:inline-block;margin:0 6px 0 0}gui-structure-paging gui-structure-paging-navigator button{margin-right:6px}gui-structure-paging gui-structure-paging-navigator button:last-of-type{margin-right:0}gui-structure-paging gui-structure-paging-stats span{display:inline-block;margin:0 2px 0 0}gui-structure-paging gui-structure-alternative-paging-navigator{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 8px;line-height:34px}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-page{display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-visible-page .gui-paging-page{display:block;cursor:pointer;padding:0 8px}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-active-page{font-weight:700;color:#000;box-shadow:0 1px 0 0 #000}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}gui-structure-paging.gui-structure-paging-bottom{border-top:1px solid #d6d6d6}gui-structure-paging.gui-structure-paging-top{border-bottom:1px solid #d6d6d6}", "@media (max-width:500px){gui-structure-paging gui-structure-paging-stats,gui-structure-paging>*{padding-left:4px}}", ".gui-header{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-header .gui-header-cell{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.gui-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.gui-content .gui-row{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-content .gui-row .gui-cell{display:inline-block}", ".gui-cell .gui-checkbox{display:block}.gui-cell .gui-chip{margin:0;padding:2px 8px}.gui-cell .gui-input{font-size:11px;display:block;padding:2px 4px;width:86%}.gui-cell .gui-button{padding:2px 8px}.gui-cell .gui-cell-number{display:block;text-align:right;width:100%}.gui-cell .gui-cell-boolean{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;text-align:center;width:100%}", ".gui-material .gui-header,.gui-material.gui-structure{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-structure-header .gui-header{font-weight:700;color:grey}.gui-material .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-material .gui-cell .gui-badge,.gui-material .gui-cell .gui-button{padding:0}.gui-material.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}", ".gui-dark .gui-header,.gui-dark.gui-structure{background:#383838;color:#ccc}.gui-dark .gui-structure-border{border:none;box-shadow:5px 5px 10px 2px #1f1f1f}.gui-dark .gui-structure-header .gui-header{color:#bdbdbd;border-bottom-color:#666}.gui-dark .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover,.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#525252}.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-dark.gui-rows-even .gui-row:nth-child(even),.gui-dark.gui-rows-odd .gui-row:nth-child(odd){background:#2c2c2c}.gui-dark .gui-horizontal-grid gui-structure-container .gui-row .gui-cell{border-bottom-color:#666}.gui-dark.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}.gui-dark gui-structure-paging.gui-structure-paging-bottom{border-top-color:#666}.gui-dark gui-structure-paging.gui-structure-paging-top{border-bottom-color:#666}.gui-dark ::-webkit-scrollbar{width:15px}.gui-dark ::-webkit-scrollbar-track{background:#616161}.gui-dark ::-webkit-scrollbar-thumb{background:#424242}.gui-dark ::-webkit-scrollbar-thumb:hover{background:#212121}.gui-dark .gui-structure-aggregation-cell{background:#383838;color:#ccc}.gui-dark .gui-structure-aggregation-panel-bottom .gui-structure-aggregation-cell{border-top-color:#666}.gui-dark .gui-structure-aggregation-panel-top .gui-structure-aggregation-cell{border-bottom-color:#666}.gui-dark gui-structure-summary{background:#383838;border-top-color:#666}.gui-dark gui-structure-summary div{color:#ccc}.gui-dark gui-structure-summary div button{background:#616161}.gui-dark .gui-header .gui-header-cell .gui-header-menu .gui-sort-asc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABFoSURBVHhe7V35b1TXFbbxAsbGHmbFK6AECJRGVEUhBa/gNFKkSKkIi8mi9C+J8nPbHypUpND8kqYBYhPMGioIae0E0kAoi7ENNmZsMNjGeLwvzIzH/b7rd6eDg2fceDzbvZ/09O7ce9/zved859xz3uKXpKGhoaGhoaGhoaGhoaGhoaGhBpKNvVKYmppKPnjwYOrIyEiqz+dblJ2dPZWenu7LzMz07N69e9LopgSUIgAVX1NTk7ZixYqcDRs2FLe1tb3q9XrtbEtNTe1as2bNpdbW1u87OjoGVCGCMgSg8hsbG5dbLJatUHB5Wlrar1C9EVsGNsphDN6gEfsfi4qKvna5XN+vX79+GL8TGkoQQCrfarWW9fT07JmcnCzBlr1o0aKlXALYB2UUfRMpKSmDKH9TWFh4qKurq37jxo0j4iQJioQnAJXf3NxsttlsJZ2dnfs8Hk8Fqs3JycnUOBUv+sky+vvQ1o8l4Tw8wWePHz/+NpE9QUITQCrfZDLR8nfB6rdD0VZYuVA+loEk1Im+qEtyu91ij7opkOEJtnMFBQVHQIZvzWbzoOiYYEhoAjx69MgGJRZ3d3dXwfLLQQgLLZ+Wjn0S6pIQ/ZMo/jIJwd/YptCnD4S4kJeXdxht/0pEEkz7vwTE7du3rdiVwIXvRqRfirJQPtsMBbPoVzhBryCBvjQOC+oq4T2qcI6S/v5+03Rr4iAhPQAtH7uSJ0+e7H369GkZylap/P8XhidwYbn42uFwJJwnSDgPgEDPArdd0tfX9/bExEQp9Gf7ucon6AngBcw41w54k704XzGIlW00xz0SigDGml8GRVWNj4/vgLLs+D1vL8dz4FwWeJPXHj58+B7KFS0tLQlBgoQhwODgoAU7afklMFw7rXe6dX6Awpkd+D0BiFZlsVhKEoEECUEAKn94eHgrgrSddPuocrCe+qfywgXDm1iQLpZ3dXXtQXoZ9ySIewIMDQ3ZRkdHy0CCvSABL/LkM82TYF4/XwSew/AEdvzN15FevhvvJIhrAtDyR0ZGmJ69PTY2Vgbl5NLipdWHywPwHJJUTBVJAsAOb7Md8cYeLAfFt27dyhId4gxxmwbS8ql8RORVCM5KoCQR8FHpzO2pMFnmPlCJBH+zPhAz66hsHmMoXbTLOoK/gZ7Fixf/Mz8//7OBgYGLL7zwQlyliHHpAZjqUfkul2sXlM813x/tBypaliUBApU787fsIxHYxnPINnlugn2wOTCGSgaGy5YtK25ubl5mNMcF/jfLOACUkAxB84peKVM9j8fjt3yjy08gFU3FSW/ATXqJQLAv62jlgccQ/D0beBy23iVLllyIN08QVx4AObg5NTW1lJaPSLwUippTqkcFSchyqMMCj5kjbEwRkR0IT9DW1pZj1Mc04sIDQBnJVD4ssty4vFtM5eM3F32j1+yQyuQ6Lq2b++eBVs/+3Hu93p94idnAY3BOXjYWnsButx8ZHx+vX7169YDRJSYRFx7g/v37Jlp+b28v1/wyCFson0KXyp0NVDY3KlOSRR4nf0sEno9tc3H/hDwOQ2JHeoLXenp69mVnZ2+L9ZggtPlEERCqeJJnxYoV5Qj8quj2oQxxY4cWPBfrNBTqhTJ96J+Gsn/OM4+f4RVw6JQb+zT0C+pp2CaP5TlZxrEuZAfnCwsLP4fXqlu7du2Q6BBjiFkPEKD8Ml5149U3CPaZu3oUfDDFEDjPU7j+bqzLTpaxCUZQUYHHsiwJwT74W2M5OTl34Xkeo8orGoKAx/LU3Hgu7M0YcyWI+47Vai2NVU8QkwSA8JKvX7+e43A4irH274FL5cMc5rS0NOH2aWFQjNhLN02wTYJlbG4ooy0jI6PGZDKdQvkhyMCnfaSSntkkCXBuH/p1gAC1IM4p1HWgfZJ9As7tL3MM3MsYgzDGZ2aKSO+Vl5dXEosXi+Z/nTTM+PDDDxdZLBYT0qkyKH8vUr0dUAxTPzFWKklCKpF7bhS+LEMpbiiuDUr5/OrVq38EefpRrsRhDrT7TyL7zwCDuQ70/xMUd2N0dDQFMQSvMvJBUmE0gX+X5ecBXXniDIwlb2hoKAtzGnz//fe7Dhw4wKUlJhBTHgCCTN65c2dObm5uGa2Gykc17/Lx2qvoQwSW+VwfQSukBVIZOM6Ncjutd926dec++OCDwb6+vnEc93xNzQJY7Pjly5evrly58nBmZuZxHN8Ot+7j3+DfkoSjtcsxcS/LBMriVjLG9NsHDx68g7mVxpIniBkCUPl0+7C4clj+Pgh6OwWHpqBjlEsAhU7FYBOWv3Tp0hMFBQVH6+rqGqgD0elnoKKiwov1+2ZRUdERkKAW525HtVgO5N+Ubn82kATGcsDnCd6NJRLEBAEgxOSGhgYTFCaifbjb7ahm3v+M5T8PVADBfhCyhwqC5Z8EkY6eOXPmxhtvvPFUdJgHNm/e7IEnuAZPcASp3XFUtePvTsqxyTHMBvaDx6AnsILYr0sSgPCZRpeoIeoE4JpP5UvLh6usgFUvp/JpWaGEi37SCqn8u7R8RN1fXrt27ebu3bvDttbSEzidzgYo7ggIVgulduBvCvfDMQSDMT5BAs6N1wlIAqSIZdH2BFElAATzzJoP6+Cab4agRLRPwYbyAAZJvOh7D1H7CVr+lStXbkJhE0aXsGHjxo3uu3fvXofiSAIRE0ChGELIJcBPVJIAsIAEjAmEJ4hmihg1AlD5huVXIM/nms9ULweC8o+JgVYoAuAYD/q0wPJP2mw2YfnhcPuzgcsBYwK+MCJjAowhKAM4B85FAscwJlguYwKku2XReqgkKgSg8nmRh24fls9r+2LNR0SfwqAO7SKy5uVbaV2s4ybLBmj5dwzLr7l06VLDQlj+TBgkuI7A8HBWVhY9QRvGJLIDicAy58C5cE6s5+/09HTKnoHh6/AE7/G9xWh4gogTAALwX+ED+5nn0/KXQ4hizZcWH6h4WSfL3FDm1Tkq/7jdbj8Gy29YSMufCZLgq6++usXsgGNA1T2MWQzaGB+Lz5TlnAiW6e3QZmK6yxQxGp4gogTAZP1v6RprPi3fQkFIJUsFyzLzfCk4ulF6CGy0/Nsmk+kEhH+sqampMRKWPxMMMplpYByCBBjTPVg6LyP713yWOYfZ5se5o58ZJKikJ1i+fHl5JD1BxAhA5RuXd8XrWnB9vLZvRlPQMUjlU1g4B02J6VcrBH4S634tgrLbW7duHRedogCSAKRuQlB4lCTA2JwYM68k+hUt5xAEIjuATMTzBFjOSiJFgogQgMrHhMwInEqMGzsVqOMbPCHv51N47EOhAnx1uwWCPgXlH3v06FFTNJUvQe+DFPEmlqKa7OzskzBqJxQq/L4xdtFvNrAPZYF+jAl23L9/f5/FYolIdhARAkDpVrPZXMpon0/NQDg2TnjaoIODrpTKh5AoxRa4SN6gqb5z504j1uGx6V7RB4mIIPQG0rrDxnWCNoO0Yg7BwD7cIBNmB9bx8XHxyDkIVbrQr6EtOAEC39IFuysgGCvXvenW6ckHg2FJvOByByQSbh+W3xyNNT8UGIQyDUWA+wXiApKAgaEgQTDQA0hANPgprhOIu4g4vqS3t3fBPMGCEgCKssFiS/v6+vZiQttp+VL5FErgTZTngZJDu3D7OM9x3tZtb2+PKcufCRLz3Llz9AQMDI9hunehxJBBgEwRCZIAh5AEwhPgN5+DXJBnDBeMAGCveFcPli/e0kXZhkmKJ3kI8gCEEOXnwVA+O7TCmk7T8nGuqAZ8cwUDQ6aIjAmwHJzAPJyYzqwkoOIpC2Y5BGUEWdEySAK+iyjeSl4IT7AgBKDlI/Up6+/vr+IEMHjx9C4g2rnnxolyY5lCCCwD9J20/GOZmZnC8jdt2jQqThAHIAnoCRD4MiY4hirGBOJikZw7yzQEOXeCbRKMCbCz0hMgfhKeINzXCRaEAHBX68DW3yGYEW/p0qVJxcoJysmT9SwT/G0Ihnk+LZ/R/nFYfnM8WP5MSE9QWFh4FCQ4ibkzRSTEXAmWKQP+lnKQMiJQL0jA191hWG+j/6rplvAg7ARAXk6FbwZrX8GExD9hDAZOlkLgnhtcIa/t8wpfLSz/KCz/VjxZ/kyQBHV1dTdAgsOMCTA3egJxK5mbnHswoJ0gCV7Fz2IEmmH7VzVhJ8Do6OhLXq+3mMo32DsryHiufQHW4IE1tCKXPmW1Wmvp9uPR8meC2cGZM2ca8vPz6QnEM4YkAds492CxUCAgm1xkUmWLFy9+yaiaN8JKAKxTdgzylxjky9iHZClYLTYSAQJ5inIrBHQcgqpGTn0zEZQvQU/Q3Nx8raio6JAREzgxb/+TRaGAPnygJNvj8WyCbF9xOp1h8QJhJQAs/xcI/sT/5ZmLa5Og5cMS7tE6kEPX1tfXN0Xyxk6kwBtI9ASYY01WVhavGIoni4zmkKBMgRXwGCUorxWV80RYCYCcNXd4ePglMDSHgw3l2sh+9OEzfK0QSK1h+RG9qxdpGNkBbyUf4vMEqGqHrPyPnM8GypNeAMgeGxtbiyA712iaF8JKgIyMDBd2vdjcvAM2B7iR795DpH8KQVItI+ZEVr6EsRzcxJyrQQJ6gg4oNujLJ2gXdxVBlFH074asw/I/jMNKgA0bNjQigKuHVZME/hSPGycQCDCaL210YCKnVq1a9SVcY1if4Yt1cDnAOn4Dc/8CMuDFovuQ0zMukzKTnoGyhFx5q7kbpKkvKChoEQ3zRFgJAGY+wCDrYdVNbrd7BIMXt0UDCYCyB7t+un2s+bUrV66s5j11lZQvwWcM4Qn+s2bNGi4HxyCbNsiJ/1eAl7+fMRpD+f3wAo0Isn8wm82dRtO8EFYCEHBrt20221GkKv9GUDiAST2FsjkBKn4Qk2rHJM5j+xQsrlHN8meCnuDixYvXecUQMvsExnMBMqM3GIbM6BHoAsZR7EtPT/8esq3Ny8trhhyDBw1zRNgJgGCue8mSJWeQxx/EvhrKv4HqHrgwvqZ1For/K9zenzs6Ov4C5V9TWfkSFRUVXniAay6Xaz8C4T9A0QdAhH9Adu1QdA/2VyHLQxaL5VN4gfP79+/vMg6dN+aWp/0MVFdXp1RWVuZPTEyUIWLdgAm4wPJvUX8dk434t3lOnz79a6Rfn8CyXoZQQxGfY7va2dn5+7feeqtpuioywPiSz549m75t27ZNXV1d5XD3JofDcQuK/+7jjz9+iC6+jz76KOTdxbliwQgggUGn8eNMWLOmYPlest1oiijihQASfGEGMkvDMroIy+pkY2OjN5yKl1hwAsQK4o0AkULYYwCN+IImgOLQBFAcmgCKQxNAcWgCKA5NAMWhCaA4NAEUhyaA4tAEUByaAIpDE0BxaAIoDk0AxaEJoDg0ARSHJoDi0ARQHJoAikMTQHFoAigOTQDFoQmgODQBFIcmgOLQBFAcmgCKQxNAcWgCKA5NAMWhCaA4NAEUhyaA4tAEUByaAIpDE0BxaAIoDk0AxaEJoDg0ARSHJoDi0ARQHJoAikMTQHFoAigOTQDFoQmgODQBFIcmgOLQBFAcyhFgKuBLpnIv62UdN1WgDAGgVK/P5+NHLIV2pbIDy5IM2E9NTk6Oe73esH+lK9agDAHS09OHsN0GAfjRZSqYn7r1WzzL0x/qTPKlpKQMLF269A76j7EikaEMAYqKip7k5uZegBdwQtE+Kj3w49aSDLD6SWxtDofja7vdPmAcnrBQhgDr168fbm1tvQT3/iMUz0+v+j9uDZ/PLvxg81BqaurDtLS0Hy9evHhly5Ytw2xIZCgVBPK7xvAEh6Hkv/FDzG63uxvWPgiTH/B4PI9Q9x3I8ff8/Pxam83Wx1jAODRhocyXQyX4SdY333xz2erVq3/jdDq3wAnYWQ9lP37xxRd/aGpqutzZ2Tm4a9cuegRNgEQFiZCXl5cyMTEhvKDL5aKy+WHmqHzbWENDQ0NDQ0NDQyNCSEr6L2/pkdEk0sbTAAAAAElFTkSuQmCC) center/contain no-repeat}.gui-dark .gui-header .gui-header-cell .gui-header-menu .gui-sort-desc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABHOSURBVHhe7V1rUxRXGhaYQa4BBkRuCoiIgCCaaDaagFmNifESMUIwmzUfkjVVu2Xtp/1s5U/k635Y4zVWUpWqVGUDctWNibuxoqtZTZUCAZyBGbkIyHDb5zn2YTsGZtjYM8PMOU9VV58+fbrp8z7P+5739IVZpqGhoaGhoaGhoR6ijLUyOHHihA2raIfDIfoeFxc309vbO/3hhx/OcFs1KCGA2dnZqPPnz0fn5eWllJWVbf3xxx+fR10m90VFRbkKCwuv3L179x+ff/75iGpCUEIAHR0dySUlJVu7u7t3xMTEbH706FElBJCEXez/GKLADWx/C4E09fT0XKmqqhoVByqAaGMdsaD39/f3p4PY2unp6Xe8Xu+Ldrs9J8ZmS7XZbCmxsbFZqHthamrqaFdX15GHDx9mGYcqgYgXwJUrV5K3b9++ZXJy8jmQnAtBPIPqaCiD4uAQwCiQBHFkY/u54uLibbdu3UoWByuAiBeAy+VKdTqdu+DtRVhiyPfMzAyJFwuIF2sMDdFAYV9f305Eggzj8IhHxAsA4T1hbGysBESnYjMaRP9MACyzDohCOQnt12NhlFACES8AeD1Jj2cuwG0j7Is1YS5DAFGIAstRx6miEoh4AUhIj5cCIMxikPtVgzIC0JgfWgCKQwtAcWgBKA4tAMWhBaA4tAAUhxaA4tACUBxaAIpDC0BxaAEoDi0AxaEFoDi0ABSHFoDi0AJQHFoAikMLQHFoASgOLQDFoQWgOLQAFIcWgOLQAlAcWgCKQwtAcWgBKA4tAMWhBaA4tAAUhxaA4tACUBxaAIpDC0BxaAEoDi0AxaEFoDi0ABSHFoDi0AJQHFoAikMLQHFoASgOLQDFoQWgOLQAFIcWgOLQAlAcWgCKQwtAcQTkR3JOnDgRXV5ebuvu7o6x2WwzHo9nMlQ/yfrZZ5+V5eXl/RXFZ7GInwdbCLOzszNRUVHf379///19+/b906gOKpqbm2337t2zwWZRSUlJUx988MGksSsgsFQAJB6raFx0bnR09ItOp3PD8uXLB7Ozs1suXbp0bc+ePV4Y+PFPdAUJ4SKAc+fOxYyOjtrr6+urfvrpp5cePXrkWLFixc24uLjWxsbGHtRPG00thWUCIPnvvfdeNojf5na7X5yent48MzOzFgYdjYmJ+RfW3+bm5rZfv3792o4dOyaCJYSlLgASD5KX19TUVMHzt8Nmm3EdVVin4Vo6EUG/S09Pb4IjXYIgeo3DLINlOcDx48dJ/isg/12o92104Fl0ZCXWBVNTU695vd4/9vT0/MXhcByH0jcx1BmHKguQH7t3795N+fn5fwL5f56cnPwDHGcPliLspu02wpb1AwMDx7DeG4jfNbZEACA6qre3t7S/v7+WP8QMj09HdTyWKJT5c63JWFZDCDsnJibeR4g7sn379qqrV6/axQkUhEF+JWxRB+LfxfIK7FiAXSkwmR3k83cMlyMCpMJmv4FtDyOnWv/4aOtgiQCQsOQhRD2PTpQjCqSRc2OX+FFGLkA01inoVBEiwKE7d+68XVpauvnGjRuxoqFCMMjf2NnZWT8yMlILsotRzZAvHIL2Qlmuo2JjY5PgPGWwazXarmIbq2CJAKDidSC1GuRnkXz+IDMhO2EG6mJQt3p8fPwNhL23CgsLN6oUCaTno+9vwgb7YYt82O1nTiAFwEXaEnZdMTw8XH3z5s1yUWERLBEAOpIEZWbhghMRBX5B+pPAfhva50M0BxDW6hEJKmkYY3fE4osvvlj++uuvb0Cfa8fGxvbDq9eg2m+/aVOA7VbA1g5uWAVLBIDstC8hIeE2iB3GMgtFG3vmB5WNNszICyCC2q6urrd3795dFckiIPnbtm2rQCJcj2ROhH14dSxt4QtoQ1sxEgwlJyf/kJWV1WfssgSWCAAXeBsX2o7ifX/km4HOx8AQBTDIAUy96hAaKyJxOCD51dXVZehjLcb8/ejzGthpUf1kNKVNYat+RII2JIX/NnZZAksEgHF8EAr9xm63X8OFiihg7FoQbEL1UwTYLIRhDjESYDjYFEmR4PLly/Hw/Ep6Pvp4EP0uBqH8iXphg0WYit4/iCT7e6yvZ2dnu4xqS2CJAAhMVX7ARbbiIhcVohja4AmiDIMwEuTTO2Cow4wE9BqxM4xB8gsKCsoxj69FArcftiH5wvPZd9qAQvAFtJtFGxc8vyMxMfEHo9oyWCaATZs2DWLVER8f/zVUPYDFp7S5m6GNa6PM2UHR0NDQISRJR2pqajaGcyS4du1aIsjfgBznMPpUi76VgHC7qb+L8n6SHxcX9w2EcHXt2rWWej9hmQAIdOpeTk7OJxBBEzYHqN7Hex4TTlDxVD+8QRiB4DbLWHivgMMBZweHmTGHowjo+ZmZmaXI9A8ODg5yzC9Gv23sI/tK0A60AbdZJmgjlrlGPVazLtiyHUn2pw6H4z+ikcWwVADr1q0bxoW3YZw6CdV+iaoBdPIXIqAhpBC45rbsPEWAJkXMCXjHELODsIoEhueXw/PrHjx4cAh9WofqaEms7Lssy75L2xhlEfZhw6a0tLTTSP5a4Vj9ooHFsFQABNQ6govvwAWfYQdQ5cZ8d25qSNX7G/uwT0aCN1wuV124RALD89fD82vh+ftQVYx+8Fb4gp19IhdaBltxox+2a8O5PkG5PS8vzy0aBACWC4BAuBpiJMCcVUQCdMzNkMZ9tAU6Kdr5Ao6JxjFrmRP09fU1MBI0NzfHGbuXHDB9TaDnj4+P0/OZ7a/DQs9fkHzsF7aQTdDfGQiC5F9MT08/g/O0BcrzJQIiAIKRABxSvafRoUZ0dk4EBDvvCzQKjo9CuzXwplrMod9Colm5FGcHFCaI4phf6/F4DqCqBAu4/N8zkflg1gbJR18HMJNqhuefQ1X7+vXrBx7vDRwCJgAiIyNjGCFcRAIkM4wEIidgx304hgDsYRYBc4JaRIIjmFNvZKg1moUc9PySkpJyXF89PLYWVcLzed3sgz+wj7CJ9Pwm5E+nICLmUQEnnwioAIjS0tIRt9vdtnr16lNQdxMM42GH/UUAtJuLEvQkGLMQc+kDzAkKCwsrl8JwQCHC88vg+YcwVPHBzjoQKsjntbMPvsA2tAWOccfGxjaD9LNIfNthMw/qfBvIIgRcAARF0Nvb244OnqYIQOgDVPvsoDQejWQYk0YthKEPwtsOl5eXl4UyMST5mJeLhA/XdADXxke6IuHj9RL+BADMoI0HNmlh2Hc6ne1VVVVDwSKfCIoACIoAIbJl1apVf7Pb7Y3opMcY98R+rs1lPgGjAdFODAcs22w2RoI1FAHyggY+Uw+FCBh9ysrKypmg4jrewDWth6htWMQsh+D1mp+MPtk/9h1Fev5F5kkDAwOtEPWDYJJPBE0ABO8TQOWtEMHHEEETOjtIQ5g9RZZJvDSYuYz9bCBE0NXV1cApYjAfIDEJRTJagaGIYf8gqkpwfTZJMK+VMJdln1jHMtbT2PcANmjJzc09gwQ3JOQTQRUAwUhAtTMSIPTxZpHH6/UKEdBgnBbB0+eMRkhDEixj4X2CoocPH1IER3DOoLxeRs/nI10MZ3Ugn57PbF+82yiv0bg+UWYf2Bc51WOEQFRgiGDYp+efwblaQkU+EXQBEDISQP0nYYivYKgHMOacARhG6S2+AIPxPoF4nwCJUwNEUBlIERieX9nf3/8mxn2O+Uz4fP499kEOCQSjHY4ZQthvYbYP8psrKioGQ0U+ERIBEIwEmNa1IRLwZtHfYSw3jCWmiLCTXwHQu+BRjAQFSAoPdnd3NyApqwrEO4b0/C1btlSCMD7YoeevwXWKe/u+wD6wL+wTs31UeUB+E8d89L31woULQU345kPIBEBs2LDhIYgTkQAi+IqzA4qAhqXRfIGGJdCWTxH5KJn3CRowRawAYZa9cs4kk56PYYueT/LX4m/apVB9gW3YF7SbZt8w5jejr/T8Fnp+qL6WMiOkAiAw7RllJKAI4B1fwmjiZpG/CCAFwnYoi9fLhoeHD3Z2djZs3bp1kxXDAcM+Zxr0fAjsAIgsIPny2uQ1LAS2I/koepALiGwfw5UgH8eG1PMlQi4AgpFAisDICTz+FEDPIgGGAFglXi8z3jEUOcHTRAKcN6qmpqYChB02PL8If0e8wycvjUmdH8ibPBel5wd7nu8PfnsQLHz00Ufeo0eP9sFQw8juE2HwbFTHw1iCXWl0SQD2izIXlikI4z5BCrLubJBmY3adkJAQw69qcGgOFn+C5x/hY9ivGhsbh3G+homJiTpEpDUI3yK34N+SxKNeis8sRFkWns/pLrN9Cpxj/ssvv7xkyCd8x7AQAElcEhLDaoTy38H4r8LgDhIrSafxnxQAtwlTeRqCuJecnHwRixNefAjbJdjHO3WijfkY03E47cxdiPBTDCcxEOKrqFuLZe7tXbaTZXkNvCY51aMQUea0dgCe35yTk3MKf79tqXm+xJITAHHr1q3klStX1sBw70AEu2DodOl1NLosSxLnA/ZNkYTExET34OBgAYyfgIU36s2Ez5V5XqxZOZGUlNSJv5sIIleg/YJPH3kswUjA8xIG+Z74+PiLmOqF9CbPYrAkBUDcvn37mYyMjBrMEhgJXoEBHTQyiSJYliTOB4NUNp7EsQzfc32VZEnIcxqYxfYkRMZGNkmyL/B443rEI114fhsTPpAf0ps8i8GSFQDBSJCZmVmNSPB7iGAnqtJhTDEckBhf5HAf2/F+PMb0uRsyJMt8HMuSQILRBTnDMozdc+dYCNwnrwXruYQP0essrrclPz+fD72WNJa0AIi7d++mIpxWu1yuBhCzE4ZmWIatF3fpJJe3YyXxXM8HGVG4lmJZzN/gMTgnw74LM5gORK0z2OQ9/qA90n0a+MuKQw5+dIKpXWtWVtbHyOj/DqPylXNheF+QbUg+CTW3J7HmRYJt2HYxOQbB/SCbdy8HINIWeP5pko/w70bdkiefWPICIIqKioZGRkY6+D4B35pB1f/1npyZ5PkgiTa383cMgeN419LFMd/hcJxHAsh7GR5jd1jAfy+XEJgTpKenVzudTg4Hr4GkDGPXgoBHzk0d59sm0eYsntuc0skosBBIPlb9zPZJPs7bSs9/vDd8EBYRQIIPkBgJMLfmm0V80dQpiSRILkESZZkwt+E+8zbLrJOQ21zzHHLfE2WegGO+8HxMGwP66nYgEVYRQII3izAcVPPhz9jYGG/WZMokjpDebCb610AKQYrCJIIe5CNtaWlpnyQmJrampKSEJflEWEUACT47cLvdHZginkVOcBEEuRDG5z4+MXvr00AKQJa54O/wfyG0knx6fjiTT4RlBJDgzaLU1NSXMEV8a3x8fDfIygRJc30yFX8VJPkm0PPp8WeSk5Mvhzv5RFhGAAm+WTQ4OMi3jc8iE29B1c8+PnlaUEAmETgRbRj2L0QK+URYC4CgCDActDMx5BQRwwC/OxBvFlkBCIDgE8J2zEDEt3qRQj4R1kOAGQMDA8+A9Jd6enrewXCwC+V0iOGp+iezfU71+KEmv9IN12x/IUSMAAiPx5Pi9Xp3OJ3OIyBrFzzXASH8qj7iWM4j+a1eK2/voswoE9APNUOBsB8CzOBXySQMOcFJu/HxiQjgxlSOoB5440fqwlyW7bDwwU4/znWR5A8PDwf8K91QIaIEQCBJG7TZbO28L48hoBFVbhA6l8nJqSJJl3f7WDaJgJ7vxjn4fX7QvtINFSJOAAQjAWcFGK9PgmTxVTJFQJL5eBieLTyd9wtYZhQgSD7bgvwmkH8mmF/phgoRKQCCIsDsoDU/P/8URMDP0MRXyRTBxMSEIJ8LywT3YeVBWyZ6ZzG9bC0N4le6oUJEJYHzQd427u7u5r+w/y2IToGXx6EsxI8yijNjIH4YC4eOs6H6UDMUiHgBEHyKiIjwQldX1y5sPgfS+Q+XE7CQ4HEsNzA0fIdo0YKocVkV8gklBECcO3cuBgSnFhcXv3Dnzp1tU1NTfO2cL4y4ioqKvr5582bH/fv3h+rq6vgOoRLkE8oIQIJCGB0dtXu93mhM7/iW8Ax/nOnYsWNTKhGvoaGhoaGhoaGhoaGhoaGhoaEUli37Lx5gaRc7ou1CAAAAAElFTkSuQmCC) center/contain no-repeat}.gui-dark .gui-structure-info-panel p{color:#ccc}", ".gui-light .gui-header,.gui-light.gui-structure{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light.gui-structure-border{border-color:#ccc transparent}.gui-light .gui-structure-header .gui-header{color:#333;font-weight:700}.gui-light .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover,.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#f0f0f0}.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-light.gui-rows-even .gui-row:nth-child(even),.gui-light.gui-rows-odd .gui-row:nth-child(odd){background:#f7f7f7}.gui-light.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}"]
                }] }
    ];
    /** @nocollapse */
    StructureComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: CompositionId },
        { type: PagingCommandService },
        { type: PagingEventService },
        { type: SourceCommandService },
        { type: SourceEventService },
        { type: SchemaCommandService },
        { type: CompositionCommandService },
        { type: CompositionEventService },
        { type: FormationEventService },
        { type: StructureCommandService },
        { type: StructureEditModeArchive },
        { type: StructureCellEditArchive },
        { type: StructureSummaryEnabledArchive },
        { type: StructureAggregationConfigService },
        { type: StructureCellEditStore },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: StructureDefinition },
        { type: StructureQueryService },
        { type: CompositionQueryService },
        { type: SchemaQueryService },
        { type: SchemaCssClassManager }
    ]; };
    return StructureComponent;
}(StructureGateway));
if (false) {
    /** @type {?} */
    StructureComponent.prototype.loaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.circleLoaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.initialLoaderAnimation;
    /** @type {?} */
    StructureComponent.prototype.structureHeight;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structure;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structureDefinition;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.compositionQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaStylesManager;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureHeaderColumnsComponent = /** @class */ (function () {
    function StructureHeaderColumnsComponent(structureCommandService, structureColumnConfigService) {
        this.structureCommandService = structureCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.toggleSort = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.structureCommandService.toggleSort(column.getFieldId());
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.isSortAsc = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.getSortStatus() === SortStatus.ASC;
    };
    /**
     * @param {?} column
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.isSortDesc = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return column.getSortStatus() === SortStatus.DESC;
    };
    /**
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.openConfigDialog = /**
     * @return {?}
     */
    function () {
        this.structureColumnConfigService.open();
    };
    /**
     * @return {?}
     */
    StructureHeaderColumnsComponent.prototype.closeConfigDialog = /**
     * @return {?}
     */
    function () {
        this.structureColumnConfigService.close();
    };
    StructureHeaderColumnsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-columns',
                    template: "<div *ngFor=\"let cell of columns\"\n\t [style.width.px]=\"cell.width\"\n\t (click)=\"toggleSort(cell)\"\n\t class=\"gui-header-cell\">\n\n\t<span>\n\t\t<ng-container\n\t\t\t*ngTemplateOutlet=\"cell.viewTemplate;\n\t\t\t\t\t\t\t\t   context: cell.context\">\n\t\t</ng-container>\n\t</span>\n\n\t<div class=\"gui-header-menu\">\n<!--\t\t<div class=\"gui-header-menu-icon\"-->\n<!--\t\t\t (click)=\"openConfigDialog()\">-->\n<!--\t\t</div>-->\n\n\t\t<div [ngClass]=\"{'gui-sort-asc': isSortAsc(cell), 'gui-sort-desc':  isSortDesc(cell)}\"\n\t\t\t class=\"gui-sort\">\n\t\t</div>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderColumnsComponent.ctorParameters = function () { return [
        { type: StructureCommandService },
        { type: StructureColumnConfigService }
    ]; };
    StructureHeaderColumnsComponent.propDecorators = {
        columns: [{ type: Input }]
    };
    return StructureHeaderColumnsComponent;
}());
if (false) {
    /** @type {?} */
    StructureHeaderColumnsComponent.prototype.columns;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderColumnsComponent.prototype.structureColumnConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFilterRepository = /** @class */ (function () {
    function StructureFilterRepository() {
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterRepository.prototype.setEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterRepository.prototype.selectFilterEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    StructureFilterRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterRepository.ctorParameters = function () { return []; };
    return StructureFilterRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureFilterRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureQuickFilterRepository = /** @class */ (function () {
    function StructureQuickFilterRepository() {
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureQuickFilterRepository.prototype.setEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureQuickFilterRepository.prototype.selectQuickFilterEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    StructureQuickFilterRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureQuickFilterRepository.ctorParameters = function () { return []; };
    return StructureQuickFilterRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureQuickFilterRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureQuickFilterRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFilterReadModelRepository = /** @class */ (function () {
    function StructureFilterReadModelRepository(structureFilterRepository, structureQuickFilterRepository) {
        this.structureFilterRepository = structureFilterRepository;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterReadModelRepository.prototype.selectFilteringEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFilterRepository.selectFilterEnabled(structureId);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFilterReadModelRepository.prototype.selectQuickFiltersEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureQuickFilterRepository.selectQuickFilterEnabled(structureId);
    };
    StructureFilterReadModelRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFilterReadModelRepository.ctorParameters = function () { return [
        { type: StructureFilterRepository },
        { type: StructureQuickFilterRepository }
    ]; };
    return StructureFilterReadModelRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelRepository.prototype.structureFilterRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFilterReadModelRepository.prototype.structureQuickFilterRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureHeaderComponent = /** @class */ (function (_super) {
    __extends(StructureHeaderComponent, _super);
    function StructureHeaderComponent(changeDetectorRef, renderer, eventBus, structureId, structureFilterReadModelRepository, compositionQueryService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.eventBus = eventBus;
        _this.structureId = structureId;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.compositionQueryService = compositionQueryService;
        _this.headerColumns = [];
        _this.filterRowEnabled = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.compositionQueryService
            .selectHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.headerColumns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .selectContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureFilterReadModelRepository
            .selectFilteringEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.filterRowEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    StructureHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header',
                    template: "<gui-structure-header-columns\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-columns>\n\n<gui-structure-header-filters\n\t*ngIf=\"filterRowEnabled\"\n\t[columns]=\"headerColumns\"\n\tclass=\"gui-header\">\n</gui-structure-header-filters>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: DomainEventBus },
        { type: StructureId },
        { type: StructureFilterReadModelRepository },
        { type: CompositionQueryService }
    ]; };
    StructureHeaderComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: [StructureHeaderColumnsComponent, { read: ElementRef, static: true },] }]
    };
    return StructureHeaderComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureHeaderComponent.prototype.containerRef;
    /** @type {?} */
    StructureHeaderComponent.prototype.headerColumns;
    /** @type {?} */
    StructureHeaderComponent.prototype.filterRowEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.eventBus;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.structureFilterReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderComponent.prototype.compositionQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureHeaderFiltersComponent = /** @class */ (function () {
    function StructureHeaderFiltersComponent(structureFilterCommandService, formBuilder, cd, structureId) {
        var _a;
        this.structureFilterCommandService = structureFilterCommandService;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.structureId = structureId;
        this.closed = new EventEmitter();
        this.filterFieldName = 'phrase';
        this.filterMode = false;
        this.filterForm = this.formBuilder.group((_a = {},
            _a[this.filterFieldName] = [''],
            _a));
    }
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filterForm
            .valueChanges
            // .pipe(
            // debounceTime(500)
            // )
            .subscribe((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            _this.filter(f[_this.filterFieldName]);
        }));
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.filter = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        if (phrase === undefined || phrase === null) {
            phrase = '';
        }
        this.structureFilterCommandService.addFilter(this.columns[0].getFieldId(), '1', phrase, this.structureId);
    };
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.clearFilters = /**
     * @return {?}
     */
    function () {
        this.filterForm.reset();
    };
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.turnOnFilterMode = /**
     * @return {?}
     */
    function () {
        this.filterMode = true;
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    StructureHeaderFiltersComponent.prototype.turnOffFilterMode = /**
     * @return {?}
     */
    function () {
        this.filterMode = false;
        this.cd.detectChanges();
    };
    StructureHeaderFiltersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-filters',
                    template: "\n\t\t\n\t\t<ng-container *ngIf=\"!filterMode\">\n\n\t\t\t<div *ngFor=\"let cell of columns\"\n\t\t\t\t [style.width.px]=\"cell.width\"\n\t\t\t\t class=\"gui-header-cell\">\n\n\t\t\t\t<!--\t\t\t\t<gui-structure-header-filter [column]=\"cell\">-->\n\t\t\t\t<!--\t\t\t\t</gui-structure-header-filter>-->\n\n\t\t\t\t<button (click)=\"turnOnFilterMode()\">Add Filter</button>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"filterMode\">\n\n\t\t\t<gui-select [options]=\"['has value', 'is the same as', 'starts with', 'ends with']\" [selected]=\"'has value'\" >\n\n\t\t\t</gui-select>\n\n\t\t\t<form [formGroup]=\"filterForm\">\n\t\t\t\t<input type=\"text\" [formControlName]=\"filterFieldName\" gui-input/>\n\t\t\t</form>\n\n\t\t\t<button gui-button (click)=\"clearFilters()\">Clear All</button>\n\t\t\t<button gui-button (click)=\"turnOffFilterMode()\">Close</button>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderFiltersComponent.ctorParameters = function () { return [
        { type: StructureFilterCommandService },
        { type: FormBuilder },
        { type: ChangeDetectorRef },
        { type: StructureId }
    ]; };
    StructureHeaderFiltersComponent.propDecorators = {
        columns: [{ type: Input }],
        closed: [{ type: Output }]
    };
    return StructureHeaderFiltersComponent;
}());
if (false) {
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.columns;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.closed;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterFieldName;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterForm;
    /** @type {?} */
    StructureHeaderFiltersComponent.prototype.filterMode;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFiltersComponent.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureHeaderFilterComponent = /** @class */ (function (_super) {
    __extends(StructureHeaderFilterComponent, _super);
    function StructureHeaderFilterComponent(structureFilterCommandService, structureId) {
        var _this = _super.call(this) || this;
        _this.structureFilterCommandService = structureFilterCommandService;
        _this.structureId = structureId;
        _this.sub = new ChangedValueEmitter();
        _this.editContext = {
            changes: _this.sub
        };
        return _this;
    }
    /**
     * @return {?}
     */
    StructureHeaderFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub
            .select()
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) { return _this.filter(phrase); }));
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    StructureHeaderFilterComponent.prototype.filter = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        this.structureFilterCommandService.addFilter(this.column.getFieldId(), '1', phrase, this.structureId);
    };
    StructureHeaderFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-header-filter',
                    template: "\n\t\t\n<!--\t\t<ng-container-->\n<!--\t\t\t\t*ngTemplateOutlet=\"column.editTemplate; context: editContext\">-->\n<!--\t\t</ng-container>-->\n\t\t\n\t\t<button gui-button [primary]=\"true\" >Add Filter</button>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureHeaderFilterComponent.ctorParameters = function () { return [
        { type: StructureFilterCommandService },
        { type: StructureId }
    ]; };
    StructureHeaderFilterComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureHeaderFilterComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.column;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.sub;
    /** @type {?} */
    StructureHeaderFilterComponent.prototype.editContext;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureFilterCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderFilterComponent.prototype.structureId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureContentComponent = /** @class */ (function (_super) {
    __extends(StructureContentComponent, _super);
    function StructureContentComponent(renderer, elementRef, changeDetectorRef, formationCommandService, structureCellEditArchive, structureEditModeArchive, formationQueryService) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formationCommandService = formationCommandService;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.formationQueryService = formationQueryService;
        _this.editMode = false;
        _this.cellEditing = false;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formationQueryService
            .selectSelectedRows()
            .subscribe((/**
         * @param {?} rowsList
         * @return {?}
         */
        function (rowsList) {
            _this.clearSelectedRows();
            rowsList.getIds().forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                /** @type {?} */
                var strippedId = 'gui' + id.replace(/-/g, '');
                /** @type {?} */
                var selectedRowEl = _this.elementRef.nativeElement.querySelector("#" + strippedId);
                if (selectedRowEl) {
                    _this.renderer.addClass(selectedRowEl, 'selected');
                }
            }));
        }));
        this.structureEditModeArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.editMode = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureCellEditArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.cellEditing = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureContentComponent.prototype.trackByFn = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StructureContentComponent.prototype.translateY = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return "translateY(" + index * 30 + "px)";
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    StructureContentComponent.prototype.toggleSelectedRow = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        this.formationCommandService.toggleSelectedRow(((/** @type {?} */ (entity))).id);
    };
    /**
     * @private
     * @return {?}
     */
    StructureContentComponent.prototype.clearSelectedRows = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedElements = this.elementRef.nativeElement.querySelectorAll('.selected');
        selectedElements.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            _this.renderer.removeClass(el, 'selected');
        }));
    };
    StructureContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-content',
                    template: "<div class=\"gui-content\">\n\n\t<gui-structure-row *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t\t\t\t   [entity]=\"entity\"\n\t\t\t\t\t   [columns]=\"columns\"\n\t\t\t\t\t   [editMode]=\"editMode\"\n\t\t\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t\t\t   [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t\t\t\t   [id]=\"entity.getUiId()\"\n\t\t\t\t\t   (click)=\"toggleSelectedRow(entity)\"\n\t\t\t\t\t   class=\"gui-row\">\n\t</gui-structure-row>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureContentComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FormationCommandService },
        { type: StructureCellEditArchive },
        { type: StructureEditModeArchive },
        { type: FormationQueryService }
    ]; };
    StructureContentComponent.propDecorators = {
        source: [{ type: Input }],
        columns: [{ type: Input }]
    };
    return StructureContentComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureContentComponent.prototype.source;
    /** @type {?} */
    StructureContentComponent.prototype.columns;
    /** @type {?} */
    StructureContentComponent.prototype.editMode;
    /** @type {?} */
    StructureContentComponent.prototype.cellEditing;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @private
     */
    StructureContentComponent.prototype.formationQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Entity = /** @class */ (function () {
    function Entity(data, id, version) {
        if (version === void 0) { version = 0; }
        this.version = 0;
        this.data = data;
        this.version = version;
        if (!id) {
            this.id = RandomStringGenerator.generate();
        }
        else {
            this.id = id;
        }
    }
    /**
     * @return {?}
     */
    Entity.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.data;
    };
    /**
     * @return {?}
     */
    Entity.prototype.getUiId = /**
     * @return {?}
     */
    function () {
        return 'gui' + this.id.replace(/-/g, '');
    };
    /**
     * @return {?}
     */
    Entity.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    Entity.prototype.getVersion = /**
     * @return {?}
     */
    function () {
        return this.version;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Entity.prototype.equals = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.id === entity.id && this.getVersion() === entity.getVersion();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    Entity.prototype.equalsById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.id === id;
    };
    return Entity;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.data;
    /**
     * @type {?}
     * @private
     */
    Entity.prototype.version;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureRowComponent = /** @class */ (function () {
    function StructureRowComponent() {
    }
    /**
     * @return {?}
     */
    StructureRowComponent.prototype.trackByFn = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    StructureRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-row',
                    template: "<gui-structure-cell *ngFor=\"let column of columns; trackBy: trackByFn\"\n\t\t\t\t\t[entity]=\"entity\"\n\t\t\t\t\t[cell]=\"column\"\n\t\t\t\t\t[cellEditingEnabled]=\"cellEditing\"\n\t\t\t\t\t[editMode]=\"editMode\"\n\t\t\t\t\t[style.width.px]=\"column.width\"\n\t\t\t\t\tclass=\"gui-cell\">\n</gui-structure-cell>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    StructureRowComponent.propDecorators = {
        entity: [{ type: Input }],
        columns: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditing: [{ type: Input }]
    };
    return StructureRowComponent;
}());
if (false) {
    /** @type {?} */
    StructureRowComponent.prototype.entity;
    /** @type {?} */
    StructureRowComponent.prototype.columns;
    /** @type {?} */
    StructureRowComponent.prototype.editMode;
    /** @type {?} */
    StructureRowComponent.prototype.cellEditing;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureCellComponent = /** @class */ (function (_super) {
    __extends(StructureCellComponent, _super);
    function StructureCellComponent(changeDetectorRef, structureCellEditArchive, structureCellEditStore, sourceCommandService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureCellEditStore = structureCellEditStore;
        _this.sourceCommandService = sourceCommandService;
        _this.inEditMode = false;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureCellComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.editMode !== undefined) {
            if (this.editMode) {
                this.cellEditingEnabled = true;
                this.enterEditMode(false);
            }
            else if (!this.editMode) {
                this.exitEditMode();
            }
        }
    };
    /**
     * @param {?=} forceCheck
     * @return {?}
     */
    StructureCellComponent.prototype.enterEditMode = /**
     * @param {?=} forceCheck
     * @return {?}
     */
    function (forceCheck) {
        if (forceCheck === void 0) { forceCheck = true; }
        if (!this.cellEditingEnabled) {
            return;
        }
        this.inEditMode = true;
        this.valueChanges$ = new ChangedValueEmitter();
        this.status$ = new ChangedValueEmitter();
        this.editContext = {
            status: this.status$,
            valueChanges: this.valueChanges$,
            value: this.cell.accessor(this.entity),
            focus: forceCheck
        };
        this.observeFieldStatus();
        this.observeValueChanges();
        this.publishEditEnter();
        if (!forceCheck) {
            this.changeDetectorRef.markForCheck();
        }
        else {
            this.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.exitEditMode = /**
     * @return {?}
     */
    function () {
        this.inEditMode = false;
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    StructureCellComponent.prototype.submitChangesAndExit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemId = this.entity.getId();
        /** @type {?} */
        var updatedValue = this.actualValue;
        /** @type {?} */
        var fieldId = this.cell.columnFieldId;
        this.sourceCommandService.editItem(new StructureEditSourceItemParams(itemId, fieldId, updatedValue));
        this.exitEditMode();
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.observeFieldStatus = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.status$
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            switch (status) {
                case EditEventType.SUBMIT:
                    _this.submitChangesAndExit();
                    _this.publishEditSubmit();
                    break;
                case EditEventType.CANCEL:
                    _this.exitEditMode();
                    _this.publishEditCancel();
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.observeValueChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.valueChanges$
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.actualValue = value;
        }));
    };
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditState = /**
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.structureCellEditStore.set(state);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditEnter = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.ENTER);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditCancel = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.CANCEL);
    };
    /**
     * @private
     * @return {?}
     */
    StructureCellComponent.prototype.publishEditSubmit = /**
     * @private
     * @return {?}
     */
    function () {
        this.publishEditState(StructureCellEditState.SUBMIT);
    };
    StructureCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-cell',
                    template: "\n\n\t\t<span *ngIf=\"!inEditMode\"\n\t\t\t  (click)=\"enterEditMode()\">\n\t\t\t<ng-container\n\t\t\t\t\t*ngTemplateOutlet=\"cell.template;\n\t\t\t\t\tcontext: { element: cell.accessor(entity) }\">\n\t\t\t</ng-container>\n\t\t</span>\n\t\t\n\t\t<span *ngIf=\"inEditMode\" class=\"gui-cell-edit-mode\">\n\t\t\t<ng-container\n\t\t\t\t\t*ngTemplateOutlet=\"cell.editTemplate;\n\t\t\t\t\tcontext: editContext\">\n\t\t\t</ng-container>\n\t\t</span>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureCellComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureCellEditArchive },
        { type: StructureCellEditStore },
        { type: SourceCommandService }
    ]; };
    StructureCellComponent.propDecorators = {
        entity: [{ type: Input }],
        cell: [{ type: Input }],
        editMode: [{ type: Input }],
        cellEditingEnabled: [{ type: Input }]
    };
    return StructureCellComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureCellComponent.prototype.entity;
    /** @type {?} */
    StructureCellComponent.prototype.cell;
    /** @type {?} */
    StructureCellComponent.prototype.editMode;
    /** @type {?} */
    StructureCellComponent.prototype.cellEditingEnabled;
    /** @type {?} */
    StructureCellComponent.prototype.inEditMode;
    /** @type {?} */
    StructureCellComponent.prototype.editContext;
    /** @type {?} */
    StructureCellComponent.prototype.valueChanges$;
    /** @type {?} */
    StructureCellComponent.prototype.status$;
    /** @type {?} */
    StructureCellComponent.prototype.actualValue;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.structureCellEditStore;
    /**
     * @type {?}
     * @private
     */
    StructureCellComponent.prototype.sourceCommandService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureContainerComponent = /** @class */ (function (_super) {
    __extends(StructureContainerComponent, _super);
    function StructureContainerComponent(elementRef, renderer, changeDetectorRef, ngZone, structureId, structureCommandService, structureQueryService, sourceQueryService, schemaQueryService, compositionCommandService, compositionQueryService, formationQueryService, resizeDetector, structureParent) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.ngZone = ngZone;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.structureQueryService = structureQueryService;
        _this.sourceQueryService = sourceQueryService;
        _this.schemaQueryService = schemaQueryService;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionQueryService = compositionQueryService;
        _this.formationQueryService = formationQueryService;
        _this.resizeDetector = resizeDetector;
        _this.structureParent = structureParent;
        _this.columns = [];
        _this.source = [];
        _this.autoResizeWidthEnabled = false;
        _this.scrollObservation$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    StructureContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * TODO One source of truth
         *
         * There should only one sub here.
         */
        this.sourceQueryService
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            _this.source = source;
            _this.setHeight(source.length * 30);
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .selectTemplateColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.columns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
        this.compositionQueryService
            .selectResizeWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.autoResizeWidthEnabled = enabled;
        }));
        combineLatest(this.sourceQueryService.select(), this.schemaQueryService.selectContainerHeight())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} combine
         * @return {?}
         */
        function (combine) {
            /** @type {?} */
            var source = combine[0];
            /** @type {?} */
            var height = combine[1];
            /** @type {?} */
            var sourceSizeHeight = source.length * 27;
            if (sourceSizeHeight > height) {
                _this.setHeight(height);
            }
            else {
                _this.setHeight(sourceSizeHeight);
            }
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // turn on when structure is ready
        if (this.structureParent) {
            this.resizeDetector
                .observe(this.structureParent.getElementRef().nativeElement)
                .pipe(filter((/**
             * @return {?}
             */
            function () { return _this.autoResizeWidthEnabled; })), map((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return element.offsetWidth; })), distinctUntilChanged(), this.takeUntil())
                .subscribe((/**
             * @param {?} width
             * @return {?}
             */
            function (width) {
                _this.recalculateContainer(width);
            }));
        }
        this.compositionQueryService
            .selectContainerWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'width', width + 'px');
        }));
        this.structureQueryService
            .selectVerticalScrollEnabled()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            if (enabled) {
                _this.enableScrollObservation();
            }
            else {
                _this.disableScrollObservation();
            }
        }));
        // never runs ??
        this.structureQueryService
            .select()
            .pipe(filter((/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            return str.isVerticalScrollEnabled();
        })), this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            /** @type {?} */
            var containerHeight = structure.getContainerHeight();
            /** @type {?} */
            var topMargin = structure.getTopMargin();
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'padding-top', topMargin + 'px');
            _this.renderer.setStyle(_this.containerRef.nativeElement, 'height', containerHeight + 'px');
        }));
    };
    /**
     * @return {?}
     */
    StructureContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.resizeDetector.destroy(this.elementRef.nativeElement);
    };
    /**
     * @param {?} height
     * @return {?}
     */
    StructureContainerComponent.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.height = height;
        this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.height + 'px');
    };
    /**
     * @private
     * @param {?} width
     * @return {?}
     */
    StructureContainerComponent.prototype.recalculateContainer = /**
     * @private
     * @param {?} width
     * @return {?}
     */
    function (width) {
        if (this.autoResizeWidthEnabled) {
            this.compositionCommandService.setContainerWidth(width);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StructureContainerComponent.prototype.enableScrollObservation = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone
            .runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this.elementRef.nativeElement, 'scroll')
                .pipe(
            // auditTime(10),
            takeUntil(_this.scrollObservation$), _this.takeUntil())
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var scrollTop = event.target.scrollTop;
                _this.structureCommandService.setScrollPosition(scrollTop);
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureContainerComponent.prototype.disableScrollObservation = /**
     * @private
     * @return {?}
     */
    function () {
        this.scrollObservation$.next();
        this.scrollObservation$.complete();
    };
    StructureContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-container',
                    template: "<div #container\n\t class=\"gui-structure-container\">\n\n\t<gui-structure-content [source]=\"source\"\n\t\t\t\t\t\t   [columns]=\"columns\">\n\t</gui-structure-content>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: StructureId },
        { type: StructureCommandService },
        { type: StructureQueryService },
        { type: SourceQueryService },
        { type: SchemaQueryService },
        { type: CompositionCommandService },
        { type: CompositionQueryService },
        { type: FormationQueryService },
        { type: ResizeDetector },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [structureParentComponent,] }] }
    ]; };
    StructureContainerComponent.propDecorators = {
        containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
    };
    return StructureContainerComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureContainerComponent.prototype.containerRef;
    /** @type {?} */
    StructureContainerComponent.prototype.columns;
    /** @type {?} */
    StructureContainerComponent.prototype.source;
    /** @type {?} */
    StructureContainerComponent.prototype.height;
    /** @type {?} */
    StructureContainerComponent.prototype.rowColoring;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.autoResizeWidthEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.scrollObservation$;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.sourceQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.schemaQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.compositionQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.formationQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.resizeDetector;
    /**
     * @type {?}
     * @private
     */
    StructureContainerComponent.prototype.structureParent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSearchComponent = /** @class */ (function (_super) {
    __extends(StructureSearchComponent, _super);
    function StructureSearchComponent(formBuilder) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.searchForm = _this.formBuilder.group({
            'searchPhrase': ''
        });
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeChanges();
    };
    /**
     * @private
     * @return {?}
     */
    StructureSearchComponent.prototype.observeChanges = /**
     * @private
     * @return {?}
     */
    function () {
        this.searchForm.controls['searchPhrase'].valueChanges
            .pipe(
        // debounceTime(0),
        this.takeUntil())
            .subscribe((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return console.log(name); }));
    };
    StructureSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-search-bar',
                    template: "\n\t\t<form [formGroup]=\"searchForm\">\n\t\t\t<div class=\"gui-search-icon\"></div>\n\t\t\t<input formControlName=\"searchPhrase\" [placeholder]=\"'Search ...'\">\n\t\t</form>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    return StructureSearchComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureQuickFiltersComponent = /** @class */ (function () {
    function StructureQuickFiltersComponent() {
    }
    StructureQuickFiltersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-quick-fitlers',
                    template: "\n\t\n\t\tQuickFilters\n\t\t\n\t"
                }] }
    ];
    return StructureQuickFiltersComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSearchingRepository = /** @class */ (function () {
    function StructureSearchingRepository() {
        this.enabled = new Map();
        this.enabled$ = new ReplaySubject();
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchingRepository.prototype.setEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.enabled.set(structureId.toString(), enabled);
        this.enabled$.next(this.enabled);
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchingRepository.prototype.selectSearchingEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.enabled$
            .asObservable()
            .pipe(map((/**
         * @param {?} map
         * @return {?}
         */
        function (map) {
            return map.get(structureId.toString());
        })), distinctUntilChanged());
    };
    StructureSearchingRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchingRepository.ctorParameters = function () { return []; };
    return StructureSearchingRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchingRepository.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureSearchingRepository.prototype.enabled$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSearchReadModelRepository = /** @class */ (function () {
    function StructureSearchReadModelRepository(structureSearchingRepository) {
        this.structureSearchingRepository = structureSearchingRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureSearchReadModelRepository.prototype.selectSearchEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureSearchingRepository.selectSearchingEnabled(structureId);
    };
    StructureSearchReadModelRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchReadModelRepository.ctorParameters = function () { return [
        { type: StructureSearchingRepository }
    ]; };
    return StructureSearchReadModelRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchReadModelRepository.prototype.structureSearchingRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var prefix = 'Structure -';
/** @type {?} */
var STRUCTURE_CSS_CLASS_NAME = new InjectionToken(prefix + " - css className");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureBlueprintComponent = /** @class */ (function (_super) {
    __extends(StructureBlueprintComponent, _super);
    function StructureBlueprintComponent(changeDetectorRef, structureDefinition, structureId, structureQueryService, pagingQueryService, structureSummaryEnabledArchive, structureAggregationArchive, structureFilterReadModelRepository, structureSearchReadModelRepository, className) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureDefinition = structureDefinition;
        _this.structureId = structureId;
        _this.structureQueryService = structureQueryService;
        _this.pagingQueryService = pagingQueryService;
        _this.structureSummaryEnabledArchive = structureSummaryEnabledArchive;
        _this.structureAggregationArchive = structureAggregationArchive;
        _this.structureFilterReadModelRepository = structureFilterReadModelRepository;
        _this.structureSearchReadModelRepository = structureSearchReadModelRepository;
        _this.className = className;
        _this.searchEnabled = false;
        _this.topAggregationPanelEnabled = false;
        _this.bottomAggregationPanelEnabled = false;
        _this.quickFiltersEnabled = false;
        _this.summaryPanelEnabled = false;
        _this.headerCssClass = "gui-" + _this.className + "-header";
        _this.contentCssClass = "gui-" + _this.className + "-content";
        return _this;
    }
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureQueryService
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            _this.structure = structure;
            _this.changeDetectorRef.detectChanges();
        }));
        this.pagingQueryService
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} paging
         * @return {?}
         */
        function (paging) {
            _this.pagingReadModel = paging;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureSearchReadModelRepository
            .selectSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.searchEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureFilterReadModelRepository
            .selectQuickFiltersEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.quickFiltersEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureAggregationArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.topAggregationPanelEnabled = config.itTopEnabled();
            _this.bottomAggregationPanelEnabled = config.itBottomEnabled();
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureSummaryEnabledArchive
            .select()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            _this.summaryPanelEnabled = enabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.getHeaderTopClasses = /**
     * @return {?}
     */
    function () {
        return this.headerCssClass + ' gui-header-top';
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.getHeaderBottomClasses = /**
     * @return {?}
     */
    function () {
        return this.headerCssClass + ' gui-header-bottom';
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isColumnHeaderTopEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isTopHeaderEnabled();
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isColumnHeaderBottomEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.isHeaderEnabled() && this.structure && this.structure.isBottomHeaderEnabled();
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isPagingTopEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.getTopPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerTop();
    };
    /**
     * @return {?}
     */
    StructureBlueprintComponent.prototype.isPagingBottomEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.getBottomPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerBottom();
    };
    StructureBlueprintComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-blueprint',
                    template: "<!---------- TOP ---------->\n<gui-structure-search-bar *ngIf=\"searchEnabled\">\n\n</gui-structure-search-bar>\n\n<gui-structure-quick-fitlers *ngIf=\"quickFiltersEnabled\">\n\n</gui-structure-quick-fitlers>\n\n<gui-structure-paging *ngIf=\"isPagingTopEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-top\">\n</gui-structure-paging>\n\n<gui-structure-aggregation-panel [enabled]=\"topAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-top\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-header *ngIf=\"isColumnHeaderTopEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderTopClasses()\">\n</gui-structure-header>\n\n\n<!---------- MAIN ---------->\n<gui-structure-container [ngClass]=\"contentCssClass\">\n</gui-structure-container>\n\n\n<!---------- BOTTOM ---------->\n<gui-structure-header *ngIf=\"isColumnHeaderBottomEnabled()\"\n\t\t\t\t\t  [ngClass]=\"getHeaderBottomClasses()\">\n</gui-structure-header>\n\n<gui-structure-aggregation-panel [enabled]=\"bottomAggregationPanelEnabled\"\n\t\t\t\t\t\t\t\t class=\"gui-structure-aggregation-panel-bottom\">\n</gui-structure-aggregation-panel>\n\n<gui-structure-paging *ngIf=\"isPagingBottomEnabled()\"\n\t\t\t\t\t  class=\"gui-structure-paging-bottom\">\n</gui-structure-paging>\n\n<gui-structure-summary *ngIf=\"summaryPanelEnabled\"></gui-structure-summary>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureBlueprintComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureDefinition },
        { type: StructureId },
        { type: StructureQueryService },
        { type: PagingQueryService },
        { type: StructureSummaryEnabledArchive },
        { type: StructureAggregationArchive },
        { type: StructureFilterReadModelRepository },
        { type: StructureSearchReadModelRepository },
        { type: String, decorators: [{ type: Inject, args: [STRUCTURE_CSS_CLASS_NAME,] }] }
    ]; };
    return StructureBlueprintComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureBlueprintComponent.prototype.structure;
    /** @type {?} */
    StructureBlueprintComponent.prototype.searchEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.topAggregationPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.bottomAggregationPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.quickFiltersEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.summaryPanelEnabled;
    /** @type {?} */
    StructureBlueprintComponent.prototype.contentCssClass;
    /** @type {?} */
    StructureBlueprintComponent.prototype.headerCssClass;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingReadModel;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureDefinition;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.pagingQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureSummaryEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureAggregationArchive;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureFilterReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.structureSearchReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    StructureBlueprintComponent.prototype.className;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationsChangedEvent = /** @class */ (function (_super) {
    __extends(StructureAggregationsChangedEvent, _super);
    function StructureAggregationsChangedEvent(structureId, values) {
        var _this = _super.call(this, structureId, 'StructureAggregationsChangedEvent') || this;
        _this.values = values;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureAggregationsChangedEvent.prototype.getAggregations = /**
     * @return {?}
     */
    function () {
        return this.values;
    };
    return StructureAggregationsChangedEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationsChangedEvent.prototype.values;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationUiEventsRepository = /** @class */ (function () {
    function StructureAggregationUiEventsRepository(domainEventBus) {
        this.domainEventBus = domainEventBus;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureAggregationUiEventsRepository.prototype.selectAggregationsChanged = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.domainEventBus
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof StructureAggregationsChangedEvent; })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.aggregateId.toString() === structureId.toString(); })));
    };
    StructureAggregationUiEventsRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregationUiEventsRepository.ctorParameters = function () { return [
        { type: DomainEventBus }
    ]; };
    return StructureAggregationUiEventsRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationUiEventsRepository.prototype.domainEventBus;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationPanelComponent = /** @class */ (function (_super) {
    __extends(StructureAggregationPanelComponent, _super);
    function StructureAggregationPanelComponent(changeDetectorRef, structureId, structureAggregationUiEventsRepository, compositionQueryService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureAggregationUiEventsRepository = structureAggregationUiEventsRepository;
        _this.compositionQueryService = compositionQueryService;
        _this.structureAggregationUiEventsRepository
            .selectAggregationsChanged(_this.structureId)
            .pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.aggregations = event.getAggregations();
            _this.changeDetectorRef.detectChanges();
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    StructureAggregationPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.compositionQueryService
            .selectHeaderColumns()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            _this.headerColumns = columns;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} aggregation
     * @return {?}
     */
    StructureAggregationPanelComponent.prototype.isAggregateTypePresent = /**
     * @param {?} aggregation
     * @return {?}
     */
    function (aggregation) {
        return aggregation !== undefined && aggregation !== null;
    };
    StructureAggregationPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-aggregation-panel',
                    template: "\n\n\t\t<ng-container *ngIf=\"enabled && aggregations\">\n\n\t\t\t<div *ngFor=\"let column of headerColumns\"\n\t\t\t\t [style.width.px]=\"column.width\"\n\t\t\t\t class=\"gui-header-cell gui-structure-aggregation-cell\">\n\n\t\t\t\t<ng-container *ngIf=\"aggregations && !!aggregations.get(column.getFieldId().getId())\">\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).count)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tCount: <span>{{ aggregations.get(column.getFieldId().getId()).count }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).distinct)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tDistinct: <span>{{ aggregations.get(column.getFieldId().getId()).distinct }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).sum)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div><span class=\"gui-math-symbol\">&sum;</span> Sum</div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).sum }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).average)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div class=\"gui-mean\"><span>_</span><span>X Average</span></div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).average }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).min)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div><span class=\"gui-math-symbol\">&and;</span> Min</div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).min }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\" isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).max)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div><span class=\"gui-math-symbol\">&or;</span> Max</div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).max }}</span></div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).median)\" class=\"gui-structure-aggregation-value\">\n\n\t\t\t\t\t\t<div class=\"gui-median\"><span>~</span><span>X Median</span></div>\n\t\t\t\t\t\t<span>{{ aggregations.get(column.getFieldId().getId()).median }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).truthy)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tTruthy: <span>{{ aggregations.get(column.getFieldId().getId()).truthy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"isAggregateTypePresent(aggregations.get(column.getFieldId().getId()).falsy)\" class=\"gui-structure-aggregation-value\">\n\t\t\t\t\t\tFalsy: <span>{{ aggregations.get(column.getFieldId().getId()).falsy }}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureAggregationPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureAggregationUiEventsRepository },
        { type: CompositionQueryService }
    ]; };
    StructureAggregationPanelComponent.propDecorators = {
        enabled: [{ type: Input }]
    };
    return StructureAggregationPanelComponent;
}(SmartComponent));
if (false) {
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.enabled;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.headerColumns;
    /** @type {?} */
    StructureAggregationPanelComponent.prototype.aggregations;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.structureAggregationUiEventsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureAggregationPanelComponent.prototype.compositionQueryService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OriginItemEntity = /** @class */ (function () {
    function OriginItemEntity(id, rawData, version) {
        if (version === void 0) { version = 0; }
        this.id = id;
        this.rawData = rawData;
        this.version = version;
    }
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.rawData;
    };
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.getVersion = /**
     * @return {?}
     */
    function () {
        return this.version;
    };
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.bumpVersion = /**
     * @return {?}
     */
    function () {
        this.version += 1;
    };
    /**
     * @return {?}
     */
    OriginItemEntity.prototype.clone = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rawData = __assign({}, this.rawData);
        return new OriginItemEntity(this.id, rawData, this.version);
    };
    return OriginItemEntity;
}());
if (false) {
    /** @type {?} */
    OriginItemEntity.prototype.id;
    /** @type {?} */
    OriginItemEntity.prototype.rawData;
    /**
     * @type {?}
     * @private
     */
    OriginItemEntity.prototype.version;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EntityFactory = /** @class */ (function () {
    function EntityFactory() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    EntityFactory.prototype.create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (Array.isArray(data)) {
            return this.createEntities(data);
        }
        else {
            return this.createEntity(data);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    EntityFactory.prototype.createEntities = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        return data.map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.createEntity(data); }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    EntityFactory.prototype.createEntity = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item instanceof OriginItemEntity) {
            return new Entity(item.rawData, item.id, item.getVersion());
        }
        else {
            return new Entity(item);
        }
    };
    EntityFactory.decorators = [
        { type: Injectable }
    ];
    return EntityFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryStructureStore = /** @class */ (function (_super) {
    __extends(InMemoryStructureStore, _super);
    function InMemoryStructureStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InMemoryStructureStore.decorators = [
        { type: Injectable }
    ];
    return InMemoryStructureStore;
}(InMemoryStore));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryStructureAggregateStore = /** @class */ (function (_super) {
    __extends(InMemoryStructureAggregateStore, _super);
    function InMemoryStructureAggregateStore(inMemoryStructureStore, aggregateStoreRegister) {
        return _super.call(this, inMemoryStructureStore, aggregateStoreRegister) || this;
    }
    InMemoryStructureAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureAggregateStore.ctorParameters = function () { return [
        { type: InMemoryStructureStore },
        { type: AggregateStoreRegister }
    ]; };
    return InMemoryStructureAggregateStore;
}(InMemoryAggregateStore));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
StructureAggregateRepository = /** @class */ (function () {
    function StructureAggregateRepository() {
    }
    return StructureAggregateRepository;
}());
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureAggregateRepository.prototype.getById = function (aggregateId) { };
    /**
     * @abstract
     * @param {?} aggregate
     * @return {?}
     */
    StructureAggregateRepository.prototype.save = function (aggregate) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryStructureAggregateRepository = /** @class */ (function (_super) {
    __extends(InMemoryStructureAggregateRepository, _super);
    function InMemoryStructureAggregateRepository(inMemoryStructureAggregateStore) {
        var _this = _super.call(this) || this;
        _this.inMemoryStructureAggregateStore = inMemoryStructureAggregateStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStructureAggregateRepository.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var structure = this.inMemoryStructureAggregateStore.getById(aggregateId);
        structure.clearEvents();
        return structure;
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryStructureAggregateRepository.prototype.save = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.inMemoryStructureAggregateStore.save(aggregate);
    };
    InMemoryStructureAggregateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureAggregateRepository.ctorParameters = function () { return [
        { type: InMemoryStructureAggregateStore }
    ]; };
    return InMemoryStructureAggregateRepository;
}(StructureAggregateRepository));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureAggregateRepository.prototype.inMemoryStructureAggregateStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectedRowsList = /** @class */ (function () {
    function SelectedRowsList(rowIds) {
        this.rowIds = rowIds;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    SelectedRowsList.prototype.isRowSelected = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return !!(this.rowIds.find((/**
         * @param {?} id
         * @return {?}
         */
        function (id) { return entity.equalsById(id); })));
    };
    /**
     * @return {?}
     */
    SelectedRowsList.prototype.getIds = /**
     * @return {?}
     */
    function () {
        return this.rowIds;
    };
    return SelectedRowsList;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowsList.prototype.rowIds;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Formation = /** @class */ (function () {
    function Formation(selectedRows) {
        this.selectedRowsList = new SelectedRowsList(selectedRows);
    }
    /**
     * @return {?}
     */
    Formation.prototype.getSelectedRows = /**
     * @return {?}
     */
    function () {
        return this.selectedRowsList;
    };
    return Formation;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Formation.prototype.selectedRowsList;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationConverter = /** @class */ (function () {
    function FormationConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    FormationConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var rows = aggregate.getSelectedRows();
        return new Formation(rows);
    };
    FormationConverter.decorators = [
        { type: Injectable }
    ];
    return FormationConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaCssClass = /** @class */ (function () {
    function SchemaCssClass(verticalGrid, horizontalGrid, theme, rowColoring) {
        this.verticalGrid = verticalGrid;
        this.horizontalGrid = horizontalGrid;
        this.theme = theme;
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    SchemaCssClass.prototype.getRowColoring = /**
     * @return {?}
     */
    function () {
        return this.rowColoring;
    };
    return SchemaCssClass;
}());
if (false) {
    /** @type {?} */
    SchemaCssClass.prototype.verticalGrid;
    /** @type {?} */
    SchemaCssClass.prototype.horizontalGrid;
    /** @type {?} */
    SchemaCssClass.prototype.theme;
    /** @type {?} */
    SchemaCssClass.prototype.rowColoring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Schema = /** @class */ (function () {
    function Schema(width, height, containerHeight, verticalGridEnabled, horizontalGridEnabled, theme, columnHeader, rowColoring) {
        this.width = width;
        this.height = height;
        this.containerHeight = containerHeight;
        this.verticalGridEnabled = verticalGridEnabled;
        this.horizontalGridEnabled = horizontalGridEnabled;
        this.theme = theme;
        this.columnHeader = columnHeader;
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    Schema.prototype.getRowColoring = /**
     * @return {?}
     */
    function () {
        return this.rowColoring;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.theme;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.height;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.containerHeight;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    Schema.prototype.isVerticalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalGridEnabled;
    };
    /**
     * @return {?}
     */
    Schema.prototype.isHorizontalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.horizontalGridEnabled;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getColumnHeader = /**
     * @return {?}
     */
    function () {
        return this.columnHeader;
    };
    /**
     * @return {?}
     */
    Schema.prototype.getCssClasses = /**
     * @return {?}
     */
    function () {
        return new SchemaCssClass(this.isVerticalGridEnabled(), this.isHorizontalGridEnabled(), this.getTheme(), this.getRowColoring());
    };
    return Schema;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.width;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.height;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.verticalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.horizontalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    Schema.prototype.rowColoring;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaColumnHeader = /** @class */ (function () {
    function SchemaColumnHeader(top, bottom) {
        this.top = top;
        this.bottom = bottom;
    }
    /**
     * @return {?}
     */
    SchemaColumnHeader.prototype.isTopHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.top;
    };
    /**
     * @return {?}
     */
    SchemaColumnHeader.prototype.isBottomHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.bottom;
    };
    return SchemaColumnHeader;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaColumnHeader.prototype.top;
    /**
     * @type {?}
     * @private
     */
    SchemaColumnHeader.prototype.bottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaConverter = /** @class */ (function () {
    function SchemaConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    SchemaConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var columnHeader = aggregate.getColumnHeader();
        return new Schema(aggregate.getWidth(), aggregate.getHeight(), aggregate.getContainerHeight(), aggregate.isVerticalGridEnabled(), aggregate.isHorizontalGridEnabled(), aggregate.getTheme(), this.convertColumnHeader(columnHeader), aggregate.getRowColoring());
    };
    /**
     * @private
     * @param {?} columnHeader
     * @return {?}
     */
    SchemaConverter.prototype.convertColumnHeader = /**
     * @private
     * @param {?} columnHeader
     * @return {?}
     */
    function (columnHeader) {
        return new SchemaColumnHeader(columnHeader.isHeaderOnTop(), columnHeader.isHeaderOnBottom());
    };
    SchemaConverter.decorators = [
        { type: Injectable }
    ];
    return SchemaConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingConverter = /** @class */ (function () {
    function PagingConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    PagingConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return new Paging(aggregate.isEnabled(), aggregate.getPage(), aggregate.getPageSize(), aggregate.getPageSizes(), aggregate.isPagerTop(), aggregate.isPagerBottom());
    };
    PagingConverter.decorators = [
        { type: Injectable }
    ];
    return PagingConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Source = /** @class */ (function () {
    function Source(loading) {
        this.loading = loading;
    }
    /**
     * @return {?}
     */
    Source.prototype.isLoading = /**
     * @return {?}
     */
    function () {
        return this.loading;
    };
    return Source;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Source.prototype.loading;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceConverter = /** @class */ (function () {
    function SourceConverter() {
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    SourceConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return new Source(aggregate.isLoading());
    };
    SourceConverter.decorators = [
        { type: Injectable }
    ];
    return SourceConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerticalFormationReadModel = /** @class */ (function () {
    function VerticalFormationReadModel(enabled, topMargin, containerHeight, viewportHeight) {
        this.enabled = enabled;
        this.topMargin = topMargin;
        this.containerHeight = containerHeight;
        this.viewportHeight = viewportHeight;
    }
    /**
     * @return {?}
     */
    VerticalFormationReadModel.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    VerticalFormationReadModel.prototype.getTopMargin = /**
     * @return {?}
     */
    function () {
        return this.topMargin;
    };
    /**
     * @return {?}
     */
    VerticalFormationReadModel.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.containerHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormationReadModel.prototype.getViewPortHeight = /**
     * @return {?}
     */
    function () {
        return this.viewportHeight;
    };
    return VerticalFormationReadModel;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.topMargin;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationReadModel.prototype.viewportHeight;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerticalFormationConverter = /** @class */ (function () {
    function VerticalFormationConverter() {
    }
    /**
     * @param {?} verticalFormation
     * @return {?}
     */
    VerticalFormationConverter.prototype.convert = /**
     * @param {?} verticalFormation
     * @return {?}
     */
    function (verticalFormation) {
        /** @type {?} */
        var enabled = verticalFormation.isEnabled();
        /** @type {?} */
        var topMargin = verticalFormation.getTopMargin();
        /** @type {?} */
        var containerHeight = verticalFormation.calcFullHeight();
        /** @type {?} */
        var viewportHeight = verticalFormation.getViewPortHeight();
        return new VerticalFormationReadModel(enabled, topMargin, containerHeight, viewportHeight);
    };
    VerticalFormationConverter.decorators = [
        { type: Injectable }
    ];
    return VerticalFormationConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Structure = /** @class */ (function (_super) {
    __extends(Structure, _super);
    function Structure(uid, formation, schema, paging, entities, source, verticalFormation) {
        var _this = _super.call(this, uid) || this;
        _this.formation = formation;
        _this.schema = schema;
        _this.paging = paging;
        _this.entities = entities;
        _this.source = source;
        _this.verticalFormation = verticalFormation;
        return _this;
    }
    /**
     * @return {?}
     */
    Structure.prototype.getFormation = /**
     * @return {?}
     */
    function () {
        return this.formation;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getSchema = /**
     * @return {?}
     */
    function () {
        return this.schema;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getPaging = /**
     * @return {?}
     */
    function () {
        return this.paging;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return this.entities;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getSource = /**
     * @return {?}
     */
    function () {
        return this.source;
    };
    /**
     * @return {?}
     */
    Structure.prototype.getSelectedEntities = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedIds = this.formation.getSelectedRows().getIds();
        return this.entities.filter((/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            return selectedIds.some((/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return entity.equalsById(id); }));
        }));
    };
    /**
     * @return {?}
     */
    Structure.prototype.getTopMargin = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.getTopMargin();
    };
    /**
     * @return {?}
     */
    Structure.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.getContainerHeight();
    };
    /**
     * @return {?}
     */
    Structure.prototype.isLoaderVisible = /**
     * @return {?}
     */
    function () {
        if (this.getSchema().getHeight() > 150) {
            return this.getSource().isLoading();
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    Structure.prototype.isTopHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.schema.getColumnHeader().isTopHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.topHeader to presentation
    };
    /**
     * @return {?}
     */
    Structure.prototype.isBottomHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.schema.getColumnHeader().isBottomHeaderEnabled();
        // && this.presentation.getColumns().length > 0; // TODO Move schema.bottomHeader to presentation
    };
    /**
     * @return {?}
     */
    Structure.prototype.isReadyToDisplay = /**
     * @return {?}
     */
    function () {
        return this.entities.length > 0;
        // this.presentation.getColumns().length > 0; // TODO presentation getColumns
    };
    /**
     * @return {?}
     */
    Structure.prototype.isVerticalScrollEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation.isEnabled();
    };
    return Structure;
}(ReadModel));
if (false) {
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.formation;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.schema;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.paging;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.source;
    /**
     * @type {?}
     * @private
     */
    Structure.prototype.verticalFormation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureConverter = /** @class */ (function () {
    function StructureConverter(formationConverter, schemaConverter, pagingConverter, sourceConverter, verticalFormationConverter) {
        this.formationConverter = formationConverter;
        this.schemaConverter = schemaConverter;
        this.pagingConverter = pagingConverter;
        this.sourceConverter = sourceConverter;
        this.verticalFormationConverter = verticalFormationConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    StructureConverter.prototype.convert = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        /** @type {?} */
        var formationAggregate = aggregate.getFormation();
        /** @type {?} */
        var schemaAggregate = aggregate.getSchema();
        /** @type {?} */
        var pagingAggregate = aggregate.getPaging();
        /** @type {?} */
        var sourceQuery = aggregate.getEntities();
        /** @type {?} */
        var sourceCoordinator = aggregate.getSource();
        /** @type {?} */
        var verticalFormation = aggregate.getVerticalFormation();
        return new Structure(aggregate.getId(), 
        // this.originConverter.convert(originAggregate),
        this.formationConverter.convert(formationAggregate), this.schemaConverter.convert(schemaAggregate), this.pagingConverter.convert(pagingAggregate), this.convertSource(sourceQuery), this.sourceConverter.convert(sourceCoordinator), this.verticalFormationConverter.convert(verticalFormation));
    };
    /**
     * @private
     * @param {?} source
     * @return {?}
     */
    StructureConverter.prototype.convertSource = /**
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return source.map((/**
         * @param {?} originItem
         * @return {?}
         */
        function (originItem) { return new Entity(originItem.rawData, originItem.id, originItem.getVersion()); }));
    };
    StructureConverter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConverter.ctorParameters = function () { return [
        { type: FormationConverter },
        { type: SchemaConverter },
        { type: PagingConverter },
        { type: SourceConverter },
        { type: VerticalFormationConverter }
    ]; };
    return StructureConverter;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.formationConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.schemaConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.pagingConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.sourceConverter;
    /**
     * @type {?}
     * @private
     */
    StructureConverter.prototype.verticalFormationConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryStructureQueryStore = /** @class */ (function (_super) {
    __extends(InMemoryStructureQueryStore, _super);
    function InMemoryStructureQueryStore(inMemoryProjectStore, structureConverter) {
        var _this = _super.call(this, inMemoryProjectStore) || this;
        _this.inMemoryProjectStore = inMemoryProjectStore;
        _this.structureConverter = structureConverter;
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryStructureQueryStore.prototype.toReadModel = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return this.structureConverter.convert(aggregate);
    };
    InMemoryStructureQueryStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureQueryStore.ctorParameters = function () { return [
        { type: InMemoryStructureStore },
        { type: StructureConverter }
    ]; };
    return InMemoryStructureQueryStore;
}(InMemoryReadModelStore));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureQueryStore.prototype.inMemoryProjectStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureQueryStore.prototype.structureConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureInitedEvent = /** @class */ (function (_super) {
    __extends(StructureInitedEvent, _super);
    function StructureInitedEvent(aggregateId) {
        return _super.call(this, aggregateId, 'StructureInitedEvent') || this;
    }
    return StructureInitedEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSourceLoadingEvent = /** @class */ (function (_super) {
    __extends(SetSourceLoadingEvent, _super);
    function SetSourceLoadingEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SetSourceLoadingEvent') || this;
    }
    return SetSourceLoadingEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaSetEvent = /** @class */ (function (_super) {
    __extends(SchemaSetEvent, _super);
    function SchemaSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SchemaSetEvent') || this;
    }
    return SchemaSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaThemeSetEvent = /** @class */ (function (_super) {
    __extends(SchemaThemeSetEvent, _super);
    function SchemaThemeSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SchemaThemeSetEvent') || this;
    }
    return SchemaThemeSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaHorizontalGridSetEvent = /** @class */ (function (_super) {
    __extends(SchemaHorizontalGridSetEvent, _super);
    function SchemaHorizontalGridSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SchemaHorizontalGridSetEvent') || this;
    }
    return SchemaHorizontalGridSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaVerticalGridSetEvent = /** @class */ (function (_super) {
    __extends(SchemaVerticalGridSetEvent, _super);
    function SchemaVerticalGridSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SchemaVerticalGridSetEvent') || this;
    }
    return SchemaVerticalGridSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaTopHeaderChangedEvent = /** @class */ (function (_super) {
    __extends(SchemaTopHeaderChangedEvent, _super);
    function SchemaTopHeaderChangedEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SchemaTopHeaderChangedEvent') || this;
    }
    return SchemaTopHeaderChangedEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaBottomHeaderChangedEvent = /** @class */ (function (_super) {
    __extends(SchemaBottomHeaderChangedEvent, _super);
    function SchemaBottomHeaderChangedEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SchemaBottomHeaderChangedEvent') || this;
    }
    return SchemaBottomHeaderChangedEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RowColoringSetEvent = /** @class */ (function (_super) {
    __extends(RowColoringSetEvent, _super);
    function RowColoringSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'RowColoringSetEvent') || this;
    }
    return RowColoringSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingSetEvent = /** @class */ (function (_super) {
    __extends(PagingSetEvent, _super);
    function PagingSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'PagingSetEvent') || this;
    }
    return PagingSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationSetEvent = /** @class */ (function (_super) {
    __extends(FormationSetEvent, _super);
    function FormationSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'FormationSetEvent') || this;
    }
    return FormationSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerticalScrollEnabledSetEvent = /** @class */ (function (_super) {
    __extends(VerticalScrollEnabledSetEvent, _super);
    function VerticalScrollEnabledSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'VerticalScrollEnabledSetEvent') || this;
    }
    return VerticalScrollEnabledSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollPositionSetEvent = /** @class */ (function (_super) {
    __extends(ScrollPositionSetEvent, _super);
    function ScrollPositionSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'ScrollPositionSetEvent') || this;
    }
    return ScrollPositionSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OriginSetEvent = /** @class */ (function (_super) {
    __extends(OriginSetEvent, _super);
    function OriginSetEvent(aggregateId, origin) {
        var _this = _super.call(this, aggregateId, 'OriginSetEvent') || this;
        _this.origin = origin;
        return _this;
    }
    /**
     * @return {?}
     */
    OriginSetEvent.prototype.getOrigin = /**
     * @return {?}
     */
    function () {
        return this.origin;
    };
    return OriginSetEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    OriginSetEvent.prototype.origin;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFilterToggledEvent = /** @class */ (function (_super) {
    __extends(StructureFilterToggledEvent, _super);
    function StructureFilterToggledEvent(aggregateId) {
        return _super.call(this, aggregateId, 'StructureFilterToggledEvent') || this;
    }
    return StructureFilterToggledEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InMemoryStructureRepository = /** @class */ (function (_super) {
    __extends(InMemoryStructureRepository, _super);
    function InMemoryStructureRepository(domainEventBus, inMemoryStructureQueryStore) {
        var _this = _super.call(this) || this;
        _this.domainEventBus = domainEventBus;
        _this.inMemoryStructureQueryStore = inMemoryStructureQueryStore;
        _this.structureIdToStructure = new Map();
        _this.structure$ = new ReplaySubject(1);
        _this.unsubscribe$ = new Subject();
        _this.domainEventBus
            .ofEvent(StructureInitedEvent, SetSourceLoadingEvent, SchemaSetEvent, SchemaThemeSetEvent, SchemaHorizontalGridSetEvent, SchemaVerticalGridSetEvent, SchemaTopHeaderChangedEvent, SchemaBottomHeaderChangedEvent, RowColoringSetEvent, PagingSetEvent, PrevPageEvent, NextPageEvent, PagesizeChangedEvent, FormationSetEvent, SelectedRowToggledEvent, VerticalScrollEnabledSetEvent, ScrollPositionSetEvent, (/** @type {?} */ (SortToggledEvent)), StructureFilterToggledEvent, (/** @type {?} */ (OriginSetEvent)))
            .pipe(takeUntil(_this.unsubscribe$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var aggregateId = event.aggregateId;
            /** @type {?} */
            var structure = _this.inMemoryStructureQueryStore.getById(aggregateId);
            /** @type {?} */
            var key = structure.getId().toString();
            _this.structureIdToStructure.set(key, structure);
            _this.structure$.next(_this.structureIdToStructure);
        }));
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStructureRepository.prototype.select = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.structure$
            .asObservable()
            .pipe(filter((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) {
            /** @type {?} */
            var key = aggregateId.getId();
            return structureIdToStructure.has(key);
        })), map((/**
         * @param {?} structureIdToStructure
         * @return {?}
         */
        function (structureIdToStructure) { return structureIdToStructure.get(aggregateId.getId()); })));
    };
    /**
     * @return {?}
     */
    InMemoryStructureRepository.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    InMemoryStructureRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: InMemoryStructureQueryStore }
    ]; };
    return InMemoryStructureRepository;
}(StructureRepository));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structureIdToStructure;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.structure$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureRepository.prototype.inMemoryStructureQueryStore;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var inMemoryStructureCommandProviders = [
    InMemoryStructureAggregateStore,
    {
        provide: StructureAggregateRepository,
        useClass: InMemoryStructureAggregateRepository
    },
];
/** @type {?} */
var inMemoryStructureQueryProviders = [
    InMemoryStructureQueryStore,
    {
        provide: StructureRepository,
        useClass: InMemoryStructureRepository
    }
];
/** @type {?} */
var inMemoryStructureProviders = [
    InMemoryStructureStore
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSourceItemEditedAggregateEvent = /** @class */ (function (_super) {
    __extends(StructureSourceItemEditedAggregateEvent, _super);
    function StructureSourceItemEditedAggregateEvent(aggregateId, beforeItem, afterItem) {
        var _this = _super.call(this, aggregateId, 'StructureSourceItemEditedAggregateEvent') || this;
        _this.beforeItem = beforeItem;
        _this.afterItem = afterItem;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSourceItemEditedAggregateEvent.prototype.getBeforeItem = /**
     * @return {?}
     */
    function () {
        return this.beforeItem;
    };
    /**
     * @return {?}
     */
    StructureSourceItemEditedAggregateEvent.prototype.getAfterItem = /**
     * @return {?}
     */
    function () {
        return this.afterItem;
    };
    return StructureSourceItemEditedAggregateEvent;
}(AggregateEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedAggregateEvent.prototype.beforeItem;
    /**
     * @type {?}
     * @private
     */
    StructureSourceItemEditedAggregateEvent.prototype.afterItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureOriginChangedAggregateEvent = /** @class */ (function (_super) {
    __extends(StructureOriginChangedAggregateEvent, _super);
    function StructureOriginChangedAggregateEvent(aggregateId, origin) {
        var _this = _super.call(this, aggregateId, 'StructureOriginChangedAggregateEvent') || this;
        _this.origin = origin;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureOriginChangedAggregateEvent.prototype.getOrigin = /**
     * @return {?}
     */
    function () {
        return this.origin;
    };
    return StructureOriginChangedAggregateEvent;
}(AggregateEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedAggregateEvent.prototype.origin;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceCoordinator = /** @class */ (function () {
    function SourceCoordinator() {
        this.loading = false;
        this.fetched = false;
        this.entities = [];
        this.slicedEntities = [];
    }
    /**
     * @return {?}
     */
    SourceCoordinator.prototype.isLoading = /**
     * @return {?}
     */
    function () {
        return this.loading;
    };
    /**
     * @return {?}
     */
    SourceCoordinator.prototype.isFetched = /**
     * @return {?}
     */
    function () {
        return this.fetched;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SourceCoordinator.prototype.setLoading = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.loading = enabled;
    };
    /**
     * @param {?} ent
     * @return {?}
     */
    SourceCoordinator.prototype.setEntities = /**
     * @param {?} ent
     * @return {?}
     */
    function (ent) {
        this.entities = ent;
    };
    /**
     * @return {?}
     */
    SourceCoordinator.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return this.entities;
    };
    /**
     * @param {?} ent
     * @return {?}
     */
    SourceCoordinator.prototype.setSlicedEntities = /**
     * @param {?} ent
     * @return {?}
     */
    function (ent) {
        this.slicedEntities = ent;
    };
    /**
     * @return {?}
     */
    SourceCoordinator.prototype.getSlicedEntities = /**
     * @return {?}
     */
    function () {
        return this.slicedEntities;
    };
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceCoordinator.prototype.setOrigin = /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (items === void 0) { items = []; }
        this.origin = this.convertItems(items);
        return this.createOriginChangedEvent(structureId);
    };
    /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceCoordinator.prototype.setConvertedOrigin = /**
     * @param {?=} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (items === void 0) { items = []; }
        this.origin = items;
        return this.createOriginChangedEvent(structureId);
    };
    /**
     * @return {?}
     */
    SourceCoordinator.prototype.getOrigin = /**
     * @return {?}
     */
    function () {
        return this.origin;
    };
    /**
     * @return {?}
     */
    SourceCoordinator.prototype.getOriginSize = /**
     * @return {?}
     */
    function () {
        return this.origin.length;
    };
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    /**
     * @param {?} itemId
     * @param {?} value
     * @param {?} field
     * @param {?} structureId
     * @return {?}
     */
    SourceCoordinator.prototype.editOriginItem = 
    // editOriginItemByProperty(byField, value: any, field: Field, structureId: StructureId): AggregateEvent {
    //
    // }
    /**
     * @param {?} itemId
     * @param {?} value
     * @param {?} field
     * @param {?} structureId
     * @return {?}
     */
    function (itemId, value, field, structureId) {
        /** @type {?} */
        var item = this.findOriginItem(itemId);
        /** @type {?} */
        var itemBeforeChange = item.clone();
        if (item) {
            item.rawData[field.getAccessor()] = value;
            item.bumpVersion();
        }
        return [
            new StructureSourceItemEditedAggregateEvent(structureId, itemBeforeChange, item.clone()),
            this.createOriginChangedEvent(structureId)
        ];
    };
    /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    SourceCoordinator.prototype.removeOriginItem = /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    function (itemId, structureId) {
        /** @type {?} */
        var index = this.findOriginItemIndex(itemId);
        if (index > -1) {
            this.origin.splice(index, 1);
            return [this.createOriginChangedEvent(structureId)];
        }
        return [];
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    SourceCoordinator.prototype.convertItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        return items.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return new OriginItemEntity(RandomStringGenerator.generate(), item); }));
    };
    /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    SourceCoordinator.prototype.createOriginChangedEvent = /**
     * @private
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return new StructureOriginChangedAggregateEvent(structureId, this.origin);
    };
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    SourceCoordinator.prototype.findOriginItem = /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.origin.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === itemId; }));
    };
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    SourceCoordinator.prototype.findOriginItemIndex = /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.origin.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.id === itemId; }));
    };
    return SourceCoordinator;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCoordinator.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    SourceCoordinator.prototype.fetched;
    /**
     * @type {?}
     * @private
     */
    SourceCoordinator.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    SourceCoordinator.prototype.entities;
    /**
     * @type {?}
     * @private
     */
    SourceCoordinator.prototype.slicedEntities;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceCoordinatorFactory = /** @class */ (function () {
    function SourceCoordinatorFactory() {
    }
    /**
     * @return {?}
     */
    SourceCoordinatorFactory.prototype.createDefault = /**
     * @return {?}
     */
    function () {
        return new SourceCoordinator();
    };
    /**
     * @return {?}
     */
    SourceCoordinatorFactory.prototype.create = /**
     * @return {?}
     */
    function () {
        return new SourceCoordinator();
    };
    SourceCoordinatorFactory.decorators = [
        { type: Injectable }
    ];
    return SourceCoordinatorFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerticalRange = /** @class */ (function () {
    function VerticalRange(start, end) {
        this.start = start;
        this.end = end;
    }
    /**
     * @return {?}
     */
    VerticalRange.prototype.getStart = /**
     * @return {?}
     */
    function () {
        return this.start;
    };
    /**
     * @return {?}
     */
    VerticalRange.prototype.getEnd = /**
     * @return {?}
     */
    function () {
        return this.end;
    };
    return VerticalRange;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalRange.prototype.start;
    /**
     * @type {?}
     * @private
     */
    VerticalRange.prototype.end;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerticalFormation = /** @class */ (function () {
    function VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = 0; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        this.enabled = enabled;
        this.rowHeight = 30;
        this.hiddenItemsTop = 0;
        this.hiddenItemsBottom = 0;
        this.viewportHeight = viewportHeight;
        this.sourceSize = sourceSize;
        this.scrollPosition = scrollPosition;
        if (Number.isInteger(rowHeight)) {
            this.rowHeight = rowHeight;
        }
        if (Number.isInteger(hiddenItemsTop)) {
            this.hiddenItemsTop = hiddenItemsTop;
        }
        if (Number.isInteger(hiddenItemsBottom)) {
            this.hiddenItemsBottom = hiddenItemsBottom;
        }
        this.calculateRange();
    }
    /**
     * @return {?}
     */
    VerticalFormation.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled &&
            this.viewportHeight > 0 &&
            this.sourceSize > 0;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getRange = /**
     * @return {?}
     */
    function () {
        return this.range;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getTopMargin = /**
     * @return {?}
     */
    function () {
        return this.range.getStart() * this.rowHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.calculateRange = /**
     * @return {?}
     */
    function () {
        if (this.calcFullHeight() <= this.viewportHeight) {
            this.range = new VerticalRange(0, this.sourceSize);
            return;
        }
        /** @type {?} */
        var itemsInViewport = Math.floor(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        var hiddenElements = Math.floor(this.scrollPosition / this.rowHeight);
        /** @type {?} */
        var topMargin = Math.abs(hiddenElements - this.hiddenItemsTop) * this.rowHeight;
        /** @type {?} */
        var start = (hiddenElements - this.hiddenItemsTop);
        /** @type {?} */
        var viewportElements = Math.ceil(this.viewportHeight / this.rowHeight);
        /** @type {?} */
        var end = start + viewportElements + this.hiddenItemsBottom;
        if (end > this.sourceSize) {
            end = this.sourceSize;
            start = end - itemsInViewport;
        }
        this.range = new VerticalRange(start, end);
        return {
            start: start,
            end: end,
            topMargin: topMargin
        };
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    VerticalFormation.prototype.setEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
        // TODO dispatch aggregate event
        if (this.enabled && this.viewportHeight === 0) {
            this.logger.warn('Height needs to be specified in order for virtual scroll to work.');
        }
        this.calculateRange();
    };
    /**
     * @param {?=} sourceSize
     * @return {?}
     */
    VerticalFormation.prototype.setSourceSize = /**
     * @param {?=} sourceSize
     * @return {?}
     */
    function (sourceSize) {
        if (sourceSize === void 0) { sourceSize = 0; }
        this.sourceSize = sourceSize;
        this.calculateRange();
    };
    /**
     * @param {?} count
     * @return {?}
     */
    VerticalFormation.prototype.setTopHiddenItemsCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.hiddenItemsTop = count;
        this.calculateRange();
    };
    /**
     * @param {?} count
     * @return {?}
     */
    VerticalFormation.prototype.setBottomHiddenItemsCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.hiddenItemsBottom = count;
        this.calculateRange();
    };
    /**
     * @param {?} scrollPosition
     * @return {?}
     */
    VerticalFormation.prototype.setScrollPosition = /**
     * @param {?} scrollPosition
     * @return {?}
     */
    function (scrollPosition) {
        this.scrollPosition = scrollPosition;
        this.calculateRange();
    };
    /**
     * @param {?} height
     * @return {?}
     */
    VerticalFormation.prototype.setViewportHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.viewportHeight = height;
        this.calculateRange();
    };
    /**
     * @param {?} height
     * @return {?}
     */
    VerticalFormation.prototype.setRowHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.rowHeight = height;
    };
    /**
     * @param {?} logger
     * @return {?}
     */
    VerticalFormation.prototype.setLogger = /**
     * @param {?} logger
     * @return {?}
     */
    function (logger) {
        this.logger = logger;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.calcFullHeight = /**
     * @return {?}
     */
    function () {
        return this.sourceSize * this.rowHeight;
    };
    /**
     * @return {?}
     */
    VerticalFormation.prototype.getViewPortHeight = /**
     * @return {?}
     */
    function () {
        return this.viewportHeight;
    };
    return VerticalFormation;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.rowHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsTop;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.hiddenItemsBottom;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.viewportHeight;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.scrollPosition;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.range;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.sourceSize;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.logger;
    /**
     * @type {?}
     * @private
     */
    VerticalFormation.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerticalFormationFactory = /** @class */ (function () {
    function VerticalFormationFactory(logger) {
        this.logger = logger;
    }
    /**
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     * @return {?}
     */
    VerticalFormationFactory.prototype.create = /**
     * @param {?=} enabled
     * @param {?=} viewportHeight
     * @param {?=} sourceSize
     * @param {?=} scrollPosition
     * @param {?=} rowHeight
     * @param {?=} hiddenItemsTop
     * @param {?=} hiddenItemsBottom
     * @return {?}
     */
    function (enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        if (enabled === void 0) { enabled = false; }
        if (viewportHeight === void 0) { viewportHeight = 0; }
        if (sourceSize === void 0) { sourceSize = 0; }
        if (scrollPosition === void 0) { scrollPosition = 0; }
        /** @type {?} */
        var vf = new VerticalFormation(enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
        vf.setLogger(this.logger);
        return vf;
    };
    VerticalFormationFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VerticalFormationFactory.ctorParameters = function () { return [
        { type: Logger }
    ]; };
    return VerticalFormationFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    VerticalFormationFactory.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AGGREGATION_CALCULATORS = 'GUI - Aggregation Calculators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationsChangedAggregateEvent = /** @class */ (function (_super) {
    __extends(StructureAggregationsChangedAggregateEvent, _super);
    function StructureAggregationsChangedAggregateEvent(aggregateId, aggregatedValues) {
        var _this = _super.call(this, aggregateId, 'StructureAggregationsChangedAggregateEvent') || this;
        _this.aggregatedValues = aggregatedValues;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureAggregationsChangedAggregateEvent.prototype.getAggregations = /**
     * @return {?}
     */
    function () {
        return this.aggregatedValues;
    };
    return StructureAggregationsChangedAggregateEvent;
}(AggregateEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregationsChangedAggregateEvent.prototype.aggregatedValues;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AggregationManager = /** @class */ (function () {
    function AggregationManager(structureId, calculators) {
        this.calculators = calculators;
        this.enabled = false;
        this.values = new Map();
        this.structureId = structureId;
    }
    /**
     * @param {?} fields
     * @param {?} entities
     * @return {?}
     */
    AggregationManager.prototype.calculate = /**
     * @param {?} fields
     * @param {?} entities
     * @return {?}
     */
    function (fields, entities) {
        if (!this.enabled) {
            return [];
        }
        /** @type {?} */
        var calculations = new Map();
        this.calculators.forEach((/**
         * @param {?} calc
         * @return {?}
         */
        function (calc) {
            /** @type {?} */
            var aggregatedValues = calc.calculate(fields, entities);
            if (aggregatedValues) {
                Array.from(aggregatedValues.keys())
                    .forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    calculations.set(key, aggregatedValues.get(key));
                }));
            }
        }));
        if (calculations.size > 0) {
            return [
                new StructureAggregationsChangedAggregateEvent(this.structureId, calculations)
            ];
        }
        else {
            return [];
        }
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    AggregationManager.prototype.setEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
    };
    /**
     * @return {?}
     */
    AggregationManager.prototype.add = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AggregationManager.prototype.remove = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AggregationManager.prototype.update = /**
     * @return {?}
     */
    function () {
    };
    return AggregationManager;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.values;
    /**
     * @type {?}
     * @private
     */
    AggregationManager.prototype.calculators;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AggregationManagerFactory = /** @class */ (function () {
    function AggregationManagerFactory(calculators) {
        this.calculators = calculators;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    AggregationManagerFactory.prototype.create = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return new AggregationManager(structureId, this.calculators);
    };
    AggregationManagerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AggregationManagerFactory.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [AGGREGATION_CALCULATORS,] }] }
    ]; };
    return AggregationManagerFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregationManagerFactory.prototype.calculators;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFilter = /** @class */ (function () {
    function StructureFilter(id, field, filterValue) {
        this.filterId = id;
        this.field = field;
        this.filterValue = filterValue;
    }
    /**
     * @return {?}
     */
    StructureFilter.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.field.getId();
    };
    /**
     * @return {?}
     */
    StructureFilter.prototype.getFilterValue = /**
     * @return {?}
     */
    function () {
        return this.filterValue;
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    StructureFilter.prototype.setFilterValue = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        this.filterValue = filterValue;
    };
    // Move to container
    // Move to container
    /**
     * @param {?} entities
     * @return {?}
     */
    StructureFilter.prototype.filter = 
    // Move to container
    /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (_this.field.getDataType() === DataType.STRING) {
                return _this.filterString(item);
            }
            else if (_this.field.getDataType() === DataType.NUMBER) {
                return _this.filterNumber(item);
            }
            else if (_this.field.getDataType() === DataType.BOOLEAN) {
                return _this.filterBoolean(item);
            }
            else {
                return true;
            }
        }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    StructureFilter.prototype.filterString = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var value = this.field.getValue(item);
        return value.toLowerCase().indexOf(this.filterValue.toLowerCase()) > -1;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    StructureFilter.prototype.filterNumber = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var numberValue = this.field.getValue(item);
        return numberValue > this.filterValue;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    StructureFilter.prototype.filterBoolean = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var booleanValue = this.field.getValue(item);
        return booleanValue === this.filterValue;
    };
    return StructureFilter;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.filterId;
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureFilter.prototype.filterValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilterId = /** @class */ (function () {
    function FilterId(field, filterId) {
        /** @type {?} */
        var fieldId = field.getId().toString();
        this.id = fieldId + '@' + filterId;
    }
    /**
     * @return {?}
     */
    FilterId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    return FilterId;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterId.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilterContainer = /** @class */ (function () {
    function FilterContainer(enabled) {
        if (enabled === void 0) { enabled = false; }
        this.filters = new Map();
        this.enabled = enabled;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    FilterContainer.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
    };
    /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    FilterContainer.prototype.addFilter = /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    function (field, externalFilterId, filterValue) {
        /** @type {?} */
        var filterId = new FilterId(field, externalFilterId);
        /** @type {?} */
        var filter = new StructureFilter(filterId, field, filterValue);
        if (filterValue === '') {
            this.filters.delete(filterId.getId());
        }
        else {
            this.filters.set(filterId.getId(), filter);
        }
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    FilterContainer.prototype.filter = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var e_1, _a;
        /** @type {?} */
        var filters = this.getAll();
        /** @type {?} */
        var filteredEntities = __spread(entities);
        try {
            for (var filters_1 = __values(filters), filters_1_1 = filters_1.next(); !filters_1_1.done; filters_1_1 = filters_1.next()) {
                var filter = filters_1_1.value;
                filteredEntities = filter.filter(filteredEntities);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (filters_1_1 && !filters_1_1.done && (_a = filters_1.return)) _a.call(filters_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return filteredEntities;
    };
    /**
     * @return {?}
     */
    FilterContainer.prototype.getAll = /**
     * @return {?}
     */
    function () {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.filters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) { return arr[1]; }));
    };
    return FilterContainer;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterContainer.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    FilterContainer.prototype.filters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FilterContainerFactory = /** @class */ (function () {
    function FilterContainerFactory() {
    }
    /**
     * @param {?=} enabled
     * @return {?}
     */
    FilterContainerFactory.prototype.create = /**
     * @param {?=} enabled
     * @return {?}
     */
    function (enabled) {
        if (enabled === void 0) { enabled = false; }
        return new FilterContainer(enabled);
    };
    FilterContainerFactory.decorators = [
        { type: Injectable }
    ];
    return FilterContainerFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldIdGenerator = /** @class */ (function () {
    function FieldIdGenerator() {
    }
    /**
     * @return {?}
     */
    FieldIdGenerator.prototype.generateId = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var id = RandomStringGenerator.generate();
        return new FieldId(id);
    };
    return FieldIdGenerator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
Field = /** @class */ (function () {
    function Field(id, accessor, dataType, aggregationConfig) {
        this.aggregationEnabled = true;
        this.id = id;
        this.accessor = accessor;
        this.dataType = dataType;
        if (typeof accessor === 'string') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return entity.getData()[accessor]; });
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            function (entity) { return accessor(entity.getData()); });
        }
        this.possibleAggregations = this.assignPossibleAggregations();
        this.assignAggregations(aggregationConfig);
    }
    /**
     * @return {?}
     */
    Field.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id;
    };
    /**
     * @return {?}
     */
    Field.prototype.getKey = /**
     * @return {?}
     */
    function () {
        return this.getId().getId();
    };
    /**
     * @return {?}
     */
    Field.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.dataType;
    };
    /**
     * @return {?}
     */
    Field.prototype.getAccessor = /**
     * @return {?}
     */
    function () {
        return this.accessor;
    };
    /**
     * @return {?}
     */
    Field.prototype.getAccessorMethod = /**
     * @return {?}
     */
    function () {
        return this.accessorMethod;
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    Field.prototype.getValue = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.accessorMethod(entity);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Field.prototype.isAggregation = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (!this.isAggregationEnabled()) {
            return false;
        }
        return !!(this.aggregations & type);
    };
    /**
     * @return {?}
     */
    Field.prototype.isAggregationEnabled = /**
     * @return {?}
     */
    function () {
        return this.aggregationEnabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    Field.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.aggregationEnabled = enabled;
    };
    /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    Field.prototype.assignAggregations = /**
     * @private
     * @param {?} aggregationConfig
     * @return {?}
     */
    function (aggregationConfig) {
        var _this = this;
        if (!!aggregationConfig && Object.keys(aggregationConfig).length !== 0) {
            if (aggregationConfig.enabled) {
                this.aggregationEnabled = !!aggregationConfig.enabled;
            }
            if (aggregationConfig.aggregationTypes) {
                this.aggregations = 0;
                aggregationConfig.aggregationTypes.forEach((/**
                 * @param {?} t
                 * @return {?}
                 */
                function (t) {
                    _this.aggregations |= t;
                }));
            }
            else {
                this.aggregations = this.assignDefaultAggregations();
            }
        }
        else {
            this.aggregations = this.assignDefaultAggregations();
        }
    };
    return Field;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    Field.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.dataType;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.accessorMethod;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregationEnabled;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.aggregations;
    /**
     * @type {?}
     * @private
     */
    Field.prototype.possibleAggregations;
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignDefaultAggregations = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Field.prototype.assignPossibleAggregations = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UnknownField = /** @class */ (function (_super) {
    __extends(UnknownField, _super);
    function UnknownField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.UNKNOWN, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    UnknownField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    };
    /**
     * @return {?}
     */
    UnknownField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    };
    return UnknownField;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberField = /** @class */ (function (_super) {
    __extends(NumberField, _super);
    function NumberField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.NUMBER, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    NumberField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.SUM |
        // 	AggregationType.MIN |
        // 	AggregationType.MAX |
        // 	AggregationType.AVERAGE |
        // 	AggregationType.MEDIAN;
    };
    /**
     * @return {?}
     */
    NumberField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.SUM |
            AggregationType.MIN |
            AggregationType.MAX |
            AggregationType.AVERAGE |
            AggregationType.MEDIAN;
    };
    return NumberField;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringField = /** @class */ (function (_super) {
    __extends(StringField, _super);
    function StringField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.STRING, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    StringField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    };
    /**
     * @return {?}
     */
    StringField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    };
    return StringField;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanField = /** @class */ (function (_super) {
    __extends(BooleanField, _super);
    function BooleanField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.BOOLEAN, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    BooleanField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT |
        // 	AggregationType.TRUTHY |
        // 	AggregationType.FALSY;
    };
    /**
     * @return {?}
     */
    BooleanField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT |
            AggregationType.TRUTHY |
            AggregationType.FALSY;
    };
    return BooleanField;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateField = /** @class */ (function (_super) {
    __extends(DateField, _super);
    function DateField(id, accessor, aggregationConfig) {
        return _super.call(this, id, accessor, DataType.DATE, aggregationConfig) || this;
    }
    /**
     * @return {?}
     */
    DateField.prototype.assignDefaultAggregations = /**
     * @return {?}
     */
    function () {
        return 0;
        // return AggregationType.COUNT |
        // 	AggregationType.DISTINCT;
    };
    /**
     * @return {?}
     */
    DateField.prototype.assignPossibleAggregations = /**
     * @return {?}
     */
    function () {
        return AggregationType.COUNT |
            AggregationType.DISTINCT;
    };
    return DateField;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldFactory = /** @class */ (function () {
    function FieldFactory(fieldIdGenerator) {
        this.fieldIdGenerator = fieldIdGenerator;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    FieldFactory.prototype.create = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var columnType = column.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), column.aggregation);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)), column.aggregation);
        }
        if (columnType === DataType.STRING) {
            return new StringField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
        if (columnType === DataType.DATE) {
            return new DateField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (column.field)));
        }
    };
    FieldFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldFactory.ctorParameters = function () { return [
        { type: FieldIdGenerator }
    ]; };
    return FieldFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.fieldIdGenerator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldContainer = /** @class */ (function () {
    function FieldContainer(fieldFactory) {
        this.fieldFactory = fieldFactory;
        this.fields = new Map();
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    FieldContainer.prototype.getField = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        if (fieldId === null) {
            return this.getAllFields()[0];
        }
        return this.fields.get(fieldId.getId());
    };
    /**
     * @return {?}
     */
    FieldContainer.prototype.getAllFieldIds = /**
     * @return {?}
     */
    function () {
        return Array.from(this.fields.keys());
    };
    /**
     * @return {?}
     */
    FieldContainer.prototype.getAllFields = /**
     * @return {?}
     */
    function () {
        return Array.from(this.fields.values());
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    FieldContainer.prototype.initFields = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        if (!columns) {
            return;
        }
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var field = _this.fieldFactory.create(column);
            _this.addField(field);
        }));
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    FieldContainer.prototype.addFields = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var e_1, _a;
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                this.addField(field);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldContainer.prototype.addField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.fields.set(field.getId().toString(), field);
    };
    return FieldContainer;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldContainer.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    FieldContainer.prototype.fieldFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldContainerFactory = /** @class */ (function () {
    function FieldContainerFactory(fieldFactory) {
        this.fieldFactory = fieldFactory;
    }
    /**
     * @return {?}
     */
    FieldContainerFactory.prototype.create = /**
     * @return {?}
     */
    function () {
        return new FieldContainer(this.fieldFactory);
    };
    FieldContainerFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldContainerFactory.ctorParameters = function () { return [
        { type: FieldFactory }
    ]; };
    return FieldContainerFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldContainerFactory.prototype.fieldFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationAggregate = /** @class */ (function () {
    function FormationAggregate(selectedRows) {
        this.selectedRows = selectedRows;
    }
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     */
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     * @return {?}
     */
    FormationAggregate.default = /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     * @return {?}
     */
    function () {
        return new FormationAggregate([]);
    };
    /**
     * @return {?}
     */
    FormationAggregate.prototype.getSelectedRows = /**
     * @return {?}
     */
    function () {
        return this.selectedRows;
    };
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    FormationAggregate.prototype.toggleRow = /**
     * @param {?} selectedRow
     * @return {?}
     */
    function (selectedRow) {
        if (this.selectedRows.length > 0) {
            if (this.selectedRows[0] === selectedRow) {
                this.selectedRows = [];
                return;
            }
        }
        this.selectedRows = [selectedRow];
    };
    return FormationAggregate;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationAggregate.prototype.selectedRows;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnHeaderEntity = /** @class */ (function () {
    function ColumnHeaderEntity(top, bottom) {
        this.top = top;
        this.bottom = bottom;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    ColumnHeaderEntity.prototype.setHeaderTop = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.top = enabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    ColumnHeaderEntity.prototype.setHeaderBottom = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.bottom = enabled;
    };
    /**
     * @return {?}
     */
    ColumnHeaderEntity.prototype.isHeaderOnTop = /**
     * @return {?}
     */
    function () {
        return this.top;
    };
    /**
     * @return {?}
     */
    ColumnHeaderEntity.prototype.isHeaderOnBottom = /**
     * @return {?}
     */
    function () {
        return this.bottom;
    };
    return ColumnHeaderEntity;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ColumnHeaderEntity.prototype.top;
    /**
     * @type {?}
     * @private
     */
    ColumnHeaderEntity.prototype.bottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaAggregate = /** @class */ (function () {
    function SchemaAggregate(width, height) {
        this.width = width;
        this.height = height;
        this.headerHeight = 28;
        this.pagerHeight = 35;
        this.active = false;
        this.horizontalGrid = true;
        this.verticalGrid = true;
        this.columnHeader = new ColumnHeaderEntity(true, false);
        this.theme = SchemaTheme.FABRIC;
        this.rowColoring = SchemaRowColoring.EVEN;
        this.calculateContainerHeight();
    }
    /**
     * @return {?}
     */
    SchemaAggregate.default = /**
     * @return {?}
     */
    function () {
        return new SchemaAggregate();
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getRowColoring = /**
     * @return {?}
     */
    function () {
        return this.rowColoring;
    };
    /**
     * @param {?} height
     * @return {?}
     */
    SchemaAggregate.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.height = height;
        this.calculateContainerHeight();
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    SchemaAggregate.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
    };
    /**
     * @param {?} coloring
     * @return {?}
     */
    SchemaAggregate.prototype.setRowColoring = /**
     * @param {?} coloring
     * @return {?}
     */
    function (coloring) {
        this.rowColoring = coloring;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.theme;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.width;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.height;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getContainerHeight = /**
     * @return {?}
     */
    function () {
        return this.height;
        // return this.containerHeight;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.getColumnHeader = /**
     * @return {?}
     */
    function () {
        return this.columnHeader;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setHeaderTop = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.getColumnHeader().setHeaderTop(enabled);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setHeaderBottom = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.getColumnHeader().setHeaderBottom(enabled);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setVerticalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.verticalGrid = enabled;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    SchemaAggregate.prototype.setHorizontalGrid = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.horizontalGrid = enabled;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.isVerticalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.verticalGrid;
    };
    /**
     * @return {?}
     */
    SchemaAggregate.prototype.isHorizontalGridEnabled = /**
     * @return {?}
     */
    function () {
        return this.horizontalGrid;
    };
    /**
     * @private
     * @return {?}
     */
    SchemaAggregate.prototype.getHeaderHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.headerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    SchemaAggregate.prototype.getPagerHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.pagerHeight;
    };
    /**
     * @private
     * @return {?}
     */
    SchemaAggregate.prototype.calculateContainerHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.height) {
            this.active = false;
            return;
        }
        else {
            this.active = true;
        }
        this.containerHeight = this.height - this.getHeaderHeight() - this.getPagerHeight();
    };
    return SchemaAggregate;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.headerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.pagerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.containerHeight;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.active;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.horizontalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.verticalGrid;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.rowColoring;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.width;
    /**
     * @type {?}
     * @private
     */
    SchemaAggregate.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregate = /** @class */ (function (_super) {
    __extends(StructureAggregate, _super);
    function StructureAggregate(structureId, paging, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer) {
        var _this = _super.call(this, structureId) || this;
        _this.formation = FormationAggregate.default();
        _this.schema = SchemaAggregate.default();
        _this.search = false;
        _this.quickFilters = false;
        _this.paging = paging;
        _this.sourceCoordinator = source;
        _this.verticalFormation = verticalFormation;
        _this.aggregationManager = aggregationManager;
        _this.sorterContainer = sorterContainer;
        _this.filterContainer = filterContainer;
        _this.fieldContainer = fieldContainer;
        return _this;
    }
    // TODO Get rid of
    // TODO Get rid of
    /**
     * @param {?} uid
     * @param {?} paging
     * @param {?} sourceCoordinator
     * @param {?} verticalFormation
     * @param {?} aggregationManager
     * @param {?} sorterContainer
     * @param {?} filterContainer
     * @param {?} fieldContainer
     * @return {?}
     */
    StructureAggregate.default = 
    // TODO Get rid of
    /**
     * @param {?} uid
     * @param {?} paging
     * @param {?} sourceCoordinator
     * @param {?} verticalFormation
     * @param {?} aggregationManager
     * @param {?} sorterContainer
     * @param {?} filterContainer
     * @param {?} fieldContainer
     * @return {?}
     */
    function (uid, paging, sourceCoordinator, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer) {
        return new StructureAggregate(uid, paging, sourceCoordinator, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer);
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getVerticalFormation = /**
     * @return {?}
     */
    function () {
        return this.verticalFormation;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructureAggregate.prototype.setAggregationEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.aggregationManager.setEnabled(enabled);
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @param {?} items
     * @return {?}
     */
    StructureAggregate.prototype.setOrigin = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.addEvent(this.sourceCoordinator.setOrigin(items, this.getId()));
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @param {?} editParams
     * @return {?}
     */
    StructureAggregate.prototype.editItem = /**
     * @param {?} editParams
     * @return {?}
     */
    function (editParams) {
        var _this = this;
        /** @type {?} */
        var itemId = editParams.getItemId();
        /** @type {?} */
        var fieldId = editParams.getColumnFieldId();
        /** @type {?} */
        var field = this.fieldContainer.getField((/** @type {?} */ (fieldId)));
        /** @type {?} */
        var // as FieldId
        value = editParams.getValue();
        /** @type {?} */
        var editItemEvents = this.sourceCoordinator.editOriginItem(itemId, value, field, this.getId());
        editItemEvents.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.addEvent(e); }));
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @param {?} height
     * @return {?}
     */
    StructureAggregate.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.getSchema().setHeight(height);
        /** @type {?} */
        var viewportHeight = this.getSchema().getContainerHeight();
        this.verticalFormation.setViewportHeight(viewportHeight);
        this.calculateSourceBasedOnVirtualScroll();
    };
    /**
     * @param {?} formation
     * @return {?}
     */
    StructureAggregate.prototype.setFormation = /**
     * @param {?} formation
     * @return {?}
     */
    function (formation) {
        this.formation = formation;
    };
    /**
     * @param {?} position
     * @return {?}
     */
    StructureAggregate.prototype.setScrollPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.verticalFormation.setScrollPosition(position);
        this.calculateSourceBasedOnVirtualScroll();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getFormation = /**
     * @return {?}
     */
    function () {
        return this.formation;
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    StructureAggregate.prototype.setSchema = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        this.schema = schema;
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getSchema = /**
     * @return {?}
     */
    function () {
        return this.schema;
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getPaging = /**
     * @return {?}
     */
    function () {
        return this.paging;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.changePaging = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.paging.change(config);
        this.calculateSource();
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    StructureAggregate.prototype.setPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        this.paging = paging;
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceSize = this.sourceCoordinator.getOriginSize();
        this.paging.nextPage(sourceSize);
        this.calculateSource();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.paging.prevPage();
        this.calculateSource();
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    StructureAggregate.prototype.changePageSize = /**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        var _this = this;
        /** @type {?} */
        var pagingEvents = this.paging.changePageSize(pageSize);
        // TODO
        pagingEvents.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.addEvent(event);
        }));
        this.calculateSource();
        return this.getEvents();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getEntities = /**
     * @return {?}
     */
    function () {
        return this.sourceCoordinator.getSlicedEntities();
    };
    /**
     * @return {?}
     */
    StructureAggregate.prototype.getSource = /**
     * @return {?}
     */
    function () {
        return this.sourceCoordinator;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    StructureAggregate.prototype.createFields = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.fieldContainer.initFields(columns);
        // TODO Should throw event fields created
        return this.fieldContainer.getAllFields();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setSortingConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.sorterContainer.setConfig(config);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    StructureAggregate.prototype.toggleSort = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        /** @type {?} */
        var field = this.fieldContainer.getField(fieldId);
        this.sorterContainer.toggle(field);
        this.calculateSource();
        return this.sorterContainer.getAll();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setFilterConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.filterContainer.setConfig(config);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.quickFilters = config.enabled;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    StructureAggregate.prototype.setSearchingConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.search = config.enabled;
    };
    /**
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    StructureAggregate.prototype.toggleFilter = /**
     * @param {?} fieldId
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    function (fieldId, externalFilterId, filterValue) {
        /** @type {?} */
        var field = this.fieldContainer.getField(fieldId);
        // Field not found
        // TODO throw aggregate event
        if (field === undefined) {
            return [];
        }
        this.filterContainer.addFilter(field, externalFilterId, filterValue);
        this.calculateSource();
        return [];
    };
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.calculateSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.sourceCoordinator.getOrigin() || !this.paging) {
            return;
        }
        // TODO Refactor
        this.sourceCoordinator.setEntities(this.sourceCoordinator.getOrigin());
        // aggregations
        /** @type {?} */
        var aggregationEvents = this.aggregationManager.calculate(this.fieldContainer.getAllFields(), this.sourceCoordinator.getEntities());
        aggregationEvents.forEach((/**
         * @param {?} ae
         * @return {?}
         */
        function (ae) {
            _this.addEvent(ae);
        }));
        // filtering
        this.sourceCoordinator.setEntities(this.filterContainer.filter(this.sourceCoordinator.getEntities()));
        // search
        // sorting
        this.sourceCoordinator.setEntities(this.sorterContainer.sort(this.sourceCoordinator.getEntities()));
        // paging
        this.sourceCoordinator.setEntities(this.paging.sample(this.sourceCoordinator.getEntities()));
        this.verticalFormation.setSourceSize(this.sourceCoordinator.getEntities().length);
        this.calculateSourceBasedOnVirtualScroll();
    };
    /**
     * @private
     * @return {?}
     */
    StructureAggregate.prototype.calculateSourceBasedOnVirtualScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.verticalFormation.isEnabled()) {
            /** @type {?} */
            var range = this.verticalFormation.getRange();
            this.sourceCoordinator.setSlicedEntities(this.sourceCoordinator.getEntities().slice(range.getStart(), range.getEnd()));
        }
        else {
            this.sourceCoordinator.setSlicedEntities(this.sourceCoordinator.getEntities());
        }
    };
    return StructureAggregate;
}(Aggregate));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.formation;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.schema;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.paging;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.sourceCoordinator;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.sorterContainer;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.filterContainer;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.verticalFormation;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.fieldContainer;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.aggregationManager;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.search;
    /**
     * @type {?}
     * @private
     */
    StructureAggregate.prototype.quickFilters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSorter = /** @class */ (function () {
    function StructureSorter(id, field, direction) {
        if (direction === void 0) { direction = true; }
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    /**
     * @return {?}
     */
    StructureSorter.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.sorterId;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.getRank = /**
     * @return {?}
     */
    function () {
        return this.rank;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.getField = /**
     * @return {?}
     */
    function () {
        return this.field;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.getDirection = /**
     * @return {?}
     */
    function () {
        return this.direction;
    };
    /**
     * @return {?}
     */
    StructureSorter.prototype.changeDirection = /**
     * @return {?}
     */
    function () {
        this.direction = !this.direction;
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    StructureSorter.prototype.sort = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((/**
         * @param {?} entityOne
         * @param {?} entityTwo
         * @return {?}
         */
        function (entityOne, entityTwo) {
            /** @type {?} */
            var valueOne = _this.direction ? _this.field.getValue(entityOne) : _this.field.getValue(entityTwo);
            /** @type {?} */
            var valueTwo = _this.direction ? _this.field.getValue(entityTwo) : _this.field.getValue(entityOne);
            if (_this.field.getDataType() === DataType.NUMBER) {
                return _this.sortNumber(valueOne, valueTwo);
            }
            else if (_this.field.getDataType() === DataType.BOOLEAN) {
                return _this.sortBoolean(valueOne, valueTwo);
            }
            else if (_this.field.getDataType() === DataType.STRING) {
                return _this.sortString(valueOne, valueTwo);
            }
            else {
                return _this.sortUnknown(valueOne, valueTwo);
            }
        }));
    };
    /**
     * @private
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    StructureSorter.prototype.sortString = /**
     * @private
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    function (strOne, strTwo) {
        /** @type {?} */
        var sureStrOne = '' + strOne;
        /** @type {?} */
        var sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    };
    /**
     * @private
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    StructureSorter.prototype.sortNumber = /**
     * @private
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    function (numOne, numTwo) {
        /** @type {?} */
        var sureNumOne = +numOne;
        /** @type {?} */
        var sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    };
    /**
     * @private
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    StructureSorter.prototype.sortBoolean = /**
     * @private
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    function (booleanOne, booleanTwo) {
        /** @type {?} */
        var sureBoolOne = !!booleanOne;
        /** @type {?} */
        var sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    StructureSorter.prototype.sortUnknown = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return 0;
    };
    return StructureSorter;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.sorterId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.rank;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.direction;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SorterId = /** @class */ (function () {
    function SorterId(id) {
        this.sorterId = id;
    }
    /**
     * @return {?}
     */
    SorterId.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.sorterId;
    };
    return SorterId;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SorterId.prototype.sorterId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SorterContainer = /** @class */ (function () {
    function SorterContainer(enabled, multi) {
        if (enabled === void 0) { enabled = false; }
        if (multi === void 0) { multi = false; }
        this.sorters = new Map();
        this.enabled = enabled;
        this.multi = multi;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    SorterContainer.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
        if (config && config.multiSorting !== undefined && config.multiSorting !== null) {
            this.multi = config.multiSorting;
            this.sorters.clear();
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    SorterContainer.prototype.toggle = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var fieldId = field.getId();
        /** @type {?} */
        var sorter = this.sorters.get(fieldId.getId());
        if (sorter) {
            if (sorter.getDirection()) {
                sorter.changeDirection();
            }
            else {
                this.delete(fieldId);
            }
        }
        else {
            this.add(field);
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    SorterContainer.prototype.add = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.addSorter(field.getId(), new StructureSorter(new SorterId(RandomStringGenerator.generate()), field));
    };
    /**
     * @param {?} fieldId
     * @param {?} sorter
     * @return {?}
     */
    SorterContainer.prototype.addSorter = /**
     * @param {?} fieldId
     * @param {?} sorter
     * @return {?}
     */
    function (fieldId, sorter) {
        if (!this.multi) {
            this.sorters.clear();
        }
        this.sorters.set(fieldId.getId(), sorter);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    SorterContainer.prototype.delete = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        this.sorters.delete(fieldId.getId());
    };
    /**
     * @return {?}
     */
    SorterContainer.prototype.update = /**
     * @return {?}
     */
    function () {
    };
    // TODO Remove the loop from sorter.sort
    // TODO Remove the loop from sorter.sort
    /**
     * @param {?} entities
     * @return {?}
     */
    SorterContainer.prototype.sort = 
    // TODO Remove the loop from sorter.sort
    /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var e_1, _a;
        /** @type {?} */
        var sorters = this.getAll();
        /** @type {?} */
        var sortedEntities = __spread(entities);
        try {
            for (var sorters_1 = __values(sorters), sorters_1_1 = sorters_1.next(); !sorters_1_1.done; sorters_1_1 = sorters_1.next()) {
                var sorter = sorters_1_1.value;
                sortedEntities = sorter.sort(sortedEntities);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sorters_1_1 && !sorters_1_1.done && (_a = sorters_1.return)) _a.call(sorters_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return sortedEntities;
    };
    /**
     * @return {?}
     */
    SorterContainer.prototype.getAll = /**
     * @return {?}
     */
    function () {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.sorters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) { return arr[1]; }))
            .sort((/**
         * @param {?} sorterOne
         * @param {?} sorterTwo
         * @return {?}
         */
        function (sorterOne, sorterTwo) {
            return sorterOne.getRank() - sorterTwo.getRank();
        }))
            .reverse();
    };
    return SorterContainer;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SorterContainer.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    SorterContainer.prototype.multi;
    /**
     * @type {?}
     * @private
     */
    SorterContainer.prototype.sorters;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregateFactory = /** @class */ (function () {
    function StructureAggregateFactory(pagingAggregateFactory, sourceCoordinatorFactory, verticalFormationFactory, aggregationManagerFactory, filterContainerFactory, fieldContainerFactory) {
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceCoordinatorFactory = sourceCoordinatorFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.aggregationManagerFactory = aggregationManagerFactory;
        this.filterContainerFactory = filterContainerFactory;
        this.fieldContainerFactory = fieldContainerFactory;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureAggregateFactory.prototype.create = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        /** @type {?} */
        var paging = this.pagingAggregateFactory.createDefault();
        /** @type {?} */
        var source = this.sourceCoordinatorFactory.createDefault();
        /** @type {?} */
        var verticalFormation = this.verticalFormationFactory.create();
        /** @type {?} */
        var sorterContainer = new SorterContainer();
        /** @type {?} */
        var filterContainer = this.filterContainerFactory.create(false);
        /** @type {?} */
        var fieldContainer = this.fieldContainerFactory.create();
        /** @type {?} */
        var aggregationManager = this.aggregationManagerFactory.create(structureId);
        return new StructureAggregate(structureId, paging, source, verticalFormation, aggregationManager, sorterContainer, filterContainer, fieldContainer);
    };
    StructureAggregateFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureAggregateFactory.ctorParameters = function () { return [
        { type: PagingAggregateFactory },
        { type: SourceCoordinatorFactory },
        { type: VerticalFormationFactory },
        { type: AggregationManagerFactory },
        { type: FilterContainerFactory },
        { type: FieldContainerFactory }
    ]; };
    return StructureAggregateFactory;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.pagingAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.sourceCoordinatorFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.verticalFormationFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.aggregationManagerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.filterContainerFactory;
    /**
     * @type {?}
     * @private
     */
    StructureAggregateFactory.prototype.fieldContainerFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitStructureCommandHandler = /** @class */ (function (_super) {
    __extends(InitStructureCommandHandler, _super);
    function InitStructureCommandHandler(structureAggregateRepository, structureAggregateFactory, domainEventPublisher) {
        var _this = _super.call(this, InitStructureCommand, StructureInitedEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureAggregateFactory = structureAggregateFactory;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    InitStructureCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateFactory.create(aggregateId);
        this.structureAggregateRepository.save(structure);
    };
    InitStructureCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitStructureCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureAggregateFactory },
        { type: DomainEventPublisher }
    ]; };
    return InitStructureCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitStructureCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    InitStructureCommandHandler.prototype.structureAggregateFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetVerticalScrollEnabledCommandHandler = /** @class */ (function (_super) {
    __extends(SetVerticalScrollEnabledCommandHandler, _super);
    function SetVerticalScrollEnabledCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetVerticalScrollEnabledCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetVerticalScrollEnabledCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var formation = structure.getVerticalFormation();
        formation.setEnabled(enabled);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new VerticalScrollEnabledSetEvent(structureId));
    };
    SetVerticalScrollEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetVerticalScrollEnabledCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetVerticalScrollEnabledCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetVerticalScrollEnabledCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetVerticalScrollEnabledCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetScrollPositionCommandHandler = /** @class */ (function (_super) {
    __extends(SetScrollPositionCommandHandler, _super);
    function SetScrollPositionCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetScrollPositionCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetScrollPositionCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var position = command.position;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setScrollPosition(position);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new ScrollPositionSetEvent(structureId));
    };
    SetScrollPositionCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetScrollPositionCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetScrollPositionCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetScrollPositionCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    SetScrollPositionCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitFieldsCommandHandler = /** @class */ (function (_super) {
    __extends(InitFieldsCommandHandler, _super);
    function InitFieldsCommandHandler(structureAggregateRepository, structureAggregateFactory, domainEventPublisher) {
        var _this = _super.call(this, InitFieldsCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureAggregateFactory = structureAggregateFactory;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    InitFieldsCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var compositionId = command.compositionId;
        /** @type {?} */
        var columns = command.columns;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var fields = structure.createFields(columns);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new FieldsInitedEvent(structureId, compositionId, columns, fields));
    };
    InitFieldsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitFieldsCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureAggregateFactory },
        { type: DomainEventPublisher }
    ]; };
    return InitFieldsCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.structureAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleSortCommandHandler = /** @class */ (function (_super) {
    __extends(ToggleSortCommandHandler, _super);
    function ToggleSortCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ToggleSortCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var aggregateId = command.structureId;
        /** @type {?} */
        var compositionId = command.getCompositionId();
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(aggregateId);
        /** @type {?} */
        var sorters = structure.toggleSort(fieldId);
        this.structureAggregateRepository.save(structure);
        this.publishSortEvent(aggregateId, compositionId, fieldId, sorters);
    };
    /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    ToggleSortCommandHandler.prototype.publishSortEvent = /**
     * @param {?} aggregateId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sorters
     * @return {?}
     */
    function (aggregateId, compositionId, fieldId, sorters) {
        /** @type {?} */
        var directions = sorters.map((/**
         * @param {?} sorter
         * @return {?}
         */
        function (sorter) {
            return {
                direction: sorter.getDirection(),
                fieldId: sorter.getField().getId()
            };
        }));
        this.domainEventPublisher.publish(new SortToggledEvent(aggregateId, compositionId, directions));
    };
    ToggleSortCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleSortCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ToggleSortCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    ToggleSortCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortingSetEvent = /** @class */ (function (_super) {
    __extends(SortingSetEvent, _super);
    function SortingSetEvent(aggregateId) {
        return _super.call(this, aggregateId, 'SortingSetEvent') || this;
    }
    return SortingSetEvent;
}(DomainEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSortingCommandHandler = /** @class */ (function (_super) {
    __extends(SetSortingCommandHandler, _super);
    function SetSortingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSortingCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSortingCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var sortingConfig = command.getSortingConfig();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setSortingConfig(sortingConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new SortingSetEvent(structureId));
    };
    SetSortingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSortingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSortingCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetSortingCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureConfigFilterSetEvent = /** @class */ (function (_super) {
    __extends(StructureConfigFilterSetEvent, _super);
    function StructureConfigFilterSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, 'StructureConfigFilterSetEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureConfigFilterSetEvent.prototype.getEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return StructureConfigFilterSetEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetConfigFilterCommandHandler = /** @class */ (function (_super) {
    __extends(StructureSetConfigFilterCommandHandler, _super);
    function StructureSetConfigFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, StructureSetConfigFilterCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigFilterCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var filterConfig = command.getConfig();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setFilterConfig(filterConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureConfigFilterSetEvent(structureId, filterConfig.enabled));
    };
    StructureSetConfigFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetConfigFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetConfigFilterCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigFilterCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureConfigSearchingSetEvent = /** @class */ (function (_super) {
    __extends(StructureConfigSearchingSetEvent, _super);
    function StructureConfigSearchingSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, 'StructureConfigSearchingSetEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureConfigSearchingSetEvent.prototype.getEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return StructureConfigSearchingSetEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetConfigSearchingCommandHandler = /** @class */ (function (_super) {
    __extends(StructureSetConfigSearchingCommandHandler, _super);
    function StructureSetConfigSearchingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, StructureSetConfigSearchingCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigSearchingCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var searchingConfig = command.getConfig();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setSearchingConfig(searchingConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureConfigSearchingSetEvent(structureId, searchingConfig.enabled));
    };
    StructureSetConfigSearchingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetConfigSearchingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetConfigSearchingCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigSearchingCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigSearchingCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureConfigQuickFilterSetEvent = /** @class */ (function (_super) {
    __extends(StructureConfigQuickFilterSetEvent, _super);
    function StructureConfigQuickFilterSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, 'StructureConfigQuickFilterSetEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureConfigQuickFilterSetEvent.prototype.getEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return StructureConfigQuickFilterSetEvent;
}(DomainEvent));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetConfigQuickFilterCommandHandler = /** @class */ (function (_super) {
    __extends(StructureSetConfigQuickFilterCommandHandler, _super);
    function StructureSetConfigQuickFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, StructureSetConfigQuickFilterCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var quickFiltersConfig = command.getConfig();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setQuickFiltersConfig(quickFiltersConfig);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureConfigQuickFilterSetEvent(structureId, quickFiltersConfig.enabled));
    };
    StructureSetConfigQuickFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetConfigQuickFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetConfigQuickFilterCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureToggleFilterCommandHandler = /** @class */ (function (_super) {
    __extends(StructureToggleFilterCommandHandler, _super);
    function StructureToggleFilterCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, StructureToggleFilterCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureToggleFilterCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var fieldId = command.fieldId;
        /** @type {?} */
        var externalFieldId = command.externalFilterId;
        /** @type {?} */
        var filterValue = command.filterValue;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.toggleFilter(fieldId, externalFieldId, filterValue);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureFilterToggledEvent(structureId));
    };
    StructureToggleFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureToggleFilterCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return StructureToggleFilterCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureToggleFilterCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSourceDomainEventPublisher = /** @class */ (function () {
    function StructureSourceDomainEventPublisher(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @param {?} events
     * @return {?}
     */
    StructureSourceDomainEventPublisher.prototype.publish = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        var _this = this;
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.publishEvent(event);
        }));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    StructureSourceDomainEventPublisher.prototype.publishEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.getType() === 'StructureOriginChangedAggregateEvent') {
            /** @type {?} */
            var structureOriginChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new OriginSetEvent(structureOriginChangedAggregateEvent.getAggregateId(), structureOriginChangedAggregateEvent.getOrigin());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureSourceItemEditedAggregateEvent') {
            /** @type {?} */
            var structureSourceItemEditedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new StructureSourceItemEditedEvent(structureSourceItemEditedAggregateEvent.getAggregateId(), structureSourceItemEditedAggregateEvent.getBeforeItem(), structureSourceItemEditedAggregateEvent.getAfterItem());
            this.domainEventPublisher.publish(domainEvent);
        }
        if (event.getType() === 'StructureAggregationsChangedAggregateEvent') {
            /** @type {?} */
            var structureAggregationsChangedAggregateEvent = ((/** @type {?} */ (event)));
            /** @type {?} */
            var domainEvent = new StructureAggregationsChangedEvent(structureAggregationsChangedAggregateEvent.getAggregateId(), structureAggregationsChangedAggregateEvent.getAggregations());
            this.domainEventPublisher.publish(domainEvent);
        }
    };
    StructureSourceDomainEventPublisher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSourceDomainEventPublisher.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return StructureSourceDomainEventPublisher;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSourceDomainEventPublisher.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureAggregationEnabledSetEvent = /** @class */ (function (_super) {
    __extends(StructureAggregationEnabledSetEvent, _super);
    function StructureAggregationEnabledSetEvent(aggregateId, enabled) {
        var _this = _super.call(this, aggregateId, 'StructureAggregationEnabledSetEvent') || this;
        _this.enabled = enabled;
        return _this;
    }
    return StructureAggregationEnabledSetEvent;
}(DomainEvent));
if (false) {
    /** @type {?} */
    StructureAggregationEnabledSetEvent.prototype.enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureSetAggregationEnabledCommandHandler = /** @class */ (function (_super) {
    __extends(StructureSetAggregationEnabledCommandHandler, _super);
    function StructureSetAggregationEnabledCommandHandler(structureAggregateRepository, structureAggregateFactory, structureSourceDomainEventPublisher, domainEventPublisher) {
        var _this = _super.call(this, StructureSetAggregationEnabledCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureAggregateFactory = structureAggregateFactory;
        _this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureSetAggregationEnabledCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var aggregateEvents = structure.setAggregationEnabled(enabled);
        this.structureAggregateRepository.save(structure);
        this.domainEventPublisher.publish(new StructureAggregationEnabledSetEvent(structureId, enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    StructureSetAggregationEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetAggregationEnabledCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureAggregateFactory },
        { type: StructureSourceDomainEventPublisher },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetAggregationEnabledCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureAggregateFactory;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetAggregationEnabledCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T, A
 */
var  /**
 * @abstract
 * @template T, A
 */
AggregationCalculator = /** @class */ (function () {
    function AggregationCalculator() {
    }
    /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    AggregationCalculator.prototype.calculate = /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    function (fields, items) {
        var _this = this;
        /** @type {?} */
        var filteredFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return _this.forDataType(field.getDataType()); }));
        if (!filteredFields || filteredFields.length === 0 || items.length === 0) {
            return null;
        }
        /** @type {?} */
        var count = new Map();
        /** @type {?} */
        var distinct = new Map();
        // init
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var key = field.getKey();
            count.set(key, 0);
            distinct.set(key, new Set());
            _this.prepare(field);
        }));
        // calculate
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            filteredFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var key = field.getKey();
                /** @type {?} */
                var value = field.getValue(item);
                if (value !== null || value !== undefined || value !== '') {
                    if (field.isAggregation(AggregationType.COUNT)) {
                        /** @type {?} */
                        var countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isAggregation(AggregationType.DISTINCT)) {
                        /** @type {?} */
                        var distinctSet = distinct.get(key);
                        distinctSet.add(value);
                    }
                }
                _this.aggregate(field, value);
            }));
        }));
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            _this.postCalculate(field, items);
        }));
        /** @type {?} */
        var aggregations = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var key = field.getId().getId();
            /** @type {?} */
            var aggregatedValues = _this.generateAggregatedValues(field);
            if (field.isAggregation(AggregationType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isAggregation(AggregationType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            aggregations.set(key, aggregatedValues);
        }));
        return aggregations;
    };
    return AggregationCalculator;
}());
if (false) {
    /**
     * @abstract
     * @param {?} dataType
     * @return {?}
     */
    AggregationCalculator.prototype.forDataType = function (dataType) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    AggregationCalculator.prototype.prepare = function (field) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    AggregationCalculator.prototype.postCalculate = function (field, items) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    AggregationCalculator.prototype.aggregate = function (field, value) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    AggregationCalculator.prototype.generateAggregatedValues = function (field) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
AggregatedValues = /** @class */ (function () {
    function AggregatedValues() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    AggregatedValues.prototype.setCount = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.count = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AggregatedValues.prototype.setDistinct = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.distinct = value;
    };
    return AggregatedValues;
}());
if (false) {
    /** @type {?} */
    AggregatedValues.prototype.count;
    /** @type {?} */
    AggregatedValues.prototype.distinct;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanAggregatedValues = /** @class */ (function (_super) {
    __extends(BooleanAggregatedValues, _super);
    function BooleanAggregatedValues(truthy, falsy) {
        var _this = _super.call(this) || this;
        _this.truthy = truthy;
        _this.falsy = falsy;
        return _this;
    }
    return BooleanAggregatedValues;
}(AggregatedValues));
if (false) {
    /** @type {?} */
    BooleanAggregatedValues.prototype.truthy;
    /** @type {?} */
    BooleanAggregatedValues.prototype.falsy;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanAggregationCalculator = /** @class */ (function (_super) {
    __extends(BooleanAggregationCalculator, _super);
    function BooleanAggregationCalculator() {
        var _this = _super.call(this) || this;
        _this.truthy = new Map();
        _this.falsy = new Map();
        return _this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.BOOLEAN;
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        /** @type {?} */
        var booleanValue = value;
        /** @type {?} */
        var // (value as any === 'true'),
        key = field.getKey();
        /** @type {?} */
        var truthyForField = this.truthy.get(key);
        /** @type {?} */
        var falsyForField = this.falsy.get(key);
        if (booleanValue) {
            if (field.isAggregation(AggregationType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isAggregation(AggregationType.FALSY)) {
                this.falsy.set(key, falsyForField + 1);
            }
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        return new BooleanAggregatedValues(this.truthy.get(key), this.falsy.get(key));
    };
    /**
     * @param {?} field
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        if (field.isAggregation(AggregationType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isAggregation(AggregationType.FALSY)) {
            this.falsy.set(key, 0);
        }
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    BooleanAggregationCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) { };
    BooleanAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BooleanAggregationCalculator.ctorParameters = function () { return []; };
    return BooleanAggregationCalculator;
}(AggregationCalculator));
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.truthy;
    /**
     * @type {?}
     * @private
     */
    BooleanAggregationCalculator.prototype.falsy;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateAggregatedValues = /** @class */ (function (_super) {
    __extends(DateAggregatedValues, _super);
    function DateAggregatedValues() {
        return _super.call(this) || this;
    }
    return DateAggregatedValues;
}(AggregatedValues));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateAggregationCalculator = /** @class */ (function (_super) {
    __extends(DateAggregationCalculator, _super);
    function DateAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    DateAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.DATE;
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    DateAggregationCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
    };
    /**
     * @param {?} field
     * @return {?}
     */
    DateAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new DateAggregatedValues();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    DateAggregationCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    DateAggregationCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) {
    };
    DateAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DateAggregationCalculator.ctorParameters = function () { return []; };
    return DateAggregationCalculator;
}(AggregationCalculator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberAggregatedValues = /** @class */ (function (_super) {
    __extends(NumberAggregatedValues, _super);
    function NumberAggregatedValues(sum, min, max, average, median) {
        var _this = _super.call(this) || this;
        _this.sum = _this.setValueWithPrecision(sum);
        _this.min = _this.setValueWithPrecision(min);
        _this.max = _this.setValueWithPrecision(max);
        _this.average = _this.setValueWithPrecision(average);
        _this.median = _this.setValueWithPrecision(median);
        return _this;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NumberAggregatedValues.prototype.setValueWithPrecision = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value && value !== 0) {
            return null;
        }
        if (value === 0) {
            return 0;
        }
        return +((value).toFixed(2));
    };
    return NumberAggregatedValues;
}(AggregatedValues));
if (false) {
    /** @type {?} */
    NumberAggregatedValues.prototype.sum;
    /** @type {?} */
    NumberAggregatedValues.prototype.min;
    /** @type {?} */
    NumberAggregatedValues.prototype.max;
    /** @type {?} */
    NumberAggregatedValues.prototype.average;
    /** @type {?} */
    NumberAggregatedValues.prototype.median;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberAggregationCalculator = /** @class */ (function (_super) {
    __extends(NumberAggregationCalculator, _super);
    function NumberAggregationCalculator() {
        var _this = _super.call(this) || this;
        _this.sum = new Map();
        _this.min = new Map();
        _this.max = new Map();
        _this.average = new Map();
        _this.median = new Map();
        return _this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    NumberAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.NUMBER;
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    NumberAggregationCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        /** @type {?} */
        var numberValue = +value;
        /** @type {?} */
        var key = field.getKey();
        /** @type {?} */
        var sumForField = this.sum.get(key);
        /** @type {?} */
        var minForField = this.min.get(key);
        /** @type {?} */
        var maxForField = this.max.get(key);
        if (field.isAggregation(AggregationType.SUM) || field.isAggregation(AggregationType.AVERAGE)) {
            this.sum.set(key, sumForField + numberValue);
        }
        if (field.isAggregation(AggregationType.MIN)) {
            if (minForField > numberValue) {
                this.min.set(key, numberValue);
            }
        }
        if (field.isAggregation(AggregationType.MAX)) {
            if (maxForField < numberValue) {
                this.max.set(key, numberValue);
            }
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    NumberAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        /** @type {?} */
        var sum = field.isAggregation(AggregationType.SUM) ? this.sum.get(key) : undefined;
        /** @type {?} */
        var min = field.isAggregation(AggregationType.MIN) ? this.min.get(key) : undefined;
        /** @type {?} */
        var max = field.isAggregation(AggregationType.MAX) ? this.max.get(key) : undefined;
        /** @type {?} */
        var average = field.isAggregation(AggregationType.AVERAGE) ? this.average.get(key) : undefined;
        /** @type {?} */
        var median = field.isAggregation(AggregationType.MEDIAN) ? this.median.get(key) : undefined;
        return new NumberAggregatedValues(sum, min, max, average, median);
    };
    /**
     * @param {?} field
     * @return {?}
     */
    NumberAggregationCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var key = field.getKey();
        this.sum.set(key, 0);
        this.min.set(key, Number.MAX_SAFE_INTEGER);
        this.max.set(key, 0);
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    NumberAggregationCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) {
        /** @type {?} */
        var key = field.getKey();
        if (field.isAggregation(AggregationType.AVERAGE)) {
            this.average.set(key, this.sum.get(key) / items.length);
        }
        if (field.isAggregation(AggregationType.MEDIAN)) {
            this.median.set(key, field.getValue(items[Math.floor(items.length / 2)]));
        }
    };
    NumberAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NumberAggregationCalculator.ctorParameters = function () { return []; };
    return NumberAggregationCalculator;
}(AggregationCalculator));
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.sum;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.average;
    /**
     * @type {?}
     * @private
     */
    NumberAggregationCalculator.prototype.median;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringAggregatedValues = /** @class */ (function (_super) {
    __extends(StringAggregatedValues, _super);
    function StringAggregatedValues() {
        return _super.call(this) || this;
    }
    return StringAggregatedValues;
}(AggregatedValues));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringAggregationCalculator = /** @class */ (function (_super) {
    __extends(StringAggregationCalculator, _super);
    function StringAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    StringAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.STRING;
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    StringAggregationCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StringAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StringAggregatedValues();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StringAggregationCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    StringAggregationCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) { };
    StringAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StringAggregationCalculator.ctorParameters = function () { return []; };
    return StringAggregationCalculator;
}(AggregationCalculator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UnknownAggregatedValues = /** @class */ (function (_super) {
    __extends(UnknownAggregatedValues, _super);
    function UnknownAggregatedValues() {
        return _super.call(this) || this;
    }
    return UnknownAggregatedValues;
}(AggregatedValues));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UnknownAggregationCalculator = /** @class */ (function (_super) {
    __extends(UnknownAggregationCalculator, _super);
    function UnknownAggregationCalculator() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.forDataType = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        return dataType === DataType.UNKNOWN;
    };
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.aggregate = /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
    };
    /**
     * @param {?} field
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.generateAggregatedValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new UnknownAggregatedValues();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.prepare = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
    };
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    UnknownAggregationCalculator.prototype.postCalculate = /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    function (field, items) {
    };
    UnknownAggregationCalculator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnknownAggregationCalculator.ctorParameters = function () { return []; };
    return UnknownAggregationCalculator;
}(AggregationCalculator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} clazz
 * @return {?}
 */
function provideAggregationCalculator(clazz) {
    return {
        provide: AGGREGATION_CALCULATORS,
        useClass: clazz,
        multi: true
    };
}
/** @type {?} */
var aggregationProviders = [
    provideAggregationCalculator(BooleanAggregationCalculator),
    provideAggregationCalculator(DateAggregationCalculator),
    provideAggregationCalculator(NumberAggregationCalculator),
    provideAggregationCalculator(StringAggregationCalculator),
    provideAggregationCalculator(UnknownAggregationCalculator),
    AggregationManagerFactory
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureConfigFilterSetEventHandler = /** @class */ (function (_super) {
    __extends(StructureConfigFilterSetEventHandler, _super);
    function StructureConfigFilterSetEventHandler(structureFilterRepository) {
        var _this = _super.call(this) || this;
        _this.structureFilterRepository = structureFilterRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigFilterSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigFilterSetEvent) {
            this.structureFilterRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigFilterSetEventHandler.ctorParameters = function () { return [
        { type: StructureFilterRepository }
    ]; };
    return StructureConfigFilterSetEventHandler;
}(DomainEventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigFilterSetEventHandler.prototype.structureFilterRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureConfigSearchingSetEventHandler = /** @class */ (function (_super) {
    __extends(StructureConfigSearchingSetEventHandler, _super);
    function StructureConfigSearchingSetEventHandler(structureSearchingRepository) {
        var _this = _super.call(this) || this;
        _this.structureSearchingRepository = structureSearchingRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureConfigSearchingSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof StructureConfigSearchingSetEvent) {
            this.structureSearchingRepository.setEnabled(event.getEnabled(), event.getAggregateId());
        }
    };
    StructureConfigSearchingSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureConfigSearchingSetEventHandler.ctorParameters = function () { return [
        { type: StructureSearchingRepository }
    ]; };
    return StructureConfigSearchingSetEventHandler;
}(DomainEventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigSearchingSetEventHandler.prototype.structureSearchingRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureConfigQuickFilterSetEventHandler = /** @class */ (function (_super) {
    __extends(StructureConfigQuickFilterSetEventHandler, _super);
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureConfigQuickFilterSetEventHandler.prototype.structureQuickFilterRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFieldUiModel = /** @class */ (function () {
    function StructureFieldUiModel(id, dataType) {
        this.id = id;
        this.dataType = dataType;
    }
    /**
     * @return {?}
     */
    StructureFieldUiModel.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.id.getId();
    };
    /**
     * @return {?}
     */
    StructureFieldUiModel.prototype.getDataType = /**
     * @return {?}
     */
    function () {
        return this.dataType;
    };
    return StructureFieldUiModel;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiModel.prototype.id;
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiModel.prototype.dataType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFieldUiConverter = /** @class */ (function () {
    function StructureFieldUiConverter() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    StructureFieldUiConverter.prototype.convert = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            return _this.convertOne(field);
        }));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    StructureFieldUiConverter.prototype.convertOne = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return new StructureFieldUiModel(field.getId(), field.getDataType());
    };
    StructureFieldUiConverter.decorators = [
        { type: Injectable }
    ];
    return StructureFieldUiConverter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureFieldsInitedEventHandler = /** @class */ (function (_super) {
    __extends(StructureFieldsInitedEventHandler, _super);
    function StructureFieldsInitedEventHandler(structureFieldsRepository, structureFieldUiConverter) {
        var _this = _super.call(this) || this;
        _this.structureFieldsRepository = structureFieldsRepository;
        _this.structureFieldUiConverter = structureFieldUiConverter;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureFieldsInitedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof FieldsInitedEvent) {
            /** @type {?} */
            var fields = this.structureFieldUiConverter.convert(event.getFields());
            this.structureFieldsRepository.set(event.getAggregateId(), fields);
        }
    };
    StructureFieldsInitedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFieldsInitedEventHandler.ctorParameters = function () { return [
        { type: StructureFieldUiArchive },
        { type: StructureFieldUiConverter }
    ]; };
    return StructureFieldsInitedEventHandler;
}(DomainEventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldsRepository;
    /**
     * @type {?}
     * @private
     */
    StructureFieldsInitedEventHandler.prototype.structureFieldUiConverter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetPagingCommandHandler = /** @class */ (function (_super) {
    __extends(SetPagingCommandHandler, _super);
    function SetPagingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetPagingCommand, PagingSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetPagingCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var pagingConfig = (/** @type {?} */ (command.payload));
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.changePaging(pagingConfig);
        this.structureAggregateRepository.save(structure);
    };
    SetPagingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetPagingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetPagingCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NextPageCommandHandler = /** @class */ (function (_super) {
    __extends(NextPageCommandHandler, _super);
    function NextPageCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, NextPageCommand, NextPageEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    NextPageCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.nextPage();
        this.structureAggregateRepository.save(structure);
    };
    NextPageCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NextPageCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return NextPageCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    NextPageCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PrevPageCommandHandler = /** @class */ (function (_super) {
    __extends(PrevPageCommandHandler, _super);
    function PrevPageCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, PrevPageCommand, PrevPageEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    PrevPageCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.prevPage();
        this.structureAggregateRepository.save(structure);
    };
    PrevPageCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PrevPageCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return PrevPageCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    PrevPageCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangePagesizeCommandHandler = /** @class */ (function (_super) {
    __extends(ChangePagesizeCommandHandler, _super);
    function ChangePagesizeCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ChangePagesizeCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var newPageSize = (/** @type {?} */ (command.pageSize));
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var aggregateEvents = structure.changePageSize(newPageSize);
        // aggregateEvents => DomainEvents
        // DomainEvent
        // causationId -> aka commandId
        // correlationId -> actual or previous commandId
        // event publisher should take aggregate events
        // and convert them to domain events
        this.structureAggregateRepository.save(structure);
        // TODO
        ((/** @type {?} */ (aggregateEvents))).forEach((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            ((/** @type {?} */ (event))).aggregateId = structureId;
        }));
        this.publishAggregateEvents(aggregateEvents, command);
    };
    /**
     * @private
     * @param {?} events
     * @param {?} command
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.publishAggregateEvents = /**
     * @private
     * @param {?} events
     * @param {?} command
     * @return {?}
     */
    function (events, command) {
        var e_1, _a;
        try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var event_1 = events_1_1.value;
                this.publishAggregateEvent(event_1, command);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} event
     * @param {?} command
     * @return {?}
     */
    ChangePagesizeCommandHandler.prototype.publishAggregateEvent = /**
     * @private
     * @param {?} event
     * @param {?} command
     * @return {?}
     */
    function (event, command) {
        switch (event.getType()) {
            case 'PageChangedAggregateEvent':
                /** @type {?} */
                var pageChangedEvent = new PageChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pageChangedEvent);
                break;
            case 'PagesizeChangedAggregateEvent':
                /** @type {?} */
                var pagesizeChangedEvent = new PagesizeChangedEvent(command.getAggregateId());
                this.domainEventPublisher.publish(pagesizeChangedEvent);
                break;
            default:
                break;
        }
    };
    ChangePagesizeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ChangePagesizeCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ChangePagesizeCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangePagesizeCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @protected
     */
    ChangePagesizeCommandHandler.prototype.domainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var commandProviders$1 = [
    PagingDispatcher,
    {
        provide: COMMAND_HANDLERS,
        useClass: SetPagingCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: NextPageCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: PrevPageCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: ChangePagesizeCommandHandler,
        multi: true
    }
];
/** @type {?} */
var queryProviders$1 = [
    PagingRepository
];
/** @type {?} */
var pagingProviders = __spread(commandProviders$1, queryProviders$1, [
    PagingAggregateFactory,
    PagingConverter,
    PagingCommandService,
    PagingQueryService,
    PagingEventService
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaVerticalGridCommandHandler = /** @class */ (function (_super) {
    __extends(SetSchemaVerticalGridCommandHandler, _super);
    function SetSchemaVerticalGridCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSchemaVerticalGridCommand, SchemaVerticalGridSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSchemaVerticalGridCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setVerticalGrid(enabled);
        this.structureAggregateRepository.save(structure);
    };
    SetSchemaVerticalGridCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaVerticalGridCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaVerticalGridCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaVerticalGridCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaHorizontalGridCommandHandler = /** @class */ (function (_super) {
    __extends(SetSchemaHorizontalGridCommandHandler, _super);
    function SetSchemaHorizontalGridCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSchemaHorizontalGridCommand, SchemaHorizontalGridSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSchemaHorizontalGridCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setHorizontalGrid(enabled);
        this.structureAggregateRepository.save(structure);
    };
    SetSchemaHorizontalGridCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaHorizontalGridCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaHorizontalGridCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaThemeCommandHandler = /** @class */ (function (_super) {
    __extends(SetSchemaThemeCommandHandler, _super);
    function SetSchemaThemeCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSchemaThemeCommand, SchemaThemeSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSchemaThemeCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var theme = command.theme;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setTheme(theme);
        this.structureAggregateRepository.save(structure);
    };
    SetSchemaThemeCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaThemeCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaThemeCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaThemeCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangeSchemaBottomHeaderCommandHandler = /** @class */ (function (_super) {
    __extends(ChangeSchemaBottomHeaderCommandHandler, _super);
    function ChangeSchemaBottomHeaderCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ChangeSchemaBottomHeaderCommand, SchemaBottomHeaderChangedEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setHeaderBottom(enabled);
        this.structureAggregateRepository.save(structure);
    };
    ChangeSchemaBottomHeaderCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ChangeSchemaBottomHeaderCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ChangeSchemaBottomHeaderCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaBottomHeaderCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangeSchemaTopHeaderCommandHandler = /** @class */ (function (_super) {
    __extends(ChangeSchemaTopHeaderCommandHandler, _super);
    function ChangeSchemaTopHeaderCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ChangeSchemaTopHeaderCommand, SchemaTopHeaderChangedEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setHeaderTop(enabled);
        this.structureAggregateRepository.save(structure);
    };
    ChangeSchemaTopHeaderCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ChangeSchemaTopHeaderCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ChangeSchemaTopHeaderCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangeSchemaTopHeaderCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetRowColoringCommandHandler = /** @class */ (function (_super) {
    __extends(SetRowColoringCommandHandler, _super);
    function SetRowColoringCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetRowColoringCommand, RowColoringSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetRowColoringCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var coloring = command.coloring;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var schema = structure.getSchema();
        schema.setRowColoring(coloring);
        this.structureAggregateRepository.save(structure);
    };
    SetRowColoringCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetRowColoringCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetRowColoringCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowColoringCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetSchemaCommandHandler = /** @class */ (function (_super) {
    __extends(SetSchemaCommandHandler, _super);
    function SetSchemaCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetSchemaCommand, SchemaSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetSchemaCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var height = command.height;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        structure.setHeight(height);
        this.structureAggregateRepository.save(structure);
    };
    SetSchemaCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetSchemaCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetSchemaCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var commandProviders$2 = [
    SchemaDispatcher,
    {
        provide: COMMAND_HANDLERS,
        useClass: SetSchemaCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: SetSchemaVerticalGridCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: SetSchemaHorizontalGridCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: SetSchemaThemeCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: ChangeSchemaBottomHeaderCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: ChangeSchemaTopHeaderCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: SetRowColoringCommandHandler,
        multi: true
    }
];
/** @type {?} */
var queryProviders$2 = [
    SchemaRepository
];
/** @type {?} */
var schemaProviders = __spread(commandProviders$2, queryProviders$2, [
    SchemaConverter,
    SchemaCommandService,
    SchemaQueryService
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetFormationCommandHandler = /** @class */ (function (_super) {
    __extends(SetFormationCommandHandler, _super);
    function SetFormationCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SetFormationCommand, FormationSetEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetFormationCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var rawFormation = (/** @type {?} */ (command.payload));
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        // missing implementation
        this.structureAggregateRepository.save(structure);
    };
    SetFormationCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetFormationCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetFormationCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetFormationCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleSelectedRowCommandHandler = /** @class */ (function (_super) {
    __extends(ToggleSelectedRowCommandHandler, _super);
    function ToggleSelectedRowCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, ToggleSelectedRowCommand, SelectedRowToggledEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    ToggleSelectedRowCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var selectedRow = command.selectedRow;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        if (!structure) {
            console.error("There is no aggregate 'Structure' for aggregateId: " + structureId);
            return;
        }
        /** @type {?} */
        var formation = structure.getFormation();
        formation.toggleRow(selectedRow);
        this.structureAggregateRepository.save(structure);
    };
    ToggleSelectedRowCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToggleSelectedRowCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return ToggleSelectedRowCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var commandProviders$3 = [
    FormationDispatcher,
    {
        provide: COMMAND_HANDLERS,
        useClass: SetFormationCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: ToggleSelectedRowCommandHandler,
        multi: true
    }
];
/** @type {?} */
var queryProviders$3 = [
    FormationRepository
];
/** @type {?} */
var formationProviders = __spread(commandProviders$3, queryProviders$3, [
    FormationEventService,
    FormationConverter,
    FormationCommandService,
    FormationQueryService
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetOriginCommandHandler = /** @class */ (function (_super) {
    __extends(SetOriginCommandHandler, _super);
    function SetOriginCommandHandler(structureAggregateRepository, structureSourceDomainEventPublisher) {
        var _this = _super.call(this, SetOriginCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var items = (/** @type {?} */ (command.items));
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        if (!structure) {
            console.error("There is no aggregate 'Structure' for aggregateId: " + structureId);
            return;
        }
        /** @type {?} */
        var aggregateEvents = structure.setOrigin(items);
        this.structureAggregateRepository.save(structure);
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    SetOriginCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetOriginCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: StructureSourceDomainEventPublisher }
    ]; };
    return SetOriginCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureSourceDomainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureEditSourceItemCommandHandler = /** @class */ (function (_super) {
    __extends(StructureEditSourceItemCommandHandler, _super);
    function StructureEditSourceItemCommandHandler(structureAggregateRepository, domainEventPublisher, structureSourceDomainEventPublisher) {
        var _this = _super.call(this, StructureEditSourceItemCommand) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        _this.domainEventPublisher = domainEventPublisher;
        _this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var structureId = command.getAggregateId();
        /** @type {?} */
        var params = command.getParams();
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var aggregateEvents = structure.editItem(params);
        this.structureAggregateRepository.save(structure);
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    StructureEditSourceItemCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureEditSourceItemCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher },
        { type: StructureSourceDomainEventPublisher }
    ]; };
    return StructureEditSourceItemCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.domainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureSourceDomainEventPublisher;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureOriginChangedEventHandler = /** @class */ (function (_super) {
    __extends(StructureOriginChangedEventHandler, _super);
    function StructureOriginChangedEventHandler(structureSourceOriginRepository) {
        var _this = _super.call(this) || this;
        _this.structureSourceOriginRepository = structureSourceOriginRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureOriginChangedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof OriginSetEvent) {
            /** @type {?} */
            var origin_1 = event.getOrigin();
            this.structureSourceOriginRepository.setOrigin(origin_1, event.getAggregateId());
        }
    };
    StructureOriginChangedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureOriginChangedEventHandler.ctorParameters = function () { return [
        { type: StructureSourceOriginRepository }
    ]; };
    return StructureOriginChangedEventHandler;
}(DomainEventHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureOriginChangedEventHandler.prototype.structureSourceOriginRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceRepository = /** @class */ (function () {
    function SourceRepository(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SourceRepository.prototype.select = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getId().toString() === structureId.toString(); })), map((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) { return structure.getSchema(); })));
    };
    SourceRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceRepository.ctorParameters = function () { return [
        { type: StructureRepository }
    ]; };
    return SourceRepository;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceRepository.prototype.structureRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SourceSetLoadingCommandHandler = /** @class */ (function (_super) {
    __extends(SourceSetLoadingCommandHandler, _super);
    function SourceSetLoadingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        var _this = _super.call(this, SourceSetLoadingCommand, SetSourceLoadingEvent, domainEventPublisher) || this;
        _this.structureAggregateRepository = structureAggregateRepository;
        return _this;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    SourceSetLoadingCommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var enabled = command.enabled;
        /** @type {?} */
        var structureId = command.structureId;
        /** @type {?} */
        var structure = this.structureAggregateRepository.getById(structureId);
        /** @type {?} */
        var source = structure.getSource();
        source.setLoading(enabled);
        this.structureAggregateRepository.save(structure);
    };
    SourceSetLoadingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceSetLoadingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SourceSetLoadingCommandHandler;
}(CommandHandler));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommandHandler.prototype.structureAggregateRepository;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var commandProviders$4 = [
    SourceDispatcher,
    SourceCoordinatorFactory,
    {
        provide: COMMAND_HANDLERS,
        useClass: SourceSetLoadingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetOriginCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureEditSourceItemCommandHandler,
        multi: true
    },
    StructureSourceDomainEventPublisher
];
/** @type {?} */
var queryProviders$4 = [
    SourceRepository,
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureOriginChangedEventHandler,
        multi: true
    },
    StructureSourceOriginRepository
];
/** @type {?} */
var sourceProviders = __spread(commandProviders$4, queryProviders$4, [
    SourceConverter,
    SourceCommandService,
    SourceQueryService,
    SourceEventService
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var commandProviders$5 = __spread(inMemoryStructureCommandProviders, [
    {
        provide: COMMAND_HANDLERS,
        useClass: InitStructureCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetVerticalScrollEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetScrollPositionCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: InitFieldsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: ToggleSortCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetSortingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigSearchingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigQuickFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureToggleFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetAggregationEnabledCommandHandler,
        multi: true
    },
    VerticalFormationFactory,
    FieldContainerFactory,
    FilterContainerFactory,
    FieldIdGenerator,
    StructureFilterCommandService,
    FieldFactory
], aggregationProviders);
/** @type {?} */
var queryProviders$5 = __spread([
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigSearchingSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigQuickFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureFieldsInitedEventHandler,
        multi: true
    }
], inMemoryStructureQueryProviders, [
    VerticalFormationConverter,
    StructureFilterReadModelRepository,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository
]);
/** @type {?} */
var structureProviders = __spread(inMemoryStructureProviders, commandProviders$5, queryProviders$5, [
    StructureAggregationCommandService,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureConverter,
    StructureQueryService,
    StructureCommandService
], pagingProviders, schemaProviders, formationProviders, sourceProviders);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    ConsoleLogger.prototype.warn = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        console.warn(text);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    ConsoleLogger.prototype.error = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        console.error(text);
    };
    return ConsoleLogger;
}(Logger));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    LoggerModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{
                            provide: Logger,
                            useClass: ConsoleLogger
                        }]
                },] }
    ];
    return LoggerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
var imports = __spread([
    CommonModule,
    ReactiveFormsModule,
    HermesModule
], fabricImports, [
    StructurePagingModule,
    StructureSummaryModule,
    CompositionModule,
    LoggerModule
]);
/** @type {?} */
var declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureContainerComponent,
    StructureSearchComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureAggregationPanelComponent,
    StructureColumnConfigComponent
];
/** @type {?} */
var entryComponents = [
    StructureColumnConfigComponent
];
/** @type {?} */
var providers = __spread([
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    EntityFactory,
    SourceQueryService,
    StructureIdGenerator,
    StructureAggregationPanelConfigConverter,
    StructureColumnConfigService
], structureProviders);
/** @type {?} */
var exportDeclarations$1 = __spread([
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent,
    StructureSearchComponent
], fabricImports, [
    StructurePagingModule
]);
var StructureModule = /** @class */ (function () {
    function StructureModule(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    StructureModule.withConfig = /**
     * @param {?=} structureConfig
     * @return {?}
     */
    function (structureConfig) {
        if (structureConfig === void 0) { structureConfig = { cssClassName: '', hermesModuleConfig: { loggers: false } }; }
        return {
            ngModule: StructureModule,
            providers: __spread([
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers }
            ], providers)
        };
    };
    StructureModule.exportDeclarations = __spread(exportDeclarations$1);
    StructureModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    exports: exportDeclarations$1,
                    entryComponents: entryComponents
                },] }
    ];
    /** @nocollapse */
    StructureModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return StructureModule;
}());
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var imports$1 = [
    StructureModule.withConfig({
        cssClassName: 'grid',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
/** @type {?} */
var declarations$1 = [
    GridComponent
];
/** @type {?} */
var providers$1 = (/** @type {?} */ ([
    GridIdGenerator,
    GridRegister
]));
/** @type {?} */
var exportDeclarations$2 = [
    GridComponent
];
/** @type {?} */
var entryComponents$1 = (/** @type {?} */ ([]));
/** @type {?} */
var elementComponents = [
    GridComponent
];
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.entryComponents = __spread(entryComponents$1);
    GridModule.exportDeclarations = __spread(exportDeclarations$2);
    GridModule.elementComponents = __spread(elementComponents);
    GridModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports$1,
                    declarations: declarations$1,
                    providers: providers$1,
                    exports: exportDeclarations$2,
                    entryComponents: entryComponents$1
                },] }
    ];
    return GridModule;
}());
if (false) {
    /** @type {?} */
    GridModule.entryComponents;
    /** @type {?} */
    GridModule.exportDeclarations;
    /** @type {?} */
    GridModule.elementComponents;
}

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

export { GridComponent, GridModule, GuiCellView, GuiDataType, GuiRowColoring, GuiTheme, gridSelector as ɵa, createStructureDefinition as ɵb, StructureInfoPanel as ɵba, CompositionModule as ɵbb, compositionProviders as ɵbc, inMemoryCompositionCommandProviders as ɵbd, inMemoryCompositionQueryProviders as ɵbe, inMemoryCompositionProviders as ɵbf, InMemoryCompositionStore as ɵbg, InMemoryCompositionAggregateStore as ɵbh, Override as ɵbi, CompositionAggregateRepository as ɵbj, InMemoryCompositionAggregateRepository as ɵbk, CompositionDispatcher as ɵbl, CompositionAggregateFactory as ɵbm, InitCompositionCommandHandler as ɵbn, SetColumnsCommandHandler as ɵbo, CompositionEventConverter as ɵbp, SetCompositionWidthCommandHandler as ɵbq, ColumnEntityFactory as ɵbr, SetCompositionResizeWidthCommandHandler as ɵbs, SetCompositionContainerWidthCommandHandler as ɵbt, CompositionChangeSortStatusCommandHandler as ɵbu, ColumnFieldFactory as ɵbv, InMemoryCompositionQueryStore as ɵbw, CompositionConverter as ɵbx, ColumnDefinitionFactory as ɵby, ViewTemplateRepository as ɵbz, StructureModule as ɵc, ViewTemplateFactory as ɵca, TemplateFactory as ɵcb, EditTemplateRepository as ɵcc, EditTemplateFactory as ɵcd, CompositionRepository as ɵce, InMemoryCompositionRepository as ɵcf, CompositionFieldsInitedEventHandler as ɵcg, CompositionChangeSortStatusEventHandler as ɵch, CompositionCommandService as ɵci, CompositionQueryService as ɵcj, CompositionEventService as ɵck, ViewTemplatesComponent as ɵcl, EditTemplatesComponent as ɵcm, StringEditTemplateComponent as ɵcn, InputEditTemplateComponent as ɵco, EditCommunicationComponent as ɵcp, NumberEditTemplateComponent as ɵcq, BooleanEditTemplateComponent as ɵcr, ColumnQueryComponent as ɵcs, FunctionViewComponent as ɵct, LoggerModule as ɵcu, Logger as ɵcv, ConsoleLogger as ɵcw, structureIdFactory as ɵcx, compositionIdFactory as ɵcy, structureComponentSelfProviders as ɵcz, fabricImports as ɵd, StructureComponent as ɵda, StructureGateway as ɵdb, StructureId as ɵdc, CompositionId as ɵdd, StructureCommandService as ɵde, StructureFilterCommandService as ɵdf, SourceDispatcher as ɵdg, PagingEventService as ɵdh, SourceCommandService as ɵdi, StructureFieldUiRepository as ɵdj, StructureFieldUiArchive as ɵdk, SourceEventService as ɵdl, SchemaCommandService as ɵdm, SchemaDispatcher as ɵdn, SchemaQueryService as ɵdo, SchemaRepository as ɵdp, FormationEventService as ɵdq, StructureQueryService as ɵdr, StructureEditModeArchive as ɵds, StructureCellEditArchive as ɵdt, StructureAggregationConfigService as ɵdu, StructureAggregationPanelConfigConverter as ɵdv, StructureAggregationArchive as ɵdw, StructureAggregationCommandService as ɵdx, StructureCellEditStore as ɵdy, StructureIdGenerator as ɵdz, StructurePagingModule as ɵe, localProviders as ɵea, LocalPagingCommandService as ɵeb, PagingAggregateFactory as ɵec, LocalPagingQueryService as ɵed, LocalSchemaCommandService as ɵee, LocalSchemaQueryService as ɵef, FormationCommandService as ɵeg, FormationDispatcher as ɵeh, LocalFormationCommandService as ɵei, FormationQueryService as ɵej, FormationRepository as ɵek, LocalFormationQueryService as ɵel, LocalStructureCommandService as ɵem, LocalStructureQueryService as ɵen, LocalSourceCommandService as ɵeo, LocalSourceQueryService as ɵep, LocalCompositionCommandService as ɵeq, LocalCompositionQueryService as ɵer, SchemaCssClassManager as ɵes, structureComponentToken as ɵet, StructureDefinition as ɵeu, StructurePagingDefinition as ɵev, StructureHeaderComponent as ɵew, StructureHeaderColumnsComponent as ɵex, StructureColumnConfigService as ɵey, StructureFilterReadModelRepository as ɵez, StructurePagingComponent as ɵf, StructureFilterRepository as ɵfa, StructureQuickFilterRepository as ɵfb, StructureHeaderFiltersComponent as ɵfc, StructureHeaderFilterComponent as ɵfd, StructureContentComponent as ɵfe, StructureRowComponent as ɵff, StructureCellComponent as ɵfg, StructureContainerComponent as ɵfh, structureParentComponent as ɵfi, StructureSearchComponent as ɵfj, StructureQuickFiltersComponent as ɵfk, StructureBlueprintComponent as ɵfl, STRUCTURE_CSS_CLASS_NAME as ɵfm, StructureSearchReadModelRepository as ɵfn, StructureSearchingRepository as ɵfo, StructureAggregationPanelComponent as ɵfp, StructureAggregationUiEventsRepository as ɵfq, StructureColumnConfigComponent as ɵfr, EntityFactory as ɵfs, structureProviders as ɵft, inMemoryStructureCommandProviders as ɵfu, inMemoryStructureQueryProviders as ɵfv, inMemoryStructureProviders as ɵfw, InMemoryStructureStore as ɵfx, InMemoryStructureAggregateStore as ɵfy, StructureAggregateRepository as ɵfz, SmartComponent as ɵg, InMemoryStructureAggregateRepository as ɵga, InitStructureCommandHandler as ɵgb, StructureAggregateFactory as ɵgc, SourceCoordinatorFactory as ɵgd, VerticalFormationFactory as ɵge, AggregationManagerFactory as ɵgf, AGGREGATION_CALCULATORS as ɵgg, AggregationCalculator as ɵgh, FilterContainerFactory as ɵgi, FieldContainerFactory as ɵgj, FieldFactory as ɵgk, FieldIdGenerator as ɵgl, SetVerticalScrollEnabledCommandHandler as ɵgm, SetScrollPositionCommandHandler as ɵgn, InitFieldsCommandHandler as ɵgo, ToggleSortCommandHandler as ɵgp, SetSortingCommandHandler as ɵgq, StructureSetConfigFilterCommandHandler as ɵgr, StructureSetConfigSearchingCommandHandler as ɵgs, StructureSetConfigQuickFilterCommandHandler as ɵgt, StructureToggleFilterCommandHandler as ɵgu, StructureSetAggregationEnabledCommandHandler as ɵgv, StructureSourceDomainEventPublisher as ɵgw, provideAggregationCalculator as ɵgx, aggregationProviders as ɵgy, BooleanAggregationCalculator as ɵgz, Reactive as ɵh, DateAggregationCalculator as ɵha, NumberAggregationCalculator as ɵhb, StringAggregationCalculator as ɵhc, UnknownAggregationCalculator as ɵhd, StructureConfigFilterSetEventHandler as ɵhe, StructureConfigSearchingSetEventHandler as ɵhf, StructureConfigQuickFilterSetEventHandler as ɵhg, StructureFieldsInitedEventHandler as ɵhh, StructureFieldUiConverter as ɵhi, InMemoryStructureQueryStore as ɵhj, StructureConverter as ɵhk, FormationConverter as ɵhl, SchemaConverter as ɵhm, PagingConverter as ɵhn, SourceConverter as ɵho, VerticalFormationConverter as ɵhp, InMemoryStructureRepository as ɵhq, pagingProviders as ɵhr, SetPagingCommandHandler as ɵhs, NextPageCommandHandler as ɵht, PrevPageCommandHandler as ɵhu, ChangePagesizeCommandHandler as ɵhv, schemaProviders as ɵhw, SetSchemaCommandHandler as ɵhx, SetSchemaVerticalGridCommandHandler as ɵhy, SetSchemaHorizontalGridCommandHandler as ɵhz, PagingQueryService as ɵi, SetSchemaThemeCommandHandler as ɵia, ChangeSchemaBottomHeaderCommandHandler as ɵib, ChangeSchemaTopHeaderCommandHandler as ɵic, SetRowColoringCommandHandler as ɵid, formationProviders as ɵie, SetFormationCommandHandler as ɵif, ToggleSelectedRowCommandHandler as ɵig, sourceProviders as ɵih, SourceSetLoadingCommandHandler as ɵii, SetOriginCommandHandler as ɵij, StructureEditSourceItemCommandHandler as ɵik, SourceRepository as ɵil, StructureOriginChangedEventHandler as ɵim, GridGateway as ɵin, gridProviders as ɵio, gridStructureDefinition as ɵip, GridRegister as ɵiq, GridIdGenerator as ɵir, PagingRepository as ɵj, StructureRepository as ɵk, PagingCommandService as ɵl, PagingDispatcher as ɵm, SourceQueryService as ɵn, StructureSourceOriginRepository as ɵo, StructurePagingNavigatorComponent as ɵp, StructurePagingSelectComponent as ɵq, StructurePagingStatsComponent as ɵr, StructureAlternativePagingNavigatorComponent as ɵs, StructureAlternativePagingPagesComponent as ɵt, StructureSummaryModule as ɵu, NumberFormatterModule as ɵv, NumberFormatterPipe as ɵw, StructureSummaryComponent as ɵx, StructureSummaryEnabledArchive as ɵy, ReactiveArchive as ɵz };
//# sourceMappingURL=generic-ui-ngx-grid.js.map
