import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';



const FormLogin = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    const login = () => {
        Axios.post("http://localhost:3010/api/user/login", {
          email: values.email, 
          password: values.password
        })
        .then((response) => {
          localStorage.setItem('login', response.data.token);
            console.log(response);
            Axios.defaults.headers.common['Authorization'] = response.data.token
            redirectHome();
        })
        .catch(err => console.log(err)) 
      };

      let history = useHistory();
      const redirectHome = () => {
        history.push("/home");
      }

    return (
        <div className="form-container">
          <div className="form-content-left">
                <img src="images/icon2.svg" alt="spaceship" className="form-img" />
            </div>
            <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                
                <button className="form-input-btn" type="submit" onClick={login}>Log in</button>
            </form>
        </div>




        </div>
        
    )
}

export default FormLogin