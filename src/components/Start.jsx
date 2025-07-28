import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import './Start.modules.css'
const Start = () => {
  const [quiz, dispatch] = useContext(QuizContext)
  return (
    <div className="start quiz-container">
      <h1>QuizMania</h1>
      <p>
        Teste seus conhecimentos em nosso desafio! Clique em Começar para
        iniciar a partida.
      </p>
      <button onClick={() => dispatch({ type: 'QUIZ_PLAYING', currentQuestion: 1 })}>
        Começar
      </button>
    </div>
  )
}

export default Start