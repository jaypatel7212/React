import React from "react";

// function Greet(){
//     return <h1>Hello </h1>
// }

// const Greet = () => <h1>Hello </h1>

const Greet = props => {
    console.log(props)
    return  <h1>Hello {props.name}   {props.heroName}</h1>; 
}
export default Greet