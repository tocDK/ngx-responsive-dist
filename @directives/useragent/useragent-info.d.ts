import { ReplaySubject } from 'rxjs';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { Observable } from 'rxjs';
export declare abstract class UserAgentInfo {
    _responsiveState: ResponsiveState;
    replaySubject$: ReplaySubject<any>;
    private _subscription;
    constructor(_responsiveState: ResponsiveState);
    connect(): Observable<any>;
    disconnect(): void;
    readonly getUserAgent: Observable<any>;
    protected _emitUserAgent(value: any): void;
}
