import { AnyAction } from "redux";
import data from "../../data/data";
import { NEXT_QUESTION } from "../Actions";

const INITIAL_STATE = {
  data,
  currentQuestion: 0,
  endGame: false
}

const rootReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch(action.type){
    case NEXT_QUESTION: 
    if(state.currentQuestion === data.length -1){
      return {
        ...state,
        endGame: true
      }
    }
    return {
      ...state,
      currentQuestion: state.currentQuestion + 1
    }
    default:
      return {
        ...state,
      }
  }
 
}

export default rootReducer;