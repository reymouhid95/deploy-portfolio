import React from "react";
import CardPortfolio from "./CardPortfolio";
import { Container, Row, Col } from "react-bootstrap";
import Img1 from "../assets/images/2.png";
import Img2 from "../assets/images/3.png";
import Img3 from "../assets/images/4.png";
import Img4 from "../assets/images/5.png";
import Img5 from "../assets/images/6.png";
import Img6 from "../assets/images/7.png";

function Portfolio() {
  return (
    <div className="pt-5">
      <h2 className="text-uppercase">Mon Portfolio</h2>
      <Container>
        <Row>
          <Col>
            <CardPortfolio
              img={Img1}
              project={"Volkeno"}
              description={
                "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. #React #API #Redux"
              }
            />
          </Col>
          <Col>
            <CardPortfolio
              img={Img2}
              project={"Fewnu"}
              description={
                "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. #React #API #Redux"
              }
            />
          </Col>
          <Col>
            <CardPortfolio
              img={Img3}
              project={"Fewnu mobile"}
              description={
                "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. #React #API #Redux"
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardPortfolio
              img={Img4}
              project={"Volkeno"}
              description={
                "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. #React #API #Redux"
              }
            />
          </Col>
          <Col>
            <CardPortfolio
              img={Img5}
              project={"Bakeli Payement"}
              description={
                "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. #React #API #Redux"
              }
            />
          </Col>
          <Col>
            <CardPortfolio
              img={Img6}
              project={"Mixte Feewi"}
              description={
                "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+. #React #API #Redux"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
