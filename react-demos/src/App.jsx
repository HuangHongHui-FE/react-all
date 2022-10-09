import { Component } from 'react'
import 'normalize.css'
class App extends Component {
  render() {
    return (
      <>
          {this.props.children}
      </>
    );
  }
  componentDidMount() {
    
  }
}
export default App;
