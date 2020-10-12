import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const[loginStatus, setLoginStatus] = useState('');

  const login = () => {
    Axios.post("http://localhost:3010/api/login", {
      email: email, 
      password: password
    }).then((response) => {
        console.log(response)
      if(response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data.userId)
      }
    });
  };



    return (
        <div className="login">
        <h1>Login</h1>
        <input 
          type="text" 
          placeholder="Email..." 
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input 
          type="password" 
          placeholder="Password..." 
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
        <button onClick={login} >Login</button>

        <h1>{loginStatus}</h1>
      </div>
    )
}

export default Login;