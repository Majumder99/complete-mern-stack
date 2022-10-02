import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import pic from "../image/pic.jpeg";
const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const result = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const res = await result.json();
      console.log(res);
      setUserData(res.info);
      if (!res.status === 201) {
        throw new Error("somthing wrong");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div className="mt-5">
        <div className="container">
          <form method="get">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={pic}
                  alt="no"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>

              <div className="col-md-6">
                <div className="profile_head">
                  <h5>{userData.name}</h5>
                  <h6>{userData.work}</h6>
                  <p className="profile_rating mt-3 mb-5">
                    Rankings: <span>1/10</span>
                  </p>
                  {/* Nav tabs */}
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </button>
                    </li>
                  </ul>
                  {/* tab-content */}
                  <div class="tab-content mt-5" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label htmlFor="User Id">User Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData._id}</p>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label htmlFor="User Id">Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.name}</p>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label htmlFor="User Id">Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.email}</p>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label htmlFor="User Id">Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.phone}</p>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label htmlFor="User Id">Work</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.work}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="User Id">User Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>54546546</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="User Id">User Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>gadha</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  value="Edit Profile"
                  name="btnAddMore"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="profile-work d-flex flex-column">
                  <p>Work Link</p>
                  <NavLink>Youtube</NavLink>
                  <NavLink>Linkdein</NavLink>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
