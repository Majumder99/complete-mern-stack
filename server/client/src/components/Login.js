import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = value;
    const result = await fetch("/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const res = await result.json();
    if (res.status === 201) {
      console.log("Successfull");
      dispatch({ type: "USER", payload: true });
      navigate("/");
    } else {
      console.log("Unsuccessfull");
    }
    console.log(res);
  };

  return (
    <>
      <section className="vh-100 mt-5">
        <div
          className="container-fluid h-custom shadow-lg p-2 bg-body"
          style={{ width: "850px", height: "80vh" }}
        >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample_image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={value.email}
                    onChange={(e) =>
                      setValue({ ...value, email: e.target.value })
                    }
                  />
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={value.password}
                    onChange={(e) =>
                      setValue({ ...value, password: e.target.value })
                    }
                  />
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <NavLink to="/signup" className="link-danger">
                      Register
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
