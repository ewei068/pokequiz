import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import LinkButton from "../components/LinkButton";

function EndGame() {
  const router = useRouter();
  const score = router.query.score ? router.query.score : 0;
    
  return (
    <Container className="centered-container">
      <Row className="my-5">
        <Col className="text-center" >
          <h1 className="mb-5">Good Job! Score: {score}</h1>
          <LinkButton link="/">Home</LinkButton>
        </Col>
      </Row>
    </Container>
  );
}

export default EndGame;