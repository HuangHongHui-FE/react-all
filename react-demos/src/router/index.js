import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App'
import Home from '../views/Home'
import Fast from '../views/Fast'
// img
import ImgBetter from '../views/Img/ImgBetter'

// reactApi
import Memo from '../views/ReactApi/memo';

// 国际化
import I18next from '../views/GuoJi/I18next';

// hooks
import Hooks from '../views/Hooks'
import UseState from '../views/Hooks/useState'
import useReducer from '../views/Hooks/useReducer'
import UseContext from '../views/Hooks/useContext'
import UseEffect from '../views/Hooks/useEffect'
// import UseMemo from '../views/Hooks/useMemo'
import UseMemo from '../views/ReactApi/memo'
import UseCallback from '../views/Hooks/useCallback'
import UseRef from '../views/Hooks/useRef'
// 自定义的hooks
import UseUpdateInputSelf from '../views/Hooks/useUpdateInputSelf'
import UseGetPostSelf from '../views/Hooks/useGetPostSelf'

// 路由hooks
import UseParamsLocation from '../views/Hooks/useParams-useLocation'
const BaseRouter = () => {

  const hooksArr = [
    { name: 'useState', path: '/hooks/useState', component: UseState },
    { name: 'useReducer', path: '/hooks/useReducer', component: useReducer },
    { name: 'useContext', path: '/hooks/useContext', component: UseContext },
    { name: 'useEffect', path: '/hooks/useEffect', component: UseEffect },
    { name: 'useCallback', path: '/hooks/useCallback', component: UseCallback },
    { name: 'useRef', path: '/hooks/useRef', component: UseRef },
    { name: 'useMemo', path: '/hooks/useMemo', component: UseMemo },
    { name: 'useUpdateInputSelf', path: '/hooks/useUpdateInputSelf', component: UseUpdateInputSelf },
    { name: 'useGetPostSelf', path: '/hooks/useGetPostSelf', component: UseGetPostSelf },
    // 路由钩子函数
    { name: 'useParamsLocation', path: '/hooks/useParams-useLocation', component: UseParamsLocation }
  ];


  return (
    <Router>
      <Switch>
        <Route path="/" component={() => (
          <App>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/fast" component={Fast}></Route>
              {/* img about */}
              <Route path="/img/imgbetter" component={ImgBetter}></Route>

              {/* react API */}
              <Route path="/reactapi/memo" component={Memo}></Route>

              {/* 国际化 */}
              <Route path="/guoji/i18next" component={I18next}></Route>

              {/* hooks */}
              <Route path="/hooks" exact component={Hooks}></Route>
              {
                hooksArr.map((item, index) => {
                  return <Route path={item.path} component={item.component} key={index}></Route>
                })
              }
            </Switch>
          </App>
        )}></Route>
      </Switch>
    </Router>
  )
}
export default BaseRouter;


