import quizCompleteImg from '../assets/quiz-complete.png';
import Data from '../data/questions';
export default function Summary({userAnswers}){
  const skippedAnswers  = userAnswers.filter((a)=> a === null)
  const correctAnswers = userAnswers.filter((a,index)=> a == Data[index].answers[0] )

  const skippedAnswersShare =  Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare =  Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare
 return(
  <div id="summary">
    <img src={quizCompleteImg} alt="Trophy icon" />
    <h2>Quiz Completed!</h2>
    <div id="summary-stats">
      <p>
        <span className="number">{skippedAnswersShare}%</span>
        <span className="text">skipped</span>
      </p>
      <p>
        <span className="number">{correctAnswersShare}%</span>
        <span className="text">answered correctly</span>
      </p>
      <p>
        <span className="number">{wrongAnswersShare}%</span>
        <span className="text">answered incorrectly</span>
      </p>
      
    </div>
    <ol>
        {userAnswers.map((answers,index) =>{
          let cssClass = 'user-answer'
          if( answers === null){
            cssClass += ' skipped';
          }
          else if (answers == Data[index].answers[0])
          {
            cssClass += ' correct';
          }
          else{
            cssClass += ' wrong';
          }
          return (
            <li key={index}>
              <p className="question">{Data[index].text}</p>
              <p className={cssClass}>{answers ?? 'Skipped'}</p>
            </li>
          )
        })}
      </ol>
  </div>
 )
}