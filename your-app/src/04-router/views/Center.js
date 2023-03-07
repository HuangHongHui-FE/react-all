// withRouter
import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom'
import One from './One'

import NotFound from './NotFound'

class App extends Component {
    // 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
    //此时才能获取this.props,包含（history, match, location）三个对象
    // console.log(this.props);  //输出{match: {…}, location: {…}, history: {…}, 等}

    constructor(props) {
        super(props);
        props.history.listen((location) => {  //在这里监听location对象
            console.log(location.pathname);  //切换路由的时候输出"/one/users"和"/one/companies"
            switch (location.pathname) {   //根据路径不同切换不同的浏览器title
                case '/one/users': document.title = '用户列表'; break;
                case '/one/companies': document.title = '公司列表'; break;
                default: break;
            }
        })
    }
    render() {
        return (<div className='app'>
            <NavLink to='/one/users'>用户列表</NavLink>
            <NavLink to='/one/companies'>公司列表</NavLink>
            <Switch>
                <Route path='/one/:type?' component={One} />
                <Redirect from='/' to='/one' exact />
                <Route component={NotFound} />
            </Switch>
        </div>)
    }
}
export default withRouter(App);
