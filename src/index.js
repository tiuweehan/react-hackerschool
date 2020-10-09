import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import Games from './games/Games';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Games />
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

