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

        <h2>国际化</h2>
        <div>
          <p onClick={() => this.goi18next() }>react-i18next</p>
          <p>react-intl 有demo可看</p>
        </div>

        <h2>hooks</h2>
        <div>
          <p onClick={() => this.goHooks()}>go hooks</p>
        </div>
        <h2>OtherStudy</h2>
        <div>
          <p onClick={() => this.goOtherStudy()}>go hooks</p>
        </div>
      </>
    )
  }
  goi18next(params) {
    // push跳转+携带params参数
        this.props.history.push('/guoji/i18next');
 
        // push跳转+携带search参数
        // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`)
 
        // push跳转+携带state参数
        // this.props.history.push(`/home/messages/detail`,{id,title})
  }

  goHooks(){
    this.props.history.push('/hooks');
  }

  goOtherStudy(){
    this.props.history.push('/otherStu/index')
  }

  
  componentDidMount() {

  }
}

export default Home;