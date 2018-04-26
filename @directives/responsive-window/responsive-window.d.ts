/**
 * @name responsive-window
 * @description responsiveWindow Directive in ngx-responsive
 *
 * @license MIT
 */
import { DoCheck, ElementRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
export declare class ResponsiveWindowDirective implements OnInit, OnDestroy, DoCheck {
    private _responsiveState;
    private el;
    private cd;
    private _noRepeat;
    private element;
    name: string;
    constructor(_responsiveState: ResponsiveState, el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    getWidth(): number;
    private _ifValueChanged(oldValue, newValue);
}
