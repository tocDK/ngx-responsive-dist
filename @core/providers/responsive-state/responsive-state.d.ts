import { Observable } from 'rxjs';
import { ResponsiveWindowDirective } from '../../../@directives';
import { TLinuxOS, TWindowsOS, TTablet, TMobile, TosSystems, TSmartTv, TGameDevices } from '../../types';
import { ResponsiveConfig } from '../responsive-config/responsive-config';
export declare class ResponsiveState {
    private _responsiveConfig;
    _windows: Object;
    _window: any;
    elemento$: Observable<string>;
    ancho$: Observable<number>;
    browser$: Observable<string>;
    pixel$: Observable<string>;
    device$: Observable<any>;
    orientation$: Observable<any>;
    standard$: Observable<any>;
    ieVersion$: Observable<any>;
    userAgent$: Observable<any>;
    private _width;
    private _screenWidth;
    private _screenHeight;
    private _userAgent;
    constructor(_responsiveConfig: ResponsiveConfig);
    /**
    * @name registerWindow
    * @param rw
    * @param _window
    */
    registerWindow(rw: ResponsiveWindowDirective, _window?: any): void;
    /**
    * @name unregisterWindow
    * @param rw
    * @param _window
    */
    unregisterWindow(rw: ResponsiveWindowDirective, _window?: any): void;
    /**
    * @name getWidth
    * @param windowName
    */
    getWidth(windowName?: string): any;
    /**
    * @name getDevicePixelRatio
    */
    getDevicePixelRatio(): any;
    /**
    * @name getOrientation
    */
    getOrientation(): any;
    /**
    * @name sizeObserver
    */
    sizeObserver(): any;
    /**
     * @name sizeOperations
     */
    sizeOperations(): any;
    /**
     * @name sizeOperations
     */
    pixelRatio(screenHeight?: any, screenWidth?: any): any;
    /**
     * @name testIs4k
     * @param screenHeight
     * @param screenWidth
     */
    testIs4k(screenHeight?: any, screenWidth?: any): boolean;
    /**
     * @name orientationDevice
     */
    orientationDevice(): any;
    /**
     * @name getUserAgent
     */
    getUserAgent(): any;
    /**
     * @name userAgentData
     */
    userAgentData(): any;
    /**
     * @name deviceDetection
     */
    deviceDetection(): any;
    /**
     * @name standardDevices
     */
    standardDevices(): any;
    /**
     * @name ieVersionDetect
     */
    ieVersionDetect(): any;
    /**
     * @name browserName
     */
    browserName(): any;
    /**
     * @name gameDevices
     */
    gameDevices(): TGameDevices;
    /**
     * @name smartTv
     */
    smartTv(): TSmartTv;
    /**
     * @name desktop
     */
    desktop(): TosSystems;
    /**
     * @name tablet
     */
    tablet(): TTablet;
    /**
     * @name mobile
     */
    mobile(): TMobile;
    /**
     * @name windows
     */
    windows(): TWindowsOS;
    /**
     * @name linux
     */
    linux(): TLinuxOS;
    /**
     * @name isMobile
     */
    isMobile(): boolean;
    /**
     * @name isTablet
     */
    isTablet(): boolean;
    /**
     * @name isSMART
     */
    isSMART(): boolean;
    /**
     * @name isDesktop
     */
    isDesktop(): boolean;
    /**
     * @name isGameDevice
     */
    isGameDevice(): boolean;
    /**
     * @name isWindows
     */
    isWindows(): boolean;
    /**
     * @name isLinux
     */
    isLinux(): boolean;
    /**
     * @name isBot
     */
    isBot(): boolean;
}
