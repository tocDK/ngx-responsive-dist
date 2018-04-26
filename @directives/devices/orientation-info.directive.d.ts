/**
 * @name orientation-info.directive
 * @description Device orientation directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { OrientationInfo } from './orientation-info';
export declare class OrientationInfoDirective extends OrientationInfo implements OnInit, OnDestroy {
    protected _responsiveState: ResponsiveState;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    orientation: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _updateData(value: any): void;
}
