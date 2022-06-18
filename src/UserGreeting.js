import React from "react";

export default UserGreeting;















//Conditnional Renderting with Functional Component
function UserGreeting(){
    const message = "false";
    return(
<>
    <h1>hello</h1>
    {message === 'true' ? 'good morning' : 'good night'}
</>
    )
}



// import React, { Component } from "react";
// class UserGreeting extends Component {
//     constructor(props) {
//       super(props)

//       this.state= {
//           isLogedIn: false
//       }
    
      
//     }
    
//   render() {
 
    //SHORT CIRCUIT OPERATOR
//    return  this.state.isLogedIn && <div>Welcome Bibeka</div>

       //CONDITIONAL RENDERING
    //   return this.state.isLogedIn ? (
    //       <div>Welcome Bibeka</div>
    //       ) : (
    //       <div>Welcome Guest  </div>
    //       )
           
    //ELEMENT VARIABLE 
    //   let message 
    //   if (this.state.isLogedIn){
        //       message = <div>Welcome Bibeka</div>
        //   }else{
            //       message= <div>Welcome Guest</div>
            //   }
            //   return <div>{message}</div>
            
            //IF ELSE CONDITION
    //   if(this.state.isLogedIn){
    //       return(
    //           <div>WElcome Bibeka</div>
    //       )
    //   }else{
    //       return(
    //           <div>Welcome Guest</div>
    //       )
    //   }


//     return (
//       <>
// <div>Welcome Bibeka</div>
// <div Welcome Guest></div>        
//       </>
//     );
//   }
// }

// export default UserGreeting;
