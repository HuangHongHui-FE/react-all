

import React, { Component } from 'react'
import './css/10-index.css'
export default class App extends Component {
    a = 100

    state = {
        mytext:'',
        list:[{
            id:1,
            mytext:"aaa",
            isChecked:false
        },
        {
            id:2,
            mytext:"bbb",
            isChecked:false
        },
        {
            id:3,
            mytext:"ccc",
            isChecked:false
        }]
    }

    render() {
        return (
            <div>
                <input value={this.state.mytext} onChange={(evt)=>{
                    this.setState({
                        mytext:evt.target.value
                    })
                }}/>

                <button onClick={this.handleClick2}>add2</button>

                <ul>
                    {
                        this.state.list.map( (item,index)=>
                            <li key={item.id}>
                                <input type="checkbox" checked={item.isChecked} onChange={()=>this.handleChecked(index)}/>
                                {/* 富文本展示 */}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html:item.mytext
                                    }
                                } style={{textDecoration: item.isChecked ? "line-through": "" }}></span>
                                
                                {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}
                                
                                <button onClick={()=>this.handleDelClick(index)}>del</button>
                            </li>    
                        )
                    }
                </ul>
                <div className={this.state.list.length === 0? '': 'hidden'}>暂无待办事项</div>
            </div> )
    }

    handleChecked = (index)=>{
        let newlist = [...this.state.list]

        newlist[index].isChecked = !newlist[index].isChecked

        this.setState({
            list:newlist
        })
    }

    handleClick2 = ()=>{
        // 不要直接修改状态， 可能会造成不可预期的问题。
        let newlist = [...this.state.list]
        newlist.push({
            id:Math.random()*100000000, //生成不同id的函数
            mytext:this.state.mytext,
            isChecked:false
        })

        this.setState({
            list:newlist,
            mytext:""
        })
    }


    handleDelClick(index){
        console.log("del-click",index)

        // 不要直接修改状态， 可能会造成不可预期的问题。

        let newlist = this.state.list.concat()

        newlist.splice(index,1)

        this.setState({
            list:newlist
        })
    }

}
