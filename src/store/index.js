import { configureStore } from "@reduxjs/toolkit"
import logger from 'redux-logger'
import pokeReducer from "./reducers/pokemon.js"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger),
    reducer: {
        pokemon: pokeReducer,
    }
})

export default store