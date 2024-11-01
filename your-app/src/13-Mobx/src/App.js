import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import { inject, observer } from 'mobx-react'

@inject("store")
@observer
class App extends Component {
    // store.subsribe 订阅
    state = {
        isShow:false
    }

    componentDidMount() {
        // autorun(()=>{
        //     console.log(store.isTabbarShow)

        //     this.setState({
        //         isShow:store.isTabbarShow
        //     })
        // })

        // console.log(this.props.store.isTabbarShow)
    }
    

    render() {
        return (
           <div>
                {/* 其他的内容 */}
                <MRouter>
                    {this.props.store.isTabbarShow && <Tabbar></Tabbar>}
                </MRouter>
           </div>
        )
    }
}

export default App