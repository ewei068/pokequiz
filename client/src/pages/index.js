import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkButton from "../components/LinkButton";
import { QUIZ_CONFIG } from "../util/constants";
import { capitalizePathParam } from "../util/string-utils";

function Index() {
  return (
    <Container className="centered-container">
      <Row className="my-5">
        <Col className="text-center" >
          <h1>Who's That Pokemon?</h1>
          <div className="plaintext mb-5">
            PokeQuiz - a Machine learning powered Pokemon Quiz tuned for high difficulty. Choose a quiz category and guess the correct Pokemon.
          </div>
          {Object.keys(QUIZ_CONFIG).map((key, index) =>
            <LinkButton link={`/quiz/${QUIZ_CONFIG[key].name}`} key={index}>
              {capitalizePathParam(QUIZ_CONFIG[key].name)}
            </LinkButton>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Index;