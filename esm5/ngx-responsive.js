import { __extends, __values } from 'tslib';
import { Injectable, Inject, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef, Output, ElementRef, NgModule, InjectionToken } from '@angular/core';
import { fromEvent, ReplaySubject } from 'rxjs';
import { debounceTime, defaultIfEmpty, map, startWith, distinctUntilChanged } from 'rxjs/operators';

var LINUX_OS = {
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
var WINDOWS_OS = {
    WINDOWS_XP: 'Windows XP',
    WINDOWS_VISTA: 'Windows Vista',
    WINDOWS_7: 'Windows 7',
    WINDOWS_8: 'Windows 8',
    WINDOWS_10: 'Windows 10',
    GENERIC_WINDOWS: 'Generic Windows'
};
var TABLET = {
    IPAD: 'Ipad',
    ANDROID: 'Android',
    WINDOWS_PHONE: 'Windows Phone',
    KINDLE: 'Kindle',
    GENERIC_TABLET: 'Generic Tablet'
};
var MOBILE = {
    IPHONE: 'Iphone',
    ANDROID: 'Android',
    WINDOWS_PHONE: 'Windows Phone',
    BLACKBERRY: 'Blackberry',
    GENERIC_MOBILE: 'Generic Mobile'
};
var OS_SYSTEMS = {
    WINDOWS: 'Windows',
    ANDROID: MOBILE.ANDROID,
    WINDOWS_PHONE: MOBILE.WINDOWS_PHONE,
    IOS: 'iOS',
    MAC_OS: 'Mac',
    LINUX: 'Linux',
    FIREFOX_OS: 'Firefox OS',
    CHROME_OS: 'Chrome OS'
};
var GAME_DEVICES = {
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
var SMART_TV = {
    CHROMECAST: 'Chromecast',
    APPLE_TV: 'Apple tv',
    GOOGLE_TV: 'Google tv',
    PS4: GAME_DEVICES.PS4,
    XBOX_ONE: GAME_DEVICES.XBOX_ONE,
    GENERIC_TV: 'Generic smartv'
};
var BOTS = {
    GENERIC_BOT: 'Generic Bot'
};
var BROWSER_NAMES = {
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
 * @name reg-expressions.constants
 * @description Core reg-expressions.constants in ngx-responsive
 *
 * @license MIT
 */
var REG_WEARABLES = {
    IWATCH: ''
};
var REG_MOBILES = {
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
var REG_TABLETS = {
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
var REG_SMARTS_TV = {
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
var REG_GAME_DEVICES = {
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
var REG_IE_VERSIONS = {
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
var REG_BROWSERS = {
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
var REG_OS = {
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
var REG_SORT_NAMES = {
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
var REG_WINDOWS_OS_VERSION = {
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
var REG_WINDOWS_PHONE_OS_VERSION = {
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
var REG_MAC_OS_VERSION = {
    MAC_OS: ''
};
var REG_LINUX_OS = {
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
var REG_BOTS = {
    GENERIC_BOT: {
        REG: /bot|googlebot|crawler|spider|robot|crawling/i,
        VALUE: BOTS.GENERIC_BOT
    }
};
var IE_VERSIONS = {
    IE_7: 'ie 7',
    IE_8: 'ie 8',
    IE_9: 'ie 9',
    IE_10: 'ie 10',
    IE_11: 'ie 11',
    IE_12: 'ie +12'
};
/**
 * @name user-agent.constants
 * @description Core user agent in ngx-responsive
 *
 * @license MIT
 */
var USER_AGENT = {
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
 * @name constants
 * @description Core constants in ngx-responsive
 *
 * @license MIT
 */
var ResponsiveConfig = /** @class */ (function () {
    function ResponsiveConfig(_config) {
        this._config = _config;
        this.config = this._config;
    }
    return ResponsiveConfig;
}());
ResponsiveConfig.decorators = [
    { type: Injectable },
];
ResponsiveConfig.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] },] },
]; };
/**
 * @name responsive-config
 * @description Core responsive-config provider in ngx-responsive
 *
 * @license MIT
 */
var ResponsiveState = /** @class */ (function () {
    function ResponsiveState(_responsiveConfig) {
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
        var _resize$ = fromEvent(this._window, 'resize')
            .pipe(debounceTime(this._responsiveConfig.config.debounceTime), defaultIfEmpty(), startWith(this.getWidth('window')));
        var _pixelRatio$ = fromEvent(this._window, 'onload')
            .pipe(defaultIfEmpty(), startWith(this.getDevicePixelRatio()));
        var _device$ = fromEvent(this._window, 'onload')
            .pipe(defaultIfEmpty(), startWith(this.getUserAgent()));
        var _userAgent$ = fromEvent(this._window, 'onload')
            .pipe(defaultIfEmpty(), startWith(this.userAgentData()));
        var _orientation$ = fromEvent(this._window, 'orientationchange')
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
    ResponsiveState.prototype.registerWindow = function (rw, _window) {
        if (_window === void 0) { _window = null; }
        if (_window !== null) {
            if (rw.name && !this._windows[rw.name]) {
                this._windows[rw.name] = rw;
                _window.dispatchEvent(new Event('resize'));
            }
        }
    };
    ResponsiveState.prototype.unregisterWindow = function (rw, _window) {
        if (_window === void 0) { _window = null; }
        if (_window !== null) {
            for (var rwn in this._windows) {
                if (this._windows[rwn] === rw) {
                    delete (this._windows[rwn]);
                }
            }
            _window.dispatchEvent(new Event('resize'));
        }
    };
    ResponsiveState.prototype.getWidth = function (windowName) {
        if (windowName === void 0) { windowName = null; }
        if (this._windows !== null && this._window !== null) {
            if (windowName && this._windows[windowName]) {
                return this._windows[windowName].getWidth();
            }
            else {
                return this._window.innerWidth;
            }
        }
        return 0;
    };
    ResponsiveState.prototype.getDevicePixelRatio = function () {
        var ratio = 1;
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
    };
    ResponsiveState.prototype.getOrientation = function () {
        return (this._window !== null) ? window.orientation : null;
    };
    ResponsiveState.prototype.sizeObserver = function () {
        return (this._windows !== null && this._window !== null) ? this.getWidth('window') : 0;
    };
    ResponsiveState.prototype.sizeOperations = function () {
        var _sizes = null;
        var _breackpoints = this._responsiveConfig.config.breakPoints;
        if (this._windows !== null && this._window !== null && _breackpoints !== null) {
            var _width = this.getWidth('window');
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
    };
    ResponsiveState.prototype.pixelRatio = function (screenHeight, screenWidth) {
        if (screenHeight === void 0) { screenHeight = null; }
        if (screenWidth === void 0) { screenWidth = null; }
        var _pixelRatio = null;
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
    };
    ResponsiveState.prototype.testIs4k = function (screenHeight, screenWidth) {
        if (screenHeight === void 0) { screenHeight = null; }
        if (screenWidth === void 0) { screenWidth = null; }
        return (screenHeight !== null && screenWidth !== null) ?
            ((screenHeight < screenWidth) ? (screenWidth > 3839) : (screenHeight > 3839)) : false;
    };
    ResponsiveState.prototype.orientationDevice = function () {
        var _orientationDevice = null;
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
    };
    ResponsiveState.prototype.getUserAgent = function () {
        return (this._window !== null) ? this._window.navigator.userAgent.toLowerCase() : null;
    };
    ResponsiveState.prototype.userAgentData = function () {
        if (this._window === null) {
            return USER_AGENT;
        }
        var _userAgent = this.getUserAgent();
        var DEFAULT_USER_AGENT_VALUE = '';
        var _ieVersionState = (this.ieVersionDetect() !== null);
        var _isGameDevice = this.isGameDevice();
        var _isSMART = this.isSMART();
        var _isDesktop = this.isDesktop();
        var _isTablet = this.isTablet();
        var _isMobile = this.isMobile();
        var _isWindows = this.isWindows();
        var _isLinux = this.isLinux();
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
    };
    ResponsiveState.prototype.deviceDetection = function () {
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
    };
    ResponsiveState.prototype.standardDevices = function () {
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
    };
    ResponsiveState.prototype.ieVersionDetect = function () {
        if (this._window !== null) {
            var _userAgent = this.getUserAgent();
            var msie = _userAgent.indexOf('msie ');
            var _ieVersion = null;
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
            if (REG_IE_VERSIONS.MS_TRIDENT.REG.test(_userAgent)) {
                var _rv = _userAgent.indexOf('rv:');
                _ieVersion = parseInt(_userAgent.substring(_rv + 3, _userAgent.indexOf('.', _rv)), 10);
                if (_ieVersion == 11) {
                    return IE_VERSIONS.IE_11;
                }
            }
            if (REG_IE_VERSIONS.MS_EDGE.REG.test(_userAgent)) {
                return IE_VERSIONS.IE_12;
            }
        }
        return null;
    };
    ResponsiveState.prototype.browserName = function () {
        var _browserName = null;
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
    };
    ResponsiveState.prototype.gameDevices = function () {
        var _gameDevice = null;
        if (this._userAgent !== null) {
            for (var _reg in REG_GAME_DEVICES) {
                if (REG_GAME_DEVICES[_reg].REG.test(this._userAgent)) {
                    _gameDevice = REG_GAME_DEVICES[_reg].VALUE;
                }
            }
        }
        return _gameDevice;
    };
    ResponsiveState.prototype.smartTv = function () {
        var _smartTv = null;
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
    };
    ResponsiveState.prototype.desktop = function () {
        var _desktop = null;
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
    };
    ResponsiveState.prototype.tablet = function () {
        var _tablet = null;
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
    };
    ResponsiveState.prototype.mobile = function () {
        var _mobile = null;
        if (this._userAgent !== null) {
            for (var _reg in REG_MOBILES) {
                if (REG_MOBILES[_reg].REG.test(this._userAgent)) {
                    _mobile = REG_MOBILES[_reg].VALUE;
                }
            }
            if (_mobile === null && this.isMobile()) {
                _mobile = MOBILE.GENERIC_MOBILE;
            }
        }
        return _mobile;
    };
    ResponsiveState.prototype.windows = function () {
        var _windows = null;
        if (this._userAgent !== null) {
            for (var _reg in REG_WINDOWS_OS_VERSION) {
                if (REG_WINDOWS_OS_VERSION[_reg].REG.test(this._userAgent)) {
                    _windows = REG_WINDOWS_OS_VERSION[_reg].VALUE;
                }
            }
            if (_windows === null && this.isDesktop() && this.isWindows()) {
                _windows = WINDOWS_OS.GENERIC_WINDOWS;
            }
        }
        return _windows;
    };
    ResponsiveState.prototype.linux = function () {
        var _linux = null;
        if (this._userAgent !== null) {
            for (var _reg in REG_LINUX_OS) {
                if (REG_LINUX_OS[_reg].REG.test(this._userAgent)) {
                    _linux = REG_LINUX_OS[_reg].VALUE;
                }
            }
            if (_linux === null && this.isDesktop() && this.isLinux()) {
                _linux = LINUX_OS.GENERIC_LINUX;
            }
        }
        return _linux;
    };
    ResponsiveState.prototype.isMobile = function () {
        var _result = false;
        if (this._userAgent !== null) {
            var _userAgent = this._userAgent;
            _result = (REG_MOBILES.GENERIC_REG_1.REG.test(_userAgent) && this.isTablet() === false ||
                REG_MOBILES.GENERIC_REG_2.REG.test(_userAgent.substr(0, 4)) && this.isTablet() === false);
        }
        return _result;
    };
    ResponsiveState.prototype.isTablet = function () {
        var _result = false;
        if (this._userAgent !== null) {
            _result = (REG_TABLETS.IPAD.REG.test(this._userAgent) ||
                REG_TABLETS.KINDLE.REG.test(this._userAgent) ||
                REG_TABLETS.TABLET.REG.test(this._userAgent));
        }
        return _result;
    };
    ResponsiveState.prototype.isSMART = function () {
        var _result = false;
        if (this._userAgent !== null) {
            _result = (REG_SMARTS_TV.GENERIC_TV.REG.test(this._userAgent) ||
                REG_SMARTS_TV.PS4.REG.test(this._userAgent) ||
                REG_SMARTS_TV.XBOX_ONE.REG.test(this._userAgent));
        }
        return _result;
    };
    ResponsiveState.prototype.isDesktop = function () {
        var _result = false;
        if (this._userAgent !== null) {
            _result = (!this.isMobile() || !this.isTablet() || !this.isSMART());
        }
        return _result;
    };
    ResponsiveState.prototype.isGameDevice = function () {
        var _result = false;
        if (this._userAgent !== null) {
            _result = (REG_GAME_DEVICES.PS4.REG.test(this._userAgent) || REG_GAME_DEVICES.PS3.REG.test(this._userAgent)
                || REG_GAME_DEVICES.XBOX.REG.test(this._userAgent) || REG_GAME_DEVICES.XBOX_ONE.REG.test(this._userAgent)
                || REG_GAME_DEVICES.WII.REG.test(this._userAgent) || REG_GAME_DEVICES.WII_U.REG.test(this._userAgent)
                || REG_GAME_DEVICES.NINTENDO_3DS.REG.test(this._userAgent) || REG_GAME_DEVICES.PS_VITA.REG.test(this._userAgent)
                || REG_GAME_DEVICES.PSP.REG.test(this._userAgent));
        }
        return _result;
    };
    ResponsiveState.prototype.isWindows = function () {
        var _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.WINDOWS.REG.test(this._userAgent));
        }
        return _result;
    };
    ResponsiveState.prototype.isLinux = function () {
        var _result = false;
        if (this._userAgent !== null) {
            _result = (REG_OS.LINUX.REG.test(this._userAgent));
        }
        return _result;
    };
    ResponsiveState.prototype.isBot = function () {
        var _result = false;
        if (this._userAgent !== null) {
            _result = (REG_BOTS.GENERIC_BOT.REG.test(this._userAgent));
        }
        return _result;
    };
    return ResponsiveState;
}());
ResponsiveState.decorators = [
    { type: Injectable },
];
ResponsiveState.ctorParameters = function () { return [
    { type: ResponsiveConfig, },
]; };
/**
 * @name responsive-state
 * @description Core responsive-state provider in ngx-responsive
 *
 * @license MIT
 */
var RESPONSIVE_BASE = /** @class */ (function () {
    function RESPONSIVE_BASE(templateRef, viewContainer, _responsiveState, cd) {
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
    RESPONSIVE_BASE.prototype.setGrid = function (grid_state, directive) {
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
            this._others_grid_state = ((Array.isArray(grid_state) ? grid_state : [grid_state]));
        }
        this._directive = directive;
    };
    RESPONSIVE_BASE.prototype.ngOnInit = function () {
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
    };
    RESPONSIVE_BASE.prototype.ngOnDestroy = function () {
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
    };
    RESPONSIVE_BASE.prototype.showHide = function (show) {
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
    };
    RESPONSIVE_BASE.prototype.updateView = function (value) {
        var showBoolean = this._directive === 'sizes' ?
            ((typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;
        this.showHide(this._showWhenTrue ? showBoolean : !showBoolean);
    };
    return RESPONSIVE_BASE;
}());
/**
 * @name responsive-base
 * @description Core responsive-bae provider in ngx-responsive
 *
 * @license MIT
 */
/**
 * @name providers
 * @description Core providers in ngx-responsive
 *
 * @license MIT
 */
/**
 * @name core
 * @description Core in ngx-responsive
 *
 * @license MIT
 */
var XlDirective = /** @class */ (function (_super) {
    __extends(XlDirective, _super);
    function XlDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xl';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XlDirective.prototype, "xl", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XlDirective;
}(RESPONSIVE_BASE));
XlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xl]'
            },] },
];
XlDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
XlDirective.propDecorators = {
    "xl": [{ type: Input },],
};
var LgDirective = /** @class */ (function (_super) {
    __extends(LgDirective, _super);
    function LgDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'lg';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(LgDirective.prototype, "lg", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return LgDirective;
}(RESPONSIVE_BASE));
LgDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lg]'
            },] },
];
LgDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
LgDirective.propDecorators = {
    "lg": [{ type: Input },],
};
var MdDirective = /** @class */ (function (_super) {
    __extends(MdDirective, _super);
    function MdDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'md';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(MdDirective.prototype, "md", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return MdDirective;
}(RESPONSIVE_BASE));
MdDirective.decorators = [
    { type: Directive, args: [{
                selector: '[md]'
            },] },
];
MdDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
MdDirective.propDecorators = {
    "md": [{ type: Input },],
};
var SmDirective = /** @class */ (function (_super) {
    __extends(SmDirective, _super);
    function SmDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'sm';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(SmDirective.prototype, "sm", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return SmDirective;
}(RESPONSIVE_BASE));
SmDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sm]'
            },] },
];
SmDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
SmDirective.propDecorators = {
    "sm": [{ type: Input },],
};
var XsDirective = /** @class */ (function (_super) {
    __extends(XsDirective, _super);
    function XsDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xs';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XsDirective.prototype, "xs", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XsDirective;
}(RESPONSIVE_BASE));
XsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xs]'
            },] },
];
XsDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
XsDirective.propDecorators = {
    "xs": [{ type: Input },],
};
var ShowItBootstrapDirective = /** @class */ (function (_super) {
    __extends(ShowItBootstrapDirective, _super);
    function ShowItBootstrapDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBootstrapDirective.prototype, "showItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBootstrapDirective;
}(RESPONSIVE_BASE));
ShowItBootstrapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItBootstrap]'
            },] },
];
ShowItBootstrapDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
ShowItBootstrapDirective.propDecorators = {
    "showItBootstrap": [{ type: Input },],
};
var HideItBootstrapDirective = /** @class */ (function (_super) {
    __extends(HideItBootstrapDirective, _super);
    function HideItBootstrapDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBootstrapDirective.prototype, "hideItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBootstrapDirective;
}(RESPONSIVE_BASE));
HideItBootstrapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItBootstrap]'
            },] },
];
HideItBootstrapDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
HideItBootstrapDirective.propDecorators = {
    "hideItBootstrap": [{ type: Input },],
};
var BOOTSTRAP_DIRECTIVES = [
    XlDirective,
    LgDirective,
    MdDirective,
    SmDirective,
    XsDirective,
    ShowItBootstrapDirective,
    HideItBootstrapDirective
];
var IsChromeDirective = /** @class */ (function (_super) {
    __extends(IsChromeDirective, _super);
    function IsChromeDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'chrome';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsChromeDirective.prototype, "isChrome", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsChromeDirective;
}(RESPONSIVE_BASE));
IsChromeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isChrome]'
            },] },
];
IsChromeDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsChromeDirective.propDecorators = {
    "isChrome": [{ type: Input },],
};
var IsFirefoxDirective = /** @class */ (function (_super) {
    __extends(IsFirefoxDirective, _super);
    function IsFirefoxDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'firefox';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsFirefoxDirective.prototype, "isFirefox", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsFirefoxDirective;
}(RESPONSIVE_BASE));
IsFirefoxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isFirefox]'
            },] },
];
IsFirefoxDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsFirefoxDirective.propDecorators = {
    "isFirefox": [{ type: Input },],
};
var IsSafariDirective = /** @class */ (function (_super) {
    __extends(IsSafariDirective, _super);
    function IsSafariDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'safari';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsSafariDirective.prototype, "isSafari", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsSafariDirective;
}(RESPONSIVE_BASE));
IsSafariDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isSafari]'
            },] },
];
IsSafariDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsSafariDirective.propDecorators = {
    "isSafari": [{ type: Input },],
};
var IsOperaDirective = /** @class */ (function (_super) {
    __extends(IsOperaDirective, _super);
    function IsOperaDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'opera';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsOperaDirective.prototype, "isOpera", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsOperaDirective;
}(RESPONSIVE_BASE));
IsOperaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isOpera]'
            },] },
];
IsOperaDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsOperaDirective.propDecorators = {
    "isOpera": [{ type: Input },],
};
var IsIEDirective = /** @class */ (function (_super) {
    __extends(IsIEDirective, _super);
    function IsIEDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIEDirective.prototype, "isIE", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsIEDirective;
}(RESPONSIVE_BASE));
IsIEDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isIE]'
            },] },
];
IsIEDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsIEDirective.propDecorators = {
    "isIE": [{ type: Input },],
};
var ShowItBrowserDirective = /** @class */ (function (_super) {
    __extends(ShowItBrowserDirective, _super);
    function ShowItBrowserDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBrowserDirective.prototype, "showItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBrowserDirective;
}(RESPONSIVE_BASE));
ShowItBrowserDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItBrowser]'
            },] },
];
ShowItBrowserDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
ShowItBrowserDirective.propDecorators = {
    "showItBrowser": [{ type: Input },],
};
var HideItBrowserDirective = /** @class */ (function (_super) {
    __extends(HideItBrowserDirective, _super);
    function HideItBrowserDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBrowserDirective.prototype, "hideItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBrowserDirective;
}(RESPONSIVE_BASE));
HideItBrowserDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItBrowser]'
            },] },
];
HideItBrowserDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
HideItBrowserDirective.propDecorators = {
    "hideItBrowser": [{ type: Input },],
};
var IsIE9Directive = /** @class */ (function (_super) {
    __extends(IsIE9Directive, _super);
    function IsIE9Directive(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 9';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE9Directive.prototype, "isIE9", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE9Directive;
}(RESPONSIVE_BASE));
IsIE9Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE9]'
            },] },
];
IsIE9Directive.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsIE9Directive.propDecorators = {
    "isIE9": [{ type: Input },],
};
var IsIE10Directive = /** @class */ (function (_super) {
    __extends(IsIE10Directive, _super);
    function IsIE10Directive(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 10';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE10Directive.prototype, "isIE10", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE10Directive;
}(RESPONSIVE_BASE));
IsIE10Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE10]'
            },] },
];
IsIE10Directive.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsIE10Directive.propDecorators = {
    "isIE10": [{ type: Input },],
};
var IsIE11Directive = /** @class */ (function (_super) {
    __extends(IsIE11Directive, _super);
    function IsIE11Directive(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 11';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE11Directive.prototype, "isIE11", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE11Directive;
}(RESPONSIVE_BASE));
IsIE11Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE11]'
            },] },
];
IsIE11Directive.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsIE11Directive.propDecorators = {
    "isIE11": [{ type: Input },],
};
var IsIE12Directive = /** @class */ (function (_super) {
    __extends(IsIE12Directive, _super);
    function IsIE12Directive(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 12';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE12Directive.prototype, "isIE12", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE12Directive;
}(RESPONSIVE_BASE));
IsIE12Directive.decorators = [
    { type: Directive, args: [{
                selector: '[isIE12]'
            },] },
];
IsIE12Directive.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsIE12Directive.propDecorators = {
    "isIE12": [{ type: Input },],
};
var ShowIEVersionDirective = /** @class */ (function (_super) {
    __extends(ShowIEVersionDirective, _super);
    function ShowIEVersionDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowIEVersionDirective.prototype, "showIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return ShowIEVersionDirective;
}(RESPONSIVE_BASE));
ShowIEVersionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showIEVersion]'
            },] },
];
ShowIEVersionDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
ShowIEVersionDirective.propDecorators = {
    "showIEVersion": [{ type: Input },],
};
var HideIEVersionDirective = /** @class */ (function (_super) {
    __extends(HideIEVersionDirective, _super);
    function HideIEVersionDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideIEVersionDirective.prototype, "hideIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return HideIEVersionDirective;
}(RESPONSIVE_BASE));
HideIEVersionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideIEVersion]'
            },] },
];
HideIEVersionDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
HideIEVersionDirective.propDecorators = {
    "hideIEVersion": [{ type: Input },],
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    BrowserInfo.prototype.connect = function () {
        var _this = this;
        this._subscription = this._responsiveState.browser$.pipe(distinctUntilChanged())
            .subscribe(function (data) {
            _this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    };
    BrowserInfo.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(BrowserInfo.prototype, "getBrowser", {
        get: function () {
            return this.replaySubject$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    BrowserInfo.prototype._updateData = function (value) {
        this.replaySubject$.next(value);
    };
    return BrowserInfo;
}());
var BrowserInfoRx = /** @class */ (function (_super) {
    __extends(BrowserInfoRx, _super);
    function BrowserInfoRx(_responsiveState) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        return _this;
    }
    return BrowserInfoRx;
}(BrowserInfo));
BrowserInfoRx.decorators = [
    { type: Injectable },
];
BrowserInfoRx.ctorParameters = function () { return [
    { type: ResponsiveState, },
]; };
var BrowserInfoDirective = /** @class */ (function (_super) {
    __extends(BrowserInfoDirective, _super);
    function BrowserInfoDirective(_responsiveState, viewContainer, cd) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        _this.viewContainer = viewContainer;
        _this.cd = cd;
        _this.browser = new EventEmitter();
        return _this;
    }
    Object.defineProperty(BrowserInfoDirective.prototype, "browserInfo", {
        set: function (grid_state) {
            this._updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    BrowserInfoDirective.prototype.ngOnInit = function () {
        this.connect();
    };
    BrowserInfoDirective.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    BrowserInfoDirective.prototype._updateData = function (value) {
        this.browser.emit(value);
        this.cd.markForCheck();
    };
    return BrowserInfoDirective;
}(BrowserInfo));
BrowserInfoDirective.decorators = [
    { type: Directive, args: [{
                selector: 'browser-info'
            },] },
];
BrowserInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
BrowserInfoDirective.propDecorators = {
    "browser": [{ type: Output },],
    "browserInfo": [{ type: Input },],
};
var IeInfo = /** @class */ (function () {
    function IeInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    IeInfo.prototype.connect = function () {
        var _this = this;
        this._subscription = this._responsiveState.ieVersion$.pipe(distinctUntilChanged())
            .subscribe(function (data) {
            _this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    };
    IeInfo.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(IeInfo.prototype, "getIE", {
        get: function () {
            return this.replaySubject$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    IeInfo.prototype._updateData = function (value) {
        this.replaySubject$.next(value);
    };
    return IeInfo;
}());
var IeInfoRx = /** @class */ (function (_super) {
    __extends(IeInfoRx, _super);
    function IeInfoRx(_responsiveState) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        return _this;
    }
    return IeInfoRx;
}(IeInfo));
IeInfoRx.decorators = [
    { type: Injectable },
];
IeInfoRx.ctorParameters = function () { return [
    { type: ResponsiveState, },
]; };
var IeInfoDirective = /** @class */ (function (_super) {
    __extends(IeInfoDirective, _super);
    function IeInfoDirective(_responsiveState, viewContainer, cd) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        _this.viewContainer = viewContainer;
        _this.cd = cd;
        _this.ieVersion = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IeInfoDirective.prototype, "ieInfo", {
        set: function (grid_state) {
            this._updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    IeInfoDirective.prototype.ngOnInit = function () {
        this.connect();
    };
    IeInfoDirective.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    IeInfoDirective.prototype._updateData = function (value) {
        this.ieVersion.emit(value);
        this.cd.markForCheck();
    };
    return IeInfoDirective;
}(IeInfo));
IeInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'ie-info' },] },
];
IeInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
IeInfoDirective.propDecorators = {
    "ieInfo": [{ type: Input },],
    "ieVersion": [{ type: Output },],
};
var BROWSER_DIRECTIVES = [
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
var BROWSER_INFO_RX = [BrowserInfoRx];
var IE_INFO_RX = [IeInfoRx];
var ShowItSizesDirective = /** @class */ (function (_super) {
    __extends(ShowItSizesDirective, _super);
    function ShowItSizesDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItSizesDirective.prototype, "showItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItSizesDirective;
}(RESPONSIVE_BASE));
ShowItSizesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItSizes]'
            },] },
];
ShowItSizesDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
ShowItSizesDirective.propDecorators = {
    "showItSizes": [{ type: Input },],
};
var HideItSizesDirective = /** @class */ (function (_super) {
    __extends(HideItSizesDirective, _super);
    function HideItSizesDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItSizesDirective.prototype, "hideItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return HideItSizesDirective;
}(RESPONSIVE_BASE));
HideItSizesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItSizes]'
            },] },
];
HideItSizesDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
HideItSizesDirective.propDecorators = {
    "hideItSizes": [{ type: Input },],
};
var CUSTOMSIZES_DIRECTIVES = [
    ShowItSizesDirective,
    HideItSizesDirective
];
var IsSmartTvDirective = /** @class */ (function (_super) {
    __extends(IsSmartTvDirective, _super);
    function IsSmartTvDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'smarttv';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsSmartTvDirective.prototype, "isSmartTv", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsSmartTvDirective;
}(RESPONSIVE_BASE));
IsSmartTvDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isSmartTv]'
            },] },
];
IsSmartTvDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsSmartTvDirective.propDecorators = {
    "isSmartTv": [{ type: Input },],
};
var IsDesktopDirective = /** @class */ (function (_super) {
    __extends(IsDesktopDirective, _super);
    function IsDesktopDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'desktop';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsDesktopDirective.prototype, "isDesktop", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsDesktopDirective;
}(RESPONSIVE_BASE));
IsDesktopDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isDesktop]'
            },] },
];
IsDesktopDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsDesktopDirective.propDecorators = {
    "isDesktop": [{ type: Input },],
};
var IsTabletDirective = /** @class */ (function (_super) {
    __extends(IsTabletDirective, _super);
    function IsTabletDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'tablet';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsTabletDirective.prototype, "isTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsTabletDirective;
}(RESPONSIVE_BASE));
IsTabletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isTablet]'
            },] },
];
IsTabletDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsTabletDirective.propDecorators = {
    "isTablet": [{ type: Input },],
};
var IsMobileDirective = /** @class */ (function (_super) {
    __extends(IsMobileDirective, _super);
    function IsMobileDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'mobile';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsMobileDirective.prototype, "isMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsMobileDirective;
}(RESPONSIVE_BASE));
IsMobileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isMobile]'
            },] },
];
IsMobileDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsMobileDirective.propDecorators = {
    "isMobile": [{ type: Input },],
};
var ShowItDeviceDirective = /** @class */ (function (_super) {
    __extends(ShowItDeviceDirective, _super);
    function ShowItDeviceDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItDeviceDirective.prototype, "showItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItDeviceDirective;
}(RESPONSIVE_BASE));
ShowItDeviceDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItDevice]'
            },] },
];
ShowItDeviceDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
ShowItDeviceDirective.propDecorators = {
    "showItDevice": [{ type: Input },],
};
var HideItDeviceDirective = /** @class */ (function (_super) {
    __extends(HideItDeviceDirective, _super);
    function HideItDeviceDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItDeviceDirective.prototype, "hideItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return HideItDeviceDirective;
}(RESPONSIVE_BASE));
HideItDeviceDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItDevice]'
            },] },
];
HideItDeviceDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
HideItDeviceDirective.propDecorators = {
    "hideItDevice": [{ type: Input },],
};
var IsIphoneDirective = /** @class */ (function (_super) {
    __extends(IsIphoneDirective, _super);
    function IsIphoneDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIphoneDirective.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsIphoneDirective;
}(RESPONSIVE_BASE));
IsIphoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isIphone]'
            },] },
];
IsIphoneDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsIphoneDirective.propDecorators = {
    "isIphone": [{ type: Input },],
};
var IsIpadDirective = /** @class */ (function (_super) {
    __extends(IsIpadDirective, _super);
    function IsIpadDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIpadDirective.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsIpadDirective;
}(RESPONSIVE_BASE));
IsIpadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isIpad]'
            },] },
];
IsIpadDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsIpadDirective.propDecorators = {
    "isIphone": [{ type: Input },],
};
var IsAndroidMobileDirective = /** @class */ (function (_super) {
    __extends(IsAndroidMobileDirective, _super);
    function IsAndroidMobileDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android mobile';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsAndroidMobileDirective.prototype, "isAndroidMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsAndroidMobileDirective;
}(RESPONSIVE_BASE));
IsAndroidMobileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isAndroidMobile]'
            },] },
];
IsAndroidMobileDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsAndroidMobileDirective.propDecorators = {
    "isAndroidMobile": [{ type: Input },],
};
var IsAndroidTabletDirective = /** @class */ (function (_super) {
    __extends(IsAndroidTabletDirective, _super);
    function IsAndroidTabletDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android tablet';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsAndroidTabletDirective.prototype, "isAndroidTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsAndroidTabletDirective;
}(RESPONSIVE_BASE));
IsAndroidTabletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isAndroidTablet]'
            },] },
];
IsAndroidTabletDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsAndroidTabletDirective.propDecorators = {
    "isAndroidTablet": [{ type: Input },],
};
var IsWindowsPhoneDirective = /** @class */ (function (_super) {
    __extends(IsWindowsPhoneDirective, _super);
    function IsWindowsPhoneDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'windows phone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsWindowsPhoneDirective.prototype, "isWindowsPhone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsWindowsPhoneDirective;
}(RESPONSIVE_BASE));
IsWindowsPhoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isWindowsPhone]'
            },] },
];
IsWindowsPhoneDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsWindowsPhoneDirective.propDecorators = {
    "isWindowsPhone": [{ type: Input },],
};
var ShowItStandardDirective = /** @class */ (function (_super) {
    __extends(ShowItStandardDirective, _super);
    function ShowItStandardDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItStandardDirective.prototype, "showItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItStandardDirective;
}(RESPONSIVE_BASE));
ShowItStandardDirective.decorators = [
    { type: Directive, args: [{
                selector: '[showItStandard]'
            },] },
];
ShowItStandardDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
ShowItStandardDirective.propDecorators = {
    "showItStandard": [{ type: Input },],
};
var HideItStandardDirective = /** @class */ (function (_super) {
    __extends(HideItStandardDirective, _super);
    function HideItStandardDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItStandardDirective.prototype, "hideItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return HideItStandardDirective;
}(RESPONSIVE_BASE));
HideItStandardDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hideItStandard]'
            },] },
];
HideItStandardDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
HideItStandardDirective.propDecorators = {
    "hideItStandard": [{ type: Input },],
};
var IsPortraitDirective = /** @class */ (function (_super) {
    __extends(IsPortraitDirective, _super);
    function IsPortraitDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'portrait';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsPortraitDirective.prototype, "isPortrait", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    return IsPortraitDirective;
}(RESPONSIVE_BASE));
IsPortraitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isPortrait]'
            },] },
];
IsPortraitDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsPortraitDirective.propDecorators = {
    "isPortrait": [{ type: Input },],
};
var IsLandscapeDirective = /** @class */ (function (_super) {
    __extends(IsLandscapeDirective, _super);
    function IsLandscapeDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'landscape';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsLandscapeDirective.prototype, "isLandscape", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    return IsLandscapeDirective;
}(RESPONSIVE_BASE));
IsLandscapeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isLandscape]'
            },] },
];
IsLandscapeDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsLandscapeDirective.propDecorators = {
    "isLandscape": [{ type: Input },],
};
var DevicesInfo = /** @class */ (function () {
    function DevicesInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    DevicesInfo.prototype.connect = function () {
        var _this = this;
        this._subscription = this._responsiveState.device$.pipe(distinctUntilChanged())
            .subscribe(function (data) {
            _this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    };
    DevicesInfo.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(DevicesInfo.prototype, "getDevice", {
        get: function () {
            return this.replaySubject$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DevicesInfo.prototype._updateData = function (value) {
        this.replaySubject$.next(value);
    };
    return DevicesInfo;
}());
var DeviceInfoDirective = /** @class */ (function (_super) {
    __extends(DeviceInfoDirective, _super);
    function DeviceInfoDirective(_responsiveState, viewContainer, cd) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        _this.viewContainer = viewContainer;
        _this.cd = cd;
        _this.device = new EventEmitter();
        return _this;
    }
    DeviceInfoDirective.prototype.ngOnInit = function () {
        this.connect();
    };
    DeviceInfoDirective.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    DeviceInfoDirective.prototype._updateData = function (value) {
        this.device.emit(value);
        this.cd.markForCheck();
    };
    return DeviceInfoDirective;
}(DevicesInfo));
DeviceInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'device-info' },] },
];
DeviceInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
DeviceInfoDirective.propDecorators = {
    "device": [{ type: Output },],
};
var DeviceStandardInfo = /** @class */ (function () {
    function DeviceStandardInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    DeviceStandardInfo.prototype.connect = function () {
        var _this = this;
        this._subscription = this._responsiveState.standard$.pipe(distinctUntilChanged())
            .subscribe(function (data) {
            _this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    };
    DeviceStandardInfo.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(DeviceStandardInfo.prototype, "getStandardDevice", {
        get: function () {
            return this.replaySubject$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DeviceStandardInfo.prototype._updateData = function (value) {
        this.replaySubject$.next(value);
    };
    return DeviceStandardInfo;
}());
var DeviceStandardInfoDirective = /** @class */ (function (_super) {
    __extends(DeviceStandardInfoDirective, _super);
    function DeviceStandardInfoDirective(_responsiveState, viewContainer, cd) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        _this.viewContainer = viewContainer;
        _this.cd = cd;
        _this.standard = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DeviceStandardInfoDirective.prototype, "deviceStandardInfo", {
        set: function (grid_state) {
            this._updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    DeviceStandardInfoDirective.prototype.ngOnInit = function () {
        this.connect();
    };
    DeviceStandardInfoDirective.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    DeviceStandardInfoDirective.prototype._updateData = function (value) {
        this.standard.emit(value);
        this.cd.markForCheck();
    };
    return DeviceStandardInfoDirective;
}(DeviceStandardInfo));
DeviceStandardInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'device-standard-info' },] },
];
DeviceStandardInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
DeviceStandardInfoDirective.propDecorators = {
    "deviceStandardInfo": [{ type: Input },],
    "standard": [{ type: Output },],
};
var OrientationInfo = /** @class */ (function () {
    function OrientationInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    OrientationInfo.prototype.connect = function () {
        var _this = this;
        this._subscription = this._responsiveState.orientation$.pipe(distinctUntilChanged())
            .subscribe(function (data) {
            _this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    };
    OrientationInfo.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(OrientationInfo.prototype, "getOrientation", {
        get: function () {
            return this.replaySubject$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    OrientationInfo.prototype._updateData = function (value) {
        this.replaySubject$.next(value);
    };
    return OrientationInfo;
}());
var OrientationInfoDirective = /** @class */ (function (_super) {
    __extends(OrientationInfoDirective, _super);
    function OrientationInfoDirective(_responsiveState, viewContainer, cd) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        _this.viewContainer = viewContainer;
        _this.cd = cd;
        _this.orientation = new EventEmitter();
        return _this;
    }
    OrientationInfoDirective.prototype.ngOnInit = function () {
        this.connect();
    };
    OrientationInfoDirective.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    OrientationInfoDirective.prototype._updateData = function (value) {
        this.orientation.emit(value);
        this.cd.markForCheck();
    };
    return OrientationInfoDirective;
}(OrientationInfo));
OrientationInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'orientation-info' },] },
];
OrientationInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
OrientationInfoDirective.propDecorators = {
    "orientation": [{ type: Output },],
};
var DeviceInfoRx = /** @class */ (function (_super) {
    __extends(DeviceInfoRx, _super);
    function DeviceInfoRx(_responsiveState) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        return _this;
    }
    return DeviceInfoRx;
}(DevicesInfo));
DeviceInfoRx.decorators = [
    { type: Injectable },
];
DeviceInfoRx.ctorParameters = function () { return [
    { type: ResponsiveState, },
]; };
var DeviceStandardInfoRx = /** @class */ (function (_super) {
    __extends(DeviceStandardInfoRx, _super);
    function DeviceStandardInfoRx(_responsiveState) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        return _this;
    }
    return DeviceStandardInfoRx;
}(DeviceStandardInfo));
DeviceStandardInfoRx.decorators = [
    { type: Injectable },
];
DeviceStandardInfoRx.ctorParameters = function () { return [
    { type: ResponsiveState, },
]; };
var OrientationInfoRx = /** @class */ (function (_super) {
    __extends(OrientationInfoRx, _super);
    function OrientationInfoRx(_responsiveState) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        return _this;
    }
    return OrientationInfoRx;
}(OrientationInfo));
OrientationInfoRx.decorators = [
    { type: Injectable },
];
OrientationInfoRx.ctorParameters = function () { return [
    { type: ResponsiveState, },
]; };
var DEVICES_DIRECTIVES = [
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
var DEVICES_INFO_RX = [
    DeviceInfoRx,
    DeviceStandardInfoRx,
    OrientationInfoRx
];
var Is1xPixelDirective = /** @class */ (function (_super) {
    __extends(Is1xPixelDirective, _super);
    function Is1xPixelDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = '1x';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(Is1xPixelDirective.prototype, "is1xPixel", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return Is1xPixelDirective;
}(RESPONSIVE_BASE));
Is1xPixelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[is1xPixel]'
            },] },
];
Is1xPixelDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
Is1xPixelDirective.propDecorators = {
    "is1xPixel": [{ type: Input },],
};
var IsRetinaDirective = /** @class */ (function (_super) {
    __extends(IsRetinaDirective, _super);
    function IsRetinaDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'retina';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsRetinaDirective.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return IsRetinaDirective;
}(RESPONSIVE_BASE));
IsRetinaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[isRetina]'
            },] },
];
IsRetinaDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
IsRetinaDirective.propDecorators = {
    "isRetina": [{ type: Input },],
};
var Is4kDirective = /** @class */ (function (_super) {
    __extends(Is4kDirective, _super);
    function Is4kDirective(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = '4k';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(Is4kDirective.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return Is4kDirective;
}(RESPONSIVE_BASE));
Is4kDirective.decorators = [
    { type: Directive, args: [{
                selector: '[is4k]'
            },] },
];
Is4kDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
Is4kDirective.propDecorators = {
    "isRetina": [{ type: Input },],
};
var PixelRatioInfoDirective = /** @class */ (function () {
    function PixelRatioInfoDirective(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.pixelratio = new EventEmitter();
    }
    Object.defineProperty(PixelRatioInfoDirective.prototype, "pixelratioInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    PixelRatioInfoDirective.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.pixel$.subscribe(this.updateData.bind(this));
    };
    PixelRatioInfoDirective.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    PixelRatioInfoDirective.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
            this.cd.markForCheck();
        }
    };
    PixelRatioInfoDirective.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return PixelRatioInfoDirective;
}());
PixelRatioInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'pixel-ratio-info' },] },
];
PixelRatioInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
PixelRatioInfoDirective.propDecorators = {
    "pixelratioInfo": [{ type: Input },],
    "pixelratio": [{ type: Output },],
};
var PIXELRATIO_DIRECTIVES = [
    Is1xPixelDirective,
    IsRetinaDirective,
    Is4kDirective,
    PixelRatioInfoDirective
];
var ResponsiveDirective = /** @class */ (function () {
    function ResponsiveDirective(templateRef, _responsiveState, viewContainer, cd) {
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
    Object.defineProperty(ResponsiveDirective.prototype, "responsive", {
        set: function (config) {
            this.init_responsive(config);
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveDirective.prototype.init_responsive = function (value) {
        if (this.isJSON(value)) {
            if (!!value.bootstrap && this._bootstrapNoRepeat === 0) {
                this._bootstrap_user_param = ((Array.isArray(value.bootstrap) ? value.bootstrap : [value.bootstrap]));
                this._bootstrapNoRepeat = 1;
                this.set_active_subscriptions.bootstrap = true;
            }
            if (!!value.device && this._deviceNoRepeat === 0) {
                this._devices_user_param = ((Array.isArray(value.device) ? value.device : [value.device]));
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            if (!!value.standard && this._standardNoRepeat === 0) {
                this._standard_user_param = ((Array.isArray(value.standard) ? value.standard : [value.standard]));
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            if (!!value.orientation && this._orientationNoRepeat === 0) {
                this._orientation_user_param = ((Array.isArray(value.orientation) ? value.orientation : [value.orientation]));
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            if (!!value.browser && this._browserNoRepeat === 0) {
                this._browser_user_param = ((Array.isArray(value.browser) ? value.browser : [value.browser]));
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            if (!!value.pixelratio && this._pixelratioNoRepeat === 0) {
                this._pixelratio_user_param = ((Array.isArray(value.pixelratio) ? value.pixelratio : [value.pixelratio]));
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            if (!!value.ie && this._ieNoRepeat === 0) {
                this._ie_user_param = ((Array.isArray(value.ie) ? value.ie : [value.ie]));
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            if (!!value.sizes && this._sizesNoRepeat === 0) {
                var _min = value.sizes.min;
                var _max = value.sizes.max;
                var _win = value.sizes.window;
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
        for (var key in this.set_active_subscriptions) {
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
    };
    ResponsiveDirective.prototype.updateBootstrap = function (value) {
        var _update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (_update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    };
    ResponsiveDirective.prototype.updateBrowser = function (value) {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    };
    ResponsiveDirective.prototype.updateDevice = function (value) {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    };
    ResponsiveDirective.prototype.updatePixelRatio = function (value) {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    };
    ResponsiveDirective.prototype.updateOrientation = function (value) {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    };
    ResponsiveDirective.prototype.updateStandard = function (value) {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    };
    ResponsiveDirective.prototype.updateIEversion = function (value) {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    };
    ResponsiveDirective.prototype.updateSizes = function (value) {
        if (!this._sizes_window) {
            this.set_values.sizes = value;
        }
        else {
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        }
        this.updateEvent(this.set_values.sizes, 'sizes');
    };
    ResponsiveDirective.prototype.updateEvent = function (param, type_directive) {
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
    };
    ResponsiveDirective.prototype.showHideOperations = function (show, type_directive) {
        var global_state = this.matchValues(show, type_directive);
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
    };
    ResponsiveDirective.prototype.matchValues = function (show, type_directive) {
        var match = true;
        if (show) {
            this.match_multiple[type_directive] = true;
        }
        else {
            this.match_multiple[type_directive] = false;
        }
        for (var all_key in this.match_multiple) {
            try {
                for (var _a = __values(this._actives), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var active = _b.value;
                    if (all_key == active && this.match_multiple[all_key] === false)
                        return match = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return match;
        var e_1, _c;
    };
    ResponsiveDirective.prototype.ngOnDestroy = function () {
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
    };
    ResponsiveDirective.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    };
    ResponsiveDirective.prototype.isJSON = function (value) {
        try {
            JSON.stringify(value);
            return true;
        }
        catch (ex) {
            return false;
        }
    };
    return ResponsiveDirective;
}());
ResponsiveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[responsive]'
            },] },
];
ResponsiveDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
ResponsiveDirective.propDecorators = {
    "responsive": [{ type: Input },],
    "changes": [{ type: Output },],
};
var RESPONSIVE_DIRECTIVE = [ResponsiveDirective];
var ResponsiveSizeInfo = /** @class */ (function () {
    function ResponsiveSizeInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    ResponsiveSizeInfo.prototype.connect = function () {
        var _this = this;
        this._subscription = this._responsiveState.elemento$.pipe(distinctUntilChanged())
            .subscribe(function (data) {
            _this._updateData(data);
        });
        return this.replaySubject$.asObservable();
    };
    ResponsiveSizeInfo.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(ResponsiveSizeInfo.prototype, "getResponsiveSize", {
        get: function () {
            return this.replaySubject$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveSizeInfo.prototype._updateData = function (value) {
        this.replaySubject$.next(value);
    };
    return ResponsiveSizeInfo;
}());
var ResponsiveSizeInfoDirective = /** @class */ (function (_super) {
    __extends(ResponsiveSizeInfoDirective, _super);
    function ResponsiveSizeInfoDirective(_responsiveState, viewContainer, cd) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        _this.viewContainer = viewContainer;
        _this.cd = cd;
        _this.statechanges = new EventEmitter();
        return _this;
    }
    Object.defineProperty(ResponsiveSizeInfoDirective.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this._updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveSizeInfoDirective.prototype.ngOnInit = function () {
        this.connect();
    };
    ResponsiveSizeInfoDirective.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    ResponsiveSizeInfoDirective.prototype._updateData = function (value) {
        this.statechanges.emit(value);
        this.cd.markForCheck();
    };
    return ResponsiveSizeInfoDirective;
}(ResponsiveSizeInfo));
ResponsiveSizeInfoDirective.decorators = [
    { type: Directive, args: [{ selector: 'responsiveSizeInfo' },] },
];
ResponsiveSizeInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
]; };
ResponsiveSizeInfoDirective.propDecorators = {
    "responsiveSizeInfo": [{ type: Input },],
    "statechanges": [{ type: Output },],
};
var ResponsiveSizeInfoRx = /** @class */ (function (_super) {
    __extends(ResponsiveSizeInfoRx, _super);
    function ResponsiveSizeInfoRx(_responsiveState) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        return _this;
    }
    return ResponsiveSizeInfoRx;
}(ResponsiveSizeInfo));
ResponsiveSizeInfoRx.decorators = [
    { type: Injectable },
];
ResponsiveSizeInfoRx.ctorParameters = function () { return [
    { type: ResponsiveState, },
]; };
var RESPONSIVE_SIZE_INFO_DIRECTIVE = [ResponsiveSizeInfoDirective];
var RESPONSIVE_SIZE_INFO_RX = [ResponsiveSizeInfoRx];
var ResponsiveWindowDirective = /** @class */ (function () {
    function ResponsiveWindowDirective(_responsiveState, el, cd) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.cd = cd;
        this.element = el.nativeElement;
    }
    ResponsiveWindowDirective.prototype.ngOnInit = function () {
        this._responsiveState.registerWindow(this);
    };
    ResponsiveWindowDirective.prototype.ngDoCheck = function () {
        var _update = this._ifValueChanged(this._noRepeat, this.name);
        if (_update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
            this.cd.markForCheck();
        }
    };
    ResponsiveWindowDirective.prototype.ngOnDestroy = function () {
        this._responsiveState.unregisterWindow(this);
    };
    ResponsiveWindowDirective.prototype.getWidth = function () {
        return this.element.offsetWidth;
    };
    ResponsiveWindowDirective.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this._noRepeat = newValue;
            return true;
        }
    };
    return ResponsiveWindowDirective;
}());
ResponsiveWindowDirective.decorators = [
    { type: Directive, args: [{
                selector: "[responsive-window]"
            },] },
];
ResponsiveWindowDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
ResponsiveWindowDirective.propDecorators = {
    "name": [{ type: Input, args: ['responsive-window',] },],
};
var RESPONSIVEWINDOW_DIRECTIVE = [ResponsiveWindowDirective];
var UserAgentInfo = /** @class */ (function () {
    function UserAgentInfo(_responsiveState) {
        this._responsiveState = _responsiveState;
        this.replaySubject$ = new ReplaySubject();
    }
    UserAgentInfo.prototype.connect = function () {
        var _this = this;
        this._subscription = this._responsiveState.userAgent$.pipe(distinctUntilChanged())
            .subscribe(function (data) {
            _this._emitUserAgent(data);
        });
        return this.replaySubject$.asObservable();
    };
    UserAgentInfo.prototype.disconnect = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(UserAgentInfo.prototype, "getUserAgent", {
        get: function () {
            return this.replaySubject$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserAgentInfo.prototype._emitUserAgent = function (value) {
        this.replaySubject$.next(value);
    };
    return UserAgentInfo;
}());
var UserAgentInfoDirective = /** @class */ (function (_super) {
    __extends(UserAgentInfoDirective, _super);
    function UserAgentInfoDirective(_responsiveState, cd) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        _this.cd = cd;
        _this.info = new EventEmitter();
        return _this;
    }
    UserAgentInfoDirective.prototype.ngOnInit = function () {
        this.connect();
    };
    UserAgentInfoDirective.prototype.ngOnDestroy = function () {
        this.disconnect();
    };
    UserAgentInfoDirective.prototype._emitUserAgent = function (value) {
        this.info.emit(value);
        this.cd.markForCheck();
    };
    return UserAgentInfoDirective;
}(UserAgentInfo));
UserAgentInfoDirective.decorators = [
    { type: Directive, args: [{
                selector: 'user-agent-info'
            },] },
];
UserAgentInfoDirective.ctorParameters = function () { return [
    { type: ResponsiveState, },
    { type: ChangeDetectorRef, },
]; };
UserAgentInfoDirective.propDecorators = {
    "info": [{ type: Output },],
};
var UserAgentInfoRx = /** @class */ (function (_super) {
    __extends(UserAgentInfoRx, _super);
    function UserAgentInfoRx(_responsiveState) {
        var _this = _super.call(this, _responsiveState) || this;
        _this._responsiveState = _responsiveState;
        return _this;
    }
    return UserAgentInfoRx;
}(UserAgentInfo));
UserAgentInfoRx.decorators = [
    { type: Injectable },
];
UserAgentInfoRx.ctorParameters = function () { return [
    { type: ResponsiveState, },
]; };
var USERAGENT_INFO_DIRECTIVE = [UserAgentInfoDirective];
var USERAGENT_INFO_RX = [UserAgentInfoRx];
/**
 * @name directives
 * @description Directives in ngx-responsive
 *
 * @license MIT
 */
/**
 * @name responsive.module
 * @description Core module in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */
var RESPONSIVE_CONFIGURATION = new InjectionToken('config');
function responsiveConfiguration(config) {
    return new ResponsiveConfig(config);
}
var ResponsiveModule = /** @class */ (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule.forRoot = function (config) {
        if (config === void 0) { config = null; }
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
    };
    return ResponsiveModule;
}());
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

export { LINUX_OS, WINDOWS_OS, TABLET, MOBILE, OS_SYSTEMS, REG_WEARABLES, REG_MOBILES, REG_TABLETS, REG_SMARTS_TV, REG_GAME_DEVICES, REG_IE_VERSIONS, REG_BROWSERS, REG_OS, REG_SORT_NAMES, REG_WINDOWS_OS_VERSION, REG_WINDOWS_PHONE_OS_VERSION, REG_MAC_OS_VERSION, REG_LINUX_OS, REG_BOTS, GAME_DEVICES, SMART_TV, BOTS, BROWSER_NAMES, IE_VERSIONS, USER_AGENT, ResponsiveConfig, ResponsiveState, RESPONSIVE_BASE, BOOTSTRAP_DIRECTIVES, XlDirective, LgDirective, MdDirective, SmDirective, XsDirective, ShowItBootstrapDirective, HideItBootstrapDirective, BROWSER_DIRECTIVES, BROWSER_INFO_RX, IE_INFO_RX, IsChromeDirective, IsFirefoxDirective, IsSafariDirective, IsOperaDirective, IsIEDirective, ShowItBrowserDirective, HideItBrowserDirective, IsIE9Directive, IsIE10Directive, IsIE11Directive, IsIE12Directive, ShowIEVersionDirective, HideIEVersionDirective, BrowserInfoRx, BrowserInfoDirective, IeInfoRx, IeInfoDirective, CUSTOMSIZES_DIRECTIVES, ShowItSizesDirective, HideItSizesDirective, DEVICES_DIRECTIVES, DEVICES_INFO_RX, DeviceInfoRx, DeviceStandardInfoRx, OrientationInfoRx, DeviceInfoDirective, DeviceStandardInfoDirective, OrientationInfoDirective, IsSmartTvDirective, IsDesktopDirective, IsTabletDirective, IsMobileDirective, ShowItDeviceDirective, HideItDeviceDirective, IsIphoneDirective, IsIpadDirective, IsAndroidMobileDirective, IsAndroidTabletDirective, IsWindowsPhoneDirective, ShowItStandardDirective, HideItStandardDirective, IsPortraitDirective, IsLandscapeDirective, PIXELRATIO_DIRECTIVES, Is1xPixelDirective, IsRetinaDirective, Is4kDirective, PixelRatioInfoDirective, RESPONSIVE_DIRECTIVE, ResponsiveDirective, RESPONSIVE_SIZE_INFO_DIRECTIVE, RESPONSIVE_SIZE_INFO_RX, ResponsiveSizeInfo, ResponsiveSizeInfoDirective, ResponsiveSizeInfoRx, RESPONSIVEWINDOW_DIRECTIVE, ResponsiveWindowDirective, USERAGENT_INFO_DIRECTIVE, USERAGENT_INFO_RX, UserAgentInfo, UserAgentInfoDirective, UserAgentInfoRx, RESPONSIVE_CONFIGURATION, responsiveConfiguration, ResponsiveModule, BrowserInfo as ɵa, IeInfo as ɵb, DevicesInfo as ɵc, DeviceStandardInfo as ɵd, OrientationInfo as ɵe };
//# sourceMappingURL=ngx-responsive.js.map
