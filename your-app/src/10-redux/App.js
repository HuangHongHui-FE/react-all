import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'
export default class App extends Component {
    state = {
        isShow: store.getState()
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                isShow: store.getState().TabbarReducer.show
            })
        })
    }
    // store.subsribe 订阅
    render() {
        return (
            <div>
                <MRouter>
                    {this.state.isShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}