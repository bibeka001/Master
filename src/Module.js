// import React, { Component } from "react";

// class Module extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   increment() {
      //not
    // this.setState({
    //   count: this.state.count + 1
    // },
    // () =>{
    //     console.log('callback value', this.state.count);
    // }
    // );//

//     this.setState((prevState, props) => ({
//       count: prevState.count + 1,
//     }));
//     console.log(this.state.count);
//   }
//   incrementFour() {
//     this.increment();
//     this.increment();
//     this.increment();
//     this.increment();
//   }
//   render() {
//     return (
//       <>
//         Count - {this.state.count}
//         <button onClick={() => this.incrementFour()}> Increment </button>
//       </>
//     );
//   }
// }

// export default Module;
