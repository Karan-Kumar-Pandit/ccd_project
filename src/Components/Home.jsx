import React from "react";
import Footer from "./Footer";
import "./home.css";
import { Button, Carousel, Col, Container, Row, Card } from "react-bootstrap";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100"
              src="assets/images/29.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100"
              src="assets/images/30.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Lets Comes True the dream</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100"
              src="assets/images/3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Let's Change The world With Your Art</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container className="home-section">
          <Row>
            <h1>Trusted by the Best</h1>
            <hr />
          </Row>

          <Row>
            <p>
              Cafe Coffee is about bringing order and coherence to space— just
              like.
              <br />
              To make a drink from coffee beans, the beans must first be
              specially prepared by drying the beans and then roasting. The
              beans are dried a short time after they are picked. This preserves
              them and makes them ready to be packed or roasted. Before the
              beans are made into a drink, they must be roasted or ground
              (crushed into tiny pieces in a coffee mill).
            </p>
          </Row>
        </Container>

        <Container fluid>
          <Row className="home-content">
            <h1>We are the best that's we know</h1>

            <Col md={6} xs={12}>
              <img
                src="assets/images/11.jpg"
                height="390px"
                className="img-fluid"
                width="550px"
              />
            </Col>
            <Col md={6} xs={12}>
              <p>
                Before the coffee is made into a drink, it is "ground" in a
                small grinding machine called a "coffee mill". The coffee mill
                breaks the beans into very small pieces. Coffee is turned into a
                drink in several different ways. For some ways of making coffee,
                such as "espresso" it is best to have the coffee ground into
                fine powder but for other types of coffee-making, such as
                "filtered coffee", the coffee is in larger pieces to stop it
                going through the filter. Finely ground coffee makes a stronger
                taste.
                <br />
                The coffee and the water are put into a pot on top of the stove
                and boiled slowly together. This way of making coffee has been
                used for hundreds of years.
              </p>
            </Col>
          </Row>

          <Container className="home-hand">
            <Row>
              <h1>Our hand made products</h1>
              <hr />
              <Col md={4} xs={12}>
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src="assets/images/9.jpg" />
                  <Card.Body>
                    <Card.Title>For Dream Coffee</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-info">Buy Now</Button>
                    {/* <Button variant="primary"></Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={12}>
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src="assets/images/11.jpg" />
                  <Card.Body>
                    <Card.Title>Best Coffee </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-info">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={12}>
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src="assets/images/12.jpg" />
                  <Card.Body>
                    <Card.Title>Reduce the stress by your comfort</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-info">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* ---------------------------------------------------- */}

        <Footer />
      </>
    );
  }
}

export default Gallery;
