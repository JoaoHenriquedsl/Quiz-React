import './End.modules.css'
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

const End = () => {
  const [quiz, dispatch] = useContext(QuizContext)
  const { questions } = quiz.questions
  console.log(questions)
  return (
    <div className="end quiz-container">
      <h1>Fim de Jogo!</h1>
      <p>Você acertou {quiz.score} de {questions.length} perguntas.</p>
      <p>
        <button onClick={() => dispatch({ type: "QUIZ_START" })}>Jogar novamente</button>
      </p>
    </div>
  )
}

export default End