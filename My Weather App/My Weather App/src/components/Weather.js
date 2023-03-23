import React from "react";

const Weather = props => (
  // <div className="weather_data">
  //   <div className="weather_title">
  //     <h1> {props.data.city_name} </h1>
  //     <h3> {props.data.weather_status} </h3>
  //     <p> {props.data.weather_desc} </p>
  //   </div>
  //   <div className="weather_status">
  //     <ul>
  //       <li>
  //         Temp : <span> {props.data.temp}° </span>
  //       </li>
  //       <li>
  //         Humidity : <span>{props.data.humidity}%</span>
  //       </li>
  //       <li>
  //         Wind : <span>{props.data.wind}km/s</span>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  <div className="weather-details">
  <div className="weather-header">
    <div className="weather-location">
      <h1>{props.data.city_name}</h1>
      <h3>Today's Forecast</h3>
    </div>
    <div className="weather-icon">
      {/* <img src="https://cdn.iconscout.com/icon/free/png-256/sun-weather-meteorology-summer-sunny-6-3619.png" alt="Weather Icon"> */}
    </div>
  </div>
  <div className="weather-info">
    <div className="temperature">
      <h2>{props.data.temp}°</h2>
      <p>{props.data.weather_status}</p>
    </div>
    <div className="details">
      <div className="detail">
        <p>Humidity</p>
        {/* <img src="https://cdn.iconscout.com/icon/free/png-256/humidity-3524557-2941948.png" alt="Humidity Icon"> */}
        <p>{props.data.humidity}%</p>
      </div>
      <div className="detail">
        <p>Wind</p>
        {/* <img src="https://cdn.iconscout.com/icon/free/png-256/wind-131-479011.png" alt="Wind Icon"> */}
        <p>{props.data.wind}km/s</p>
      </div>
    </div>
  </div>
  <div style={{display:"flex", justifyContent:"flex-end"}}>
    
    <div className="details">
      <div className="detail">
        <p>Pressure</p>
        {/* <img src="https://cdn.iconscout.com/icon/free/png-256/humidity-3524557-2941948.png" alt="Humidity Icon"> */}
        <p>{props.data.pressure} hPa</p>
      </div>
      {/* <div className="detail">
        <p>Wind</p>
       
        <p>12km/h</p>
      </div> */}
    </div>
  </div>
</div>

);

export default Weather;
