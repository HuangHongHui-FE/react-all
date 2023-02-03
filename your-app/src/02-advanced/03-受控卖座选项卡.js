import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent2/Film'
import Cinema from './maizuocomponent2/Cinema'
import Center from './maizuocomponent2/Center'
import Tabbar from './maizuocomponent2/Tabbar'
import Navbar from './maizuocomponent2/Navbar'

export default class App extends Component {
    state = {
        current:1,
        list:[
            {
                id:1,
                text:"电影"
            },
            {
                id:2,
                text:"影院"
            },
            {
                id:3,
                text:"我的"
            }
        ],
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
                } current={this.state.current} list={this.state.list}></Tabbar>
            </div>)
    }
}
