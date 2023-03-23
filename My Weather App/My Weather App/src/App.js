import React, { useState } from "react";
import axios from "axios";

// Components
import Form from "./components/Form";
import Weather from "./components/Weather";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_KEY = "d0f30d0ef26524ab8fc67add631bf76d";
const initialState={
  term: "",
  city_name: "",
  temp: "",
  humidity: "",
  wind: "",
  pressure:"",
  weather_status: "",
  weather_desc: "",
  weather_icon: ""
}
const App = () => {
  const [state, setState] = useState(initialState);
  const [flag, setFlag] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFlag(false)
    setError(null)
    setState({
      ...state,
      term: e.target.value
    });
  };

  const handleClick = (e) => {
    setLoading(true)
    setError(null)
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          state.term +
          "&units=metric&appid=" +
          API_KEY
      )
      .then((res) => {
        setFlag(true)
        setLoading(false)
    setError(null)
        setState({
          ...state,
          city_name: res.data.name,
          temp: res.data.main.temp,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          pressure:res.data.main.pressure,
          weather_status: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          weather_icon: res.data.weather[0].icon
        });
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false)
        setError(error)
      });
  };

  return (
    <div className="container">
      <h1 className="header">My Weather App</h1>
      <Form onChange={handleChange} onClick={handleClick} />
    { loading&&  <div >
        <FontAwesomeIcon icon={faSpinner}/>
    </div>}
    {error && <p style={{color:"red"}}>{error.message}</p>}
      {
  flag && !loading &&<Weather data={state} />
 
}

    </div>
  );
};

export default App;
