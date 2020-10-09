import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './home/Home';
import Games from './games/Games';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

