import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import RadioButton from '../components/radioButton';
// import configData from "../json/configData.json";
import configEngData from '../json/configData_en.json'
import configArData from '../json/configData_ar.json'
import { useSelector, useDispatch } from 'react-redux'
import { changeAppLanguage } from '../store/slices/Languages-slice'
import { changeAppStrings } from '../store/slices/Localization-slice'
import { changeAppTheme } from '../store/slices/Themes-slice'
import Loader from '../components/loader'
import { useTheme } from '../contexts/theme';
import { useLanguage } from "../contexts/language";

export default function SettingsScreen({ navigation, route }) {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { currentTheme, switchTheme } = useTheme();
    const { setAppLanguage, strings } = useLanguage()
    const appLanguage = useSelector((state) => state?.langs?.appLanguage)
    const appTheme = useSelector((state) => state?.themes?.theme)
    const items = appLanguage === 'en' ? (configEngData)?.home_features : (configArData)?.home_features
    const menuItem = items.filter((data) => data.name === route?.name)

    const updateLanguage = (value) => {
        setLoading(true)
        dispatch(changeAppLanguage(value))
        dispatch(changeAppStrings(value))
        setAppLanguage(value)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate('Home')
        }, 500)
    }

    const updateAppTheme = (value) => {
        setLoading(true)
        dispatch(changeAppTheme(value))
        switchTheme(value)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate('Home')
        }, 500)
    }

    return (
        <View style={{ flex: 1, width: '90%', alignSelf: 'center' }}>
            {loading && <Loader />}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#1279BE'
            }}>
                <Text style={{
                    padding: 10,
                    width: '60%',
                    fontSize: 20,
                    fontWeight: "700",
                    color: currentTheme?.primaryText
                }}>{strings['select.theme']}</Text>
                <View style={{ height: '100%', borderWidth: 1, borderColor: '#1279BE', marginRight: 10 }} />
                <View style={{ padding: 10 }}>
                    <RadioButton
                        onChange={updateAppTheme}
                        value={appTheme}
                        PROP={menuItem[0]?.items[0]?.themes}
                        textStyles={{
                            color: currentTheme?.primaryText
                        }}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#1279BE'
            }}>
                <Text style={{
                    padding: 10,
                    width: '60%',
                    fontSize: 20,
                    fontWeight: "700",
                    color: currentTheme?.primaryText
                }}>{strings['select.language']}</Text>
                <View style={{ height: '100%', borderWidth: 1, borderColor: '#1279BE', marginRight: 10 }} />
                <View style={{ padding: 10 }}>
                    <RadioButton
                        onChange={updateLanguage}
                        value={appLanguage}
                        PROP={menuItem[0]?.items[1]?.language}
                        textStyles={{
                            color: currentTheme?.primaryText
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

