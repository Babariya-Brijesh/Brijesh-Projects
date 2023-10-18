import { useState } from "react";
import "./App.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { WiCloud } from "weather-icons-react";
// import Search from "./components/Search";
import { geoApiOptions, geoApi } from "./api";
import WeekDetail from "./components/WeekDetail";

function App() {
  const [search, setSearch] = useState();
  // const [currentWeather, setCurrentWeather] = useState("");
  // const [forecast, setForecast] = useState("");

  // const handleOnSearchChange = () => {
  //   const currentWeatherFetch = fetch(
  //     "   https://api.openweathermap.org/data/2.5/weather?lat=23.0225&lon=72.5714&appid=4b71f8f945168dd983779f9d349c38f2&units=metric"
  //   );
  //   const forecastFetch = fetch(
  //     " https://api.openweathermap.org/data/2.5/forecast?lat=23.0225&lon=72.5714&appid=4b71f8f945168dd983779f9d349c38f2&units=metric"
  //   );

  //   Promise.all([currentWeatherFetch, forecastFetch])
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forcastResponse = await response[1].json();
  //       console.log("----->weather", weatherResponse);
  //       console.log("----->foecast", forcastResponse);
  //       setCurrentWeather(weatherResponse);
  //       setForecast(forcastResponse);
  //     })
  //     .catch(console.log);
  // };


  const loadOptions = (inputValue) => {
    return fetch(
      `${geoApi}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnchange = (searchData) => {
    setSearch(searchData);
  };
  // useEffect(() => {
  //   handleOnSearchChange();
  // }, []);

  return (
    <>
      <div className="maindiv">
        <div className="maininput">
          {/* <Search/> */}
          <AsyncPaginate
            className="input"
            placeholder="Search for City"
            debounceTimeout={100}
            value={search}
            onChange={handleOnchange}
            loadOptions={loadOptions}
          />
        </div>
        <div className="cityinformation">
          <div className="citydiv">
            <div className="cityname">
              <p className="citynamep1">Ahmedabad</p>
              <p className="citynamep2">smoke</p>
            </div>
            <div className="cloudimg">
              <WiCloud size={90} color="#000" />
            </div>
          </div>
          <div className="citydetails">
            <div className="temp">
              <h1>22°C</h1>
            </div>
            <div className="citydetailsp1">
              <p>Details</p>
              <p>Feels Like</p>
              <p>Wind</p>
              <p>Humminity</p>
              <p>Pressure</p>
            </div>
            <div className="citydetailsp2">
              <p className="p1">...</p>
              <p>22c</p>
              <p>2.06 m/s</p>
              <p>78%</p>
              <p>101hpa</p>
            </div>
          </div>
        </div>
        <div className="weekInfoMainDiv">
          <div className="weekhead">Daily</div>
          <WeekDetail />
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
