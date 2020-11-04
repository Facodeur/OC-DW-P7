import React from "react";
import "./App.css";
import FormSignup from "./components/FormSignup";
import FormLogin from "./components/FormLogin";
import Header from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import UserProfil from './components/UserProfil';
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
          
          <Router>
            <Header />
            <Container>
              <Switch>
              <Route exact path="/home" render={() =><Home />} />
              <Route exact path="/post/:postId" render={(props) => <Post {...props} />} />
              <Route exact path="/profil" render={() =><UserProfil />} />
              <Route exact path="/connexion" render={() => <FormLogin />} />
              <Route exact path="/inscription" render={() => <FormSignup />} />
            </Switch>
            </Container>
            
          </Router>   
    </>
  );
}

export default App;