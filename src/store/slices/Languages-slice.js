import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { changeAppStrings } from './Localization-slice'


const languagesSlice = createSlice({
    name: 'langs',
    initialState: {
        appLanguage: 'en'
    },
    reducers: {
        changeAppLanguage(state, action) {
            state.appLanguage = action.payload
        }
    },
})

export const { changeAppLanguage } = languagesSlice.actions

export default languagesSlice.reducer
