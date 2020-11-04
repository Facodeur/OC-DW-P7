import React from "react";
import Axios from "axios";
import { Card } from "react-bootstrap";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Likes = (props) => {
  let { postId } = useParams();



  const likePost = () => {

    Axios.post(`http://localhost:3010/api/post/like/${postId}`)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log("ma data", data);
      });
  };

  return (
    <Card.Footer className="text-muted">
      {props.like} <AiFillLike className="mr-2" onClick={likePost} />
      {props.dislike} <AiFillDislike />
    </Card.Footer>
  );
};

export default Likes;