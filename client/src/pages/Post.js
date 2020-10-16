import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import './Post.css';

export default function Post() {

    let { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:3010/api/post/getpost/${postId}`).then((data) => {
            setPost({ 
                title: data.data[0].title,
                postText: data.data[0].text,
                imgUrl: data.data[0].imageUrl
            })
            console.log(data)
        })
    }, []);

    
    return (
        <div className="singlePost">
           <div className="Post single" >
                <h1>{post.title}</h1>
                
                <p>{post.postText}</p>
                <p>{post.imgUrl}</p>
                
                <h4>UserName</h4>
            </div> 
        </div>
        
    )
}
