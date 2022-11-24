import "./App.css";
import { useState } from "react";
import Question from "./Components/Question";
import Result from "./Components/Result";
import Start from "./Components/Start";
import questionArray from "./Components/QuestionArray";

function App() {
  const [indexCount, setIndexCount] = useState(0);
  const [scoreCount, setNumberCount] = useState(0);
  const [checkResults, setCheckResults] = useState(true)
  const [checkStartQuiz, setCheckStartQuiz] = useState(true)
  const [getAnswer, setAnswer] = useState()

  const quizStart = () => {
    setCheckStartQuiz(false)
  }

  const countIncrease = () => {
    // questionArray[indexCount].Options.forEach((item, index) => {
    //   if (item.selected) {
    //     console.log(index, item.value)
    //     console.log(questionArray[indexCount].Answer)
    //     if (item.value === questionArray[indexCount].Answer) {
    //       setNumberCount(scoreCount + 1)
    //     }
    //   }
    // });
    if (questionArray[indexCount].Answer === getAnswer) {
      setNumberCount(scoreCount + 1)
    }
    setIndexCount(indexCount + 1);
  }

  const finished = () => {
    countIncrease()
    setCheckResults(false)
  }

  //Calculate the Results
  const percentage = ((scoreCount / 5) * 100)
  let grade, remarks

  if (percentage >= 90) {
    grade = "A+"
    remarks = "Excellent job"
  }
  else if (percentage >= 80 && percentage < 90) {
    grade = "A"
    remarks = "Good effort"
  }
  else if (percentage >= 70 && percentage < 80) {
    grade = "B"
    remarks = "Needs improvement"
  }
  else if (percentage < 70) {
    grade = "Fail"
    remarks = "study much harder"
  }




  return (
    <div className="App-header">
      <h1>Quiz Application</h1>
      {
        checkStartQuiz ?
          <Start quizStart={quizStart} />
          :
          <div className="App-Body">
            {
              checkResults ?
                <div className='App-Content'>
                  <Question IndexValue={indexCount} question={questionArray[indexCount]} getAnswer={setAnswer} />
                  {(indexCount >= 4) ?
                    <button className="Next-Finish-Button  Finish-Button" onClick={finished}>
                      Finish
                    </button>
                    :
                    <button className="Next-Finish-Button" onClick={countIncrease}>
                      Next
                    </button>
                  }
                </div>
                :
                <Result indexCount={setIndexCount} checkResults={setCheckResults}
                  checkStartQuiz={setCheckStartQuiz} scoreCount={setNumberCount}
                  score={scoreCount} percentage={percentage} grade={grade} remark={remarks} />
            }
          </div>
      }

    </div >
  );
}

export default App;
