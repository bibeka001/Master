import React, { Component } from "react";
class Bind extends React.Component {
  state = {
    salary: 70000,
    hike: 0,
  };
  hikeHandler = (value) => {
      console.log(this);
    this.setState({ hike: value });
    console.log(value );
  };
//   hikeTenHandler = () => {
//     this.setState({ hike: 10 });
//   };
//   hikeFiftyHandler = () => {
//     this.setState({ hike: 50 });
//   };
  render() {
    return <React.Fragment>
        <h3>Hike: {this.state.hike}</h3>
        <button onClick={this.hikeHandler.bind(this, 5)}> 5%</button>
        <button onClick={this.hikeHandler.bind(this,10)}>10%</button>
        <button onClick={this.hikeHandler.bind(this, 50)}>50%</button>
    </React.Fragment>;
  }
}
export default Bind;
