import React, { Component } from 'react'
import { HashRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Detail from '../views/Detail'
import NotFound from '../views/NotFound'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'

function isAuth(){
    return localStorage.getItem("token")
}


// BrowserRouter 没有#的路径，好看 ，真正朝后端发请求要页面，后端没有对应的路径处理路径， 就会404， 不好看。
export default class IndexRouter extends Component {
    render() {
        return (
            <Router>
                {this.props.children}
                <Switch>
                    <Route path="/films" component={Films} />

                    {/* <Route path="/films/nowplaying" component={Nowplaying}/> */}

                    <Route path="/cinemas" component={Cinemas} exact/>
                    <Route path="/cinemas/search" component={Search} />
                    {/* <Route path="/center" component={Center} /> */}
                    <Route path="/center" render={(props)=>{
                        // console.log(props)
                        return isAuth()?<Center myname="kerwin"/>:<Redirect to="/login"/>
                    }}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/city" component={City}/>

                    {/* /detail/1111  动态路由 */}
                    <Route path="/detail/:myid" component={Detail} />

                    {/* <Route path="/detail" component={Detail} /> */}
                    
                    {/* 模糊匹配 */}
                    <Redirect from="/" to="/films" exact/>

                    {/* 精确匹配  exact */}
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}