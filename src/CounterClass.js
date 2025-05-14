import React, { Component } from 'react';
import './CounterClass.css'; // Import the CSS file

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Class Counter</h2>
        <p className="counter-value">{this.state.count}</p>
        <div className="button-group">
          <button className="counter-button decrement" onClick={this.decrement}>
            -
          </button>
          <button className="counter-button increment" onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;