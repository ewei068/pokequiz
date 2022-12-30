import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import MediaContainer from "../../components/MediaContainer";
import ButtonGrid from "../../components/ButtonGrid";
import BackgroundContext from "../../contexts/BackgroundContext";
import { capitalizePathParam } from "../../util/string-utils";
import { QUIZ_CONFIG } from "../../util/constants";

export async function getStaticPaths() {
  return {
    paths: Object.keys(QUIZ_CONFIG).map((key) => ({
      params: { type: QUIZ_CONFIG[key].name },
    })),
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { },
  }
}


function Quiz() {
  // const [loading, setLoading] = useState(true);
  const [probabilityData, setProbabilityData] = useState({});
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonLoading, setPokemonLoading] = useState(true);
  const [id, setId] = useState("0");
  const [score, setScore] = useState(0);
  const [remaining, setRemaining] = useState(10);
  const { flashBackground } = useContext(BackgroundContext);

  const router = useRouter();
  const { type } = router.query;

  function setRandomPokemon(probabilityData) {
    const pokemon = Object.keys(probabilityData);
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    setId(`${randomIndex + 1}`);
  }

  function clickCallback(correct) {
    let newScore = score;
    if (correct) {
      newScore += 1;
    }

    // if game end, redirect to end page
    if (remaining == 1) {
      router.push({
        pathname: "/end",
        query: { score: newScore },
      }, "/end");
    }

    setScore(newScore)
    setRemaining(remaining - 1);
    flashBackground(correct);
    setRandomPokemon(probabilityData);
  }

  // TODO: use contexts or something else
  useEffect(() => {
    fetch(`${process.env.BASE_PATH}/data/pokemon_data.json`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
        setPokemonLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    let probability_json = 'sprite_similarities.json';
    if (type == QUIZ_CONFIG.POKEDEX_ENTRY.name) {
      probability_json = 'pokedex_similarities.json';
    } else if (type == QUIZ_CONFIG.CRY.name) {
      probability_json = 'cry_similarities.json';
    }

    fetch(`${process.env.BASE_PATH}/data/${probability_json}`)
      .then(response => response.json())
      .then(data => {
        setProbabilityData(data);
        setRandomPokemon(data);
      })
      .catch(error => console.error(error));
  }, []);

  if (id == "0" || pokemonLoading) {
    return (
    <Container className="centered-container">
      <Row className="my-5">
        <Col className="text-center">
          <h1>Loading...</h1>
        </Col>
      </Row>
    </Container>
    );
  }

  return (
    <Container className="centered-container" fluid>
      <Row className="my-5">
        <Col className="text-center">
          <h1>Who's that Pokemon?</h1>
          <h2>{capitalizePathParam(type)} Test - Score: {score} - Remaining: {remaining}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <MediaContainer 
            id={id} 
            pokemonData={pokemonData}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGrid 
            id={id} 
            probabilityData={probabilityData} 
            pokemonData={pokemonData} 
            clickCallback={clickCallback}
          />
        </Col>
      </Row>
    </Container>
  );
}


export default Quiz;