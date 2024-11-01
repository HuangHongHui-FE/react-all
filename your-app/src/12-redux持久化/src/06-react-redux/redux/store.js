//1. 引入redux, 
//2. createStore( reducer )
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'kerwin',
  storage,
  whitelist: ['CityReducer']
}

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));
let persistor = persistStore(store)

export { store, persistor }

export default store