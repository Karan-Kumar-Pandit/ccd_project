import React from "react";
import "./about.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
import Footer from "./Footer";

class About extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="About">
          <Row className="Gallery-content">
            <Col>
              <h1>
                Let's Create Your <br /> Dream Coffee
              </h1>
              <p>
                Our coffee service is the best cofee to achieve you humanity
                <br /> in your pursuit of that perfect living space.Many coffee
                <br /> stores claim to offer some kind of in home service
                <br />
                practical experience needed to help you achieve you humanity and
                execute a
                <br /> successful plan
              </p>

              <Button>Get started</Button>
            </Col>
          </Row>
        </Container>

        <Container className="about-first">
          <Row className="about-first-content">
            <Col className=" about-first-icon">
              <h1>
                We Tackle The Most
                <br />
                Expensive Coffee
              </h1>
              <p>
                The world needs innovators and problem solvers who
                <br /> turn challenges into greater opportunities we have
                <br /> an insatible coursity about transformative trends
                <br /> challenging the status
              </p>
              <p>
                <i>
                  <IoIosCall />
                </i>
                7488619004
              </p>
            </Col>
            <Col className="about-first-photo">
              <img src="assets/images/16.jpg" height="400px" width="450px" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default About;
