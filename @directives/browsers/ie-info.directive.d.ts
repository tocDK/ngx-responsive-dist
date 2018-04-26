/**
 * @name ie-info.directives
 * @description IE Info directives in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { IeInfo } from './ie-info';
export declare class IeInfoDirective extends IeInfo implements OnInit, OnDestroy {
    _responsiveState: ResponsiveState;
    private viewContainer;
    private cd;
    ieInfo: string[] | string;
    ieVersion: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _updateData(value: any): void;
}
