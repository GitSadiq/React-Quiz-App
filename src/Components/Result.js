import "../App.css";
function Result(props) {
    const attemptQuiz = () => {
        window.location.href = "http://localhost:3000/"
    }

    return (
        <div className="score">
            <p><b>{props.score}</b> out of <b>5</b> Answers are correct</p>
            <p>You got  <b>{props.percentage}%</b></p>
            <p>your grade <b>"{props.grade}"</b> </p>
            <p>Remarks: <b>"{props.remark}"</b></p>
            <button onClick={attemptQuiz} className={"start-button"}>Start Again</button>
        </div>
    )
}

export default Result