import React from "react";
import triviaQuestions from "../triviaQuestions.json";
import SelectionItem from "./SelectionItem";
import ScoreBoard from "./ScoreBoard";

const initState = {
    score: 0,
    selectedAnswer: null,
    questionIndex: 0,
    correct: 0,
}
const trivias = triviaQuestions;
class Home extends React.Component {
    
    constructor() {
        super();
        this.state={
            ...initState,
            triviaQuestions: trivias.map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value).slice(0, 10),
            personalBest: 0,
        }
    }

    componentDidMount() {
        if (this.state.triviaQuestions) {
            //add the correct answer with the incorrect answers to the same array and shuffle the order of the array
            this.getRandomSelections();
        }
        if (this.props.location.state) {
          this.setState({userName: this.props.location.state.userName})
        } 
    }

    //increment the correct count if the selected option is the correct answer
    selectAnswer = (selection, question) => {
        this.setState({selectedAnswer: selection}, () => {
            if (question.correct === selection) {
                this.setState(prevState => ({correct: prevState.correct + 1}));
            }
        })
    }
    //proceed to the next question
    proceed = () => {
        this.setState(prevState => ({
            questionIndex: prevState.questionIndex + 1,
            selectedAnswer: null,
        }))
    }
    //randomize a new set of trivia questions and randomize the order of the multiple choice options
    playAgain = () => {
        this.setState(prevState => ({
            personalBest: prevState.personalBest > prevState.correct ? prevState.personalBest : prevState.correct,
            triviaQuestions: trivias.map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value).slice(0, 10),
            ...initState,
        }), () => {
            this.getRandomSelections();
        }) 
    }

    getRandomSelections = () => {
        let temp = this.state.triviaQuestions;
            for (let item of temp) {
                item["selections"] = [...item.incorrect, item.correct].map((a) => ({sort: Math.random(), value: a}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
            }
        this.setState({triviaQuestions: temp})
    }

    render() {
        return(
            <div>
                <h1 style={{color: "white", marginTop: "70px"}}>Welcome! Challenger {this.state.userName}</h1>
                <div style={{color: "white"}}>
                    <h3>{this.state.correct} / {this.state.triviaQuestions.length}</h3>
                </div>
                
                <div style={{
                        background: "rgba(232, 231, 225, 0.5)", height: "700px", width: "700px", margin: "0 auto",
                        borderRadius: "20px", color: "white",
                    }}
                >
                    {this.state.triviaQuestions.map( (question, index)  => {
                        if (this.state.questionIndex === index) {
                            return <div key={index} style={{paddingTop: "50px"}}> 
                                    <h3>Question {this.state.questionIndex + 1}</h3>
                                    <h3>{question.question}</h3>
                                    <div style={{paddingTop: "20px"}}>
                                        {question.selections ? question.selections.map((selection, index) => {
                                            return <SelectionItem key={index} selection={selection} correctAnswer={selection === question.correct} selectedAnswer={this.state.selectedAnswer} selectAnswer={this.selectAnswer} question={question}/>
                                        }) : null}
                                    </div>
                                    {this.state.selectedAnswer ? 
                                        <div onClick={this.proceed} style={{borderRadius: "25px", background: "white", width: "200px", margin: "0 auto", height: "45px", fontWeight: "bold", position: "relative", cursor: "pointer"}}>
                                            <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", color: "rgb(2,0,36)"}} className="center-label">Next</div>
                                        </div> 
                                        : 
                                        null
                                    }
                                </div>
                        } else {
                            return null;
                        }
                    })}
                    {this.state.questionIndex === this.state.triviaQuestions.length ? 
                        <ScoreBoard correct={this.state.correct} playAgain={this.playAgain} triviaQuestions={this.state.triviaQuestions} userName={this.props.userName} personalBest={this.state.personalBest}/> 
                        : 
                        null
                    }
                </div>
            </div>
        )
    }

}


export default Home;