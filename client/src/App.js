import React from 'react';
import './App.css';
import Form from './components/Form';
import FormLogin from './components/FormLogin'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Post from './pages/Post';
import Axios from 'axios';


function App() {

  Axios.defaults.headers.common['Authorization'] = localStorage.getItem('login');
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route exact path='/home' render={() => <Home />}/>
          <Route exact path='/create-post' render={() => <CreatePost />}/>
          <Route exact path='/post/:postId' render={() => <Post />} />
          <Route exact path='/login' render={() => <FormLogin />} />
          <Route exact path='/signup' render={() => <Form />} />
        </Switch>
      </Router> 
      
    </>
  );
}

export default App;