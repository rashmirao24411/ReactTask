import React from "react";
const Covid =()=>{
    const getCovidData=async()=>{
        const res= await fetch('https://data.covid19india.org/v4/min/data.min.json')
    }
    useEffect(()=>{
  getCovidData();
    },[]);
  return(
      <>
    <h1>Live</h1>
    <h2>COVID-19 CORONAVIRUS</h2>
    </>
  )
}
export default Covid