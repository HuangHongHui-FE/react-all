import React, { Component } from 'react'
import { HashRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import Cinemas from '../views/Cinemas'
import Detail from '../views/Detail'

// BrowserRouter 没有#的路径，好看 ，真正朝后端发请求要页面，后端没有对应的路径处理路径， 就会404， 不好看。
export default class IndexRouter extends Component {
    render() {
        return (
            <Router>
                {this.props.children}
                <Switch>
                    <Route path="/cinemas" component={Cinemas} />
                    {/* /detail/1111  动态路由 */}
                    <Route path="/detail/:myid" component={Detail} />
                </Switch>
            </Router>
        )
    }
}