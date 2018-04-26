/**
 * @name custom-sizes.directives
 * @description Custom sizes directives in ngx-responsive
 *
 * @license MIT
 */
import { TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
export declare class ShowItSizesDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
    showItSizes: any;
}
export declare class HideItSizesDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
    hideItSizes: any;
}
