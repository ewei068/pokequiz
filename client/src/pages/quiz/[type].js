import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import MediaContainer from "../../components/MediaContainer";
import ButtonGrid from "../../components/ButtonGrid";
import BackgroundContext from "../../contexts/BackgroundContext";
import { capitalizePathParam } from "../../util/string-utils";
import { QUIZ_NAMES, MODE_NAMES, QUIZ_CONFIG } from "../../util/constants";
import QuizDisplay from "../../components/QuizDisplay";

export async function getStaticPaths() {
  return {
    paths: Object.keys(QUIZ_NAMES).map((key) => ({
      params: { type: QUIZ_NAMES[key].name },
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
  const [remaining, setRemaining] = useState(-1);
  const { flashBackground } = useContext(BackgroundContext);

  const router = useRouter();
  const { type } = router.query;
  const mode = router.query.mode ? router.query.mode : MODE_NAMES.DEFAULT.name;

  function setRandomPokemon(probabilityData) {
    const pokemon = Object.keys(probabilityData);
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    setId(`${randomIndex + 1}`);
  }

  useEffect(()=>{
    if(!router.isReady) return;

    setRemaining(mode == MODE_NAMES.ENDLESS.name ? 3 : 10);

  }, [router.isReady]);

  function clickCallback(correct) {
    let newScore = score;
    if (correct) {
      newScore += 1;
    } 
    
    let newRemaining = 0;
    if (mode == MODE_NAMES.ENDLESS.name && correct) {
      newRemaining = remaining;
    } else {
      newRemaining = remaining - 1;
    }

    // if game end, redirect to end page
    if (newRemaining == 0) {
      router.push({
        pathname: "/end",
        query: { score: newScore },
      }, "/end");
    } else {
      setScore(newScore)
      setRemaining(newRemaining);
      flashBackground(correct);
      setRandomPokemon(probabilityData);
    }
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
    let probability_json = QUIZ_CONFIG[type].probability_json;

    fetch(`${process.env.BASE_PATH}/data/${probability_json}`)
      .then(response => response.json())
      .then(data => {
        setProbabilityData(data);
        setRandomPokemon(data);
      })
      .catch(error => console.error(error));
  }, []);

  if (id == "0" || pokemonLoading || remaining == -1) {
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
          <QuizDisplay
            mode={mode}
            type={type}
            score={score}
            remaining={remaining}
          />
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