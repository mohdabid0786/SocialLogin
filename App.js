import React, { Component } from 'react';
import { View, Button, Platform } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { googleLogin, facebookLogin, appleLogin } from './SocialLoginModules/SocialLoginModules';

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // From Firebase Console Settings
        GoogleSignin.configure({ webClientId: '352443083199-211bu61a287cknvll4uoatahnh402itn.apps.googleusercontent.com' });
    }

    render() {
        return (
            <>

                <View style={{ flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center' }}>

                    <Button
                        title='Google'
                        onPress={() => {
                            googleLogin().then((res) => {
                                console.log('Google Auth data is :', JSON.stringify(res))
                            })
                        }}
                    />

                    <Button
                        title='Facebook'
                        onPress={() => {
                            facebookLogin().then((res) => {
                                console.log('Facebook Auth data is :', JSON.stringify(res))
                            })
                        }}
                    />

                    {Platform.OS === 'ios' && <Button
                        title='Apple'
                        onPress={() => {
                            appleLogin().then((res) => {
                                console.log('Apple Auth data is :', JSON.stringify(res))
                            })
                        }}
                    />}

                </View>

            </>
        );
    }

}

export default App;