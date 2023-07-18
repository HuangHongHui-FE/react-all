import React, { Component, useLayoutEffect, useEffect } from 'react'

export default class App extends Component {
    state = {
        isCreated: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isCreated: !this.state.isCreated
                    })
                }}>click</button>

                {this.state.isCreated && <Child />}
            </div>
        )
    }
}


function Child() {
    // 要是里面有dom操作的话，尽量用这个
    useLayoutEffect(() => {
        window.onresize = () => {
            console.log("resize")
        }

        var timer = setInterval(() => {
            console.log("111")
        }, 1000)

        return () => {  // 组件销毁的时候执行
            console.log('组件销毁')

            window.onresize = null
            clearInterval(timer)
        }
    }, [])

    return <div>
        child
    </div>
}
