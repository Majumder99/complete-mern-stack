import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Contact = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const callContactPage = async () => {
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
      setUserData({
        name: res.info.name,
        email: res.info.email,
        phone: res.info.phone,
        work: res.info.work,
      });
      if (!res.status === 201) {
        throw new Error("somthing wrong");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (!data) {
      console.log("Message not send");
    } else {
      alert("Message sent");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i className="fas fa-phone me-4"></i>
              <div className="d-flex flex-column">
                <h3>Phone</h3>
                <p>{userData.phone}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i className="fas fa-envelope me-4"></i>
              <div className="d-flex flex-column">
                <h3>Email</h3>
                <p>{userData.email}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i className="fas fa-address-card me-4"></i>
              <div className="d-flex flex-column">
                <h3>Work</h3>
                <p>{userData.work}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="vh-150">
        <div
          className="container-fluid h-custom shadow-lg p-2 bg-body"
          style={{ width: "850px", height: "100vh" }}
        >
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <form onSubmit={handleSubmit} method="post">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="p-2 m-3" style={{ width: "500px" }}>
                <label htmlFor="name" className="me-4">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  style={{ width: "100%" }}
                  name="name"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              </div>

              <div className="p-2 m-3" style={{ width: "500px" }}>
                <label htmlFor="email" className="me-4">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  style={{ width: "100%" }}
                  name="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>

              <div className="p-2 m-3" style={{ width: "500px" }}>
                <label htmlFor="subject" className="me-4">
                  Your Phone
                </label>
                <input
                  type="text"
                  id="subject"
                  style={{ width: "100%" }}
                  name="phone"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                />
              </div>

              <div className="p-2 m-3" style={{ width: "500px" }}>
                <label htmlFor="message" className="me-4">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="65"
                  rows="10"
                  value={userData.message}
                  onChange={(e) =>
                    setUserData({ ...userData, message: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
