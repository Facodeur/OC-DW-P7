import React, { useState } from "react";
import { BsFillImageFill as IconFile } from "react-icons/bs";
import Axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";

export default function CreatePost() {
  const [text, setText] = useState("");
  //const [imgageUrl, setImageUrl] = useState("");
  //const [file, setFile] = useState("");

  const submitPost = () => {
    Axios.post("http://localhost:3010/api/post/posts", {
      text: text,
      //imgageUrl: imgageUrl,
    });
  };

  return (
    <Container>
      <Card className="mt-2">
        <Card.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Quoi de neuf..."
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted ">
          <Row className="justify-content-between">
            <Col xs={8} md={10}>
              <IconFile />
            </Col>
            <Col xs={4} md={2}>
              <Button variant="info" size="sm" onClick={submitPost}>
                Envoyer
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
}
