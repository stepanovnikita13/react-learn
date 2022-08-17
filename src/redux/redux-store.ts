import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import profile from './profile-reducer'
import dialogs from './dialogs-reducer'
import users from "./users-reducer";
import auth from "./auth-reducer";
import app from "./app-reducer";

const rootReducer = combineReducers({ profile, dialogs, users, auth, app })
type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
})

// @ts-ignore
window.__store__ = store

export default store