import { createContext } from "react";
import questions from '../data/questions.json'
import { useReducer } from "react";
export const QuizContext = createContext()

const INITIAL_STATE = {
  questions,
  currentQuestion: 1,
  gameState: "Start",
  score: 0
}

const quizReducer = (state, action) => {
  switch (action.type) {
    case "QUIZ_START":
      return { ...state, gameState: "Start" }
    case "QUIZ_PLAYING":
      return { ...state, gameState: "Playing", currentQuestion: action.currentQuestion }
    case "QUIZ_END":
      return { ...state, gameState: "End", score: action.score }
    case "CHANGE_QUEST":
      return { ...state, currentQuestion: action.currentQuestion, score: action.score }
    default:
      return state
  }
}


export const QuizProvider = ({ children }) => {
  const quiz = useReducer(quizReducer, INITIAL_STATE)
  return (
    <QuizContext.Provider value={quiz}>
      {children}
    </QuizContext.Provider>
  )
}