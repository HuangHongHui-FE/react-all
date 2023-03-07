//1. 引入redux, 
//2. createStore( reducer )
import { applyMiddleware, combineReducers, createStore } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
 import reduxPromise from 'redux-promise'
const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})
const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise));


export default store