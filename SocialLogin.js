import React, { Component } from 'react';
import { View } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';

class SocialLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // From Firebase Console Settings
        GoogleSignin.configure({ webClientId: '352443083199-211bu61a287cknvll4uoatahnh402itn.apps.googleusercontent.com' });
    }

    render() {
        return (
            <>

                <View style={{ flex: 1, backgroundColor: 'cyan' }}>


                </View>

            </>
        );
    }

}

export default SocialLogin;