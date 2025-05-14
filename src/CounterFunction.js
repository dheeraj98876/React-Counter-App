import React, { useState } from 'react';
import './CounterFunction.css'; // Import the CSS file

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h2>Function Counter</h2>
     <div className='counterflex'>
      <p className="counter-value">{count}</p>
      <div className="button-group">
        <button className="counter-button decrement" onClick={decrement}>
          -
        </button>
        <button className="counter-button increment" onClick={increment}>
          +
        </button>
      </div>
      </div>
    </div>
  );
};

export default CounterFunction;