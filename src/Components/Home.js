import React from "react";
import triviaQuestions from "../triviaQuestions.json";
import { Card, Button, Radio } from "antd";

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
        for (let item of this.state.triviaQuestions) {
            item["selections"] = [...item.incorrect, item.correct].map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
        }
        if (this.props.location.state) {
          this.setState({userName: this.props.location.state.userName})
        }
        
    }

    selectAnswer = (e) => {
        this.setState({selectedAnswer: e.target.value})
    }

    render() {
        console.log(this.state.triviaQuestions)
        return(
            <div>
                <h1>Welcome, Challenger {this.state.userName}</h1>
                
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
                                    <Radio.Group onChange={this.selectAnswer} value={this.state.selectedAnswer}>
                                    {question.selections ? question.selections.map((selection, index) => {
                                        return <Radio value={selection}>{selection}</Radio>
                                    }) : null}
        
                                    </Radio.Group>
                                    <Button onClick={this.handleSubmit}>Submit Answer</Button>
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