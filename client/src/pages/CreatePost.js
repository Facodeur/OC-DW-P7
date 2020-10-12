import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './CreatePost.css';

export default function CreatePost() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [imgageUrl, setImageUrl] = useState("");

   const submitPost = () => {
        Axios.post("http://localhost:3010/api/posts", {
            title: title,
            text: text,
            imgageUrl: imgageUrl
        })
   }

    return (
        <div className="createPost">
            <div className="uploadPost">
                <label htmlFor="">Title</label>
                <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
                <label htmlFor="">ImageUrl</label>
                <input type="text" onChange={(e) => {setImageUrl(e.target.value)}} />
                <label htmlFor="">Post Text</label>
                <textarea onChange={(e) => {setText(e.target.value)}}/>

                <button onClick={submitPost} >Envoyer</button>
            </div>
            
        </div>
    )
}
