import { useState, useEffect } from "react";
import Options from "./Options";
import "../App.css";

function Question(props) {
  const [questionObject, setquestionObject] = useState();

  useEffect(() => {
    setquestionObject(props.question)
  }, [props.question])

  const pickAnswer = (e, index) => {
    const updatedQuestionObject = { ...questionObject };
    updatedQuestionObject.Options[index].selected = true;
    updatedQuestionObject.Options.forEach((item, i) => {
      if (i !== index) {
        updatedQuestionObject.Options[i].selected = false;
      }
    });
    setquestionObject(updatedQuestionObject)
  }
  return (
    <div>
      <div className="QuestNum Question">Question # {questionObject?.id} of 5</div>
      <div className="Question">{questionObject?.question}</div>
      <div className="OptDiv">
        {questionObject?.Options.map(
          (item, index) => {
            return (
              <Options key={index} Item={item} PickAnswer={(e) => pickAnswer(e, index)} />
            )
          }
        )}
      </div>
    </div>
  );
}

export default Question;
