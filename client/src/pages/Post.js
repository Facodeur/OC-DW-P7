import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import './Post.css';

export default function Post() {

    let { postId } = useParams();

    const [post, setPost] = useState({});

    Axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem('user');
         config.headers.Authorization = token;
         return config; });

    useEffect(() => {
        Axios.get(`http://localhost:3010/api/post/getpost/${postId}`).then((data) => {
            setPost({ 
                postText: data.data[0].text,
                imgUrl: data.data[0].imageUrl
            })
            console.log(data)
        })
    }, []);

    // const likePost = (id) => {
    //     Axios.post(`http://localhost:3010/api/post/like/${id}`)
    //       .then((response) => {
    //         response.json();
    //       })
    //       .then((data) => {
    //         console.log("ma data", data);
    //       });
    //   };

    
    return (
        <div className="singlePost">
           <div className="Post single" >
                <p>{post.postText}</p>
                <p>{post.imgUrl}</p>
                
                <h4>UserName</h4>
            </div> 
        </div>
        
    )
}
