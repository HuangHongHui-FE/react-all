
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                app
            </div>
        )
    }
}

//调度中心
var bus = {
    list:[],
    //订阅
    subscribe(callback){
        this.list.push(callback)
    },
    //发布
    publish(text){
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}


// 订阅者
bus.subscribe((value)=>{
    console.log("11111",value)
})

bus.subscribe((value)=>{
    console.log("2222",value)
})



//发布者

setTimeout(()=>{
    bus.publish("男人看了沉默111")
},0)


setTimeout(()=>{
    bus.publish("男人看了沉默222")
},1000)

setTimeout(()=>{
    bus.publish("男人看了沉默333")
},2000)

// Redux 基于订阅发布 
