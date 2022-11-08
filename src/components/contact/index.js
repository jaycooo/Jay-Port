import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="https://github.com/jaycooo/Jay-Port.git"
            class="pr-4 pb-3 img-fluid"
            alt="Julia Coronado"
          />
          <h4>
           I am working towards graduation for this class and hopefully I will be able to have a successful career
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:407-955-3784">
            <MDBIcon icon="phone-alt" /> 407-955-3784
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:j.coronado@live.com">
            <MDBIcon icon="envelope" /> j.coronado@live.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
