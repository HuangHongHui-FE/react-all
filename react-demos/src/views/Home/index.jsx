import React, { Component } from "react";

import logo from '../../static/image/01.png'
import './index.less'

class Home extends Component {
  state = {

  };
  render() {
    return (
      <>
        <header className="App_header">
          <img src={logo} alt="logo" className="head_img" />
        </header>
      </>
    )
  }
  componentDidMount() {
    
  }
}

export default Home;