/**
 * @name responsive-size-info.directive
 * @description Responsive Size Info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { ResponsiveSizeInfo } from './responsive-size-info';
export declare class ResponsiveSizeInfoDirective extends ResponsiveSizeInfo implements OnInit, OnDestroy {
    _responsiveState: ResponsiveState;
    viewContainer: ViewContainerRef;
    cd: ChangeDetectorRef;
    currentstate: string;
    responsiveSizeInfo: string[] | string;
    statechanges: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _updateData(value: any): void;
}
