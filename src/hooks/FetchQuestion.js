import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

import * as Action from '../redux/question_reducer'

export const useFetchQuestion = (id) => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                const data = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/question?id=${id}`, (data) => data)

                const {questions, answers} = data[0]
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));
                    dispatch(Action.startExamAction({ question : questions, answers }))
                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch, id]);

    return [getData, setGetData];
}


export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); 
    } catch (error) {
      console.log(error)
  }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); 
    } catch (error) {
        console.log(error)
    }
}
