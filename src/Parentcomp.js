import React, { Component } from "react";
import Purecomponent from "./Purecomponent";
import Regcomp from "./Regcomp";

class parentcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "bibeka",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "bibeka",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        Parentcomponent1
        <Regcomp name={this.state.name} />
        <Purecomponent name={this.state.name} />
      </div>
    );
  }
}

export default parentcomp;
