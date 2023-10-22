import React from "react";
import { Row, Col } from "react-bootstrap";

function Presentation() {
  return (
    <div className="mt-5 presentation">
      <h2 className="text-uppercase">Présentation</h2>
      <Row>
        <Col md={6} className="pt-4 text-start">
          <ul className="list-unstyled py-2 fw-bold fs-4">
            <li className="m-3">
              <span className="p-3 text-light fw-bold">1</span> Capacité
              d'apprentissage
            </li>
            <li className="m-3">
              <span className="p-3 text-light fw-bold">2</span> Collaboration
            </li>
            <li className="m-3">
              <span className="p-3 text-light fw-bold">3</span> Responsabilité
            </li>
            <li className="m-3">
              <span className="p-3 text-light fw-bold">4</span> Prise de
              décision
            </li>
            <li className="m-3">
              <span className="p-3 text-light fw-bold">5</span> Gestion du temps
            </li>
          </ul>
        </Col>
        <Col md={6} className="text-start pt-4 px-5 fw-bold">
          <h3 className="tri">Triforce !</h3>
          <p>
            À l'écoute, je suis FORCE de proposition, j'aime chercher des
            solutions <br /> et ainsi rendre services. Passionné par
            l'apprentissage et la découverte <br /> intellectuelle, j'ai
            développé une FORCE de travail afin de toujours <br /> progresser au
            quotidien. FORCE tranquille, j'ai toujours su collaborer et <br />
            pleinement m'intégrer au sein du collectif.
          </p>
          <p className="pt-3">
            Besoin d'un collaborateur flexible et persévérant ? <br /> Je vous
            propose mes services par le biais d'une ALTERNANCE. Avec 4 <br />{" "}
            jours dans votre société et 1 jour en formation, le tout modulable
            comme <br /> vous le souhaitez, je pourrais facilement répondre à
            vos besoins.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Presentation;
