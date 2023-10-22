import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Picture from "../assets/images/picture.png";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="mt-5 text-uppercase">
      <h2 className="pb-5 fw-bold">Restons en contact</h2>
      <Row>
        <Col md={6} className="text-start px-4">
          <Form.Label htmlFor="inputPassword5">Prénom</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className="mb-5"
          />
          <Form.Label htmlFor="inputPassword5">Nom</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className="mb-5"
          />
          <Form.Control
            as="textarea"
            placeholder="Votre message"
            style={{ height: "250px" }}
          />
          <div className="d-flex justify-content-end mt-3">
            <Button className="send" variant="warning">
              Envoyez
            </Button>{" "}
          </div>
        </Col>
        <Col md={6} className="bg-body-secondary">
          <img src={Picture} alt="Profile" className="img-fluid picture" />
        </Col>
        <div className="footer"></div>
      </Row>
    </div>
  );
}

export default Contact;
