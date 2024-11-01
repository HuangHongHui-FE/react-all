
import React, { Component } from 'react'
import './css/12-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'

export default class App extends Component {
    state = {
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
        current:0
    }
    handleClick(index){
        this.setState({
            current:index
        })
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
                {
                    //表达式--支持函数表达式
                    this.which()
                }
                <ul>
                    {
                        this.state.list.map( (item,index)=>
                            <li key={item.id} className={this.state.current=== index? 'active':''} onClick={()=>this.handleClick(index)}>
                                {item.text}
                            </li>    
                        )
                    }
                </ul>
            </div>)
    }
}
