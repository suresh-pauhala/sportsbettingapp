import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import nba from '../assets/nba.jpg';

export default function TopBar({ title }) {
    
  const myStyle = {
    color: "white",
    paddingTop: "15px",
    fontFamily: "Sans-Serif",
    fontSize:"20px",
  };
  return (
    <>
    
      <nav  className='navbar navbar-light' style={{backgroundColor:"#265691"}}>
  <div className="container-fluid">
  <p style={myStyle}>Sports Better</p>
  
      
  </div>
</nav>
<img src={nba} alt="BigCo Inc. logo" height={"40%"} width={"100%"} />
    </>
  )
}


