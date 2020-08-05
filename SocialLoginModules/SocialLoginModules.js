import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import appleAuth, { AppleAuthRequestScope, AppleAuthRequestOperation } from '@invertase/react-native-apple-authentication';

export async function appleLogin() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
    });
    if (!appleAuthRequestResponse.identityToken) {
        throw 'Apple Sign-In failed - no identify token returned';
    }
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
    return auth().signInWithCredential(appleCredential);
}

export async function googleLogin() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}

export async function facebookLogin() {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
        throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    return auth().signInWithCredential(facebookCredential);
}