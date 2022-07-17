import React from "react";
import "./gallery.css";
import Footer from "./Footer";
import { Button, Col, Container, Row, Card } from "react-bootstrap";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <div>
          <Container fluid className="Gallery">
            <Row className="Gallery-content">
              <Col></Col>
            </Row>
          </Container>
          <Container fluid className="Gallery-second">
            <Row>
              <h2 className="gallery-second-h2-style1">Cofee Images</h2>
              <hr width="50%" />
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/4.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/5.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/10.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/13.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
            </Row>

            <Row>
              <h2 className="gallery-second-h2-style2">Shop Images</h2>
              <hr />
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/23.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/20.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/21.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/22.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
            </Row>

            <Row>
              <h2 className="gallery-second-h2-style3">Cofee Catgery </h2>
              <hr />
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/24.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/25.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/26.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
              <Col className="main" md={3} xs={12}>
                <img
                  className="box"
                  src="assets/images/27.jpg"
                  alt=""
                  height={400}
                  width={300}
                />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </>
    );
  }
}

export default Gallery;
