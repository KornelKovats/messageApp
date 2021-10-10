import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
