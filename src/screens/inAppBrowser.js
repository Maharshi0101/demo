import React, { useEffect, useState } from 'react'
import { BackHandler, Platform, View, Dimensions, PermissionsAndroid } from 'react-native'
import { WebView } from 'react-native-webview'
import Loader from '../components/loader'
import { ActivityIndicator } from 'react-native-paper';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const { height } = Dimensions.get('screen');

const InAppBrowser = ({ navigation }) => {
    const [webURL, setWebUrl] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userAgent, setUserAgent] = useState(null);

    const goBack = () => {
        navigation.goBack()
    }

    const onLoad = () => {
        setLoading(false)
    }

    useEffect(() => {
        // setWebUrl('https://www.google.com')
    }, [webURL])

    const requestCameraPermission = async () => {
        try {
            const result = await request(PERMISSIONS.IOS.CAMERA);
            if (result === RESULTS.GRANTED) {
                requestAudioPermission()
            }
        } catch (error) {
            console.error('Error requesting camera permission:', error);
        }
    };

    const requestAudioPermission = async () => {
        try {
            const result = await request(PERMISSIONS.IOS.MICROPHONE);
            console.log('result 1',result);
            if (result === RESULTS.GRANTED) {
                setWebUrl('https://www.google.com')
                setUserAgent('Mozilla/5.0 (Linux; An33qdroid 10; Android SDK built for x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.185 Mobile Safari/537.36')
            }
        } catch (error) {
            console.error('Error requesting audio permission:', error);
        }
    };


    const cameraPermission = async () => {
        let granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "Camera Permission",
                message:
                    "App needs access to your camera " +
                    "so others can see you.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            micPermission()
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    }

    const micPermission = async () => {
        let granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: "Audio Permission",
                message:
                    "App needs access to your audio / microphone",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the Microphone");
            setWebUrl('https://www.google.com')
            setUserAgent('Mozilla/5.0 (Linux; An33qdroid 10; Android SDK built for x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.185 Mobile Safari/537.36')
        } else {
            console.log("Microphone permission denied");
        }
    }

    useEffect(() => {
        Platform.OS === 'android' && cameraPermission();
        Platform.OS === 'ios' && requestCameraPermission();
    }, []);

    useEffect(() => {
        if (Platform.OS === 'android') {
            const backPress = () => {
                goBack()
                return true
            }
            BackHandler.addEventListener('hardwareBackPress', backPress)
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', backPress)
            }
        }
    }, [])


    const navigateToHome = () => {
        navigation?.navigate('Home')
    }

    return (
        <View style={{ flex: 1 }}>
            {loading && <ActivityIndicator size="small" color="#1279BE" />}
            {webURL && (
                <WebView
                    userAgent={userAgent}
                    onLoad={onLoad}
                    source={{
                        uri: webURL,
                    }}
                    mediaPlaybackRequiresUserAction={true}
                    renderLoading={() => <Loader />}
                    onMessage={(message) => {
                        if (message.nativeEvent.data === 'gohome') {
                            navigateToHome()
                        } else {
                            navigation.goBack()
                        }
                    }}
                />
            )}
        </View>
    )
}

export default InAppBrowser
