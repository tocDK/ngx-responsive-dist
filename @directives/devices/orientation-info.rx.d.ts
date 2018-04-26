import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { OrientationInfo } from './orientation-info';
export declare class OrientationInfoRx extends OrientationInfo {
    protected _responsiveState: ResponsiveState;
    constructor(_responsiveState: ResponsiveState);
}
