import React from 'react';
function sum(a,b){
    let sum = a+b;
    return sum;

}
function mul(a,b)
{
    let mul=a*b;
    return mul;
}
function div(a,b)
{
    let div=a/b;
    div=div.toFixed(2);
    return div;
}
function sub(a,b)
{
    let sub=a-b;
    return sub;
}

export{sum,mul,div,sub};