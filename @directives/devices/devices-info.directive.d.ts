/**
 * @name devices-info.directive
 * @description devices-info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DevicesInfo } from './devices-info';
export declare class DeviceInfoDirective extends DevicesInfo implements OnInit, OnDestroy {
    protected _responsiveState: ResponsiveState;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    device: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _updateData(value: any): void;
}
