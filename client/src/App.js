import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Post from './pages/Post';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/home' exact render={() => <Home />}/>
          <Route path='/create-post' exact render={() => <CreatePost />}/>
          <Route path='/post/:postId' exact render={() => <Post />} />
          <Route path='/login' exact render={() => <Login />} />
          <Route path='/signup' exact render={() => <Signup />} />
        </Switch>
      </Router> 
      
    </>
  );
}

export default App;