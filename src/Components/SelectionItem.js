import React from "react";


class SelectionItem extends React.Component {


  render() {
    return(
      <div className={`selection ${this.props.selectedAnswer ? this.props.correctAnswer ? "right-selection" : "wrong-selection" : ""}`} onClick={() => this.props.selectAnswer(this.props.selection, this.props.question)} style={{width: "400px", margin: "0 auto 20px auto", 
      cursor: "pointer", borderRadius: "25px", height: "45px", position: "relative"}}>
        <div className="center-label" style={{width: "100%"}}>
          <p style={{fontWeight: "bold", color: "rgb(2,0,36)"}}>{this.props.selection}</p>
        </div>
        
      </div>
    )
  }


}

export default SelectionItem;