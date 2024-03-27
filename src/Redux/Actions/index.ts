
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const ADD_ID = 'ADD_ID';

export const addQuizz = () => {
  return { type: NEXT_QUESTION
}
}

export const setIdResposta = (id) => {
  return {
    type: ADD_ID,
    objectAnswers: {
      id
    }
  }
}