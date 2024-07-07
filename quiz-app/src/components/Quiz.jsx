import QUESTIONS from "../data/questions"
import quizCompleteImg from '../assets/quiz-complete.png';
import { useState } from "react"
import QuestionTimer from "./QuestionTimer";
import { useCallback } from "react";
import Summary from "./Summary";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{activeQuestionIndex}:{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            
            return(
                <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)} >
                  {answer}
                </button>
              </li>
            )
           
          })}
        </ul>
      </div>
    </div>
  );
}