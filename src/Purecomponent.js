import React, { Component } from "react";

class Purecomponent extends Component {
  render() {
    return (
      <div>
        Purecomponent
        {this.props.name}
      </div>
    );
  }
}

export default Purecomponent;
