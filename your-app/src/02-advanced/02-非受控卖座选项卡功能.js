
import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'

import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

export default class App extends Component {
    state = {
        // 控制在哪个组件
        current:1
    }

    which(){
        switch (this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <Navbar myevent={()=>{
                    console.log("navbar-center","告诉tabbar去切换到center组件,高亮？")

                    this.setState({
                        current:2
                    })
                }}/>

                {
                    //表达式--支持函数表达式
                    this.which()
                }

                <Tabbar myevent={
                    (index)=>{
                        this.setState({
                            current:index
                        })
                    }
                } defaultValue={this.state.current}></Tabbar>
            </div>)
    }
}
