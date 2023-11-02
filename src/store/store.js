import { combineReducers, configureStore } from '@reduxjs/toolkit'
import localizationReducer from './slices/Localization-slice'
import languagesReducer from './slices/Languages-slice'
import themesReducer from './slices/Themes-slice'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  langs: languagesReducer,
  localization: localizationReducer,
  themes: themesReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export const persistor = persistStore(store)
