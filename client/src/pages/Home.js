import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Home.css';

export default function Home() {

    let history = useHistory();

    const [postList, setPostList] = useState([]);
    

    Axios.interceptors.request.use(function (config) {
         const token = localStorage.getItem('login');
          config.headers.Authorization = token;
          return config; });

    useEffect(() => {
        Axios.get("http://localhost:3010/api/post/getposts").then((data) => {
            setPostList(data.data)
        })
    }, []);

    const likePost = (id) => {
        Axios.post(`http://localhost:3010/api/post/like/${id}`)
        .then(response => {
            response.json()
        })
        .then(data => {
            console.log("ma data", data)
        })
    };


    return (
        <div className="MainPage">
            <div className="PostContainer">

                {postList.map((val, key) => {
                    return (
                        <div className="Post" key={key} /*onClick={() => {history.push(`/post/${val.idpost}`)}}*/ >
                            <h1>{val.title}</h1>
                            <p>{val.imageUrl}</p>
                            <p>{val.text.length > 500 ? val.text.substring(0,500) + '...' : val.text}</p>

                            <button className="btn" onClick={() => {likePost(val.idpost)}}>Like</button>
                            <div>
                                <h4>{val.likes}</h4>
                                <h4>UserName</h4>
                            </div>
                            
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}
