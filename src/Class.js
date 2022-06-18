import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: "", password: "", submit: '' };
  }
  userNameHandler = () => {
    this.setState();
  };
  passwordHandler = () => {
    this.setState();
  };

  submitHandler = () => {
    this.setState();
  };
  render() {
    return (
      <>
        <label>User Name</label>
        <input type="text" onChange={this.userNameHandler} />
        {/* <h2>Password</h2> */}
        <br />
        <label>Password </label>
        <input type="password" onChange={this.passwordHandler} />
        <br />
        <button onClick={this.submitHandler}>Submit</button>
      </>
    );
  }
}

export default Class;
