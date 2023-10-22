import React from "react";
import { Button, Card } from "react-bootstrap";

function CardPortfolio({ project, description, img }) {
  return (
    <div className="mt-5">
      <div>
        <Card className="card mb-5">
          <Card.Img variant="top" src={img} className="img" />
          <Card.Body>
            <Card.Title className="p-3 title">{project}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="transparent" className="mb-3">
              Voir le projet github
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardPortfolio;
