import './App.less';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='header_index'>header_index</div>
        <Header></Header>
      </header>
      <content>内容</content>
      <footer>dibu1</footer>
    </div>
  );
}

export default App;
