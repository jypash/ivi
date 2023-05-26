import {configureStore, combineReducers} from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from "redux-persist"
import user from "./reducers/user";
import oneFilm from "./reducers/oneFilm"
import storage from "redux-persist/lib/storage"
import movie from "./reducers/movie";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['users']
}

const rootReducer = combineReducers({
    user,
    oneFilm,
    movie
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store