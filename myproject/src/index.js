import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 var CountryHead="India";
 var tour="Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.";
 const image="https://www.mptourism.com/images/point-of-interest/Taj-ul-Masajid.jpg";
const image1="https://static.toiimg.com/photo/65387228/boating-in-lake.jpg";
const image2="https://s3.india.com/travel/wp-content/uploads/2017/01/kumarakom-625x470.jpg";
const image3="https://images.unsplash.com/photo-1500297726361-1715d90aec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80";
const image4="https://i.pinimg.com/originals/8e/49/7e/8e497e1dd60192cf5e19b6ffd37e4e93.jpg";
const image5="https://cdn.s3waas.gov.in/s384f7e69969dea92a925508f7c1f9579a/uploads/bfi_thumb/2019013156-1-olw9xtrj7ys858bd4yuyq657vm64jsmh1p8qm45tz2.jpg";
const image6="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/05/shrutisuman13-wikicommons.jpg";
const image7="https://www.mptourism.com/images/point-of-interest/Chhatris%20(2).jpg";
const image8="https://www.tourmyindia.com/socialimg/tamilnadu-tourism.jpg";
const image9="https://img.traveltriangle.com/blog/wp-content/uploads/2017/12/gorgeous-building-well-lit-at-night-ss08122017.jpg";
const link="https://en.wikipedia.org/wiki/Taj-ul-Masajid";
const link1="https://unsplash.com/s/photos/lake-boat";
const link2="https://en.wikipedia.org/wiki/Kumarakom";
const link3="https://en.wikipedia.org/wiki/Amritsar";
const link4="https://en.wikipedia.org/wiki/Gulistan-e-Johar";
const link5="https://www.tripadvisor.com/ShowUserReviews-g1142008-d7691048-r306202806-Mini_India-Taumarunui_Manawatu_Wanganui_Region_North_Island.html";
const link6="https://en.wikipedia.org/wiki/List_of_tourist_attractions_in_Delhi";
const link7="https://www.thrillophilia.com/waterfalls-in-and-near-rishikesh";
const link8="https://en.wikipedia.org/wiki/Krishnapura_Chhatri";
const link9="http://www.tamilnadutourism.org/";
// const deco={
//   color: "#fa9191",
  
//   textTransform: "capitalize",
//   fontWeight:"bold",
//   textAlign:"center",

 
// }

ReactDOM.render(
  <>
<h1 
className="heading">{CountryHead}</h1>
<h1 className="heading">{CountryHead}</h1>
<div className="img_div">
<a href={link}><img src={image} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link1}><img src={image1} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link2}><img src={image2} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link3}><img src={image3} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link4}><img src={image4} alt="image" className="imgdiv"/>

<p className="heading1">{tour}</p></a>  
<a href={link5}><img src={image5} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a>  
<a href={link6}><img src={image6} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a>  
<a href={link7}><img src={image7} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link8}><img src={image8} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link9}><img src={image9} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 

<a href={link}><img src={image} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link1}><img src={image1} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link2}><img src={image2} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link3}><img src={image3} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link4}><img src={image4} alt="image" className="imgdiv"/>

<p className="heading1">{tour}</p></a>  
<a href={link5}><img src={image5} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a>  
<a href={link6}><img src={image6} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a>  
<a href={link7}><img src={image7} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link8}><img src={image8} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a> 
<a href={link9}><img src={image9} alt="image" className="imgdiv"/>
<p className="heading1">{tour}</p></a>  
</div>


  </>,
  document.getElementById("root")
  
);