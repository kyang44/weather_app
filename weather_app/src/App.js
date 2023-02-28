import { useEffect, useState } from "react";
import Descriptions from "./components/Descriptions";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=023d984ca2e7da2a892b5c05ac4cea21`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  const makeIconURL = (iconId) =>
    `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  return (
    <div className="app">
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
            <input onChange={event => setLocation(event.target.value)}
              value={location}
              type="text"
              name="city"
              placeholder="Enter City ..."
              onKeyDown={searchLocation} />
          </div>

          {data.name !== undefined &&
            <>
              <div className="section section_temperature">
                <div className="icon">
                  <h3>{data.name}</h3>
                  <div>
                    <img src={makeIconURL(data.weather[0].icon)} alt="" />
                  </div>
                  <div>
                    <h3>{data.weather[0].description}</h3>
                  </div>

                </div>
                <div className="temperature">
                  <h1>{data.main.temp.toFixed()}°F</h1>
                </div>
              </div>
              <Descriptions data={data} />

            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
