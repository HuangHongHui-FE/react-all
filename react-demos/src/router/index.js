import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../App'
import Home from '../views/Home'
import Fast from '../views/Fast'
// img
import ImgBetter from '../views/Img/ImgBetter'

// reactApi
import Memo from '../views/ReactApi/memo'

// 国际化
import I18next from '../views/GuoJi/I18next'
const BaseRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={()=>(
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
            </Switch>
          </App>
        )}></Route>
      </Switch>
    </Router>
  )
}
export default BaseRouter;


