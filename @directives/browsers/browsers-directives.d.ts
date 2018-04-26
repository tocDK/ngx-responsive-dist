/**
 * @name browser-directives
 * @description Browser directives in ngx-responsive
 *
 * @license MIT
 */
import { TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
export declare class IsChromeDirective extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isChrome: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsFirefoxDirective extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isFirefox: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsSafariDirective extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isSafari: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsOperaDirective extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isOpera: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIEDirective extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ShowItBrowserDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    showItBrowser: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class HideItBrowserDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    hideItBrowser: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE9Directive extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE9: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE10Directive extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE10: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE11Directive extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE11: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class IsIE12Directive extends RESPONSIVE_BASE<any> {
    protected _state: string;
    protected _showWhenTrue: boolean;
    isIE12: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class ShowIEVersionDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    showIEVersion: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
export declare class HideIEVersionDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue: boolean;
    hideIEVersion: string[] | string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, _responsiveState: ResponsiveState, cd: ChangeDetectorRef);
}
