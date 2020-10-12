import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Home.css';

export default function Home() {

    const [postList, setPostList] = useState([]);
    let history = useHistory();

    useEffect(() => {
        Axios.get("http://localhost:3010/api/getposts").then((data) => {
            setPostList(data.data)
        })
    })


    return (
        <div className="MainPage">
            <div className="PostContainer">

                {postList.map((val, key) => {
                    return (
                        <div className="Post" key={key} onClick={() => {history.push(`/post/${val.idmessages}`)}} >
                            <h1>{val.title}</h1>
                            <p>{val.imageUrl}</p>
                            <p>{val.post_text.length > 500 ? val.post_text.substring(0,500) + '...' : val.post_text}</p>

                            <h4>UserName</h4>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}
