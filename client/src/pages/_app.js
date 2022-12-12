import React, { useState } from "react";
import BackgroundContext from "../contexts/BackgroundContext";
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.css';

const MyApp = ({ Component, pageProps }) => {
  const [background, setBackground] = useState({});

  function flashBackground(correct) {
    setBackground({ 
      backgroundColor: correct ? "#00ff00" : "red",
      transition: "background-color 0.6s ease"
    });
    const interval = setInterval(() => {
      setBackground({});
      clearInterval(interval);
    }, 200);
  }

  return (
    <div className="background" style={background}>
      <BackgroundContext.Provider value={{ flashBackground }}>
        <Component {...pageProps} />
      </BackgroundContext.Provider>
    </div>
  )
}
  

export default MyApp
