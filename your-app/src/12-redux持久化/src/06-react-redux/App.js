import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'

import { connect } from 'react-redux'
class App extends Component {
    componentDidMount() {
        console.log('app-props---', this.props)
    }
    // store.subsribe 订阅
    render() {
        return (
            <div>
                <MRouter>
                    {this.props.isShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        a: 1,  // 变为app组件的state
        b: 2,
        isShow: state.TabbarReducer.show
    }
}
export default connect(mapStateToProps)(App)