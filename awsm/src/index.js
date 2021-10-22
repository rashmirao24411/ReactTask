import React from 'react';
import ReactDOM from 'react-dom';
const firstname="Rashmi";
const lastname="Yadav";
const currDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <h1>{`Hello my name is ${firstname} and my last name is ${lastname}`}</h1>
  <p>Today date is {currDate}</p>
  <p>Current date is {currTime}</p>
  </>,
  document.getElementById("root")
  
);

