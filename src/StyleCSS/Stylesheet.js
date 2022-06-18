import React from 'react';
function Stylesheet(props){
      
    let className=props.primary ? 'primary' : ''
    return (
        <>
<h1 className= {`${className} font-xl`}>hello Buddy</h1>
        </>
    )
}

export default Stylesheet;
