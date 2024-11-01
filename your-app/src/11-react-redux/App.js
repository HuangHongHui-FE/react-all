import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'

import {connect} from 'react-redux'
class App extends Component {
    componentDidMount() {
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
const mapStateToProps = (state)=>{
    return {
        a:1,
        b:2,
        isShow:state.TabbarReducer.show
    }
}
export default  connect(mapStateToProps)(App)
