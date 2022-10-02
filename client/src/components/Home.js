import React from "react";
import { useState, useEffect } from "react";
const Home = () => {
  const [username, setUserName] = useState();
  const callHomePage = async () => {
    try {
      const result = await fetch("/contact", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const res = await result.json();
      console.log(res);
      setUserName(res.info.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callHomePage();
  }, []);
  return (
    <>
      <div className="main_home d-flex flex-column justify-content-center align-items-center">
        <p className="p_tag">Welcome {username}</p>
        <h1>Mern Stack Developer</h1>
      </div>
    </>
  );
};

export default Home;
