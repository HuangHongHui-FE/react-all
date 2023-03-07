// 类组件中使用
import React from "react";
import { withTranslation } from "react-i18next";

class App extends React.Component {

  render() {
	const { t } = this.props;
	return (<div className="App">
	  {t("title")}
	</div>);
  }
}

export default withTranslation()(App);