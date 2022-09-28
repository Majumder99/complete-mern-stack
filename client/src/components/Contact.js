import React from "react";
const Contact = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i className="fas fa-phone me-4"></i>
              <div className="d-flex flex-column">
                <h3>Phone</h3>
                <p>011212</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i className="fas fa-envelope me-4"></i>
              <div className="d-flex flex-column">
                <h3>Email</h3>
                <p>s@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i className="fas fa-address-card me-4"></i>
              <div className="d-flex flex-column">
                <h3>Address</h3>
                <p>savar,dhaka</p>
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
          <form action="">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="p-2 m-3" style={{ width: "500px" }}>
                <label htmlFor="name" className="me-4">
                  Your Name
                </label>
                <input type="text" id="name" style={{ width: "100%" }} />
              </div>

              <div className="p-2 m-3" style={{ width: "500px" }}>
                <label htmlFor="email" className="me-4">
                  Your Email
                </label>
                <input type="email" id="email" style={{ width: "100%" }} />
              </div>

              <div className="p-2 m-3" style={{ width: "500px" }}>
                <label htmlFor="subject" className="me-4">
                  Your Subject
                </label>
                <input type="text" id="subject" style={{ width: "100%" }} />
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
