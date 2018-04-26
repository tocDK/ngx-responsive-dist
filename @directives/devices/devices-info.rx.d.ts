import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DevicesInfo } from './devices-info';
export declare class DeviceInfoRx extends DevicesInfo {
    protected _responsiveState: ResponsiveState;
    constructor(_responsiveState: ResponsiveState);
}
