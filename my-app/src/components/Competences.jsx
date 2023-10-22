import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rectangle1 from "../assets/images/rectangle1.png";
import Rectangle2 from "../assets/images/rectangle2.png";
import Rectangle3 from "../assets/images/rectangle3.png";
import Rectangle4 from "../assets/images/rectangle4.png";

function Competences() {
  return (
    <div className="mt-5">
      <h2 className="text-uppercase pb-5">Mes Compétences</h2>
      <Container>
        <Row>
          <Col md={6}>
            <h3 className="text-uppercase text-center pb-5 titre">Outils</h3>
            <Row className="mb-3">
              <Col md={6}>
                <img src={Rectangle1} alt="Barre de progression" />
              </Col>
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">
                  Bootstrap
                </p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <img src={Rectangle2} alt="Barre de progression" />
              </Col>
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">Jquery</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <img src={Rectangle2} alt="Barre de progression" />
              </Col>
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">
                  Reactjs
                </p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <img src={Rectangle2} alt="Barre de progression" />
              </Col>
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">
                  Tailwind css
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h3 className="text-uppercase text-center pb-5 titre px-4">
              Language
            </h3>
            <Row className="mb-3">
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">Html</p>
              </Col>
              <Col md={6}>
                <img src={Rectangle1} alt="Barre de progression" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">Css</p>
              </Col>
              <Col md={6}>
                <img src={Rectangle3} alt="Barre de progression" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">
                  Javascript
                </p>
              </Col>
              <Col md={6}>
                <img src={Rectangle3} alt="Barre de progression" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <p className="text-uppercase fw-bold text-start px-5">Python</p>
              </Col>
              <Col md={6}>
                <img src={Rectangle4} alt="Barre de progression" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="text-uppercase fw-bold text-center">
            <h3 className="titre pb-5">Langues</h3>
            <p>Français</p>
            <p>Anglais(intermédiaire)</p>
            <p>Wolof(débutant)</p>
            <p>Peulh</p>
          </Col>
          <Col md={6} className="text-uppercase fw-bold text-center">
            <h3 className="titre pb-5">Hobbies</h3>
            <p>La Lecture</p>
            <p>L'écriture</p>
            <p>Le Sport</p>
            <p>Le développement WEB</p>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Competences;
