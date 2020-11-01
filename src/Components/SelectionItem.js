import React from "react";


class SelectionItem extends React.Component {


  render() {
    return(
      <div onClick={() => this.props.selectAnswer(this.props.selection)} style={{width: "300px", background: "white", margin: "0 auto 20px auto", 
      cursor: "pointer", border: this.props.selectedAnswer ? this.props.correctAnswer ? "1px solid green" : "1px solid red" : "1px solid black",
      borderRadius: "20px"}}>
        <p style={{fontWeight: "bold"}}>{this.props.selection}</p>
      </div>
    )
  }


}

export default SelectionItem;