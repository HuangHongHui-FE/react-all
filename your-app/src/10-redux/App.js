import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'
export default class App extends Component {
    state = {
        isShow: true
    }

    componentDidMount() {
        console.log(store.getState().TabbarReducer.show);
        store.subscribe(() => {
            this.setState({
                isShow: store.getState().TabbarReducer.show
            })
        })
    }
    // store.subsribe 订阅, 订阅是为了涉及到的状态改变时能及时的更新页面
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