import React, { Component } from 'react'

export default class App extends Component {
    state  = {
        myname:"kerwin"
    }
    render() {
        console.log("render")
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        myname:"xiaoming"
                    })
                }}>click</button>

                {this.state.myname}
            </div>
        )
    }
    // scu 性能优化函数
    
    shouldComponentUpdate(nextProps,nextState){  // 父传子好像会更新
        // this.state  老的状态
        // nextState   新的状态

        console.log(nextProps, nextState)
        if(JSON.stringify(this.state) !== JSON.stringify(nextState)){  // 注意这个判断的意图
            return true
        }

        return false  // 下面的周期就不会触发
    }

    UNSAFE_componentWillUpdate(){
        console.log("UNSAFE_componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}
