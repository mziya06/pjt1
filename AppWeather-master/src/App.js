import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [data, setData] = useState('')
  const [position, setPosition] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${position}&units=imperial&appid=5fe36d3251c11308e58827970ffac126`
  

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          onChange={event=>setPosition(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location' />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p><b>{data.name}</b></p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1>:""}
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="wind">
              <p className='content'>{data.wind.speed} MPH</p> 
              <p className='content1'>Wind-Speed</p>
            </div>
            <div className="humidity">
              <p className='content'>{data.main.humidity}%</p>
              <p className='content1'>Humidity</p>
            </div>
          </div>
        }
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              <p className='content'>{data.main.temp_max}°F</p>
              <p className='content1'>THURSDAY</p>
            </div>
    
            <div className="feels">
              <p className='content'>{data.main.temp_min}°F</p>
              <p className='content1'>WEDNESDAY</p>
            </div>

            <div className="feels">
              <p className='content'>{data.main.temp_min}°F</p>
              <p className='content1'>TUESDAY</p>
            </div>
            <div className="feels">
              <p className='content'>{data.main.temp_max}°F</p>
              <p className='content1'>MONDAY</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}
export default App;