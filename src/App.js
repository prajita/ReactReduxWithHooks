import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state)=> state.counter)
  return (
    <div className="App">
      <header className="App-header">
      <div className='bck'></div>
        <p className="counter">
          COUNTER VALUE : {counter}
        </p> 
        <div>
        <button onClick={()=>dispatch({type: 'INCREMENT'})}> increment</button>
        <button onClick={()=>dispatch({type: 'DECREMENT'})}>decrement</button>

        </div>
      </header>
    </div>
  );
}

export default App;
