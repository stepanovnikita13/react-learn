import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import profile from './profile-reducer'
import dialogs from './dialogs-reducer'
import users from "./users-reducer";
import auth from "./auth-reducer";
import app from "./app-reducer";

let reducers = combineReducers({ profile, dialogs, users, auth, app })

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store;

export default store;