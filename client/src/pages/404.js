import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkButton from "../components/LinkButton";

function Custom404() {
  return (
    <Container className="centered-container">
      <Row className="my-5">
        <Col className="text-center" >
          <h1 className="mb-5">404 - Page Not Found</h1>
          <LinkButton link="/">Home</LinkButton>
        </Col>
      </Row>
    </Container>
  );
}

export default Custom404;