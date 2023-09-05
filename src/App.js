
import './App.css';
import BasicObject from './component/basicObject';
import BasicArray from './component/basicArray';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Basici React Object   </h1> <h1>   Basic React Array</h1>
      </header>
      <div className='App-div'>
      <BasicObject  />
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <  BasicArray/>
      </div>
    </div>
  );
}

export default App;
