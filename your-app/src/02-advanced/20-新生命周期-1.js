import React, { Component } from 'react'

export default class App extends Component {
    state  = {
        myname:"kerwin",
        myage:100
    }
    // componentWillMount 初始化
    static getDerivedStateFromProps(nextProps,nextState){
        console.log(this)
        console.log("getDrivedStateFromProps", nextProps, nextState)
        return {
            myname: nextState.myname.substring(0,1).toUpperCase()+nextState.myname.substring(1)
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        myname: "xiaoming"
                    })
                }}>click</button>
                app - {this.state.myname}-{this.state.myage}
            </div>
        )
    }
}
