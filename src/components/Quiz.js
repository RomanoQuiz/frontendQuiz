import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate, useParams } from "react-router-dom";
import photo from "../helper/bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8.u5-removebg-preview.png";

function Quiz() {
  const result = useSelector((state) => state.result.result);
  const [check, setChecked] = useState(undefined);
  const { trace, queue } = useSelector((state) => state.questions);
  const {id} = useParams();
  const dispatch = useDispatch();
  
  
  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(i) {
    setChecked(i);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }
  return (
    <div className="container">
      <div className="titleContainer">
        <img src={photo} id="firstPic" className="romalogo" alt="roma logo"/>
        <h1 className="title text-light">Romano Quiz</h1>
        <img src={photo} id="secondPic" className="romalogo" alt="roma logo"/>
      </div>

      <Questions onChecked={onChecked} quizId={id}/>

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
