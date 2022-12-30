import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LinkButton from "../components/LinkButton";

function Index() {
  return (
    <Container className="centered-container">
      <Row className="my-5">
        <Col className="text-center" >
          <h1>Who's That Pokemon?</h1>
          <div className="plaintext mb-5">
            PokeQuiz - a Machine learning powered Pokemon Quiz tuned for high difficulty. Choose a quiz category and guess the correct Pokemon.
          </div>
          <LinkButton link="/quiz/sprite">Sprite Quiz</LinkButton>
          <LinkButton link="/quiz/pokedex-entry">Pokedex Entry Quiz</LinkButton>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;