import React from "react";
import "./App.css";
import Form from "./components/Form";
import FormLogin from "./components/FormLogin";
import Header from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import UserProfil from './components/UserProfil';

function App() {
  return (
    <>
          
          <Router>
            <Header />
              
            <Switch>
              <Route exact path="/home" render={() =><Home />} />
              <Route exact path="/post/:postId" render={() => <Post />} />
              <Route exact path="/connexion" render={() => <FormLogin />} />
              <Route exact path="/inscription" render={() => <Form />} />
              <Route exact path="/profil" render={() =><UserProfil />} />
            </Switch>
          </Router>   
    </>
  );
}

export default App;