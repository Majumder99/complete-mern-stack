import React from "react";

const Contact = () => {
  return (
    <>
      <div classNameName="container-fluid mt-5">
        <div classNameName="row">
          <div classNameName="col-lg-4">
            <div classNameName="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i classNameName="fas fa-phone me-4"></i>
              <div classNameName="d-flex flex-column">
                <h3>Phone</h3>
                <p>011212</p>
              </div>
            </div>
          </div>
          <div classNameName="col-lg-4">
            <div classNameName="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i classNameName="fas fa-envelope me-4"></i>
              <div classNameName="d-flex flex-column">
                <h3>Email</h3>
                <p>s@gmail.com</p>
              </div>
            </div>
          </div>
          <div classNameName="col-lg-4">
            <div classNameName="box d-flex flex-row ms-2 align-items-center shadow p-2 mb-5 bg-body rounded">
              <i classNameName="fas fa-address-card me-4"></i>
              <div classNameName="d-flex flex-column">
                <h3>Address</h3>
                <p>savar,dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
