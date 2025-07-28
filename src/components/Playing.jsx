import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import Question from './Question'
import './Playing.modules.css'
const Playing = () => {
  const [quiz, dispatch] = useContext(QuizContext)
  const { questions } = quiz.questions

  return (
    <div className="playing quiz-container">
      <div className="score">Pergunta {quiz.currentQuestion} de {questions.length}</div>
      <Question/>
    </div>
  )
}

export default Playing