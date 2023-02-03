import React, { Component } from 'react'

// 这个孩子的父亲是Navbar
class Child extends Component {
    render() {
        return <div>child</div>
    }
}

class Navbar extends Component {
    render() {
        return <div>navbar
            <Child></Child>
        </div>
    }
}


function Swiper() {
    return <div>swiper</div>
}


const Tabbar = () => <div>tabbar</div>


// 三个组件都继承App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>

                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}



