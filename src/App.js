import "./App.css";
import { useState } from "react";
import Question from "./Components/Question";
import Result from "./Components/Result";
import Start from "./Components/Start";

const questionArray = [
  {
    id: 1,
    question: "How does a FOR loop start?",
    Options: [
      {
        value: 'for(i= 0; i<=5)',
        selected: false
      },
      {
        value: 'for i= 0 to 5',
        selected: false
      },
      {
        value: 'for(let i =0; i<=5; i++)',
        selected: false
      },
      {
        value: 'for(i <=5l; i++)',
        selected: false
      },
    ],
    Answer: "for(let i =0; i<=5; i++)",
  },
  {
    id: 2,
    question: "Which of the following is a server-side Java Script object?",
    Options: [
      {
        value: 'Function',
        selected: false
      },
      {
        value: 'File',
        selected: false
      },
      {
        value: 'FileUpload',
        selected: false
      },
      {
        value: 'Date',
        selected: false
      },
    ],
    Answer: "Function",
  },
  {
    id: 3,
    question: "Which attribute needs to be changed to make elements invisible?",
    Options: [
      {
        value: 'visibilty',
        selected: false
      },
      {
        value: 'visible',
        selected: false
      },
      {
        value: 'invisibility',
        selected: false
      },
      {
        value: 'invisible',
        selected: false
      },
    ],
    Answer: "visibilty",
  },
  {
    id: 4,
    question: "Which of the following is not a valid JavaScript variable name?",
    Options: [
      {
        value: '2java',
        selected: false
      },
      {
        value: '_java_and_ java _names',
        selected: false
      },
      {
        value: 'javaandjava',
        selected: false
      },
      {
        value: 'None of the above',
        selected: false
      },
    ],
    Answer: "2java",
  },
  {
    id: 5,
    question: "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
    Options: [
      {
        value: 'Eval',
        selected: false
      },
      {
        value: 'ParseDoule',
        selected: false
      },
      {
        value: 'ParseObject',
        selected: false
      },
      {
        value: 'Efloat',
        selected: false
      },
    ],
    Answer: "Eval",
  },
]

function App() {
  const [indexCount, setIndexCount] = useState(0);
  const [scoreCount, setNumberCount] = useState(0);
  const [checkResults, setCheckResults] = useState(true)
  const [checkStartQuiz, setCheckStartQuiz] = useState(true)

  const quizStart = () => {
    setCheckStartQuiz(false)
  }

  const countIncrease = () => {
    questionArray[indexCount].Options.forEach((item, index) => {
      if (item.selected) {
        console.log(index, item.value)
        console.log(questionArray[indexCount].Answer)
        if (item.value === questionArray[indexCount].Answer) {
          setNumberCount(scoreCount + 1)
        }
      }
    });
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
                  <Question IndexValue={indexCount} question={questionArray[indexCount]} />
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
                <Result score={scoreCount} percentage={percentage} grade={grade} remark={remarks} />
            }
          </div>
      }

    </div >
  );
}

export default App;
