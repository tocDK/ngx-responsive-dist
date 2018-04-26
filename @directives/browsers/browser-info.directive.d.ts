/**
 * @name browser-info.directive
 * @description Browser info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { BrowserInfo } from './browser-info';
export declare class BrowserInfoDirective extends BrowserInfo implements OnInit, OnDestroy {
    _responsiveState: ResponsiveState;
    private viewContainer;
    private cd;
    browser: EventEmitter<any>;
    browserInfo: string[] | string;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _updateData(value: any): void;
}
