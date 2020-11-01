import React from "react";
import triviaQuestions from "../triviaQuestions.json";
import { Card, Button, Radio } from "antd";
import SelectionItem from "./SelectionItem";
import ScoreBoard from "./ScoreBoard";

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
            console.log(this.state.triviaQuestions)
        }
        
        if (this.props.location.state) {
          this.setState({userName: this.props.location.state.userName})
        }
        
    }

    selectAnswer = (selection, question) => {
        this.setState({selectedAnswer: selection}, () => {
            if (question.correct === selection) {
                this.setState(prevState => ({correct: prevState.correct + 1}));
            }
        })
        
        // this.setState({selectedAnswer: value})
    }

    proceed = () => {
        this.setState(prevState => ({
            questionIndex: prevState.questionIndex + 1,
            selectedAnswer: null,
        }))
        // if (question.correct === this.state.selectedAnswer) {
        //     this.setState(prevState => ({correct: prevState.correct + 1}));
        // } else {
        //     this.setState(prevState => ({incorrect: prevState.incorrect + 1}));
        // }
    }

    render() {
        return(
            <div>
                <h1>Welcome, Challenger {this.state.userName}</h1>
                <div >
                    <h3>{this.state.correct} / {this.state.triviaQuestions.length}</h3>
                </div>
                
                <div style={{
                        background: "#e8e7e1", height: "750px", width: "700px", margin: "0 auto",
                        borderRadius: "20px"
                    }}
                >
                    {this.state.triviaQuestions.map( (question, index)  => {
                        if (this.state.questionIndex === index) {
                            return <div key={index} style={{paddingTop: "20px"}}> 
                                    <h3>Question {this.state.questionIndex + 1}</h3>
                                    <h3>{question.question}</h3>
                                    {/* <Radio.Group onChange={this.selectAnswer} value={this.state.selectedAnswer}> */}
                                    <div style={{paddingTop: "20px"}}>
                                        {question.selections ? question.selections.map((selection, index) => {
                                            return <SelectionItem key={index} selection={selection} correctAnswer={selection === question.correct} selectedAnswer={this.state.selectedAnswer} selectAnswer={this.selectAnswer} question={question}/>
                                        }) : null}
                                    </div>
                                    
        
                                    {/* </Radio.Group> */}
                                    {/* <Button onClick={() => this.handleSubmit(question)}>Submit Answer</Button> */}
                                    {this.state.selectedAnswer ? <div onClick={this.proceed} style={{borderRadius: "25px", background: "white", width: "200px", margin: "0 auto", height: "45px", fontWeight: "bold", position: "relative", cursor: "pointer"}}><div style={{margin: "0", position: "absolute", top: "50%", left: "50%",}} className="center-label">Next</div></div> : null}
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