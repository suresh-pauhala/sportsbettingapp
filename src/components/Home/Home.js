import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import nba from '../../assets/nba.jpg';


function Home(props) {
  const myStyle = {
    color: "white",
    paddingTop: "15px",
    fontFamily: "Sans-Serif",
    fontSize:"20px",
  };
  const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          fetch('https://backend-production-39c4.up.railway.app/')
      .then(response => response.json())
      .then(data => {
        const temp =Object.entries(data).map(([key, value]) => ({ [key]: value }));
        setData(temp);
        console.log(temp);
        
      })
      .catch(error => console.log(error));
        }
        fetchData();
      }, []);

    return (
      <div className="center-col align-bottom">
        <nav  className='navbar navbar-light' style={{backgroundColor:"#265691"}}>
  <div className="container-fluid">
  <p style={myStyle}>Sports Better</p>
  
      
  </div>
</nav>
<img src={nba} alt="BigCo Inc. logo" height={"500"} width={"100%"} />
        <h3 className='text-center' >NBA Winning Team Prediction for {moment.tz('America/Los_Angeles').format('MMMM Do YYYY')}</h3>
        
 
{data.length>0 ? <table className="table">
  <thead>
    <tr>

      <th scope="col">Matches</th>
      <th scope="col">Winner</th>
      {/* <th scope="col">Looser</th> */}
    </tr>
  </thead>
  <tbody className="table-group-divider">
      {data.map(item=>
        <tr>
          <td>{Object.keys(item)[0]}</td>
          <td>{Object.values(item)[0]}</td>
        </tr>  
      )}
  </tbody>
</table> : 
  <h5>Loading...</h5>
}
<div style={{backgroundColor:"#a5d2f2", textAlign:"center", fontSize:"22px", height:"100px"}}>
      
      <h5 style={{color:"black", paddingTop:"1%"}} >Click on the below link to visit sports betting website:</h5>
      <a style={{color:"blue"}} href="https://mainnet.dexsport.io/" target="_blank">https://mainnet.dexsport.io/</a>
      </div>
      </div>
    );
}

export default Home;
