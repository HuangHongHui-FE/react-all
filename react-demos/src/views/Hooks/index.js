import React from 'react';
// import { Switch, Route } from 'react-router-dom'

import './index.less';
import UseState from './useState'

export default function Index(props) {
    const hooksArr = [
        { name: 'useState', path: '/hooks/useState', component: UseState },
        { name: 'useReducer', path: '/hooks/useReducer', component: UseState },
        { name: 'useContext', path: '/hooks/useContext', component: UseState },
        { name: 'useEffect', path: '/hooks/useEffect', component: UseState },
        { name: 'useCallback', path: '/hooks/useCallback', component: UseState },
        { name: 'useRef', path: '/hooks/useRef', component: UseState },
        { name: 'useMemo', path: '/hooks/useMemo', component: UseState },
        { name: 'useUpdateInputSelf', path: '/hooks/useUpdateInputSelf', component: UseState },
        { name: 'useGetPostSelf', path: '/hooks/useGetPostSelf', component: UseState },
        { name: 'useParamsLocation', path: '/hooks/useParams-useLocation', component: UseState },
    ];

    // 事件代理
    function gohook(e) {
        let path = e.target.dataset?.path;
        if (path) {
            props.history.push(path);
        }
    }

    return <div className='container' onClick={(e) => gohook(e)}>
        {
            hooksArr.map((item, index) => {
                return <p key={index} data-path={item.path}>{item.name}</p>
            })
        }

        {/* 在组件里面配置路由，是直接新增进来 */}
        {/* <Switch>
            {
                hooksArr.map((item, index) => {
                    return <Route path={item.path} component={UseState} key={index}></Route>
                })
            }
        </Switch> */}
    </div>
}


