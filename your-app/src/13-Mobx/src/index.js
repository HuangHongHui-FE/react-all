import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'mobx-react'
import store from './mobx/store'
ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>

    // </React.StrictMode>
    , document.getElementById("root"))
