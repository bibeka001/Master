import React from "react";

function Person({ person }){
  return (
    <div>
      <h1>{`I am ${person.name},  ${person.age} years old. I know ${person.skill}`}</h1>
      
      {/* OR <h1>{`I am ${person.name},  ${person.age} years old. I know ${person.skill}`}</h1> */}
    </div>
  );
};

export default Person;
