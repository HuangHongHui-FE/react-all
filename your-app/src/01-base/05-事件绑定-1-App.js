import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 1 onMouseOver */}
                <button onClick={() => {
                    console.log("click1", "如果处理逻辑过多， 不推荐这种写法")
                }}>add1</button>

                {/* 2. */}
                <button onClick={this.handleClick2}>add2</button>

                {/* 这样可以绑定使用this */}
                <button onClick={() => {
                    this.handleClick4()  // 比较推荐
                }}>add4</button>
            </div>
        )
    }

    handleClick2() {
        console.log("click2")
    }

    handleClick4 = () => {
        console.log("click4")
    }
}