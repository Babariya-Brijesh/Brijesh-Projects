import React from "react";
import { WiDayStormShowers } from "weather-icons-react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const dummyData = [
  {
    temp: "32°C/28°C",
    weather: "StormShowers",
    Pressure: "1011 hpa",
    Cloud: "0%",
    SeaLevel: "1011m",
    Humidity: "58%",
    WindSpeed: "1.65 m/s",
    FeelsLike: "20°C",
  },
  {
    temp: "32°C/28°C",
    weather: "StormShowers",
    Pressure: "1011 hpa",
    Cloud: "0%",
    SeaLevel: "1011m",
    Humidity: "58%",
    WindSpeed: "1.65 m/s",
    FeelsLike: "20°C",
  },
  {
    temp: "32°C/28°C",
    weather: "StormShowers",
    Pressure: "1011 hpa",
    Cloud: "0%",
    SeaLevel: "1011m",
    Humidity: "58%",
    WindSpeed: "1.65 m/s",
    FeelsLike: "20°C",
  },
  {
    temp: "32°C/28°C",
    weather: "StormShowers",
    Pressure: "1011 hpa",
    Cloud: "0%",
    SeaLevel: "1011m",
    Humidity: "58%",
    WindSpeed: "1.65 m/s",
    FeelsLike: "20°C",
  },
  {
    temp: "32°C/28°C",
    weather: "StormShowers",
    Pressure: "1011 hpa",
    Cloud: "0%",
    SeaLevel: "1011m",
    Humidity: "58%",
    WindSpeed: "1.65 m/s",
    FeelsLike: "20°C",
  },
  {
    temp: "32°C/28°C",
    weather: "StormShowers",
    Pressure: "1011 hpa",
    Cloud: "0%",
    SeaLevel: "1011m",
    Humidity: "58%",
    WindSpeed: "1.65 m/s",
    FeelsLike: "20°C",
  },
  {
    temp: "32°C/28°C",
    weather: "StormShowers",
    Pressure: "1011 hpa",
    Cloud: "0%",
    SeaLevel: "1011m",
    Humidity: "58%",
    WindSpeed: "1.65 m/s",
    FeelsLike: "20°C",
  },
];

const dayArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function WeekDetail(forecast) {
  const [change, setChange] = useState(true);

  const changefun = () => {
    setChange(!change);
    console.log(change);

    // changefun2();
  };
  // const changefun2 = () => {
  //   setChange(!change);
  // };
  // }

  const currentDay = new Date().getDay();

  const finalDay = dayArray
    .slice(currentDay, dayArray.length)
    .concat(dayArray.slice(0, currentDay));
  //   console.log(finalDay);

  // useEffect(() => {

  // , [])

  return (
    <div>
      <Accordion>
        {dummyData.map((data, i) => {
          return (
            <AccordionItem onClick={() => changefun()}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="weekdiv">
                    <div className="weekdiv-img">
                      <WiDayStormShowers size={22} color="#000" />
                      <label className="weekdiv-label">{finalDay[i]}</label>
                    </div>
                    <div className="temp">
                      <label className="temp-label">{data.weather}</label>
                      <label className="temp-c">{data.temp}</label>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                class={change ? "accordion__panel2" : "accordion__panel"}
              >
                <div
                  className={
                    change ? "informationSubdiv2" : "informationSubdiv"
                  }
                >
                  <div className="dayinformation">
                    <div className="dayinformation-detail1">
                      <label>Pressure</label>
                      <label>Cloud</label>
                      <label>Sea Level:</label>
                    </div>
                    <div className="dayinformation-detail2">
                      <label>{data.Pressure}</label>
                      <label>{data.Cloud}</label>
                      <label>{data.SeaLevel}</label>
                    </div>
                  </div>
                  <div className="dayinformation">
                    <div className="dayinformation-detail1">
                      <label>Humidity</label>
                      <label>Wind Speed:</label>
                      <label>Feels Like:</label>
                    </div>
                    <div className="dayinformation-detail2">
                      <label>{data.Humidity}</label>
                      <label>{data.WindSpeed}</label>
                      <label>{data.FeelsLike}</label>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
