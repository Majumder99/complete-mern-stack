import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const Logout = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "applicatoin/json",
      },
      credentials: "include",
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: "USER", payload: false });
        navigate("/login");
      })
      .catch((err) => console.log(err));
  });
  return <></>;
};

export default Logout;
