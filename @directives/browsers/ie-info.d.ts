import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
export declare abstract class IeInfo {
    _responsiveState: ResponsiveState;
    currentstate: string;
    private _subscription;
    replaySubject$: ReplaySubject<any>;
    constructor(_responsiveState: ResponsiveState);
    connect(): Observable<any>;
    disconnect(): void;
    readonly getIE: Observable<any>;
    protected _updateData(value: any): void;
}
