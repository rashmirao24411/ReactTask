import React from "react";
function App1(){
    let curDate=new Date(2021,10,21,16);
    curDate=curDate.getHours();
    let greetings='';
    const csssStyle={};
    if (curDate>=1&& curDate<12)
    {
      greetings="Good Morning";
      csssStyle.color="Yellow";
    }
    else if(curDate>12&& curDate<19)
    {
      greetings="Good Evening"
      csssStyle.color="Orange";
    }
    else{
      greetings="Good Night"
      csssStyle.color="Black";
    }
    return(<div><h1>Hello People,<span style={csssStyle}> {greetings}</span></h1>
        </div>);
}
export default App1;