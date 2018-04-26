import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { UserAgentInfo } from './useragent-info';
export declare class UserAgentInfoRx extends UserAgentInfo {
    _responsiveState: ResponsiveState;
    constructor(_responsiveState: ResponsiveState);
}
