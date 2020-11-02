import React from "react";
import { withRouter } from "react-router-dom";

class LandingPage extends React.Component {

    constructor() {
        super();
        this.state={
            userName: "",
        }
    }
    //set username as input value
    handleChange=(e) => {
        this.setState({userName: e.target.value});
    }
    //proceed to home page if username is entered
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
                <div style={{width: "450px", height: "450px", backgroundColor: "rgba(232, 231, 225, 0.7)", margin:"0 auto", borderRadius: "30px", marginTop: "20vh", paddingTop: "50px", color: "white"}}>
                    <h1 style={{fontSize: "45px"}}>Trivia Challenge</h1>
                    <h3 style={{paddingTop: "20px"}}>Enter your username</h3>
                    <form>
                        <input style={{borderRadius: "20px", width: "250px", height: "30px", textAlign: "center", border: "none", outline: "0", fontSize: "20px"}} onChange={this.handleChange} required/>
                        <input type="submit" onClick={this.handleEnter} style={{width: "200px", height: "35px", border: "0px solid black", borderRadius: "20px",  outline: "0",
                        background: "linear-gradient(to left, #ff9999 0%, #ff99cc 100%)", color: "#fff", margin:"40px auto", fontSize: "25px", cursor: "pointer", fontWeight: "bold", display: "block"}}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingPage);
