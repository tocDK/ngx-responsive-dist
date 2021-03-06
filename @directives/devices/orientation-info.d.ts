import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
export declare abstract class OrientationInfo {
    protected _responsiveState: ResponsiveState;
    currentstate: string;
    private _subscription;
    replaySubject$: ReplaySubject<any>;
    constructor(_responsiveState: ResponsiveState);
    connect(): Observable<any>;
    disconnect(): void;
    readonly getOrientation: Observable<any>;
    protected _updateData(value: any): void;
}
