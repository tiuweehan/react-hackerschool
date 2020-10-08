import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Games from './games/Games';

class App extends React.Component {
  render() {
    return (
      <div>
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

