import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import LinkButton from "../components/LinkButton";
import { QUIZ_NAMES } from "../util/constants";
import { capitalizePathParam } from "../util/string-utils";

function Index() {
  const [modeSuffix, setModeSuffix] = React.useState("");

  const handleModeChange = (event) => {
    const mode = event.target.checked ? "?mode=endless" : "";
    setModeSuffix(mode);
  };

  return (
    <Container className="centered-container">
      <Row className="my-5">
        <Col className="text-center" >
          <h1>Who's That Pokemon?</h1>
          <div className="plaintext mb-5">
            PokeQuiz - a Machine learning powered Pokemon Quiz tuned for high difficulty. Choose a quiz category and guess the correct Pokemon.
          </div>
          {Object.keys(QUIZ_NAMES).map((key, index) =>
            <LinkButton link={`/quiz/${QUIZ_NAMES[key].name}${modeSuffix}`} key={index}>
              {capitalizePathParam(QUIZ_NAMES[key].name)}
            </LinkButton>
          )}
          <div className="custom-control custom-switch mt-3">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={handleModeChange} />
            <label className="custom-control-label" htmlFor="customSwitch1"><h5>Endless</h5></label>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;