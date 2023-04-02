import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'

import { connect } from 'react-redux'
class App extends Component {
    componentDidMount() {
        // 注意这里作为props传进来
        console.log(this.props)
    }
    // store.subsribe 订阅
    render() {
        return (
            <div>
                {/* 其他的内容 */}
                <MRouter>
                    {this.props.isShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        a: 1,
        b: 2,
        isShow: state.TabbarReducer.show
    }
}

// 连接React组件与 Redux store
export default connect(mapStateToProps)(App)
