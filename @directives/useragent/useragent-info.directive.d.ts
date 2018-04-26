/**
 * @name useragent-info.directive
 * @description Useragent info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { UserAgentInfo } from './useragent-info';
export declare class UserAgentInfoDirective extends UserAgentInfo implements OnInit, OnDestroy {
    _responsiveState: ResponsiveState;
    cd: ChangeDetectorRef;
    info: EventEmitter<any>;
    constructor(_responsiveState: ResponsiveState, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _emitUserAgent(value: any): void;
}
