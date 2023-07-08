import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './Contact.css';

export default function AddForm() {
  return (
    <div className="background-image">
      <h1>
        <center>Contact us</center>
      </h1>
      <Container>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" style={{ height: "150px" }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

          <Button variant="outline-info">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
