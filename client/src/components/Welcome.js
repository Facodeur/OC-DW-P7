import React from "react";
import { Jumbotron, Image, Container } from "react-bootstrap";
import welcomeImage from '../images/feedback.jpg'

const Welcome = () => {
  return (
    <>
      <Jumbotron>
        <h2>Bienvenue sur notre réseau social</h2>
        <p>Venez participer aux échanges entre collègues</p>
      </Jumbotron>
      <Container>
        <Image src={welcomeImage} fluid />
      </Container>
    </>
  );
};

export default Welcome;
