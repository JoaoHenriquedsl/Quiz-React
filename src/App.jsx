import { useContext } from "react";
import { QuizContext } from "./context/QuizContext";
import Start from "./components/Start";
import Playing from "./components/Playing";
import End from "./components/End";

const App = () => {
  const [quiz, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome-container">
      {quiz.gameState === "Start" && <Start/>}
      {quiz.gameState === "Playing" && <Playing/>}
      {quiz.gameState === "End" && <End/>}
      
    </div>
  );
};

export default App;
