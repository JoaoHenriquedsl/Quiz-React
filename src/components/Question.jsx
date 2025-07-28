import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import './Question.modules.css'
import { useState } from 'react'

const Question = () => {
  const [quiz, dispatch] = useContext(QuizContext)
  const { questions } = quiz.questions
  const [score, setScore] = useState(0)
  const questionQuiz = questions.filter(question => question.id === quiz.currentQuestion)

  const handleClick = (answer) => {
    if (quiz.currentQuestion < questions.length) {
      if (answer.correct) {
        const newScore = score + 1
        setScore(newScore)
        dispatch({
          type: "CHANGE_QUEST",
          currentQuestion: quiz.currentQuestion + 1,
          score: newScore
        })
      } else {
        dispatch({
          type: "CHANGE_QUEST",
          currentQuestion: quiz.currentQuestion + 1,
          score: score
        })
      }
    } else {
      if (answer.correct) {
        const newScore = score + 1
        dispatch({
          type: "QUIZ_END",
          score: newScore
        })
      } else {
        dispatch({
          type: "QUIZ_END",
          score: score
        })
      }
    }
  }


  return (
    <>
      {questionQuiz.map((question, index) => (
        <div className='question' key={index}>
          <div className="question-title"><h1>{question.question}</h1></div>
          <div className="answers">
            {question.answers.map((answer, index) => (
              <span
                className='answer'
                key={index}
                onClick={() => {
                  handleClick(answer)
                }}>{answer.text}</span>
            ))}
          </div>
        </div>
      ))}
    </>

  )
}

export default Question