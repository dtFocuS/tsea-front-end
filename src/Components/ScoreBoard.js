import React from "react";


class ScoreBoard extends React.Component {

  render() {
    return(
      <div style={{paddingTop: "50px"}}>
        <h1>You got {this.props.correct} out of {this.props.triviaQuestions.length} questions correct!</h1>
        <div style={{paddingTop: "10px"}}>
            <h2>Your current personal best score is {this.props.personalBest > this.props.correct ? this.props.personalBest : this.props.correct} / {this.props.triviaQuestions.length}</h2>
        </div> 
        <div onClick={() => this.props.playAgain()}style={{position: "relative", width: "250px", margin: "100px auto", paddingTop: "50px", borderRadius: "25px", background: "white", cursor: "pointer"}}>
          <div className="center-label"><p style={{fontWeight: "bold", color: "rgb(2,0,36)"}}>Play again</p></div>
        </div>
      </div>

    )
  }
}

export default ScoreBoard;