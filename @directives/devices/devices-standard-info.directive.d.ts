/**
 * @name devices-standard-info.directive
 * @description devices-standard-info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DeviceStandardInfo } from './devices-standard-info';
export declare class DeviceStandardInfoDirective extends DeviceStandardInfo implements OnInit, OnDestroy {
    protected _responsiveState: ResponsiveState;
    protected viewContainer: ViewContainerRef;
    protected cd: ChangeDetectorRef;
    deviceStandardInfo: string[] | string;
    standard: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _updateData(value: any): void;
}
