import { Action, combineReducers } from "redux"
import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import profile from './profile-reducer'
import dialogs from './dialogs-reducer'
import users from "./users-reducer";
import auth from "./auth-reducer";
import app from "./app-reducer";

type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type RootThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A>

const rootReducer = combineReducers({ profile, dialogs, users, auth, app })

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
})

// @ts-ignore
window.__store__ = store

export default store