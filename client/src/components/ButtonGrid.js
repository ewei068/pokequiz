import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnswerButton from '../components/AnswerButton';

function ButtonGrid({ id, probabilityData, pokemonData, clickCallback }) {
  const [options, setOptions] = useState([]);

  function getRandomWrongAnswers(id, probabilityData) {
    let pokemon = probabilityData[id];
    let total = 0;
    var options = [id];
    for (let index in pokemon) {  
      const selectedPokemon = pokemon[index];
      let probability = selectedPokemon[1];
      if (Math.random() < probability) {
        options = [...options, selectedPokemon[0]];
        total += 1;
        if (total == 3) {
          // randomize order
          for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
          }
          setOptions(options);
        }
      }
    }
  }

  function generateCallback(pickId) {
    return () => {
      clickCallback(id == pickId);
    };
  }

  useEffect(() => {
    getRandomWrongAnswers(id, probabilityData);
  }, [id]);

  useEffect(() => {
    // console.log(options)
  }, [options]);

  if (!options || options.length < 4) {
    return (
      <Container>
        <Row>
          <Col>
            <AnswerButton>loading...</AnswerButton>
          </Col>
          <Col>
            <AnswerButton>loading...</AnswerButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <AnswerButton>loading...</AnswerButton>
          </Col>
          <Col>
            <AnswerButton>loading...</AnswerButton>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <AnswerButton callback={generateCallback(options[0])}>
            {pokemonData[options[0]]["name"]}
          </AnswerButton>
        </Col>
        <Col>
          <AnswerButton callback={generateCallback(options[1])}>
            {pokemonData[options[1]]["name"]}
          </AnswerButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <AnswerButton callback={generateCallback(options[2])}>
            {pokemonData[options[2]]["name"]}
          </AnswerButton>
        </Col>
        <Col>
          <AnswerButton callback={generateCallback(options[3])}>
            {pokemonData[options[3]]["name"]}
          </AnswerButton>
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonGrid;