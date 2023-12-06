import React, { useEffect, useState } from 'react'
import { BackHandler, Platform, View, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import Loader from '../components/loader'
import { ActivityIndicator } from 'react-native-paper';

const { height } = Dimensions.get('screen');

const InAppBrowser = ({ navigation }) => {
    const [webURL, setWebUrl] = useState(null)
    const [loading, setLoading] = useState(true)

    const goBack = () => {
        navigation.goBack()
    }

    const onLoad = () => {
        setLoading(false)
    }

    useEffect(() => {
        setWebUrl('https://meet352.webex.com/meet/pr26403223056')
    }, [webURL])

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
                    onLoad={onLoad}
                    source={{
                        uri: webURL,
                    }}
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
