import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import useForm from "../utils/useForm";
import validate from "../utils/validateInfo";
import { Button, Card, Form, Row } from "react-bootstrap";

const FormSignup = ({ submitForm }) => {
  const register = () => {
    Axios.post("http://localhost:3010/api/user/signup", {
      username: values.username,
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate,
    register
  );

  return (
    <Row className="justify-content-center mt-5">
      <Card bg="dark" text="white" style={{ width: "18rem" }} className="mb-2">
        <Card.Header className="text-center">M'inscrire</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label htmlFor="username">Nom utilisateur</Form.Label>
              <Form.Control
                id="username"
                type="text"
                name="username"
                placeholder="Entrer un nom utilisateur"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Entrez votre email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label htmlFor="password">Mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password2"
                type="password"
                name="password2"
                placeholder="Confirmez le mot de passe"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </Form.Group>

            <Button
              style={{ width: "100%" }}
              variant="info"
              type="submit"
              onClick={register}
            >
              M'enregister
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default FormSignup;

{
  /* <Form className="form" onSubmit={handleSubmit}>
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
            </Form> */
}
