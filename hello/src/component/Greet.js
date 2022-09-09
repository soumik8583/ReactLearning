import React from 'react';

//normal js function
/*function Greet(){
    return <h1>hello</h1>;
}*/

//
////one approch for writing arrow
/*const Greet=()=> {
    return <h1>hello hello in functional component video</h1>;
} */
//2nd approch for writing arrow function
//named export 
/*export const Greet=()=> <h1>hello hello in functional component video</h1>;*/
const Greet=props =>{
console.log(props);
 return (
 <div><h1>hello in functional component video </h1>
 <h1>{props.name}</h1>
 <h1>{props.prop2}</h1>
 <p>{props.children}</p>
 
 </div>
)}
 export default Greet;