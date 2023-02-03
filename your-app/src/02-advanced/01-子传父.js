import React, { Component } from 'react'

class Sidebar extends Component{
    render(){
        return <div style={{background:"yellow",width:"200px"}}> 
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    }
}


class Navbar extends Component{
    render(){
        return <div style={{background:"red"}}>
            <button onClick={()=>{
                   console.log("子通知父， 让父的isSHow 取反。", e) 
                   this.props.event('1') //调用父组件传来啊的回调函数
            }}>click</button>
            <span>navbar</span>
        </div>
    }
}



export default class App extends Component {
    state = {
        isShow:false
    }

    handleEvent = (e)=>{
        // console.log(e)
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <Navbar event={this.handleEvent}/>
                {this.state.isShow && <Sidebar/>}
            </div>
        )
    }
}

/*
父传子 ：属性，
子传父： 回调函数 callback
*/
