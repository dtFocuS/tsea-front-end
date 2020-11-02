import React from "react";
import { withRouter } from "react-router-dom";

class LandingPage extends React.Component {

    constructor() {
        super();
        this.state={
            userName: "",
        }
    }

    handleChange=(e) => {
        this.setState({userName: e.target.value}, ()=> console.log(this.state.userName));
    }

    handleEnter = () => {
        if (this.state.userName.replace(/\s+/g, '') !== "") {
            this.props.history.push("/home", {
                userName: this.state.userName
              });
        } 
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%", position: "relative"}}>
                <div style={{width: "450px", height: "600px", backgroundColor: "rgba(232, 231, 225, 0.7)", margin:"0 auto", borderRadius: "30px", marginTop: "20vh", paddingTop: "50px", color: "white"}}>
                    <h1>Trivia Challenge</h1>
                    <h4>Enter your username to continue</h4>
                    <input style={{borderRadius: "20px", width: "250px", height: "30px", textAlign: "center", border: "none", outline: "0", fontSize: "20px"}} onChange={this.handleChange}></input>
                    <div onClick={this.handleEnter} style={{width: "200px", height: "35px", border: "0px solid black", borderRadius: "20px",  background: "linear-gradient(to left, #ff9999 0%, #ff99cc 100%)", color: "#fff", margin:"20px auto", fontSize: "25px", cursor: "pointer", }}>Enter</div>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingPage);
