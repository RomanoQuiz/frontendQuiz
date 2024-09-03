import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import {
  attemps_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";
import { usePublishResult } from "../hooks/setResult";
import photo from "../helper/bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8.u5-removebg-preview.png";

function Result() {
  const dispatch = useDispatch();
  const { queue, answers } = useSelector((state) => state.questions);
  const { result, userId } = useSelector((state) => state.result);

  const totalPoints = queue.length * 12.5;
  const earnPoints = earnPoints_Number(result, answers);
  const flag = flagResult(totalPoints, earnPoints);

  usePublishResult({
    result,
    username: userId,
    points: earnPoints,
    achived: flag ? "Promovat" : "Nepromovat",
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="container">
      <div className="titleContainer">
        <img src={photo} id="firstPic" className="romalogo" alt="roma logo"/>
        <h1 className="title text-light">Romano Quiz</h1>
        <img src={photo} id="secondPic" className="romalogo" alt="roma logo"/>
      </div>
      <div className="result flex-center">
        <div className="flex">
          <span>Nume</span>
          <span className="bold">{userId}</span>
        </div>
        <div className="flex">
          <span>Punctaj total:</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total intrebari:</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Punctajul total obtinut:</span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Rezultat:</span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Promovat" : "Nepromovat"}
          </span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}

export default Result;
