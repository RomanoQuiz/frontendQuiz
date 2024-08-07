import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
import photo from "../helper/bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8.u5-removebg-preview.png";
function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <div className="titleContainer">
        <img src={photo} id="firstPic" className="romalogo" alt="roma logo" />
        <h1 className="title text-light">Romano Quiz</h1>
        <img src={photo} id="secondPic" className="romalogo" alt="roma logo" />
      </div>
      <p id="mainpageinfo">
        Bine ați venit la test! Testul are 10 întrebări. Fiecare întrebare are
        trei opțiuni. Puteți alege doar o opțiune. Puteți examina și modifica
        răspunsurile înainte de încheierea testului. Rezultatul va fi
        declarat la sfârșitul testului.
      </p>
      <form id="form">
        <input
          ref={inputRef}
          className={"userid"}
          type="text"
          placeholder="Nume + Prenume"
        />
      </form>
      <div className="start">
        <Link className="btn" to={inputRef ? "quiz" : "/"} onClick={startQuiz}>
          Start
        </Link>
      </div>
    </div>
  );
}

export default Main;
