import {
    configureStore,
    combineReducers,
} from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
} from "redux-persist";

import cartSlice from "./cartSlice/cartSlice";


const storage = {

    getItem: (key) => {
        return Promise.resolve(
            localStorage.getItem(key)
        );
    },

    setItem: (key, value) => {
        localStorage.setItem(key, value);

        return Promise.resolve();
    },

    removeItem: (key) => {
        localStorage.removeItem(key);

        return Promise.resolve();
    },
};


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};


const rootReducer = combineReducers({
    cart: cartSlice,
});


const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);


export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/PAUSE",
                    "persist/FLUSH",
                    "persist/PURGE",
                    "persist/REGISTER",
                ],
            },
        }),
});


export const persistor = persistStore(store);