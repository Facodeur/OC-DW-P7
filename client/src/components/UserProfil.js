import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';


const UserProfil = () => {
    let { userId } = useParams();
    

    const [user, setUser] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:3010/api/user/getuser/46`)
        .then((data) => {
            setUser({ 
                username: data.data[0].username,
                email: data.data[0].email
            })
            console.log("my data",data)
        })
    }, []);

    return (
        <div>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default UserProfil
