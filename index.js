// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// console.log('heeyyy');

// let currentDate = new Date();
// let currentHour = currentDate.getHours();

// let cssStyle = {}

// let greet = '';
// if (currentHour>=0 && currentHour<12) {
//     greet = 'Good Morning';
//     cssStyle.color = "green";
// }
// else if (currentHour>=12 && currentHour<18) {
//     greet = 'Good Afternoon';
//     cssStyle.color = "orange";
// }
// else{
//     greet = 'Good Night';
//     cssStyle.color = "red";
// }
// ReactDOM.render(
//     <>
//     <div>
//     <h1>Hello Sir, <span style={cssStyle}>{greet}</span></h1>
//     </div>
//     </>,
//     document.getElementById('root')
// );


import React from "react";
import ReactDOM from "react-dom";
import add,{subtract,multiply,division} from "./calculator"
ReactDOM.render(
    <>
    <h1></h1>
        <ul>
            <li>
                {add(3,4)};
            </li>
            <li>
               { subtract(3,4)};
            </li>
            <li>
                {multiply(3,4)};
            </li>
            <li>
                {division(3,4)};
            </li>
        </ul>
    </>
    ,
    document.getElementById('root')
)