import React from "react";
import { Jumbotron, Image, Container } from "react-bootstrap";
const Welcome = () => {
  return (
    <>
      <Jumbotron>
        <h2>Bienvenue sur notre réseau social</h2>
        <p>Venez participer aux échanges entre collègues</p>
      </Jumbotron>
      <Container>
        <Image src="images/feedback.jpg" fluid />
      </Container>
    </>
  );
};

export default Welcome;
