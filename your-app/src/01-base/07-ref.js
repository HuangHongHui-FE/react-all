import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    myref = React.createRef()
    render() {

        return (
            <div>
                {/* 严格模式下会有警告 */}
                {/* <input ref="mytext"/> */}
                
                <input ref={this.myref} />

                <button onClick={() => {
                    // console.log("click1",this.refs.mytext.value)  // 警告的那一种

                    console.log("click", this.myref.current.value)
                }}>add1</button>

                <button onClick={() => this.handleClick2()}>add2</button>
            </div>
        )
    }

    handleClick2 = () => {
        console.log("click2", this.myref.current.value)
    }
}
