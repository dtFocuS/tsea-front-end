import React from "react";
import triviaQuestions from "../triviaQuestions.json";
import { Card, Button, Radio } from "antd";
import SelectionItem from "./SelectionItem";

class Home extends React.Component {
    
    constructor() {
        super();
        this.state={
            triviaQuestions: triviaQuestions.map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value),
            score: 0,
            selectedAnswer: null,
            questionIndex: 0,
            correct: 0,
            incorrect: 0,
        }
    }

    componentDidMount() {
        if (this.state.triviaQuestions) {
            for (let item of this.state.triviaQuestions) {
                item["selections"] = [...item.incorrect, item.correct].map((a) => ({sort: Math.random(), value: a}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
            }
        }
        
        if (this.props.location.state) {
          this.setState({userName: this.props.location.state.userName})
        }
        
    }

    selectAnswer = (value) => {
        this.setState({selectedAnswer: value})
    }

    handleSubmit = (question) => {
        if (question.correct === this.state.selectedAnswer) {
            this.setState(prevState => ({correct: prevState.correct + 1}));
        } else {
            this.setState(prevState => ({incorrect: prevState.incorrect + 1}));
        }
    }

    render() {
        return(
            <div>
                <h1>Welcome, Challenger {this.state.userName}</h1>
                <div style={{position: "absolute", top: 0, right: 30}}>
                    <h4>Correct: {this.state.correct}</h4>
                    <h4>Incorrect: {this.state.incorrect}</h4>
                </div>
                
                <div style={{
                        background: "#e8e7e1", height: "750px", width: "700px", margin: "0 auto",
                        borderRadius: "20px"
                    }}
                >
                    {this.state.triviaQuestions.map( (question, index)  => {
                        if (this.state.questionIndex + 1 === index) {
                            return <div key={index}> 
                                    <h3>Question {this.state.questionIndex + 1}</h3>
                                    <h3>{question.question}</h3>
                                    {/* <Radio.Group onChange={this.selectAnswer} value={this.state.selectedAnswer}> */}
                                    {question.selections ? question.selections.map((selection, index) => {
                                        return <SelectionItem key={index} selection={selection} correctAnswer={selection === question.correct} selectedAnswer={this.state.selectedAnswer} selectAnswer={this.selectAnswer}/>
                                    }) : null}
        
                                    {/* </Radio.Group> */}
                                    {/* <Button onClick={() => this.handleSubmit(question)}>Submit Answer</Button> */}
                                </div>
                        } else {
                            return null
                        }
                    })}

                </div>
            </div>
        )
    }

}


export default Home;