
```
.-:::::'::::::::::..  .,:::::: .-:::::':::  .,::      .:
;;;'''' ;;;;;;;``;;;; ;;;;'''' ;;;'''' ;;;  `;;;,  .,;; 
[[[,,== [[[ [[[,/[[['  [[cccc  [[[,,== [[[    '[[,,[['
`$$$"`` $$$ $$$$$$c    $$""""  `$$$"`` $$$     Y$$$P
 888    888 888b "88bo,888oo,__ 888    888   oP"``"Yo,
 "MM,   MMM MMMM   "W" """"YUMMM"MM,   MMM,m"       "Mm,
```

Firefix is a custom `user.js` file for Mozilla Firefox.

The aim is to disable numerous features which can leak sensitive
information to third parties while you are browsing the web with
Firefox, including the following items:

* Enable Google Safe Browsing, but don't leak browsing history
* Disable Firefox stability/performance reporting
* Disable Telemetry usage statistics reporting
* Disable WebRTC to prevent leaking of your IP address
* Disable Encrypted Media Extensions
* Disable Firefox Hello
* Disable Pocket integration
* Disable Geolocation
* Disable Search suggestions

## Usage

This project presumes that you do not already maintain a custom `user.js`
for Firefox. If this is not the case, you can merge the bits from the included
`user.js` into your existing one instead of using the following directions.

Clone this repository:

```
git clone https://github.com/brianshumate/firefix.git
```

Change into repository clone directory and copy the `user.js` to your Firefox
user profile directory:

### Linux

```
cd firefix
cp user.js ~/.mozilla/firefox/*.default/
```

### Mac OS X

```
cd firefix
cp user.js ~/Library/Application\ Support/Firefox/Profiles/*.default/
```

### Windows

```
cd firefix
copy user.js %APPDATA%\Mozilla\Firefox\Profiles\*.default\
```

If Firefox is running, you should restart it to affect the changes.

## Thanks

Firefix was inspired by the work in 
[firefox-debloat](https://github.com/amq/firefox-debloat) by amq.
