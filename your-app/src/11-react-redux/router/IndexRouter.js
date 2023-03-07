import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import City from '../views/City'
import Cinemas from '../views/Cinemas'
// BrowserRouter 没有#的路径，好看 ，真正朝后端发请求要页面，后端没有对应的路径处理路径， 就会404， 不好看。
export default class IndexRouter extends Component {
    render() {
        return (
            <Router>
                {this.props.children}
                <Switch>
                    <Route path="/city" component={City} />
                    <Route path="/cinemas" component={Cinemas} />
                </Switch>

            </Router>
        )
    }
}