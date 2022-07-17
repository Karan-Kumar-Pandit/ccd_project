import React, { useState } from "react";
import "./contact.css";
import Footer from "./Footer";
import { Row, Col, Button, Form, InputGroup, Container } from "react-bootstrap";

function Contact(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Container className="contact">
        <Row>
          <h1 className="heading">contact us</h1>
          <hr />
          <Col md={5} xs={12}>
            <img
              src="./assets/images/contact.jpg "
              width="350px"
              height="500px"
            />
          </Col>

          <Col md={7} xs={12} className="contact-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder={props.name} />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder={props.last} />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder={props.email}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your email.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder={props.city} required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={props.state}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder={props.textarea}
                    required
                    rows={3}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a massage.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  type="checkbox"
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

Contact.defaultProps = {
  name: "first name",
  last: "last name",
  email: "email address",
  city: "city name",
  state: "enter your state",
};

export default Contact;
