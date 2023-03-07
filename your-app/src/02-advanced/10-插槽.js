import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>
            <h3>child</h3>

            {/* 插槽 vue slot,具名插槽 */}
            {this.props.children[2]}
            {this.props.children[1]}
            {this.props.children[0]}
        </div>
    }
}

class Swiper extends Component{
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Swiper>
                    <div>111111</div>
                    <div>222222</div>
                    <div>333333</div>
                </Swiper>
                
                <Child>
                    <div>11111111</div>
                    <div>22222222</div>
                    <div>33333333</div>
                </Child>
            </div>
        )
    }
}
