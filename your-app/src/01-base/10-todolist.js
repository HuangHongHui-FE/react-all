import React, { Component } from 'react'
import './css/10-index.css'

export default class App extends Component {
    a = 100
    myref = React.createRef()
    state = {
        list: [{
            id: 1,
            mytext: "aaa"
        },
        {
            id: 2,
            mytext: "bbb"
        },
        {
            id: 3,
            mytext: "ccc"
        }]
    }
    render() {
        return (
            <div>
                <input ref={this.myref} />
                <button onClick={this.handleClick2}>add2</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {item.mytext}
                                <button onClick={() => this.handleDelClick(index)}>del</button>
                            </li>
                        )
                    }
                </ul>
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事项</div>
            </div>
        )
    }

    handleClick2 = () => {
        // 不要直接修改状态， 可能会造成不可预期的问题。
        // this.state.list.push(this.myref.current.value)

        let newlist = [...this.state.list]
        newlist.push({
            id: Math.random() * 100000000, //生成不同id的函数
            mytext: this.myref.current.value
        })
        this.setState({
            list: newlist
        })
    }


    handleDelClick(index) {
        // 不要直接修改状态， 可能会造成不可预期的问题。
        let newlist = this.state.list.concat()
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }
}
