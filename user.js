/*
 *
 * Firefix: A user.js to reduce information leakage while browsing
 *          with the Firefox web browser
 *
 * Copy to your Firefox profile folder:
 * 
 * Linux: ~/.mozilla/firefox/*.default/
 * Mac OS X: ~/Library/Application\ Support/Firefox/Profiles/*.default/
 * Windows: %APPDATA%\Mozilla\Firefox\Profiles\*.default\
 *
 */

// ENABLE Google Safe Browsing, but don't leak browsing history
// (http://kb.mozillazine.org/Browser.safebrowsing.remoteLookups)
user_pref("browser.safebrowsing.remoteLookups", true);

// DISABLE stability/performance reporting
// (https://www.mozilla.org/en-US/privacy/firefox/#health-report)
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// DISABLE Telemetry usage statistics reporting
// (https://www.mozilla.org/en-US/privacy/firefox/#telemetry)
user_pref("toolkit.telemetry.enabled", false);

// DISABLE WebRTC as it leaks IP address in some cases
// (https://github.com/diafygi/webrtc-ips)
user_pref("media.peerconnection.enabled", false);

// DISABLE Encrypted Media Extensions
// (https://wiki.mozilla.org/Media/EME)
user_pref("media.eme.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);

// DISABLE Firefox Hello
// (https://www.mozilla.org/en-US/firefox/hello/)
user_pref("loop.enabled", false);

// DISABLE Pocket integration
// (https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)
user_pref("browser.pocket.enabled", false);

// DISABLE Geolocation
user_pref("geo.enabled", false);

// DISABLE Search suggestions
user_pref("browser.search.suggest.enabled", false);
