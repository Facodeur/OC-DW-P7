import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { AiFillDislike, AiFillLike } from "react-icons/ai";



const PostList = (props) => {
    let history = useHistory();
    
    

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3010/api/post/getposts").then((data) => {
        setPostList(data.data);
      });
    }, [])

    return (
        <>
            <div className="MainPage">
          <div className="PostContainer">
            

            {postList.map((val, key) => {
              console.log("val",val)
              return (
                  <Container key={key}>
                    <Card 
                        style={{ height: "auto", cursor: "pointer" }} 
                        className="mt-3"
                        onClick={() => {
                          history.push(`/post/${val.idpost}`);
                        }}
                        >
                      <Card.Img variant="top" src={val.imgurl ? val.imgurl : ""} />
                      <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                          {val.text.length > 500
                        ? val.text.substring(0, 500) + "..."
                        : val.text}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                          {val.likes} <AiFillLike className="mr-2"/>
                          
                         {val.dislikes} <AiFillDislike/>
                      </Card.Footer>
                    </Card>
                  </Container>
              );
            })}
          </div>
        </div>
        </>
    )
}

export default PostList