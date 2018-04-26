import { Injectable, Inject, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef, Output, ElementRef, NgModule, InjectionToken } from '@angular/core';
import { fromEvent, ReplaySubject } from 'rxjs';
import { debounceTime, defaultIfEmpty, map, startWith, distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const LINUX_OS = {
    DEBIAN: 'Debian',
    KNOPPIX: 'Knoppix',
    MINT: 'Mint',
    UBUNTU: 'Ubuntu',
    KUBUNTU: 'Kubuntu',
    XUBUNTU: 'Xubuntu',
    LUBUNTU: 'Lubuntu',
    FEDORA: 'Fedora',
    RED_HAT: 'Red hat',
    MANDRIVA: 'Mandriva',
    GENTOO: 'Gentoo',
    SABAYON: 'Sabayon',
    SLACKWARE: 'Slackware',
    SUSE: 'Suse',
    CENT_OS: 'CentOS',
    BACKTRACK: 'Backtrack',
    GENERIC_LINUX: 'Generic Linux'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const WINDOWS_OS = {
    WINDOWS_XP: 'Windows XP',
    WINDOWS_VISTA: 'Windows Vista',
    WINDOWS_7: 'Windows 7',
    WINDOWS_8: 'Windows 8',
    WINDOWS_10: 'Windows 10',
    GENERIC_WINDOWS: 'Generic Windows'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TABLET = {
    IPAD: 'Ipad',
    ANDROID: 'Android',
    WINDOWS_PHONE: 'Windows Phone',
    KINDLE: 'Kindle',
    GENERIC_TABLET: 'Generic Tablet'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MOBILE = {
    IPHONE: 'Iphone',
    ANDROID: 'Android',
    WINDOWS_PHONE: 'Windows Phone',
    BLACKBERRY: 'Blackberry',
    GENERIC_MOBILE: 'Generic Mobile'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const OS_SYSTEMS = {
    WINDOWS: 'Windows',
    ANDROID: MOBILE.ANDROID,
    WINDOWS_PHONE: MOBILE.WINDOWS_PHONE,
    IOS: 'iOS',
    MAC_OS: 'Mac',
    LINUX: 'Linux',
    FIREFOX_OS: 'Firefox OS',
    CHROME_OS: 'Chrome OS'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const GAME_DEVICES = {
    PS4: 'Playstation 4',
    PS3: 'Playstation 3',
    XBOX_ONE: 'Xbox One',
    XBOX: 'Xbox',
    WII: 'Wii',
    WII_U: 'Wii U',
    NINTENDO_3DS: 'Nintendo 3DS',
    PLAYSTATION_VITA: 'Playstation Vita',
    PSP: 'PSP'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SMART_TV = {
    CHROMECAST: 'Chromecast',
    APPLE_TV: 'Apple tv',
    GOOGLE_TV: 'Google tv',
    PS4: GAME_DEVICES.PS4,
    XBOX_ONE: GAME_DEVICES.XBOX_ONE,
    GENERIC_TV: 'Generic smartv'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BOTS = {
    GENERIC_BOT: 'Generic Bot'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BROWSER_NAMES = {
    CHROME: 'chrome',
    FIREFOX: 'firefox',
    IE: 'ie',
    SAFARI: 'safari',
    OPERA: 'opera',
    SILK: 'silk',
    YANDEX: 'yandex',
    NA: 'NA'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name reg-expressions.constants
 * @description Core reg-expressions.constants in ngx-responsive
 *
 * @license MIT
 */
/* export const GLOBAL_INPUTS = {
    BOOTSTRAP: ['xs', 'sm', 'md', 'lg', 'xl'],
    DEVICES: ['mobile', 'tablet', 'smarttv', 'desktop'],
    STANDARD: ['iphone', 'ipad', 'android mobile', 'android tablet', 'windows phone'],
    ORIENTATION: ['portrait', 'landscape'],
    BROWSERS: ['chrome', 'firefox', 'ie', 'safari', 'opera'],
    PIXEL_RATIO: ['1x', 'retina', '4k'],
    IE_VERSIONS: ['ie 9', 'ie 10', 'ie 11', 'ie +12']
}; */
const REG_WEARABLES = {
    IWATCH: ''
};
const REG_MOBILES = {
    ANDROID: {
        REG: /(android);?[\s\/]+([\d.]+)?/,
        VALUE: MOBILE.ANDROID
    },
    IPHONE: {
        REG: /(iphone\sos)\s([\d_]+)/,
        VALUE: MOBILE.IPHONE
    },
    WINDOWS_PHONE: {
        REG: /windows phone ([\d.]+)/,
        VALUE: MOBILE.WINDOWS_PHONE
    },
    BLACKBERRY: {
        REG: /(blackBerry).*version\/([\d.]+)/,
        VALUE: MOBILE.BLACKBERRY
    },
    BB10: {
        REG: /(bb10).*version\/([\d.]+)/,
        VALUE: MOBILE.BLACKBERRY
    },
    WEB_OS: {
        REG: /(webos|hpwos)[\s\/]([\d.]+)/,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    IPOD: {
        REG: /(ipod)(.*os\s([\d_]+))?/,
        VALUE: MOBILE.IPHONE
    },
    FIREFOX_OS: {
        REG: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    MOBI: {
        REG: /[^-]mobi/i,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    GENERIC_REG_1: {
        REG: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        VALUE: MOBILE.GENERIC_MOBILE
    },
    GENERIC_REG_2: {
        REG: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        VALUE: MOBILE.GENERIC_MOBILE
    }
};
const REG_TABLETS = {
    IPAD: {
        REG: /(ipad).*os\s([\d_]+)/,
        VALUE: TABLET.IPAD
    },
    KINDLE: {
        REG: /kindle|silk|kfapw|kfarwi|kfaswi|kffowi|kfjw|kfmewi|kfot|kfsaw|kfsowi|kftbw|kfthw|kftt|wffowi/i,
        VALUE: TABLET.KINDLE
    },
    TABLET: {
        REG: /tablet/i,
        VALUE: TABLET.GENERIC_TABLET
    },
    PLAYBOOK: {
        REG: /rim\stablet|playbook/i,
        VALUE: TABLET.GENERIC_TABLET
    },
};
const REG_SMARTS_TV = {
    CHROMECAST: {
        REG: /crkey/i,
        VALUE: SMART_TV.CHROMECAST
    },
    APPLE_TV: {
        REG: /appletv/i,
        VALUE: SMART_TV.APPLE_TV
    },
    GOOGLE_TV: {
        REG: /(large screen)|googletv/i,
        VALUE: SMART_TV.GOOGLE_TV
    },
    PS4: {
        REG: /playstation 4/i,
        VALUE: SMART_TV.PS4
    },
    XBOX_ONE: {
        REG: /xbox one/i,
        VALUE: SMART_TV.XBOX_ONE
    },
    GENERIC_TV: {
        REG: /tv|smarttv|googletv|crkey|Sharp|THOMSON|THOM|Panasonic|Philips|NETTV|Maple_2011|appletv|Humax|Ikea|Loewe|Medion|hbbtv|pov_tv|Airties|netcast.tv|OWB|Grundig|Arcelik/i,
        VALUE: SMART_TV.GENERIC_TV
    }
};
const REG_GAME_DEVICES = {
    PS4: {
        REG: /playstation 4/i,
        VALUE: GAME_DEVICES.PS4
    },
    PS3: {
        REG: /playstation 3/i,
        VALUE: GAME_DEVICES.PS3
    },
    XBOX: {
        REG: /xbox/i,
        VALUE: GAME_DEVICES.XBOX
    },
    XBOX_ONE: {
        REG: /xbox one/i,
        VALUE: GAME_DEVICES.XBOX_ONE
    },
    WII_U: {
        REG: /nintendo wiiu/i,
        VALUE: GAME_DEVICES.WII_U
    },
    WII: {
        REG: /nintendo wii/i,
        VALUE: GAME_DEVICES.WII
    },
    PS_VITA: {
        REG: /playstation vita/i,
        VALUE: GAME_DEVICES.PLAYSTATION_VITA
    },
    NINTENDO_3DS: {
        REG: /nintendo 3ds/i,
        VALUE: GAME_DEVICES.NINTENDO_3DS
    },
    PSP: {
        REG: /psp/i,
        VALUE: GAME_DEVICES.PSP
    }
};
const REG_IE_VERSIONS = {
    MS_MSIE: {
        REG: /msie/i,
        VALUE: null
    },
    MS_TRIDENT: {
        REG: /trident/i,
        VALUE: null
    },
    MS_EDGE: {
        REG: /edge/i,
        VALUE: null
    }
};
const REG_BROWSERS = {
    CHROME: {
        REG: /(chrome|crios)\/([\d.]+)/,
        VALUE: BROWSER_NAMES.CHROME
    },
    FIREFOX: {
        REG: /firefox|iceweasel|fxios/i,
        VALUE: BROWSER_NAMES.FIREFOX
    },
    WEB_VIEW: {
        REG: /(iphone|ipod|ipad).*applewebkit(?!.*safari)/,
        VALUE: BROWSER_NAMES.SAFARI
    },
    SAFARI: {
        REG: /version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^S]*(safari))/,
        VALUE: BROWSER_NAMES.SAFARI
    },
    OPERA: {
        REG: /opera|opr|opios/i,
        VALUE: BROWSER_NAMES.OPERA
    },
    IE: {
        REG: /msie|trident|edge/,
        VALUE: BROWSER_NAMES.IE
    },
    SILK: {
        REG: /silk/i,
        VALUE: BROWSER_NAMES.SILK
    },
    YANDEX: {
        REG: /yabrowser/i,
        VALUE: BROWSER_NAMES.YANDEX
    },
    NA: {
        REG: null,
        VALUE: BROWSER_NAMES.NA
    }
};
const REG_OS = {
    WINDOWS: {
        REG: /win\d{2}|windows/,
        VALUE: OS_SYSTEMS.WINDOWS
    },
    IOS: {
        REG: /(ipod|iphone|ipad)/i,
        VALUE: OS_SYSTEMS.IOS
    },
    MAC_OS: {
        REG: /macintosh/i,
        VALUE: OS_SYSTEMS.MAC_OS
    },
    ANDROID: {
        REG: /android/i,
        VALUE: OS_SYSTEMS.ANDROID
    },
    LINUX: {
        REG: /linux/i,
        VALUE: OS_SYSTEMS.LINUX
    },
    FIREFOX_OS: {
        REG: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
        VALUE: OS_SYSTEMS.FIREFOX_OS
    },
    CHROME_OS: {
        REG: /cros/,
        VALUE: OS_SYSTEMS.CHROME_OS
    },
    WINDOWS_PHONE: {
        REG: /windows phone/i,
        VALUE: OS_SYSTEMS.WINDOWS_PHONE
    }
};
const REG_SORT_NAMES = {
    MOZILLA: {
        REG: /mozilla/,
        VALUE: null
    },
    CHROME: {
        REG: /chrome/,
        VALUE: null
    },
    WEBKIT: {
        REG: /webkit/,
        VALUE: null
    },
    APPLE_WEBKIT: {
        REG: /applewebkit/,
        VALUE: null
    },
    SAFARI: {
        REG: /safari/,
        VALUE: null
    }
};
const REG_WINDOWS_OS_VERSION = {
    WINDOWS_3_11: {
        REG: /win16/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_95: {
        REG: /(windows 95|win95|windows_95)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_ME: {
        REG: /(win 9x 4.90|windows ME)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_98: {
        REG: /(windows 98|win98)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_CE: {
        REG: /windows ce/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_2000: {
        REG: /(windows nt 5.0|windows 2000)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_XP: {
        REG: /(windows nt 5.1|windows xp)/,
        VALUE: WINDOWS_OS.WINDOWS_XP
    },
    WINDOWS_SERVER_2003: {
        REG: /windows nt 5.2/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_VISTA: {
        REG: /windows nt 6.0|Windows Vista/,
        VALUE: WINDOWS_OS.WINDOWS_VISTA
    },
    WINDOWS_7: {
        REG: /(windows 7|windows nt 6.1)/,
        VALUE: WINDOWS_OS.WINDOWS_7
    },
    WINDOWS_8: {
        REG: /(windows 8|windows 8.1|windows nt 6.2 |windows nt 6.3)/,
        VALUE: WINDOWS_OS.WINDOWS_8
    },
    WINDOWS_10: {
        REG: /(windows nt 10.0)/,
        VALUE: WINDOWS_OS.WINDOWS_10
    },
    WINDOWS_NT_4_0: {
        REG: /(windows nt 4.0|winnt4.0|winnt|windows nt)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
};
const REG_WINDOWS_PHONE_OS_VERSION = {
    WINDOWS_PHONE_7_5: {
        REG: /(windows phone os 7.5)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_PHONE_8_1: {
        REG: /(windows phone 8.1)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    },
    WINDOWS_PHONE_10: {
        REG: /(windows phone 10)/,
        VALUE: WINDOWS_OS.GENERIC_WINDOWS
    }
};
const REG_MAC_OS_VERSION = {
    MAC_OS: ''
};
const REG_LINUX_OS = {
    DEBIAN: {
        REG: /Debian/i,
        VALUE: LINUX_OS.DEBIAN
    },
    KNOPPIX: {
        REG: /Knoppix/i,
        VALUE: LINUX_OS.KNOPPIX
    },
    MINT: {
        REG: /Mint/i,
        VALUE: LINUX_OS.MINT
    },
    UBUNTU: {
        REG: /Ubuntu/i,
        VALUE: LINUX_OS.UBUNTU
    },
    KUBUNTU: {
        REG: /Kubuntu/i,
        VALUE: LINUX_OS.KUBUNTU
    },
    XUBUNTU: {
        REG: /Xubuntu/i,
        VALUE: LINUX_OS.XUBUNTU
    },
    LUBUNTU: {
        REG: /Lubuntu/i,
        VALUE: LINUX_OS.LUBUNTU
    },
    FEDORA: {
        REG: /Fedora/i,
        VALUE: LINUX_OS.FEDORA
    },
    RED_HAT: {
        REG: /Red Hat/i,
        VALUE: LINUX_OS.RED_HAT
    },
    MANDRIVA: {
        REG: /Mandriva/i,
        VALUE: LINUX_OS.MANDRIVA
    },
    GENTOO: {
        REG: /Gentoo/i,
        VALUE: LINUX_OS.GENTOO
    },
    SABAYON: {
        REG: /Sabayon/i,
        VALUE: LINUX_OS.SABAYON
    },
    SLACKWARE: {
        REG: /Slackware/i,
        VALUE: LINUX_OS.SLACKWARE
    },
    SUSE: {
        REG: /SUSE/i,
        VALUE: LINUX_OS.SUSE
    },
    CENT_OS: {
        REG: /CentOS/i,
        VALUE: LINUX_OS.CENT_OS
    },
    BACKTRACK: {
        REG: /BackTrack/i,
        VALUE: LINUX_OS.BACKTRACK
    }
};
const REG_BOTS = {
    GENERIC_BOT: {
        REG: /bot|googlebot|crawler|spider|robot|crawling/i,
        VALUE: BOTS.GENERIC_BOT
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const IE_VERSIONS = {
    IE_7: 'ie 7',
    IE_8: 'ie 8',
    IE_9: 'ie 9',
    IE_10: 'ie 10',
    IE_11: 'ie 11',
    IE_12: 'ie +12'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name user-agent.constants
 * @description Core user agent in ngx-responsive
 *
 * @license MIT
 */
const USER_AGENT = {
    device: null,
    browser: null,
    pixelratio: null,
    ie_version: {
        name: null,
        state: null
    },
    game_device: {
        name: null,
        state: null
    },
    smart_tv: {
        name: null,
        state: null
    },
    desktop: {
        name: null,
        state: null
    },
    tablet: {
        name: null,
        state: null
    },
    mobile: {
        name: null,
        state: null
    },
    window_os: {
        name: null,
        state: null
    },
    linux_os: {
        name: null,
        state: null
    },
    bot: null
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name constants
 * @description Core constants in ngx-responsive
 *
 * @license MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ResponsiveConfig {
    /**
     * @param {?=} _config
     */
    constructor(_config) {
        this._config = _config;
        this.config = this._config;
    }
}
ResponsiveConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResponsiveConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ResponsiveState {
    /**
     * @param {?} _responsiveConfig
     */
    constructor(_responsiveConfig) {
        this._responsiveConfig = _responsiveConfig;
        this._windows = {};
        this._window = null;
        this._screenWidth = null;
        this._screenHeight = null;
        this._userAgent = null;
        this._window = (typeof window !== 'undefined') ? window : null;
        this._screenWidth = this._window.screen.width;
        this._screenHeight = this._window.screen.height;
        this._userAgent = (this._window !== null) ? this._window.navigator.userAgent.toLowerCase() : null;
        const /** @type {?} */ _resize$ = fromEvent(this._window, 'resize')
            .pipe(debounceTime(this._responsiveConfig.config.debounceTime), defaultIfEmpty(), startWith(this.getWidth('window')));
        const /** @type {?} */ _pixelRatio$ = fromEvent(this._window, 'onload')
            .pipe(defaultIfEmpty(), startWith(this.getDevicePixelRatio()));
        const /** @type {?} */ _device$ = fromEvent(this._window, 'onload')
            .pipe(defaultIfEmpty(), startWith(this.getUserAgent()));
        const /** @type {?} */ _userAgent$ = fromEvent(this._window, 'onload')
            .pipe(defaultIfEmpty(), startWith(this.userAgentData()));
        const /** @type {?} */ _orientation$ = fromEvent(this._window, 'orientationchange')
            .pipe(defaultIfEmpty(), startWith(this.getOrientation()));
        this.elemento$ = _resize$.pipe(map(this.sizeOperations.bind(this)));
        this.ancho$ = _resize$.pipe(map(this.sizeObserver.bind(this)));
        this.browser$ = _device$.pipe(map(this.browserName.bind(this)));
        this.pixel$ = _pixelRatio$.pipe(map(this.pixelRatio.bind(this)));
        this.device$ = _device$.pipe(map(this.deviceDetection.bind(this)));
        this.orientation$ = _orientation$.pipe(map(this.orientationDevice.bind(this)));
        this.standard$ = _device$.pipe(map(this.standardDevices.bind(this)));
        this.ieVersion$ = _device$.pipe(map(this.ieVersionDetect.bind(this)));
        this.userAgent$ = _userAgent$.pipe(map(this.userAgentData.bind(this)));
    }
    /**
     * \@name registerWindow
     * @param {?} rw
     * @param {?=} _window
     * @return {?}
     */
    registerWindow(rw, _window = null) {
        if (_window !== null) {
            if (rw.name && !this._windows[rw.name]) {
                this._windows[rw.name] = rw;
                _window.dispatchEvent(new Event('resize'));
            }
        }
    }
    /**
     * \@name unregisterWindow
     * @param {?} rw
     * @param {?=} _window
     * @return {?}
     */
    unregisterWindow(rw, _window = null) {
        if (_window !== null) {
            for (const /** @type {?} */ rwn in this._windows) {
                if (this._windows[rwn] === rw) {
                    delete (this._windows[rwn]);
                }
            }
            _window.dispatchEvent(new Event('resize'));
        }
    }
    /**
     * \@name getWidth
     * @param {?=} windowName
     * @return {?}
     */
    getWidth(windowName = null) {
        if (this._windows !== null && this._window !== null) {
            if (windowName && this._windows[windowName]) {
                return this._windows[windowName].getWidth();
            }
            else {
                return this._window.innerWidth;
            }
        }
        return 0;
    }
    /**
     * \@name getDevicePixelRatio
     * @return {?}
     */
    getDevicePixelRatio() {
        let /** @type {?} */ ratio = 1;
        if (this._window !== null) {
            if (typeof this._window.screen.systemXDPI !== 'undefined' &&
                typeof this._window.screen.logicalXDPI !== 'undefined' &&
                this._window.screen.systemXDPI > this._window.screen.logicalXDPI) {
                ratio = this._window.screen.systemXDPI / this._window.screen.logicalXDPI;
            }
            else if (typeof this._window.devicePixelRatio !== 'undefined') {
                ratio = this._window.devicePixelRatio;
            }
        }
        return ratio;
    }
    /**
     * \@name getOrientation
     * @return {?}
     */
    getOrientation() {
        return (this._window !== null) ? window.orientation : null;
    }
    /**
     * \@name sizeObserver
     * @return {?}
     */
    sizeObserver() {
        return (this._windows !== null && this._window !== null) ? this.getWidth('window') : 0;
    }
    /**
     * \@name sizeOperations
     * @return {?}
     */
    sizeOperations() {
        let /** @type {?} */ _sizes = null;
        const /** @type {?} */ _breackpoints = this._responsiveConfig.config.breakPoints;
        if (this._windows !== null && this._window !== null && _breackpoints !== null) {
            const /** @type {?} */ _width = this.getWidth('window');
            if (_breackpoints.xl.min <= _width) {
                _sizes = 'xl';
            }
            else if (_breackpoints.lg.max >= _width && _breackpoints.lg.min <= _width) {
                _sizes = 'lg';
            }
            else if (_breackpoints.md.max >= _width && _breackpoints.md.min <= _width) {
                _sizes = 'md';
            }
            else if (_breackpoints.sm.max >= _width && _breackpoints.sm.min <= _width) {
                _sizes = 'sm';
            }
            else if (_breackpoints.xs.max >= _width) {
                _sizes = 'xs';
            }
        }
        return _sizes;
    }
    /**
     * \@name sizeOperations
     * @param {?=} screenHeight
     * @param {?=} screenWidth
     * @return {?}
     */
    pixelRatio(screenHeight = null, screenWidth = null) {
        let /** @type {?} */ _pixelRatio = null;
        if (this._window !== null && screenHeight !== null && screenWidth !== null) {
            if (this.testIs4k(screenHeight, screenWidth)) {
                _pixelRatio = '4k';
            }
            else if (this.getDevicePixelRatio() > 1) {
                _pixelRatio = 'retina';
            }
            else if (this.getDevicePixelRatio() === 1) {
                _pixelRatio = '1x';
            }
        }
        return _pixelRatio;
    }
    /**
     * \@name testIs4k
     * @param {?=} screenHeight
     * @param {?=} screenWidth
     * @return {?}
     */
    testIs4k(screenHeight = null, screenWidth = null) {
        return (screenHeight !== null && screenWidth !== null) ?
            ((screenHeight < screenWidth) ? (screenWidth > 3839) : (screenHeight > 3839)) : false;
    }
    /**
     * \@name orientationDevice
     * @return {?}
     */
    orientationDevice() {
        let /** @type {?} */ _orientationDevice = null;
        if (this._window !== null) {
            if (this.isMobile() || this.isTablet()) {
                if (this._window.innerHeight > this._window.innerWidth) {
                    _orientationDevice = 'portrait';
                }
                else {
                    _orientationDevice = 'landscape';
                }
            }
            else if (this.isSMART() || this.isDesktop()) {
                _orientationDevice = 'landscape';
            }
        }
        return _orientationDevice;
    }
    /**
     * \@name getUserAgent
     * @return {?}
     */
    getUserAgent() {
        return (this._window !== null) ? this._window.navigator.userAgent.toLowerCase() : null;
    }
    /**
     * \@name userAgentData
     * @return {?}
     */
    userAgentData() {
        if (this._window === null) {
            return USER_AGENT;
        }
        const /** @type {?} */ _userAgent = this.getUserAgent();
        const /** @type {?} */ DEFAULT_USER_AGENT_VALUE = '';
        const /** @type {?} */ _ieVersionState = (this.ieVersionDetect() !== null);
        const /** @type {?} */ _isGameDevice = this.isGameDevice();
        const /** @type {?} */ _isSMART = this.isSMART();
        const /** @type {?} */ _isDesktop = this.isDesktop();
        const /** @type {?} */ _isTablet = this.isTablet();
        const /** @type {?} */ _isMobile = this.isMobile();
        const /** @type {?} */ _isWindows = this.isWindows();
        const /** @type {?} */ _isLinux = this.isLinux();
        return {
            device: this.deviceDetection(),
            browser: this.browserName(),
            pixelratio: this.pixelRatio(),
            ie_version: {
                name: (_ieVersionState) ? this.ieVersionDetect() : DEFAULT_USER_AGENT_VALUE,
                state: _ieVersionState
            },
            game_device: {
                name: (_isGameDevice) ? this.gameDevices() : DEFAULT_USER_AGENT_VALUE,
                state: _isGameDevice
            },
            smart_tv: {
                name: (_isSMART) ? this.smartTv() : DEFAULT_USER_AGENT_VALUE,
                state: _isSMART
            },
            desktop: {
                name: (_isDesktop) ? this.desktop() : DEFAULT_USER_AGENT_VALUE,
                state: _isDesktop
            },
            tablet: {
                name: (_isTablet) ? this.tablet() : DEFAULT_USER_AGENT_VALUE,
                state: _isTablet
            },
            mobile: {
                name: (_isMobile) ? this.mobile() : DEFAULT_USER_AGENT_VALUE,
                state: _isMobile
            },
            window_os: {
                name: (_isWindows) ? this.windows() : DEFAULT_USER_AGENT_VALUE,
                state: _isWindows
            },
            linux_os: {
                name: (_isLinux) ? this.linux() : DEFAULT_USER_AGENT_VALUE,
                state: _isLinux
            },
            bot: this.isBot()
        };
    }
    /**
     * \@name deviceDetection
     * @return {?}
     */
    deviceDetection() {
        if (this._window !== null) {
            if (this.isMobile()) {
                return 'mobile';
            }
            else if (this.isTablet()) {
                return 'tablet';
            }
            else if (this.isSMART()) {
                return 'smarttv';
            }
            else if (this.isDesktop()) {
                return 'desktop';
            }
        }
        return null;
    }
    /**
     * \@name standardDevices
     * @return {?}
     */
    standardDevices() {
        if (this._window !== null) {
            if (REG_MOBILES.IPHONE.REG.test(this._userAgent)) {
                return 'iphone';
            }
            else if (REG_TABLETS.IPAD.REG.test(this._userAgent)) {
                return 'ipad';
            }
            else if (this.isMobile() && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                return 'android mobile';
            }
            else if (this.isTablet() && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                return 'android tablet';
            }
            else if (REG_MOBILES.WINDOWS_PHONE.REG.test(this._userAgent)) {
                return 'windows phone';
            }
        }
        return null;
    }
    /**
     * \@name ieVersionDetect
     * @return {?}
     */
    ieVersionDetect() {
        if (this._window !== null) {
            const /** @type {?} */ _userAgent = this.getUserAgent();
            const /** @type {?} */ msie = _userAgent.indexOf('msie ');
            let /** @type {?} */ _ieVersion = null;
            if (REG_IE_VERSIONS.MS_MSIE.REG.test(_userAgent)) {
                _ieVersion = parseInt(_userAgent.substring(msie + 5, _userAgent.indexOf('.', msie)), 10);
                if (_ieVersion === 7) {
                    return IE_VERSIONS.IE_7;
                }
                else if (_ieVersion == 8) {
                    return IE_VERSIONS.IE_8;
                }
                else if (_ieVersion == 9) {
                    return IE_VERSIONS.IE_9;
                }
                else if (_ieVersion == 10) {
                    return IE_VERSIONS.IE_10;
                }
            }
            // let trident = this._userAgent.indexOf('trident/')
            if (REG_IE_VERSIONS.MS_TRIDENT.REG.test(_userAgent)) {
                let /** @type {?} */ _rv = _userAgent.indexOf('rv:');
                _ieVersion = parseInt(_userAgent.substring(_rv + 3, _userAgent.indexOf('.', _rv)), 10);
                if (_ieVersion == 11) {
                    return IE_VERSIONS.IE_11;
                }
            }
            // let edge = this._userAgent.indexOf('Edge/')
            if (REG_IE_VERSIONS.MS_EDGE.REG.test(_userAgent)) {
                return IE_VERSIONS.IE_12;
            }
        }
        return null;
    }
    /**
     * \@name browserName
     * @return {?}
     */
    browserName() {
        let /** @type {?} */ _browserName = null;
        if (this._window !== null) {
            if (REG_SORT_NAMES.WEBKIT.REG.test(this._userAgent) && REG_SORT_NAMES.CHROME.REG.test(this._userAgent)
                && !REG_BROWSERS.IE.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.CHROME.VALUE;
            }
            else if (REG_SORT_NAMES.MOZILLA.REG.test(this._userAgent) &&
                REG_BROWSERS.FIREFOX.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.FIREFOX.VALUE;
            }
            else if (REG_BROWSERS.IE.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.IE.VALUE;
            }
            else if (REG_SORT_NAMES.SAFARI.REG.test(this._userAgent) &&
                REG_SORT_NAMES.APPLE_WEBKIT.REG.test(this._userAgent) && !REG_SORT_NAMES.CHROME.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.SAFARI.VALUE;
            }
            else if (REG_BROWSERS.OPERA.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.OPERA.VALUE;
            }
            else if (REG_BROWSERS.SILK.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.SILK.VALUE;
            }
            else if (REG_BROWSERS.YANDEX.REG.test(this._userAgent)) {
                _browserName = REG_BROWSERS.YANDEX.VALUE;
            }
            else {
                _browserName = REG_BROWSERS.NA.VALUE;
            }
        }
        return _browserName;
    }
    /**
     * \@name gameDevices
     * @return {?}
     */
    gameDevices() {
        let /** @type {?} */ _gameDevice = null;
        if (this._userAgent !== null) {
            for (let /** @type {?} */ _reg in REG_GAME_DEVICES) {
                if (REG_GAME_DEVICES[_reg].REG.test(this._userAgent)) {
                    _gameDevice = REG_GAME_DEVICES[_reg].VALUE;
                }
            }
        }
        return _gameDevice;
    }
    /**
     * \@name smartTv
     * @return {?}
     */
    smartTv() {
        let /** @type {?} */ _smartTv = null;
        if (this._userAgent !== null) {
            if (REG_SMARTS_TV.CHROMECAST.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.CHROMECAST.VALUE;
            }
            else if (REG_SMARTS_TV.APPLE_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.APPLE_TV.VALUE;
            }
            else if (REG_SMARTS_TV.GOOGLE_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.GOOGLE_TV.VALUE;
            }
            else if (REG_SMARTS_TV.XBOX_ONE.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.XBOX_ONE.VALUE;
            }
            else if (REG_SMARTS_TV.PS4.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.PS4.VALUE;
            }
            else if (REG_SMARTS_TV.GENERIC_TV.REG.test(this._userAgent)) {
                _smartTv = REG_SMARTS_TV.GENERIC_TV.VALUE;
            }
        }
        return _smartTv;
    }
    /**
     * \@name desktop
     * @return {?}
     */
    desktop() {
        let /** @type {?} */ _desktop = null;
        if (this._userAgent !== null) {
            if (REG_OS.WINDOWS.REG.test(this._userAgent)) {
                _desktop = REG_OS.WINDOWS.VALUE;
            }
            else if (REG_OS.MAC_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.MAC_OS.VALUE;
            }
            else if (REG_OS.LINUX.REG.test(this._userAgent)) {
                _desktop = REG_OS.LINUX.VALUE;
            }
            else if (REG_OS.FIREFOX_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.FIREFOX_OS.VALUE;
            }
            else if (REG_OS.FIREFOX_OS.REG.test(this._userAgent)) {
                _desktop = REG_OS.CHROME_OS.VALUE;
            }
        }
        return _desktop;
    }
    /**
     * \@name tablet
     * @return {?}
     */
    tablet() {
        let /** @type {?} */ _tablet = null;
        if (this._userAgent !== null) {
            if (REG_TABLETS.IPAD.REG.test(this._userAgent)) {
                _tablet = TABLET.IPAD;
            }
            else if (REG_TABLETS.TABLET.REG.test(this._userAgent) && REG_MOBILES.ANDROID.REG.test(this._userAgent)) {
                _tablet = TABLET.ANDROID;
            }
            else if (REG_TABLETS.KINDLE.REG.test(this._userAgent)) {
                _tablet = TABLET.KINDLE;
            }
            else if (REG_TABLETS.TABLET.REG.test(this._userAgent)) {
                _tablet = TABLET.GENERIC_TABLET;
            }
        }
        return _tablet;
    }
    /**
     * \@name mobile
     * @return {?}
     */
    mobile() {
        let /** @type {?} */ _mobile = null;
        if (this._userAgent !== null) {
            for (let /** @type {?} */ _reg in REG_MOBILES) {
                if (REG_MOBILES[_reg].REG.test(this._userAgent)) {
                    _mobile = REG_MOBILES[_reg].VALUE;
                }
            }
            if (_mobile === null && this.isMobile()) {
                _mobile = MOBILE.GENERIC_MOBILE;
            }
        }
        return _mobile;
    }
    /**
     * \@name windows
     * @return {?}
     */
    windows() {
        let /** @type {?} */ _windows = null;
        if (this._userAgent !== null) {
            for (let /** @type {?} */ _reg in REG_WINDOWS_OS_VERSION) {
                if (REG_WINDOWS_OS_VERSION[_reg].REG.test(this._userAgent)) {
                    _windows = REG_WINDOWS_OS_VERSION[_reg].VALUE;
                }
            }
            if (_windows === null && this.isDesktop() && this.isWindows()) {
                _windows = WINDOWS_OS.GENERIC_WINDOWS;
            }
        }
        return _windows;
    }
    /**
     * \@name linux
     * @return {?}
     */
    linux() {
        let /** @type {?} */ _linux = null;
        if (this._userAgent !== null) {
            for (let /** @type {?} */ _reg in REG_LINUX_OS) {
                if (REG_LINUX_OS[_reg].REG.test(this._userAgent)) {
                    _linux = REG_LINUX_OS[_reg].VALUE;
                }
            }
            if (_linux === null && this.isDesktop() && this.isLinux()) {
                _linux = LINUX_OS.GENERIC_LINUX;
            }
        }
        return _linux;
    }
    /**
     * \@name isMobile
     * @return {?}
     */
    isMobile() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            let /** @type {?} */ _userAgent = this._userAgent;
            _result = (REG_MOBILES.GENERIC_REG_1.REG.test(_userAgent) && this.isTablet() === false ||
                REG_MOBILES.GENERIC_REG_2.REG.test(_userAgent.substr(0, 4)) && this.isTablet() === false);
        }
        return _result;
    }
    /**
     * \@name isTablet
     * @return {?}
     */
    isTablet() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            _result = (REG_TABLETS.IPAD.REG.test(this._userAgent) ||
                REG_TABLETS.KINDLE.REG.test(this._userAgent) ||
                REG_TABLETS.TABLET.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * \@name isSMART
     * @return {?}
     */
    isSMART() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            _result = (REG_SMARTS_TV.GENERIC_TV.REG.test(this._userAgent) ||
                REG_SMARTS_TV.PS4.REG.test(this._userAgent) ||
                REG_SMARTS_TV.XBOX_ONE.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * \@name isDesktop
     * @return {?}
     */
    isDesktop() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            _result = (!this.isMobile() || !this.isTablet() || !this.isSMART());
        }
        return _result;
    }
    /**
     * \@name isGameDevice
     * @return {?}
     */
    isGameDevice() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            _result = (REG_GAME_DEVICES.PS4.REG.test(this._userAgent) || REG_GAME_DEVICES.PS3.REG.test(this._userAgent)
                || REG_GAME_DEVICES.XBOX.REG.test(this._userAgent) || REG_GAME_DEVICES.XBOX_ONE.REG.test(this._userAgent)
                || REG_GAME_DEVICES.WII.REG.test(this._userAgent) || REG_GAME_DEVICES.WII_U.REG.test(this._userAgent)
                || REG_GAME_DEVICES.NINTENDO_3DS.REG.test(this._userAgent) || REG_GAME_DEVICES.PS_VITA.REG.test(this._userAgent)
                || REG_GAME_DEVICES.PSP.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * \@name isWindows
     * @return {?}
     */
    isWindows() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.WINDOWS.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * \@name isLinux
     * @return {?}
     */
    isLinux() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.LINUX.REG.test(this._userAgent));
        }
        return _result;
    }
    /**
     * \@name isBot
     * @return {?}
     */
    isBot() {
        let /** @type {?} */ _result = false;
        if (this._userAgent !== null) {
            _result = (REG_BOTS.GENERIC_BOT.REG.test(this._userAgent));
        }
        return _result;
    }
}
ResponsiveState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResponsiveState.ctorParameters = () => [
    { type: ResponsiveConfig, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name responsive-state
 * @description Core responsive-state provider in ngx-responsive
 *
 * @license MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this._noRepeat = 0;
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.eventChanges = new EventEmitter();
    }
    /**
     * @param {?} grid_state
     * @param {?} directive
     * @return {?}
     */
    setGrid(grid_state, directive) {
        switch (directive) {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap = true;
                break;
            case 'device':
                this.set_active_subscriptions.device = true;
                break;
            case 'standard':
                this.set_active_subscriptions.standard = true;
                break;
            case 'orientation':
                this.set_active_subscriptions.orientation = true;
                break;
            case 'browser':
                this.set_active_subscriptions.browser = true;
                break;
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio = true;
                break;
            case 'ie':
                this.set_active_subscriptions.ie = true;
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true;
                break;
        }
        if (directive === 'sizes') {
            this._sizes_grid_state = grid_state;
        }
        else {
            this._others_grid_state = /** @type {?} */ ((Array.isArray(grid_state) ? grid_state : [grid_state]));
        }
        this._directive = directive;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.set_active_subscriptions.bootstrap) {
            this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.bootstrap) {
            this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.browser) {
            this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.device) {
            this._subscription_Device = this._responsiveState.device$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.pixelratio) {
            this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.orientation) {
            this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.standard) {
            this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.ie) {
            this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateView.bind(this));
        }
        if (this.set_active_subscriptions.sizes) {
            this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateView.bind(this));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.set_active_subscriptions.bootstrap) {
            this._subscription_Bootstrap.unsubscribe();
        }
        if (this.set_active_subscriptions.browser) {
            this._subscription_Browser.unsubscribe();
        }
        if (this.set_active_subscriptions.device) {
            this._subscription_Device.unsubscribe();
        }
        if (this.set_active_subscriptions.pixelratio) {
            this._subscription_Pixel_Ratio.unsubscribe();
        }
        if (this.set_active_subscriptions.orientation) {
            this._subscription_Orientation.unsubscribe();
        }
        if (this.set_active_subscriptions.standard) {
            this._subscription_Standard.unsubscribe();
        }
        if (this.set_active_subscriptions.ie) {
            this._subscription_IE_Version.unsubscribe();
        }
        if (this.set_active_subscriptions.sizes) {
            this._subscription_custom_sizes.unsubscribe();
        }
    }
    /**
     * @param {?} show
     * @return {?}
     */
    showHide(show) {
        if (show) {
            if (this._noRepeat === 0) {
                this._noRepeat = 1;
                this.eventChanges.emit(true);
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            }
        }
        else {
            this._noRepeat = 0;
            this.eventChanges.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateView(value) {
        const /** @type {?} */ showBoolean = this._directive === 'sizes' ?
            ((typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;
        this.showHide(this._showWhenTrue ? showBoolean : !showBoolean);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name responsive-base
 * @description Core responsive-bae provider in ngx-responsive
 *
 * @license MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name providers
 * @description Core providers in ngx-responsive
 *
 * @license MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name core
 * @description Core in ngx-responsive
 *
 * @license MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class XlDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'xl';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set xl(grid_state) {
        this.setGrid(this._state, 'bootstrap');
    }
}
XlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xl]'
            },] },
];
/** @nocollapse */
XlDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
XlDirective.propDecorators = {
    "xl": [{ type: Input },],
};
class LgDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'lg';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set lg(grid_state) {
        this.setGrid(this._state, 'bootstrap');
    }
}
LgDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lg]'
            },] },
];
/** @nocollapse */
LgDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
LgDirective.propDecorators = {
    "lg": [{ type: Input },],
};
class MdDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'md';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set md(grid_state) {
        this.setGrid(this._state, 'bootstrap');
    }
}
MdDirective.decorators = [
    { type: Directive, args: [{
                selector: '[md]'
            },] },
];
/** @nocollapse */
MdDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
MdDirective.propDecorators = {
    "md": [{ type: Input },],
};
class SmDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'sm';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set sm(grid_state) {
        this.setGrid(this._state, 'bootstrap');
    }
}
SmDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sm]'
            },] },
];
/** @nocollapse */
SmDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
SmDirective.propDecorators = {
    "sm": [{ type: Input },],
};
class XsDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'xs';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set xs(grid_state) {
        this.setGrid(this._state, 'bootstrap');
    }
}
XsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xs]'
            },] },
];
/** @nocollapse */
XsDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
XsDirective.propDecorators = {
    "xs": [{ type: Input },],
};
class ShowItBootstrapDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set showItBootstrap(grid_state) {
        this.setGrid(grid_state, 'bootstrap');
    }
}
ShowItBootstrapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItBootstrap]'
            },] },
];
/** @nocollapse */
ShowItBootstrapDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
ShowItBootstrapDirective.propDecorators = {
    "showItBootstrap": [{ type: Input },],
};
class HideItBootstrapDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set hideItBootstrap(grid_state) {
        this.setGrid(grid_state, 'bootstrap');
    }
}
HideItBootstrapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItBootstrap]'
            },] },
];
/** @nocollapse */
HideItBootstrapDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
HideItBootstrapDirective.propDecorators = {
    "hideItBootstrap": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BOOTSTRAP_DIRECTIVES = [
    XlDirective,
    LgDirective,
    MdDirective,
    SmDirective,
    XsDirective,
    ShowItBootstrapDirective,
    HideItBootstrapDirective
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IsChromeDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'chrome';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isChrome(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsChromeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isChrome]'
            },] },
];
/** @nocollapse */
IsChromeDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsChromeDirective.propDecorators = {
    "isChrome": [{ type: Input },],
};
class IsFirefoxDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'firefox';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isFirefox(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsFirefoxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isFirefox]'
            },] },
];
/** @nocollapse */
IsFirefoxDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsFirefoxDirective.propDecorators = {
    "isFirefox": [{ type: Input },],
};
class IsSafariDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'safari';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isSafari(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsSafariDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isSafari]'
            },] },
];
/** @nocollapse */
IsSafariDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsSafariDirective.propDecorators = {
    "isSafari": [{ type: Input },],
};
class IsOperaDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'opera';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isOpera(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsOperaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isOpera]'
            },] },
];
/** @nocollapse */
IsOperaDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsOperaDirective.propDecorators = {
    "isOpera": [{ type: Input },],
};
class IsIEDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'ie';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isIE(grid_state) {
        this.setGrid(this._state, 'browser');
    }
}
IsIEDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isIE]'
            },] },
];
/** @nocollapse */
IsIEDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsIEDirective.propDecorators = {
    "isIE": [{ type: Input },],
};
class ShowItBrowserDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set showItBrowser(grid_state) {
        this.setGrid(grid_state, 'browser');
    }
}
ShowItBrowserDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItBrowser]'
            },] },
];
/** @nocollapse */
ShowItBrowserDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
ShowItBrowserDirective.propDecorators = {
    "showItBrowser": [{ type: Input },],
};
class HideItBrowserDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set hideItBrowser(grid_state) {
        this.setGrid(grid_state, 'browser');
    }
}
HideItBrowserDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItBrowser]'
            },] },
];
/** @nocollapse */
HideItBrowserDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
HideItBrowserDirective.propDecorators = {
    "hideItBrowser": [{ type: Input },],
};
class IsIE9Directive extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'ie 9';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isIE9(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE9Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE9]'
            },] },
];
/** @nocollapse */
IsIE9Directive.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsIE9Directive.propDecorators = {
    "isIE9": [{ type: Input },],
};
class IsIE10Directive extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'ie 10';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isIE10(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE10Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE10]'
            },] },
];
/** @nocollapse */
IsIE10Directive.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsIE10Directive.propDecorators = {
    "isIE10": [{ type: Input },],
};
class IsIE11Directive extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'ie 11';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isIE11(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE11Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE11]'
            },] },
];
/** @nocollapse */
IsIE11Directive.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsIE11Directive.propDecorators = {
    "isIE11": [{ type: Input },],
};
class IsIE12Directive extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'ie 12';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isIE12(grid_state) {
        this.setGrid(this._state, 'ie');
    }
}
IsIE12Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE12]'
            },] },
];
/** @nocollapse */
IsIE12Directive.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsIE12Directive.propDecorators = {
    "isIE12": [{ type: Input },],
};
class ShowIEVersionDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set showIEVersion(grid_state) {
        this.setGrid(grid_state, 'ie');
    }
}
ShowIEVersionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showIEVersion]'
            },] },
];
/** @nocollapse */
ShowIEVersionDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
ShowIEVersionDirective.propDecorators = {
    "showIEVersion": [{ type: Input },],
};
class HideIEVersionDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set hideIEVersion(grid_state) {
        this.setGrid(grid_state, 'ie');
    }
}
HideIEVersionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideIEVersion]'
            },] },
];
/** @nocollapse */
HideIEVersionDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
HideIEVersionDirective.propDecorators = {
    "hideIEVersion": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class BrowserInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    connect() {
        this._subscription = this._responsiveState.browser$.pipe(distinctUntilChanged())
            .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    get getBrowser() {
        return this.replaySubject$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BrowserInfoRx extends BrowserInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
    }
}
BrowserInfoRx.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BrowserInfoRx.ctorParameters = () => [
    { type: ResponsiveState, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BrowserInfoDirective extends BrowserInfo {
    /**
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(_responsiveState, viewContainer, cd) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.browser = new EventEmitter();
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set browserInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.connect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.disconnect();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.browser.emit(value);
        this.cd.markForCheck();
    }
}
BrowserInfoDirective.decorators = [
    { type: Directive, args: [{
                selector: 'browser-info'
            },] },
];
/** @nocollapse */
BrowserInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
BrowserInfoDirective.propDecorators = {
    "browser": [{ type: Output },],
    "browserInfo": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class IeInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    connect() {
        this._subscription = this._responsiveState.ieVersion$.pipe(distinctUntilChanged())
            .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    get getIE() {
        return this.replaySubject$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IeInfoRx extends IeInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
    }
}
IeInfoRx.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IeInfoRx.ctorParameters = () => [
    { type: ResponsiveState, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IeInfoDirective extends IeInfo {
    /**
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(_responsiveState, viewContainer, cd) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ieVersion = new EventEmitter();
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set ieInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.connect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.disconnect();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.ieVersion.emit(value);
        this.cd.markForCheck();
    }
}
IeInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'ie-info' },] },
];
/** @nocollapse */
IeInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
IeInfoDirective.propDecorators = {
    "ieInfo": [{ type: Input },],
    "ieVersion": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BROWSER_DIRECTIVES = [
    IsChromeDirective,
    IsFirefoxDirective,
    IsSafariDirective,
    IsOperaDirective,
    IsIEDirective,
    IsIE9Directive,
    IsIE10Directive,
    IsIE11Directive,
    IsIE12Directive,
    ShowItBrowserDirective,
    HideItBrowserDirective,
    ShowIEVersionDirective,
    HideIEVersionDirective,
    BrowserInfoDirective,
    IeInfoDirective
];
const BROWSER_INFO_RX = [BrowserInfoRx];
const IE_INFO_RX = [IeInfoRx];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ShowItSizesDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    /**
     * @param {?} _grid_state
     * @return {?}
     */
    set showItSizes(_grid_state) {
        this.setGrid(_grid_state, 'sizes');
    }
}
ShowItSizesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItSizes]'
            },] },
];
/** @nocollapse */
ShowItSizesDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
ShowItSizesDirective.propDecorators = {
    "showItSizes": [{ type: Input },],
};
class HideItSizesDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    /**
     * @param {?} _grid_state
     * @return {?}
     */
    set hideItSizes(_grid_state) {
        this.setGrid(_grid_state, 'sizes');
    }
}
HideItSizesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItSizes]'
            },] },
];
/** @nocollapse */
HideItSizesDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
HideItSizesDirective.propDecorators = {
    "hideItSizes": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const CUSTOMSIZES_DIRECTIVES = [
    ShowItSizesDirective,
    HideItSizesDirective
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IsSmartTvDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'smarttv';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isSmartTv(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsSmartTvDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isSmartTv]'
            },] },
];
/** @nocollapse */
IsSmartTvDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsSmartTvDirective.propDecorators = {
    "isSmartTv": [{ type: Input },],
};
class IsDesktopDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'desktop';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isDesktop(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsDesktopDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isDesktop]'
            },] },
];
/** @nocollapse */
IsDesktopDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsDesktopDirective.propDecorators = {
    "isDesktop": [{ type: Input },],
};
class IsTabletDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'tablet';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isTablet(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsTabletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isTablet]'
            },] },
];
/** @nocollapse */
IsTabletDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsTabletDirective.propDecorators = {
    "isTablet": [{ type: Input },],
};
class IsMobileDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'mobile';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isMobile(grid_state) {
        this.setGrid(this._state, 'device');
    }
}
IsMobileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isMobile]'
            },] },
];
/** @nocollapse */
IsMobileDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsMobileDirective.propDecorators = {
    "isMobile": [{ type: Input },],
};
class ShowItDeviceDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set showItDevice(grid_state) {
        this.setGrid(grid_state, 'device');
    }
}
ShowItDeviceDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItDevice]'
            },] },
];
/** @nocollapse */
ShowItDeviceDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
ShowItDeviceDirective.propDecorators = {
    "showItDevice": [{ type: Input },],
};
class HideItDeviceDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set hideItDevice(grid_state) {
        this.setGrid(grid_state, 'device');
    }
}
HideItDeviceDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItDevice]'
            },] },
];
/** @nocollapse */
HideItDeviceDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
HideItDeviceDirective.propDecorators = {
    "hideItDevice": [{ type: Input },],
};
class IsIphoneDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isIphone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsIphoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isIphone]'
            },] },
];
/** @nocollapse */
IsIphoneDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsIphoneDirective.propDecorators = {
    "isIphone": [{ type: Input },],
};
class IsIpadDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'iphone';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isIphone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsIpadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isIpad]'
            },] },
];
/** @nocollapse */
IsIpadDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsIpadDirective.propDecorators = {
    "isIphone": [{ type: Input },],
};
class IsAndroidMobileDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'android mobile';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isAndroidMobile(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsAndroidMobileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isAndroidMobile]'
            },] },
];
/** @nocollapse */
IsAndroidMobileDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsAndroidMobileDirective.propDecorators = {
    "isAndroidMobile": [{ type: Input },],
};
class IsAndroidTabletDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'android tablet';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isAndroidTablet(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsAndroidTabletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isAndroidTablet]'
            },] },
];
/** @nocollapse */
IsAndroidTabletDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsAndroidTabletDirective.propDecorators = {
    "isAndroidTablet": [{ type: Input },],
};
class IsWindowsPhoneDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'windows phone';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isWindowsPhone(grid_state) {
        this.setGrid(this._state, 'standard');
    }
}
IsWindowsPhoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isWindowsPhone]'
            },] },
];
/** @nocollapse */
IsWindowsPhoneDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsWindowsPhoneDirective.propDecorators = {
    "isWindowsPhone": [{ type: Input },],
};
class ShowItStandardDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set showItStandard(grid_state) {
        this.setGrid(grid_state, 'standard');
    }
}
ShowItStandardDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItStandard]'
            },] },
];
/** @nocollapse */
ShowItStandardDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
ShowItStandardDirective.propDecorators = {
    "showItStandard": [{ type: Input },],
};
class HideItStandardDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._showWhenTrue = false;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set hideItStandard(grid_state) {
        this.setGrid(grid_state, 'standard');
    }
}
HideItStandardDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItStandard]'
            },] },
];
/** @nocollapse */
HideItStandardDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
HideItStandardDirective.propDecorators = {
    "hideItStandard": [{ type: Input },],
};
class IsPortraitDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'portrait';
        this._showWhenTrue = false;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isPortrait(grid_state) {
        this.setGrid(this._state, 'orientation');
    }
}
IsPortraitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isPortrait]'
            },] },
];
/** @nocollapse */
IsPortraitDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsPortraitDirective.propDecorators = {
    "isPortrait": [{ type: Input },],
};
class IsLandscapeDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'landscape';
        this._showWhenTrue = false;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isLandscape(grid_state) {
        this.setGrid(this._state, 'orientation');
    }
}
IsLandscapeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isLandscape]'
            },] },
];
/** @nocollapse */
IsLandscapeDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsLandscapeDirective.propDecorators = {
    "isLandscape": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class DevicesInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    connect() {
        this._subscription = this._responsiveState.device$.pipe(distinctUntilChanged())
            .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    get getDevice() {
        return this.replaySubject$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DeviceInfoDirective extends DevicesInfo {
    /**
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(_responsiveState, viewContainer, cd) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.device = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.connect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.disconnect();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.device.emit(value);
        this.cd.markForCheck();
    }
}
DeviceInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'device-info' },] },
];
/** @nocollapse */
DeviceInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
DeviceInfoDirective.propDecorators = {
    "device": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class DeviceStandardInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    connect() {
        this._subscription = this._responsiveState.standard$.pipe(distinctUntilChanged())
            .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    get getStandardDevice() {
        return this.replaySubject$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DeviceStandardInfoDirective extends DeviceStandardInfo {
    /**
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(_responsiveState, viewContainer, cd) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.standard = new EventEmitter();
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set deviceStandardInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.connect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.disconnect();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.standard.emit(value);
        this.cd.markForCheck();
    }
}
DeviceStandardInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'device-standard-info' },] },
];
/** @nocollapse */
DeviceStandardInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
DeviceStandardInfoDirective.propDecorators = {
    "deviceStandardInfo": [{ type: Input },],
    "standard": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class OrientationInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    connect() {
        this._subscription = this._responsiveState.orientation$.pipe(distinctUntilChanged())
            .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    get getOrientation() {
        return this.replaySubject$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OrientationInfoDirective extends OrientationInfo {
    /**
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(_responsiveState, viewContainer, cd) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.orientation = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.connect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.disconnect();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.orientation.emit(value);
        this.cd.markForCheck();
    }
}
OrientationInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'orientation-info' },] },
];
/** @nocollapse */
OrientationInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
OrientationInfoDirective.propDecorators = {
    "orientation": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DeviceInfoRx extends DevicesInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
    }
}
DeviceInfoRx.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DeviceInfoRx.ctorParameters = () => [
    { type: ResponsiveState, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DeviceStandardInfoRx extends DeviceStandardInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
    }
}
DeviceStandardInfoRx.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DeviceStandardInfoRx.ctorParameters = () => [
    { type: ResponsiveState, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OrientationInfoRx extends OrientationInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
    }
}
OrientationInfoRx.decorators = [
    { type: Injectable },
];
/** @nocollapse */
OrientationInfoRx.ctorParameters = () => [
    { type: ResponsiveState, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const DEVICES_DIRECTIVES = [
    IsDesktopDirective,
    IsTabletDirective,
    IsMobileDirective,
    IsSmartTvDirective,
    ShowItDeviceDirective,
    HideItDeviceDirective,
    IsIphoneDirective,
    IsIpadDirective,
    IsAndroidMobileDirective,
    IsAndroidTabletDirective,
    IsWindowsPhoneDirective,
    ShowItStandardDirective,
    HideItStandardDirective,
    IsPortraitDirective,
    IsLandscapeDirective,
    DeviceInfoDirective,
    DeviceStandardInfoDirective,
    OrientationInfoDirective
];
const DEVICES_INFO_RX = [
    DeviceInfoRx,
    DeviceStandardInfoRx,
    OrientationInfoRx
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Is1xPixelDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = '1x';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set is1xPixel(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
Is1xPixelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[is1xPixel]'
            },] },
];
/** @nocollapse */
Is1xPixelDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
Is1xPixelDirective.propDecorators = {
    "is1xPixel": [{ type: Input },],
};
class IsRetinaDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = 'retina';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isRetina(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
IsRetinaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isRetina]'
            },] },
];
/** @nocollapse */
IsRetinaDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
IsRetinaDirective.propDecorators = {
    "isRetina": [{ type: Input },],
};
class Is4kDirective extends RESPONSIVE_BASE {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(templateRef, viewContainer, _responsiveState, cd) {
        super(templateRef, viewContainer, _responsiveState, cd);
        this._state = '4k';
        this._showWhenTrue = true;
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set isRetina(grid_state) {
        this.setGrid(this._state, 'pixelratio');
    }
}
Is4kDirective.decorators = [
    { type: Directive, args: [{
                selector: '[is4k]'
            },] },
];
/** @nocollapse */
Is4kDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
Is4kDirective.propDecorators = {
    "isRetina": [{ type: Input },],
};
class PixelRatioInfoDirective {
    /**
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.pixelratio = new EventEmitter();
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set pixelratioInfo(grid_state) {
        this.updateData(this.currentstate);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._subscription = this._responsiveState.pixel$.subscribe(this.updateData.bind(this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateData(value) {
        const /** @type {?} */ update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} oldValue
     * @param {?} newValue
     * @return {?}
     */
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    }
}
PixelRatioInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'pixel-ratio-info' },] },
];
/** @nocollapse */
PixelRatioInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
PixelRatioInfoDirective.propDecorators = {
    "pixelratioInfo": [{ type: Input },],
    "pixelratio": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const PIXELRATIO_DIRECTIVES = [
    Is1xPixelDirective,
    IsRetinaDirective,
    Is4kDirective,
    PixelRatioInfoDirective
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ResponsiveDirective {
    /**
     * @param {?} templateRef
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(templateRef, _responsiveState, viewContainer, cd) {
        this.templateRef = templateRef;
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.changes = new EventEmitter();
        this._windows = null;
        this._window = null;
        this.set_values = {
            bootstrap: '',
            browser: '',
            device: '',
            pixelratio: '',
            orientation: '',
            standard: '',
            ie: '',
            sizes: 0
        };
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.match_multiple = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this._showWhenTrue = true;
        this._globalNoRepeat = 0;
        this._bootstrapNoRepeat = 0;
        this._deviceNoRepeat = 0;
        this._standardNoRepeat = 0;
        this._orientationNoRepeat = 0;
        this._browserNoRepeat = 0;
        this._pixelratioNoRepeat = 0;
        this._ieNoRepeat = 0;
        this._sizesNoRepeat = 0;
        this._bootstrap_user_param = [];
        this._devices_user_param = [];
        this._standard_user_param = [];
        this._orientation_user_param = [];
        this._browser_user_param = [];
        this._pixelratio_user_param = [];
        this._ie_user_param = [];
        this._sizes_user_param = [];
        this._sizes_window = 'window';
        this._actives = [];
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set responsive(config) {
        this.init_responsive(config);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    init_responsive(value) {
        if (this.isJSON(value)) {
            if (!!value.bootstrap && this._bootstrapNoRepeat === 0) {
                this._bootstrap_user_param = /** @type {?} */ ((Array.isArray(value.bootstrap) ? value.bootstrap : [value.bootstrap]));
                this._bootstrapNoRepeat = 1;
                this.set_active_subscriptions.bootstrap = true;
            }
            if (!!value.device && this._deviceNoRepeat === 0) {
                this._devices_user_param = /** @type {?} */ ((Array.isArray(value.device) ? value.device : [value.device]));
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            if (!!value.standard && this._standardNoRepeat === 0) {
                this._standard_user_param = /** @type {?} */ ((Array.isArray(value.standard) ? value.standard : [value.standard]));
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            if (!!value.orientation && this._orientationNoRepeat === 0) {
                this._orientation_user_param = /** @type {?} */ ((Array.isArray(value.orientation) ? value.orientation : [value.orientation]));
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            if (!!value.browser && this._browserNoRepeat === 0) {
                this._browser_user_param = /** @type {?} */ ((Array.isArray(value.browser) ? value.browser : [value.browser]));
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            if (!!value.pixelratio && this._pixelratioNoRepeat === 0) {
                this._pixelratio_user_param = /** @type {?} */ ((Array.isArray(value.pixelratio) ? value.pixelratio : [value.pixelratio]));
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            if (!!value.ie && this._ieNoRepeat === 0) {
                this._ie_user_param = /** @type {?} */ ((Array.isArray(value.ie) ? value.ie : [value.ie]));
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            if (!!value.sizes && this._sizesNoRepeat === 0) {
                const /** @type {?} */ _min = value.sizes.min;
                const /** @type {?} */ _max = value.sizes.max;
                const /** @type {?} */ _win = value.sizes.window;
                if (_win !== undefined) {
                    this._sizes_window = _win;
                }
                this._sizes_user_param = [_min, _max];
                this._sizesNoRepeat = 1;
                this.set_active_subscriptions.sizes = true;
            }
        }
        else if (Array.isArray(value)) {
            throw new Error('Responsive directive don´t work with a only array parameter');
        }
        else if (typeof value === 'string') {
            throw new Error('Responsive directive don´t work with a only string parameter');
        }
        else if (typeof value === 'number') {
            throw new Error('Responsive directive don´t work with a only number parameter');
        }
        else if (typeof value === 'undefined' || value === null) {
            throw new Error('Responsive directive don´t work without a param');
        }
        for (let /** @type {?} */ key in this.set_active_subscriptions) {
            if (this.set_active_subscriptions[key]) {
                this._actives.push(key);
            }
        }
        if (this.set_active_subscriptions.bootstrap) {
            this._subscription_Bootstrap = this._responsiveState.elemento$.subscribe(this.updateBootstrap.bind(this));
        }
        if (this.set_active_subscriptions.browser) {
            this._subscription_Browser = this._responsiveState.browser$.subscribe(this.updateBrowser.bind(this));
        }
        if (this.set_active_subscriptions.device) {
            this._subscription_Device = this._responsiveState.device$.subscribe(this.updateDevice.bind(this));
        }
        if (this.set_active_subscriptions.pixelratio) {
            this._subscription_Pixel_Ratio = this._responsiveState.pixel$.subscribe(this.updatePixelRatio.bind(this));
        }
        if (this.set_active_subscriptions.orientation) {
            this._subscription_Orientation = this._responsiveState.orientation$.subscribe(this.updateOrientation.bind(this));
        }
        if (this.set_active_subscriptions.standard) {
            this._subscription_Standard = this._responsiveState.standard$.subscribe(this.updateStandard.bind(this));
        }
        if (this.set_active_subscriptions.ie) {
            this._subscription_IE_Version = this._responsiveState.ieVersion$.subscribe(this.updateIEversion.bind(this));
        }
        if (this.set_active_subscriptions.sizes) {
            this._subscription_custom_sizes = this._responsiveState.ancho$.subscribe(this.updateSizes.bind(this));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateBootstrap(value) {
        const /** @type {?} */ _update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (_update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateBrowser(value) {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateDevice(value) {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updatePixelRatio(value) {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateOrientation(value) {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateStandard(value) {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateIEversion(value) {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateSizes(value) {
        if (!this._sizes_window) {
            this.set_values.sizes = value;
        }
        else {
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        }
        this.updateEvent(this.set_values.sizes, 'sizes');
    }
    /**
     * @param {?} param
     * @param {?} type_directive
     * @return {?}
     */
    updateEvent(param, type_directive) {
        if (!!this._showWhenTrue) {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(this._bootstrap_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'device':
                    this.showHideOperations(this._devices_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(this._standard_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(this._orientation_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(this._browser_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(this._pixelratio_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(this._ie_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations((param >= this._sizes_user_param[0] &&
                        param <= this._sizes_user_param[1]), type_directive);
                    break;
            }
        }
        else {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(!(this._bootstrap_user_param.indexOf(param)), type_directive);
                    break;
                case 'device':
                    this.showHideOperations(!(this._devices_user_param.indexOf(param)), type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(!(this._standard_user_param.indexOf(param)), type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(!(this._orientation_user_param.indexOf(param)), type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(!(this._browser_user_param.indexOf(param)), type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(!(this._pixelratio_user_param.indexOf(param)), type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(!(this._ie_user_param.indexOf(param)), type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!((param >= this._sizes_user_param[0] &&
                        param <= this._sizes_user_param[1])), type_directive);
                    break;
            }
        }
    }
    /**
     * @param {?} show
     * @param {?} type_directive
     * @return {?}
     */
    showHideOperations(show, type_directive) {
        const /** @type {?} */ global_state = this.matchValues(show, type_directive);
        if (!!global_state) {
            if (this._globalNoRepeat === 0) {
                this._globalNoRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.changes.emit(true);
                this.cd.markForCheck();
            }
        }
        else {
            this._globalNoRepeat = 0;
            this.changes.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} show
     * @param {?} type_directive
     * @return {?}
     */
    matchValues(show, type_directive) {
        let /** @type {?} */ match = true;
        if (show) {
            this.match_multiple[type_directive] = true;
        }
        else {
            this.match_multiple[type_directive] = false;
        }
        for (let /** @type {?} */ all_key in this.match_multiple) {
            for (let /** @type {?} */ active of this._actives) {
                if (all_key == active && this.match_multiple[all_key] === false)
                    return match = false;
            }
        }
        return match;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.set_active_subscriptions.bootstrap) {
            this._subscription_Bootstrap.unsubscribe();
        }
        if (this.set_active_subscriptions.browser) {
            this._subscription_Browser.unsubscribe();
        }
        if (this.set_active_subscriptions.device) {
            this._subscription_Device.unsubscribe();
        }
        if (this.set_active_subscriptions.pixelratio) {
            this._subscription_Pixel_Ratio.unsubscribe();
        }
        if (this.set_active_subscriptions.orientation) {
            this._subscription_Orientation.unsubscribe();
        }
        if (this.set_active_subscriptions.standard) {
            this._subscription_Standard.unsubscribe();
        }
        if (this.set_active_subscriptions.ie) {
            this._subscription_IE_Version.unsubscribe();
        }
        if (this.set_active_subscriptions.sizes) {
            this._subscription_custom_sizes.unsubscribe();
        }
    }
    /**
     * @param {?} oldValue
     * @param {?} newValue
     * @return {?}
     */
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isJSON(value) {
        try {
            JSON.stringify(value);
            return true;
        }
        catch (/** @type {?} */ ex) {
            return false;
        }
    }
}
ResponsiveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[responsive]'
            },] },
];
/** @nocollapse */
ResponsiveDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
ResponsiveDirective.propDecorators = {
    "responsive": [{ type: Input },],
    "changes": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const RESPONSIVE_DIRECTIVE = [ResponsiveDirective];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class ResponsiveSizeInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    connect() {
        this._subscription = this._responsiveState.elemento$.pipe(distinctUntilChanged())
            .subscribe((data) => {
            this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    get getResponsiveSize() {
        return this.replaySubject$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ResponsiveSizeInfoDirective extends ResponsiveSizeInfo {
    /**
     * @param {?} _responsiveState
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(_responsiveState, viewContainer, cd) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.statechanges = new EventEmitter();
    }
    /**
     * @param {?} grid_state
     * @return {?}
     */
    set responsiveSizeInfo(grid_state) {
        this._updateData(this.currentstate);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.connect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.disconnect();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _updateData(value) {
        this.statechanges.emit(value);
        this.cd.markForCheck();
    }
}
ResponsiveSizeInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'responsiveSizeInfo' },] },
];
/** @nocollapse */
ResponsiveSizeInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
ResponsiveSizeInfoDirective.propDecorators = {
    "responsiveSizeInfo": [{ type: Input },],
    "statechanges": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ResponsiveSizeInfoRx extends ResponsiveSizeInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
    }
}
ResponsiveSizeInfoRx.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResponsiveSizeInfoRx.ctorParameters = () => [
    { type: ResponsiveState, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const RESPONSIVE_SIZE_INFO_DIRECTIVE = [ResponsiveSizeInfoDirective];
const RESPONSIVE_SIZE_INFO_RX = [ResponsiveSizeInfoRx];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ResponsiveWindowDirective {
    /**
     * @param {?} _responsiveState
     * @param {?} el
     * @param {?} cd
     */
    constructor(_responsiveState, el, cd) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.cd = cd;
        this.element = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._responsiveState.registerWindow(this);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        const /** @type {?} */ _update = this._ifValueChanged(this._noRepeat, this.name);
        if (_update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
            this.cd.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._responsiveState.unregisterWindow(this);
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.element.offsetWidth;
    }
    /**
     * @param {?} oldValue
     * @param {?} newValue
     * @return {?}
     */
    _ifValueChanged(oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeat = newValue;
            return true;
        }
    }
}
ResponsiveWindowDirective.decorators = [
    { type: Directive, args: [{
                selector: "[responsive-window]"
            },] },
];
/** @nocollapse */
ResponsiveWindowDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];
ResponsiveWindowDirective.propDecorators = {
    "name": [{ type: Input, args: ['responsive-window',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const RESPONSIVEWINDOW_DIRECTIVE = [ResponsiveWindowDirective];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class UserAgentInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    /**
     * @return {?}
     */
    connect() {
        this._subscription = this._responsiveState.userAgent$.pipe(distinctUntilChanged())
            .subscribe((data) => {
            this._emitUserAgent(data);
        });
        return this.replaySubject$.asObservable();
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    get getUserAgent() {
        return this.replaySubject$.asObservable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _emitUserAgent(value) {
        this.replaySubject$.next(value);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserAgentInfoDirective extends UserAgentInfo {
    /**
     * @param {?} _responsiveState
     * @param {?} cd
     */
    constructor(_responsiveState, cd) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.info = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.connect();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.disconnect();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _emitUserAgent(value) {
        this.info.emit(value);
        this.cd.markForCheck();
    }
}
UserAgentInfoDirective.decorators = [
    { type: Directive, args: [{
                selector: 'user-agent-info'
            },] },
];
/** @nocollapse */
UserAgentInfoDirective.ctorParameters = () => [
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
];
UserAgentInfoDirective.propDecorators = {
    "info": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserAgentInfoRx extends UserAgentInfo {
    /**
     * @param {?} _responsiveState
     */
    constructor(_responsiveState) {
        super(_responsiveState);
        this._responsiveState = _responsiveState;
    }
}
UserAgentInfoRx.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserAgentInfoRx.ctorParameters = () => [
    { type: ResponsiveState, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const USERAGENT_INFO_DIRECTIVE = [UserAgentInfoDirective];
const USERAGENT_INFO_RX = [UserAgentInfoRx];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name directives
 * @description Directives in ngx-responsive
 *
 * @license MIT
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name responsive.module
 * @description Core module in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
const RESPONSIVE_CONFIGURATION = new InjectionToken('config');
/**
 * @param {?} config
 * @return {?}
 */
function responsiveConfiguration(config) {
    return new ResponsiveConfig(config);
}
class ResponsiveModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = null) {
        return {
            ngModule: ResponsiveModule,
            providers: [{
                    provide: RESPONSIVE_CONFIGURATION,
                    useValue: (config !== null) ? config : {
                        breakPoints: {
                            xs: { max: 767 },
                            sm: { min: 768, max: 991 },
                            md: { min: 992, max: 1199 },
                            lg: { min: 1200, max: 1599 },
                            xl: { min: 1600 }
                        },
                        debounceTime: 100
                    }
                }, {
                    provide: ResponsiveConfig,
                    useFactory: responsiveConfiguration,
                    deps: [RESPONSIVE_CONFIGURATION]
                }]
        };
    }
}
ResponsiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BOOTSTRAP_DIRECTIVES,
                    BROWSER_DIRECTIVES,
                    CUSTOMSIZES_DIRECTIVES,
                    DEVICES_DIRECTIVES,
                    PIXELRATIO_DIRECTIVES,
                    RESPONSIVE_DIRECTIVE,
                    RESPONSIVEWINDOW_DIRECTIVE,
                    USERAGENT_INFO_DIRECTIVE,
                    RESPONSIVE_SIZE_INFO_DIRECTIVE
                ],
                exports: [
                    BOOTSTRAP_DIRECTIVES,
                    BROWSER_DIRECTIVES,
                    CUSTOMSIZES_DIRECTIVES,
                    DEVICES_DIRECTIVES,
                    PIXELRATIO_DIRECTIVES,
                    RESPONSIVE_DIRECTIVE,
                    RESPONSIVEWINDOW_DIRECTIVE,
                    USERAGENT_INFO_DIRECTIVE,
                    RESPONSIVE_SIZE_INFO_DIRECTIVE
                ],
                providers: [
                    ResponsiveState,
                    ResponsiveConfig,
                    RESPONSIVE_SIZE_INFO_RX,
                    USERAGENT_INFO_RX,
                    BROWSER_INFO_RX,
                    IE_INFO_RX,
                    DEVICES_INFO_RX
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @name ngx-responsive
 * @description Devices Detect Directives for Angular
 * @author Manu Cutillas
 *
 * ```
 * #Contributors
 *  - Christophe HOARAU
 *  - Kamil Breguła
 *  - Janne Julkunen
 *  - phransyz
 *  - Michael Burger
 *  - Alyssa Brunswick
 *  - Quentin
 *
 * ```
 * @created_at May 04, 2016
 * @updated_at March 16, 2018
 * @version v5.0.0-beta
 *
 * @angular/core : "5.x.x"
 * rxjs: "5.x.x"
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { LINUX_OS, WINDOWS_OS, TABLET, MOBILE, OS_SYSTEMS, REG_WEARABLES, REG_MOBILES, REG_TABLETS, REG_SMARTS_TV, REG_GAME_DEVICES, REG_IE_VERSIONS, REG_BROWSERS, REG_OS, REG_SORT_NAMES, REG_WINDOWS_OS_VERSION, REG_WINDOWS_PHONE_OS_VERSION, REG_MAC_OS_VERSION, REG_LINUX_OS, REG_BOTS, GAME_DEVICES, SMART_TV, BOTS, BROWSER_NAMES, IE_VERSIONS, USER_AGENT, ResponsiveConfig, ResponsiveState, RESPONSIVE_BASE, BOOTSTRAP_DIRECTIVES, XlDirective, LgDirective, MdDirective, SmDirective, XsDirective, ShowItBootstrapDirective, HideItBootstrapDirective, BROWSER_DIRECTIVES, BROWSER_INFO_RX, IE_INFO_RX, IsChromeDirective, IsFirefoxDirective, IsSafariDirective, IsOperaDirective, IsIEDirective, ShowItBrowserDirective, HideItBrowserDirective, IsIE9Directive, IsIE10Directive, IsIE11Directive, IsIE12Directive, ShowIEVersionDirective, HideIEVersionDirective, BrowserInfoRx, BrowserInfoDirective, IeInfoRx, IeInfoDirective, CUSTOMSIZES_DIRECTIVES, ShowItSizesDirective, HideItSizesDirective, DEVICES_DIRECTIVES, DEVICES_INFO_RX, DeviceInfoRx, DeviceStandardInfoRx, OrientationInfoRx, DeviceInfoDirective, DeviceStandardInfoDirective, OrientationInfoDirective, IsSmartTvDirective, IsDesktopDirective, IsTabletDirective, IsMobileDirective, ShowItDeviceDirective, HideItDeviceDirective, IsIphoneDirective, IsIpadDirective, IsAndroidMobileDirective, IsAndroidTabletDirective, IsWindowsPhoneDirective, ShowItStandardDirective, HideItStandardDirective, IsPortraitDirective, IsLandscapeDirective, PIXELRATIO_DIRECTIVES, Is1xPixelDirective, IsRetinaDirective, Is4kDirective, PixelRatioInfoDirective, RESPONSIVE_DIRECTIVE, ResponsiveDirective, RESPONSIVE_SIZE_INFO_DIRECTIVE, RESPONSIVE_SIZE_INFO_RX, ResponsiveSizeInfo, ResponsiveSizeInfoDirective, ResponsiveSizeInfoRx, RESPONSIVEWINDOW_DIRECTIVE, ResponsiveWindowDirective, USERAGENT_INFO_DIRECTIVE, USERAGENT_INFO_RX, UserAgentInfo, UserAgentInfoDirective, UserAgentInfoRx, RESPONSIVE_CONFIGURATION, responsiveConfiguration, ResponsiveModule, BrowserInfo as ɵa, IeInfo as ɵb, DevicesInfo as ɵc, DeviceStandardInfo as ɵd, OrientationInfo as ɵe };
//# sourceMappingURL=ngx-responsive.js.map
