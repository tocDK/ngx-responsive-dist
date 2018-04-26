![ngx-responsive](/img/ng2-responsive-0-4-0-thin.jpg?raw=true)

# Introduction
Superset of **RESPONSIVE DIRECTIVES** to show or hide items according to the size of the device screen and another features in Angular 5 

```
  npm i ngx-responsive --save
```

### New version with breaking changes: v5.0.x :

**v4.0.1 to v5.0.3 < v5.0.x documentation:**

-   [ngx-responsive v4.x.x to v5.x.x changes](/v4-0-1-to-v5-0-3.md)

-   [ngx-responsive v4.0.1 latest code](https://github.com/ManuCutillas/ngx-responsive/tree/v4.0.1)

### New beta version with Universal compatibility :

```
npm i ngx-responsive@5.0.7-universal-beta --save

```
-  Branch : [ngx-responsive@5.0.7-universal-beta](https://github.com/ManuCutillas/ngx-responsive/tree/v5.0.7-universal-beta)

### If you use Angular 4 in your project use ng2-responsive.

```
  npm i ng2-responsive --save
```

`RESPONSIVE_DIRECTIVES` provides the following features:
 - Directives detecting states according to standard measures in BOOTSTRAP: xs / sm / md / lg / xl
 - Directives that detect four states according to the real type of device: mobile / tablet / desktop / smartTv
 - Custom sizes detector.
 - Show and hide options.
 - Custom breaking points.
 - Debounce checking interval (default 100ms).
 - Browsers Detect: Chrome / Safari / Firefox / IE / Opera
 - Internet Explorer Versions Detect : IE 9 / IE 10 / IE 11 / IE +12
 - New standard devices: iPhone, iPad, Android Mobile, Android Tablet, Windows Phone.
 - Device orientation detect: portrait, landscape.
 - Directives Info: DeviceInfo, OrientationInfo, ResponsiveSizeInfo, DeviceStandardInfo, BrowserInfo, IeInfo.
 - Directive: responsive - Detection of multiple functions at once.
 - Feature Responsive Directive - Boolean Events Emitter on change state:
 - Feature responsive-window : Capture the size of the parent element to show or hide fill elements. If the parent responsive size is x show or hide.
 - UserAgent information directive: Get te device, browser, os version and more from the user agent navigator in one event object.
 - **New Feature :** Reactive services that expose changes through observables:
    - BrowserInfoRx
    - IeInfoRx
    - DeviceInfoRx
    - DeviceStandardInfoRx
    - OrientationInfoRx
    - ResponsiveSizeInfoRx
    - UserAgentInfoRx
 
# How to start
 
1. installing the package via npm 
     ```
     npm i ngx-responsive --save
     ```
2. bootstrap the service

   * with default breaking points
   
    ```
    import { NgModule } from '@angular/core'
    import { ResponsiveModule } from 'ngx-responsive'
    ...
    @NgModule({
        imports: [
          ResponsiveModule.forRoot()
        ],
        declarations: [
          AppComponent
        ],
        providers:[]
    })
    export class AppModule { }
    ```

    * with custom Configuration
      
    ```
     import { NgModule } from '@angular/core'
     import { ResponsiveModule } from 'ngx-responsive'
     ...
     const config = {
        breakPoints: {
            xs: {max: 600},
            sm: {min: 601, max: 959},
            md: {min: 960, max: 1279},
            lg: {min: 1280, max: 1919},
            xl: {min: 1920}
        },
        debounceTime: 100
      };
     ...
    @NgModule({
        imports: [
          BrowserModule,
          ResponsiveModule.forRoot(config)
        ],
        declarations: [
          AppComponent
        ],
        providers:[]
    })
    export class AppModule { }
    ```

 3.DIRECTIVES:

      * In your component to import the RESPONSIVE_DIRECTIVES only need import: 
      
      ```
      @Component({
         selector: 'my-component',
         template: '
              <p *showItStandard="['iphone','ipad']">I'll show you if I'm a iPhone or ipad device.</p>
              <p *isIphone>I'll show you if I'm a iPhone device.</p>
              <p *isChrome>I'll show you if I'm a chrome browser.</p>
              <p *xl>I'll show you if I'm a xl screen size.</p>
              <p *lg>I'll show you if I'm a lg screen size.</p>
              <p *md>I'll show you if I'm a md screen size.</p>
              <p *sm>I'll show you if I'm a sm screen size.</p>
              <p *xs>I'll show you if I'm a xs screen size.</p>
         '
       })
      ```
 
4. ALL RESPONSIVE DIRECTIVES OPTIONS 

      * Responsive Window directive: Capture the size of the parent element to show or hide fill elements. If the parent responsive size is x show or hide.
        
          ```
          <div [responsive-window]="'parent'">
               <p *responsive="{ sizes:{  window: 'parent', min:900, max:1400} }"></p>
          </div>
          ```
    
    1. * New Detection of multiple functions at once.
    
        ```
           All combinations = *responsive="{
                                bootstrap: ['xl','lg','md','sm','xs'],
                                browser: ['chrome','firefox','ie','safari', 'opera'],
                                ie:['ie 9','ie 10','ie 11','ie +12'],
                                pixelratio:['1x','retina','4k'],
                                standard:['iphone','ipad','android mobile','android tablet','windows phone'],
                                orientation:['landscape','portrait'],
                                device: ['mobile','tablet','smarttv','desktop'],
                                sizes:{min:900,max:1400}
                              }"
        ```
          
      *Example in component
          
         ```
          @Component({
           selector: 'my-component',
           template: '
                 <p  *responsive="{
                                 bootstrap: 'lg',
                                 browser: ['chrome','firefox'],
                                 pixelratio:'1x',
                                 orientation:'landscape',
                                 device: 'desktop',
                                 sizes:{min:900,max:1400}
                   }">I'll show you if all the options are true.</p>

                    <template  [responsive]="{
                                 bootstrap: 'lg',
                                 browser: ['chrome','firefox'],
                                 pixelratio:'1x',
                                 orientation:'landscape',
                                 device: 'desktop',
                                 sizes:{min:900,max:1400}
                   }" (changes)="miMethod($event)">I'll show you if all the options are true & listen events changes.</template>
                   
            '
           })
        ```
   2. One function detect
       * With Bootstrap Screen sizes
   
        ```
          @Component({
            selector: 'my-component',
            template: '
                <p *xl>I'll show you if I'm a xl screen size.</p>
                <p *lg>I'll show you if I'm a lg screen size.</p>
                <p *md>I'll show you if I'm a md screen size.</p>
                <p *sm>I'll show you if I'm a sm screen size.</p>
                <p *xs>I'll show you if I'm a xs screen size.</p>
                '
            })
        ```
   
      * With multiple combinations of bootstrap screen sizes and show / hide options
          - Strings Multiple combinations = "['xs','sm','md','lg','xl']"

        ```
        @Component({
            selector: 'my-component',
            template: '
                <p *showItBootstrap="['md','xs']">I'll show you only in md and xs screen sizes.</p>
                <p *hideItBootstrap="['lg','sm']">I'll hide you only in lg and sm screen sizes.</p>'
        })
        ```
   
        * With Devices Screen sizes
  
        ```
        @Component({
               selector: 'my-component',
               template: '
               <p *isSmartTv>I'll show you if I'm a smartTv device.</p>
               <p *isDesktop>I'll show you if I'm a desktop device.</p>
               <p *isTablet>I'll show you if I'm a tablet device.</p>
               <p *isMobile>I'll show you if I'm a mobile device.</p>
               '
            })
        ```
     
        * With multiple devices detect combinations: show / hide options.
          - Strings Multiple combinations = "['mobile','tablet','smarttv','desktop']"
        ```
        @Component({
             selector: 'my-component',
             template: '
               <p *showItDevice="['mobile','tablet']">I'll show you if I'm a tablet or a mobile device.</p>
               <p *hideItDevice="['mobile','tablet','desktop']">I'll hide you if I'm a desktop / tablet or mobile device.</p>'
        })
        ```
      
        * With Standard Devices detect
    
        ```
           @Component({
              selector: 'my-component',
              template: '
                  <p *isIphone>I'll show you if I'm a iPhone device.</p>
                  <p *isIpad>I'll show you if I'm a iPad device.</p>
                  <p *isAndroidMobile>I'll show you if I'm a android mobile device.</p>
                  <p *isAndroidTablet>I'll show you if I'm a android tablet device.</p>
                  <p *isWindowsPhone>I'll show you if I'm a windows phone mobile device.</p>'
            })
        ```
     
        * With multiple devices detect combinations: show / hide options.
          - Strings Multiple combinations = "['iphone','ipad','android mobile','android tablet','windows phone']"
      
        ```
        @Component({
             selector: 'my-component',
             template: '
                <p *showItStandard="['android mobile','windows phone']">I'll show you if I'm a android mobile or a windows phone device.</p>
                <p *hideItStandard="['iphone','ipad']">I'll hide you if I'm a iPad or a iPhone device.</p>'
        })
        ```
      
        * With orientation device
        ```
        @Component({
            selector: 'my-component',
            template: '
               <p *isPortrait>I'll show you if I'm a portrait state.</p>
               <p *isLandscape>I'll show you if I'm a landscape state.</p>
            '
        })
        ```
      
        * With custom sizes and show / hide options
 
        ```
        @Component({
             selector: 'my-component',
             template: '
                <p *showItSizes="{min:955,max:1057}">I'll show you if responsive-window width is between the min and max.</p>
                <p *showItSizes="{min:750}">I'll show you if responsive-window width is greater than or equal to min.</p>
                <p *hideItSizes="{min:360,max:768}">It is hidden if responsive-window width between the min and max.</p>
             '
        })
        ```

        responsive-window being window by default or any element set using the Responsive Window directive.
     
        * With browser detection.
      
        ```
        @Component({
            selector: 'my-component',
            template: '
               <p *isChrome>I'll show you if I'm a Chrome Browser.</p>
               <p *isFirefox>I'll show you if I'm a Firefox Browser.</p>
               <p *isSafari>I'll show you if I'm a Safari Browser.</p>
               <p *isOpera>I'll show you if I'm a Opera Browser.</p>
               <p *isIE>I'll show you if I'm a Internet Explorer Browser.</p>
            '
        })
        ```
        * With multiple browsers detect combinations: show / hide options.
          - Strings Multiple combinations = "['chrome','firefox','ie','safari', 'opera']"
        ```
        @Component({
           selector: 'my-component',
           template: '
             <p *showItBrowser="['ie','opera']">I'll show you if I'm a IE or Opera Browser.</p>
             <p *hideItBrowser="['chrome','firefox','safari']">I'll hide you if I'm a Chrome, Firefox or Safari Browser.</p>'
        })
        ```
        * With Internet Explorer Version detection.
      
        ```
        @Component({
           selector: 'my-component',
           template: '
              <p *isIE9>I'll show you if I'm a Internet Explorer 9.</p>
              <p *isIE10>I'll show you if I'm a Internet Explorer 10.</p>
              <p *isIE11>I'll show you if I'm a Internet Explorer 11.</p>
              <p *isIE12>I'll show you if I'm a Internet Explorer 12.</p>'
        })
        ```
      
        * With multiple Internet Explorer version detect: show / hide options.
          - Strings Multiple combinations = "['ie 9','ie 10','ie 11','ie +12']"
        ```
        @Component({
           selector: 'my-component',
           template: '
             <p *showIEVersion="['ie 11','ie +12']">I'll show you if I'm a IE 11 browser or IE 12</p>
             <p *hideIEVersion="['ie 9','ie 10']">I'll hide you if I'm IE 9 browser or IE 10.</p>
            '
        })
        ```

        * Get the userAgent info directive:
        - Get the device, browser, os version and more from the user agent navigator in one event object. 

         ```
           <user-agent-info (info)="thisUserAgent($event)"></user-agent-info>
         ```
      
5. FORMAT OF USER AGENT INFO OBJECT


Description of the object given by the `(info)` event of the directive `user-agent-info` 
(usage: `<user-agent-info (info)="thisUserAgent($event)"></user-agent-info>`).

```
{
  device: 'mobile' | 'tablet' | 'smarttv' | 'desktop',
  browser: 'chrome' | 'firefox' | 'ie' | 'safari' | 'opera' | 'silk' | 'yandex' | 'NA',
  pixelratio:  '4k' | 'retina' | '1x',
  ie_version: {
      name: 'ie 7' | 'ie 8' | 'ie 9' | 'ie 10' | 'ie 11' | 'ie +12',
      state: true | false
  },
  game_device: {
      name:  'Playstation 4' | 'Playstation 3' | 'Xbox one' | 'Xbox' | 'Wii' | 'Wii U' | 'Nintendo 3DS' | 'Playstation Vita' | 'PSP'
      state: true | false
  },
  smart_tv: {
      name:  'Chromecast' | 'Apple tv' | 'Google tv' | 'Xbox One' | 'Playstation 4' | 'Generic smartv'
      state: true | false
  },
  desktop: {
      name:  'Windows' | 'Mac' | 'Linux',
      state: true | false
  },
  tablet: {
      name:  'Ipad' | 'Android' | 'Kindle' | 'Generic Tablet',
      state: true | false
  },
  mobile: {
      name:  'Iphone' | 'Android' |  'Windows Phone' | 'Blackberry' | 'Generic Mobile'
      state: true | false
  },
  window_os: {
      name:  'Windows XP' | 'Windows Vista' | 'Windows 7' | 'Windows 8' | 'Windows 10' | 'Generic Windows'
      state: true | false
  },
  linux_os: {
      name:  'Debian' | 'Knoppix' | 'Mint' | 'Ubuntu' | 'Kubuntu' | 'Xubuntu' | 'Lubuntu' | 'Fedora' | 'Red hat' | 'Mandriva' | 'Gentoo' | 'Sabayon' | 'Slackware' | 'Suse' | 'CentOS' | 'Backtrack' | 'Generic Linux',
      state: true | false
  },
  bot: true | false
}
```

# NEXT STEPS 
- Work in Unit-test and e2e.
- Work in a documentation page.
- ngx-responsive compatible with angular universal.
- Work in demo page
- Directive css classes:
```
<h1 *responsive-css="{
         bootstrap: {xl: "micssclassxl", lg:"micssclasslg"},
         orientation:{landscape:"micssclasslandscape"}
        }"></h1>

```
- animations show/hide in directives

# Contributors
 * ManuCutillas 
 * Christophe HOARAU
 * Kamil Breguła
 * Janne Julkunen
 * phransyz
 * Michael Burger
 * Alyssa Brunswick
 * Quentin

# License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)




