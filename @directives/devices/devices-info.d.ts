/**
 * @name devices-info
 * @description devices-info abstract class in ngx-responsive
 *
 * @license MIT
 */
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
export declare abstract class DevicesInfo {
    protected _responsiveState: ResponsiveState;
    currentstate: string;
    _subscription: Subscription;
    replaySubject$: ReplaySubject<any>;
    constructor(_responsiveState: ResponsiveState);
    connect(): Observable<any>;
    disconnect(): void;
    readonly getDevice: Observable<any>;
    protected _updateData(value: any): void;
}
