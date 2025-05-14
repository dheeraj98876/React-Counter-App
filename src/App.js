import React from 'react';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import './App.css'; // Import CSS for header and footer

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>React Counter App</h1>
      </header>
      <main className="app-main">
        <CounterClass />
        <CounterFunction />
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 React Counter Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;