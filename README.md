# Social login with Apple, Google & Facebook

This sample application shows how to implement social login with Apple, Google & Facebook help of firebase.

## Configure

Before running the application, you need for add your project on firebase.
firebase console link https://console.firebase.google.com/u/0/.

After create your project on firebase then you have need for add android and iOS app with respected Package ID and Bundle ID.

then need for enable sign-in-method in authentication section for google, facebook and apple.

Open the `SocialLoginModules/SocialLoginModules.js` file in your project and there added google, facebook and apple auhentication metthod. It is used in `App.js`

In `App.js` call SocialLoginModules methods thats return authentication data.

## Instalation 

Please follow this link https://rnfirebase.io/auth/social-auth .

## Android config

 Facebook : Need for add project on facebook developer console https://developers.facebook.com/. And complete basic settings. And add android app.
 Google : enable sign-in methods and configure GoogleSignin with webClientId From Firebase Console Settings

## iOS config 

Facebook : Need for add project on facebook developer console https://developers.facebook.com/. And complete basic settings. And add iOS app. and then add facebook app id in URL schema. and entry in info.plist.
Google : Add REVERSED_CLIENT_ID in URl schema.
Apple : Need for sign-in-with-apple certificate and profile and add capabilities.

## Run

### Android

- Run `npx react-native run-android`.

### iOS

- Run `npx react-native run-ios`.