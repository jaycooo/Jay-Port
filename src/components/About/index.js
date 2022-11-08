import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://avatars0.githubusercontent.com/u/64516562?s=460&u=2778809b5be3b0ba187454d6c12564c0e67c369b&v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
          />
          <p style={{ fontSize: "27px" }}>
            Hello my name is Julia Coronado and I am currently a student in the full stack coding camp for UCF. 
            I am hoping with the things that I have learned that I will be able to have a successful coding career

          </p>
          <p style={{ fontSize: "27px" }}>
           I love to work with computer and learning new technology and I hope that one day
           I will be able to work in the realm of artifical intellgence.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
