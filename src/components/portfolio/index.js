import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://github.com/jaycooo/shelter-stop.git"
            alt="Shelter Stop"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">JATE</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn
              href="https://github.com/jaycooo/JATE.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/94870920-00858f80-0406-11eb-9891-00634c7764d1.PNG"
            alt="Budget"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">E-Commerce</MDBCardTitle>
            <MDBCardText>
              An app that allows the user to set up payment options on PC
            </MDBCardText>
            <MDBBtn
              href="https://github.com/jaycooo/E-Commerce.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/97783621-b1469200-1b5e-11eb-8d90-935a7a2bcbae.PNG"
            alt="Fitness"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5"></MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src=""
            alt="Team Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Profile Generator</MDBCardTitle>
            <MDBCardText>
             
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/97785431-882bfe80-1b6a-11eb-8f73-a79d66dce85a.png"
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://github.com/jaycooo/Weather-app.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src=""
            alt="Bartender"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">8 Bit Bartender</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://user-images.githubusercontent.com/64516562/97790062-321b8300-1b8b-11eb-8a0e-079e54b31341.png"
            alt="Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Tech Blog</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn
              href="https://github.com/jaycooo/tech-blog.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            src=""
            alt="Password"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn
              href="https://github.com/jaycooo/password-gen.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src=""
            alt=""
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Final Project Place Holder </MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
