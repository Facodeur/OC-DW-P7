import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import useForm from "../utils/useForm";
import validate from "../utils/validateInfo";
import { Button, Card, Form, Row } from "react-bootstrap";

const FormLogin = ({ submitForm }) => {
  const login = () => {
    Axios.post("http://localhost:3010/api/user/login", {
      email: values.email,
      password: values.password,
    })
      .then((response) => {
        localStorage.setItem("user", response.data.token);
        console.log(response);
        Axios.defaults.headers.common["Authorization"] = response.data.token;
        redirectHome();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let history = useHistory();

  const redirectHome = () => {
    history.push("/home");
  };
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
      <Row className="justify-content-center mt-5">
    <Card
    bg="dark"
    text='white'
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header className="text-center">Me Connecter</Card.Header>
    <Card.Body>
    <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" >
            <Form.Label htmlFor="email">
              Email
            </Form.Label>
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
            <Form.Label htmlFor="password">
              Mot de passe
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </Form.Group>

          <Button style={{width: "100%"}} variant="info" type="submit" onClick={login}>
            Connexion
          </Button>
        </Form>
    </Card.Body>
  </Card>
      </Row>
  );
};

export default FormLogin;