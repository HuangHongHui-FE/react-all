import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom'
import './index.less'

class Home extends Component {
  state = {

  };
  render() {
    return (
      <>
        <h1>首页</h1>
        <h2>IMG</h2>
        <div>
          <Link to="/img/imgbetter">图片优化-imgbetter</Link>
        </div>

        <h2>reactAPI</h2>
        <div className="react_api">
          {/* 高亮配置 */}
          <NavLink activeClassName='active_api_mome' to="/reactapi/memo">memo</NavLink>
        </div>
      </>
    )
  }
  componentDidMount() {

  }
}

export default Home;