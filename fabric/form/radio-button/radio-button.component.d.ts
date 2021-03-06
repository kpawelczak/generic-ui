import { ElementRef, EventEmitter, OnChanges, Renderer2 } from '@angular/core';
export declare class FabricRadioButtonComponent implements OnChanges {
    private elementRef;
    private renderer;
    name: string;
    checked: boolean;
    disabled: boolean;
    changed: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    check(): void;
}
