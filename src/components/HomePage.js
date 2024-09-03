import React from "react";
import { Link } from "react-router-dom";
import photo from "../helper/bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8.u5-removebg-preview.png";
import "../styles/Main.css";

function HomePage() {
  
  return (
    <div className="container" id="homepage">
      <div className="titleContainer">
        <img src={photo} id="firstPic" className="romalogo" alt="roma logo" />
        <h1 className="title text-light">Romano Quiz</h1>
        <img src={photo} id="secondPic" className="romalogo" alt="roma logo" />
      </div>{" "}
      <div id="btnGroupMain">
        <Link to="/quiz-general">
          <button className="btn">Intrebari generale</button>
        </Link>
        <Link to="/quiz-personalitati">
          <button className="btn">Personalitati Rome</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
