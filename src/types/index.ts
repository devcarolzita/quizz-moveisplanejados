export type questionTtype = {
  question: string,
  options: string[]
}

export type rootState = {
  currentQuestion: number,
  data: questionTtype[],
  endGame: boolean
}