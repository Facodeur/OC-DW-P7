import React from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({ submitForm }) => {

    const register = () => {
        Axios.post("http://localhost:3010/api/user/signup", {
        username: values.username,
        email: values.email, 
        password: values.password
        }).then((response) => {
        console.log(response)
        }).catch(error => console.log(error))
    };

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate, register);
    
    
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2>M'inscrire</h2>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
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
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm password
                    </label>
                    <input 
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Confirm password"
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit" onClick={register}>Go !</button>
                <span className="form-input-login">
                    Already have an account? Login <Link to="/connexion">here</Link>
                </span>
            </form>
        </div>
    )
}

export default FormSignup;
