import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Card, Row } from "react-bootstrap";
import Likes from '../components/Likes'

export default function Post(props) {
  let { postId } = useParams();

  const [post, setPost] = useState({});
  

  Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("user");
    config.headers.Authorization = token;
    return config;
  });

  useEffect(() => {
    Axios.get(`http://localhost:3010/api/post/getpost/${postId}`).then(
      (data) => {
        setPost({
          postText: data.data[0].text,
          imgUrl: data.data[0].imageUrl,
          likes: data.data[0].likes,
          dislikes: data.data[0].dislikes,
        });
        console.log("post Data", data);
      }
    );
  }, []);


  return (
    <Row className="justify-content-center">
      <Card className="mt-5" style={{ width: "35rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" style={{ height: "25rem" }} />
        <Card.Body>
          <Card.Title>{post.postText}</Card.Title>
          <Card.Text>{post.imgUrl}</Card.Text>
          <h4>UserName</h4>
        </Card.Body>
        <Likes 
            like={post.likes}
            dislike={post.dislikes}
        />
        
      </Card>
    </Row>
  );
}
