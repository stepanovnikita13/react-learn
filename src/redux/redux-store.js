import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import profile from './profile-reducer'
import dialogs from './dialogs-reducer'
import users from "./users-reducer";
import auth from "./auth-reducer";
import app from "./app-reducer";

let reducers = combineReducers({ profile, dialogs, users, auth, app })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunk)
));

window._store = store;

export default store;