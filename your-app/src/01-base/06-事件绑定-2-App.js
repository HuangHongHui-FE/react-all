import React, { Component } from 'react'

export default class App extends Component {
    a = 100

    render() {

        return (
            <div>
                <button onClick={() => {
                    console.log("click1", "如果处理逻辑过多， 不推荐这种写法", this.a)
                }}>add1</button>

                <button onClick={this.handleClick2.bind(this, '111')}>add2-不推荐这种写法</button>
                <button onClick={this.handleClick3('参数')}>add3-推荐</button>
                <button onClick={() => this.handleClick4('参数')}>add4-比较推荐-传参</button>
            </div>
        )
    }


    handleClick2(c) {
        console.log("click2", this.a, c)
    }

    // 推荐
    handleClick3 = (evt) => {
        console.log("click3", this.a, evt)
    }

    // 更推荐（传参要用）
    handleClick4(c) {
        console.log("click4", this.a, c)
    }
}


/**
*React并不会真正的绑定事件到每一个具体《》的元素上，而是采用事件代理的模式：*
**/

var obj1 = {
    name: "obj1",
    getName() {
        console.log(this.name)
    }
}

var obj2 = {
    name: "obj2",
    getName() {
        console.log(this.name)
    }
}
obj1.getName.bind(obj2)()
// obj2.getName()


// var obtn = document.getElementById("btn")
// obtn.onclick=function(){
//     console.log(this)
// }