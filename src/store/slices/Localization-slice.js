import LocalizedStrings from 'react-native-localization'
import { createSlice } from '@reduxjs/toolkit'
import en from '../../localization/en.json'
import ar from '../../localization/ar.json'

export const Localized = new LocalizedStrings({ en, ar })

const localizationSlice = createSlice({
    name: 'localization',
    initialState:{
        strings: Localized
    },
    reducers: {
        changeAppStrings(_state, action) {
            Localized.setLanguage(action.payload)
        }
    },
})

export const { changeAppStrings } = localizationSlice.actions

export default localizationSlice.reducer
