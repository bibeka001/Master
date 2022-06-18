// import React from "react";
// function Welcome(props){
//     console.log(props);
//     return(
//         <h1>Welcome {props.name }</h1>
//     )
// }
// // export default Welcome;


// import React, {Component} from 'react';
// class Welcome extends Component{
//     render(){
//         return(<>
//             <h1>Welcome {this.props.name} {this.props.surName} </h1>
//             {this.props.children}
//             </>)
//     }
// }
// export default Welcome;


// DESTRUCTING CLASS COMPONENT
// import React, {Component} from 'react';
// class Welcome extends Component{
//     render(){
//         const {name, surName} = this.props
//         // const {state1, state2} = this.state
//         //Not to use here. Necessary when this type of situation come accross
//         return(
//             <>
//                 <h1>Welcome {name}  {surName} </h1>
//             </>
//         )
//     }
// }
// export default Welcome;