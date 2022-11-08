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
            src="https://github.com/AtimaB/The-Fight-Club/raw/master/public/assets/images/welcomePage.png"
            alt="Fight Club"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">The Fight Club</MDBCardTitle>
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
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/94870920-00858f80-0406-11eb-9891-00634c7764d1.PNG"
            alt="Budget"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
            <MDBCardText>
              An app that allows the user to track their withdrawals and
              deposits with or without a data/internet connection
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
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/97783621-b1469200-1b5e-11eb-8d90-935a7a2bcbae.PNG"
            alt="Fitness"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Fitness Tracker</MDBCardTitle>
            <MDBCardText>
              With this app the user can log all exercises they perform in their
              entire workout. After the user has submitted a workout they can
              edit the workout after and view past workouts.
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
            src="https://user-images.githubusercontent.com/64516562/97784659-c541c200-1b65-11eb-98ee-26da26acf883.PNG"
            alt="Team Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Team Profile Generator</MDBCardTitle>
            <MDBCardText>
              A command line application that allows the user to add and remove
              employees with their employee information
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
            src="https://user-images.githubusercontent.com/64516562/97785992-063dd480-1b6e-11eb-8040-7ca005d7830b.png"
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
            <MDBCardTitle tag="h5">Day Planner</MDBCardTitle>
            <MDBCardText>
              This is a work day plan app. It has hours sections on it so when
              the user enters a description for each hour and save it the
              description will stay until erased.
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
            src=""
            alt="Password"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              This app allows the user to generate a random password with
              criteria of their choosing. This app utilizes numbers, letters,
              and special characters.
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
            style={{ height: "205px" }}
            src=""
            alt=""
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Summerlin Labs </MDBCardTitle>
            <MDBCardText>
              This is my final project for the program. A local business owner
              tasked my group with creating a website for their health and
              testing clinic.
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
