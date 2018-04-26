/**
 * @name responsive
 * @description Responsive directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, TemplateRef, ViewContainerRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IResponsivePattern } from '../../@core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
export declare class ResponsiveDirective implements OnDestroy {
    templateRef: TemplateRef<Object>;
    private _responsiveState;
    private viewContainer;
    private cd;
    responsive: string | string[];
    changes: EventEmitter<any>;
    private _windows;
    private _window;
    set_values: IResponsivePattern;
    private set_active_subscriptions;
    private match_multiple;
    private _subscription_Bootstrap;
    private _subscription_Browser;
    private _subscription_Pixel_Ratio;
    private _subscription_Device;
    private _subscription_Orientation;
    private _subscription_Standard;
    private _subscription_IE_Version;
    private _subscription_custom_sizes;
    protected _showWhenTrue: boolean;
    private _globalNoRepeat;
    private _noRepeatBootstrapName;
    private _bootstrapNoRepeat;
    private _deviceNoRepeat;
    private _standardNoRepeat;
    private _orientationNoRepeat;
    private _browserNoRepeat;
    private _pixelratioNoRepeat;
    private _ieNoRepeat;
    private _sizesNoRepeat;
    private _bootstrap_user_param;
    private _devices_user_param;
    private _standard_user_param;
    private _orientation_user_param;
    private _browser_user_param;
    private _pixelratio_user_param;
    private _ie_user_param;
    private _sizes_user_param;
    private _sizes_window;
    protected _actives: string[];
    constructor(templateRef: TemplateRef<Object>, _responsiveState: ResponsiveState, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    init_responsive(value: any): void;
    private updateBootstrap(value);
    private updateBrowser(value);
    private updateDevice(value);
    private updatePixelRatio(value);
    private updateOrientation(value);
    private updateStandard(value);
    private updateIEversion(value);
    private updateSizes(value);
    private updateEvent(param, type_directive);
    private showHideOperations(show, type_directive);
    private matchValues(show, type_directive);
    ngOnDestroy(): void;
    private _ifValueChanged(oldValue, newValue);
    private isJSON(value);
}
