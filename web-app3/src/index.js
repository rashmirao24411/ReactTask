import React from 'react';
import ReactDOM from 'react-dom';
import youtuber,{myState,myCity,youtube} from "./App1.jsx"

ReactDOM.render(
  <>
  <ol>
    <li>{youtuber}</li>
    <li>{youtube}</li>
    <li>{myState()}</li>
    <li>{myCity()}</li>
  </ol>
  </>
  ,document.getElementById('root')
);