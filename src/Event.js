import React, { Component } from "react";
class Event extends Component {
  state = { msg: "Hello" };
  gmHandler = () => {
    console.log("Test Case 123");
    this.setState({ msg: "Good Morning" });
  };
  state= {comment: 'Excellent'};
  dmHandler = () =>{
      this.setState({comment: 'Im satisfied'})
  }
  state ={gd: 'good'}
  mdHandler (){
      this.setState({gd: 'buenos dias'})
  }

  render() {
    return (
      <>
        <h2>Welcome message {this.state.msg}</h2>
        <button onClick={this.gmHandler}>Good</button>
        <h1>The food is very tasty{this.state.comment}</h1>
        <button onMouseOver={this.dmHandler}>Cool</button>
        <h1>hello {this.state.gd}</h1>
        <button onClick={ () => {
            this.mdHandler();
        }}> dinar</button>
      </>
    );
  }
}
export default Event;
