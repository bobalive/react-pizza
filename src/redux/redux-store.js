import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import tabsReducer from "./tabs-reducers";
import thunkMiddleware from 'redux-thunk'
import pizzaReducer from "./cards-reducer";

let reducers = combineReducers({
    nav:tabsReducer,
    pizza:pizzaReducer
})

export let store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware))