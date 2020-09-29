import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          <Route path='/login' exact render={() => <Login />} />
          <Route path='/signup' exact render={() => <Signup />} />
        </Switch>
      </Router> 
    </>
  );
}

export default App;
