import React from "react";


class SelectionItem extends React.Component {


  render() {
    return(
      <div className={`selection ${this.props.selectedAnswer ? this.props.correctAnswer ? "right-selection" : "wrong-selection" : ""}`} onClick={() => this.props.selectAnswer(this.props.selection, this.props.question)} style={{width: "300px", margin: "0 auto 20px auto", 
      cursor: "pointer", borderRadius: "25px", height: "45px", position: "relative"}}>
        <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", width: "100%"}} className="center-label">
          <p style={{fontWeight: "bold"}}>{this.props.selection}</p>
        </div>
        
      </div>
    )
  }


}

export default SelectionItem;