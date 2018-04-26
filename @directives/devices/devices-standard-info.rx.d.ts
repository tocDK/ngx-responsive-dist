import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { DeviceStandardInfo } from './devices-standard-info';
export declare class DeviceStandardInfoRx extends DeviceStandardInfo {
    protected _responsiveState: ResponsiveState;
    constructor(_responsiveState: ResponsiveState);
}
