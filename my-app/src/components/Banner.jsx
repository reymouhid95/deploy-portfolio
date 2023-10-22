import React from "react";
import { Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Banner() {
  return (
    <div className="container-fluid banner pt-5">
      <Row className="container-fluid sub-banner">
        <Col md={9} className="pt-5">
          <h1 className="text-start text-light pt-5">
            Hello ! Je suis{" "}
            <span className="text-uppercase text-warning fw-bold">
              Amadou Oury Bah{" "}
            </span>
            Étudiant en programmation à Bakeli School of Technology.
          </h1>
          <div className="pt-5 pb-5 text-light d-flex flex-wrap justify-content-center">
            <span className="px-2 pb-2 fw-bold">
              <Icon.Phone className="icon" /> 77 434 36 51
            </span>
            <span className="px-2 pb-2 fw-bold">
              <Icon.Envelope className="icon" /> thiernooury89@gmail.com
            </span>
            <span className="px-2 pb-2 fw-bold">
              <Icon.GeoAltFill className="icon" /> Parcelles Assainies, Unité
              24, Dakar
            </span>
            <span className="px-2 pb-2 fw-bold">
              <Icon.Bank2 className="icon" /> Bakeli
            </span>
          </div>
        </Col>
        <Col md={3} className="picture"></Col>
      </Row>
      <Row className="vector"></Row>
    </div>
  );
}

export default Banner;
