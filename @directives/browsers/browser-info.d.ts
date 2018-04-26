import { ReplaySubject } from 'rxjs';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { Observable } from 'rxjs';
export declare abstract class BrowserInfo {
    _responsiveState: ResponsiveState;
    currentstate: string;
    private _subscription;
    replaySubject$: ReplaySubject<any>;
    constructor(_responsiveState: ResponsiveState);
    connect(): Observable<any>;
    disconnect(): void;
    readonly getBrowser: Observable<any>;
    protected _updateData(value: any): void;
}
