import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Signup.css';

function Signup() {

  const [usernameReg, setUsernameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register = () => {
    Axios.post("http://localhost:3010/api/signup", {
      username: usernameReg,
      email: emailReg, 
      password: passwordReg
    }).then((response) => {
      console.log(response)
    });
  };

    return (
        <div className="signup">
        <h1>SignUp</h1>
        <label>Username</label>
        <input 
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
           />
           <label>Email</label>
        <input 
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
           />
        <label>Password</label>
        <input 
          type="password" 
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          />
        <button onClick={register}>Register</button>
      </div>
    )
}


 
export default Signup;