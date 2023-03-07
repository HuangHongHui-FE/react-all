import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// 服务端渲染可用
import loadable from '@loadable/component'

import routeConfig from './routeConfig';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                {
                    routeConfig.map((item) => {
                        const Component = loadable(() => import(`${item.component}`));
                        return (
                            <Route key={item.name} path={item.path}>
                                <Component />
                            </Route>
                        )
                    })
                }
            </Switch>
        </Router>
    )
}