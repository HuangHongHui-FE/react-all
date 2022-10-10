import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../App'
import Home from '../views/Home'
import Fast from '../views/Fast'
import ImgBetter from '../views/Img/ImgBetter'

const BaseRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={()=>(
          <App>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/fast" component={Fast}></Route>
              <Route path="/img/imgbetter" component={ImgBetter}></Route>
            </Switch>
          </App>
        )}></Route>
      </Switch>
    </Router>
  )
}
export default BaseRouter;


