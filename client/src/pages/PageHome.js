import { useState } from "react";
import { CityWeather, Header, Search, Subscribe } from "../components";

export function PageHome() {
  const [location, setLocation] = useState("London");
  const [current, setCurrent] = useState(null);
  const [forecastday, setForecastday] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  return (
    <div id="sub__body">
      <Header title={"Weather Dashboard"} />
      <div id="main">
        <div id="left__main">
          <Search
            location={location}
            setLocation={setLocation}
            setCurrent={setCurrent}
            setForecastday={setForecastday}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isLoading2={isLoading2}
            setIsLoading2={setIsLoading2}
          />
          <Subscribe />
        </div>
        <div id="right__main">
          {!isLoading && !isLoading2 && current ? (
            <CityWeather current={current} forecastday={forecastday} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
