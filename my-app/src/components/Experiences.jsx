import React from "react";
import { Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Experiences() {
  return (
    <div className="container-fluid mt-5 pt-3 pb-5 bg-body-secondary fw-bold">
      <h2 className="pb-5 text-uppercase">Mes Expériences</h2>
      <section className="container-fluid text-start bg-light p-3 mb-5">
        <h3>
          Professeur assistant au cours de Droit Diplomatique et Consulaire en
          L3 à l'universtié Ahmadou Dieng.
        </h3>
        <p className="date">Avril - Juin 2022</p>
        <p>
          Assister à la préparation des cours à travers les recherches et
          éventuellement participer aux débats en classe.
        </p>
      </section>
      <section className="container-fluid text-start bg-light p-3 mt-3 mb-5">
        <h3>
          Certificat de manager spécialiste en Conception, Gestion, Suivi et
          Évaluation des projets à CLIWA (Community Leadership Institute-West
          Africa).
        </h3>
        <p className="date">Février - Mai 2021</p>
        <p>
          Des cours en ligne avec des facilitateurs reconnus pour leurs
          expériences dans les institutions régionales et internationales.
        </p>
      </section>
      <section className="container-fluid text-start bg-light p-3 mt-3 mb-5">
        <h3>Employer à DMS en tant resposable Marketing.</h3>
        <p className="date">Février - Mai 2021</p>
        <p>
          Faire la promotion des produits de l'entreprise et faire le suivi de
          la distribution.
        </p>
      </section>
      <section className="container-fluid text-start bg-light p-3 mt-3 mb-5">
        <h3>Professeur assistant au cours de Droit Constitutionnel.</h3>
        <p className="date">Décembre 2020 - Février 2020</p>
        <p>
          Des cours en ligne avec des facilitateurs reconnus pour leurs
          expériences dans les institutions régionales et internationales.
        </p>
      </section>
      <section className="container-fluid text-start bg-light p-3 mt-3 mb-5">
        <h3>Agent commercial à NOBEL.</h3>
        <p className="date">Avril - Juin 2019</p>
        <p>Trouver des clients et vendre les produits de l'entreprise.</p>
      </section>
      <section className="container-fluid background mt-3">
        <Row>
          <Col
            md={3}
            className="d-flex flex-column justify-content-center align-items-center pt-5 text-light border border-right"
          >
            <Icon.Journal className="boots-icon" />
            <p className="fw-bold pt-3 fs-4">18 projets</p>
          </Col>
          <Col
            md={3}
            className="d-flex flex-column justify-content-center align-items-center pt-5 text-light border border-right"
          >
            <Icon.Diagram2 className="boots-icon" />
            <p className="fw-bold pt-3 fs-4">30 algorithmes</p>
          </Col>
          <Col
            md={3}
            className="d-flex flex-column justify-content-center align-items-center pt-5 text-light border border-right"
          >
            <Icon.CalendarDate className="boots-icon" />
            <p className="fw-bold pt-3 fs-4">10 console.log();</p>
          </Col>
          <Col
            md={3}
            className="d-flex flex-column justify-content-center align-items-center pt-5 text-light"
          >
            <Icon.Fire className="boots-icon" />
            <p className="fw-bold pt-3 fs-4">16 border: solid red 1px;</p>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Experiences;
