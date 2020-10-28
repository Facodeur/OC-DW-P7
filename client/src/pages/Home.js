import React, { useEffect, useState } from "react";
import Axios from "axios";

import PostList from "../components/PostList";
import CreatePost from "./CreatePost";
import Welcome from "./../components/Welcome";

export default function Home() {
  const getUser = localStorage.getItem("user");
  const [islogged, setIsLogged] = useState();

  useEffect(() => {
    if (getUser) {
      setIsLogged(true);
      Axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("user");
        config.headers.Authorization = token;
        return config;
      });
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <>
      {islogged ? (
        <>
          <CreatePost />
          <PostList />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
