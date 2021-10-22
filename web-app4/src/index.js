import React from 'react';
import ReactDOM from 'react-dom';
import {sum,mul,div,sub} from "./calc";
ReactDOM.render(
  <><ol>
    <li>The Addition of two no is {sum(10,20)}</li>
    <li>The multiplication of two no is {mul(10,20)}</li>
    <li>The Division of two no is {div(10,20)}</li>
    <li>The Subtraction of two no is {sub(10,20)}</li>
  </ol></>
  ,document.getElementById('root')

);