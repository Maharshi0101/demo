import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const themesSlice = createSlice({
    name: 'themes',
    initialState: {
        theme: 'light'
    },
    reducers: {
        changeAppTheme(state, action) {
            state.theme = action.payload
        }
    },
})

export const { changeAppTheme } = themesSlice.actions

export default themesSlice.reducer
