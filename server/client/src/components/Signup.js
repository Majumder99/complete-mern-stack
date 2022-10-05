import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    work: "",
    phone: "",
    password: "",
    repassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello");
    const { name, email, work, phone, password, repassword } = user;
    const result = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        phone,
        password,
        repassword,
      }),
    });

    const data = await result.json();
    if (data.status === 201) {
      console.log("Successfully");
      navigate("/login");
    } else {
      console.log("Unsuccessfully");
      alert("Try again");
    }
    console.log(data);
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div classNameName="card-body p-md-5">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={user.name}
                              onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                              }
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={user.email}
                              onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                              }
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="form3Example3c"
                              className="form-control"
                              value={user.phone}
                              onChange={(e) =>
                                setUser({ ...user, phone: e.target.value })
                              }
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Number
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              value={user.work}
                              onChange={(e) =>
                                setUser({ ...user, work: e.target.value })
                              }
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Work
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={user.password}
                              onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                              }
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={user.repassword}
                              onChange={(e) =>
                                setUser({ ...user, repassword: e.target.value })
                              }
                            />
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                      <div className="d-flex justify-content-center">
                        <NavLink to="/login">I am already registerd</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
