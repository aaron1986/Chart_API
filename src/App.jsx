import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [billboardData, setBillboardData] = useState(null);

  const getData = () => {
    const options = {
      method: 'GET',
      url: 'https://billboard-api2.p.rapidapi.com/billboard-200',
      params: {
        date: '2019-05-11',
        range: '1-10'
      },
      headers: {
        'X-RapidAPI-Key': 'b02a747d18mshe2d139c32d81ce8p1674edjsnd1557879389b',
        'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
      }
    };
  
    axios.request(options)
      .then(response => {
         response.data[0];
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  getData();
  

  return (
    <>
      <div>
        <h1>BILLBOARD CHART TOP 100!!</h1>
      {billboardData ? <h2>{billboardData}</h2> : null}
      </div>
    </>
  )
}

export default App
