import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';

export default function Post() {

    let {postId} = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:3010/api/getpost/${postId}`).then((data) => {
            console.log(data)
        })
    }, [])
    return (
        <div className="Post" >
            {/* <h1>{val.title}</h1> */}
            {/* <p>{val.imageUrl}</p> */}
            {/* <p>{val.post_text.length > 500 ? val.post_text.substring(0,500) + '...' : val.post_text}</p> */}

            <h4>UserName</h4>
        </div>
    )
}
