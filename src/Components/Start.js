import "../App.css";


export default function Start(props) {

    return (
        <div className="Start-div">
            <h2>JavaScript Quiz</h2>
            <h3>5 Questions covering the basics of JavaScript</h3>
            <h5>you get 1 point for each correct answer, at the end of each quiz you get your total score, percentage, grade and Remarks</h5>
            <button onClick={props.quizStart} className={"start-button"}>Let's Start</button>
        </div>
    )
}