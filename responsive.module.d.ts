/**
 * @name responsive.module
 * @description Core module in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
import { ModuleWithProviders } from '@angular/core';
import { ResponsiveConfig } from './@core/providers/responsive-config/responsive-config';
import { InjectionToken } from '@angular/core';
import { IResponsiveConfig } from './@core/interfaces/responsive-config.interfaces';
export declare const RESPONSIVE_CONFIGURATION: InjectionToken<IResponsiveConfig>;
export declare function responsiveConfiguration(config: IResponsiveConfig): ResponsiveConfig;
export declare class ResponsiveModule {
    static forRoot(config?: IResponsiveConfig): ModuleWithProviders;
}
