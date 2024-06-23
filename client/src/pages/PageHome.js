import { useState } from "react";
import { CityWeather, Header, Search, Subscribe } from "../components";

export function PageHome() {
  const [location, setLocation] = useState("London");
  const [current, setCurrent] = useState({});
  const [forecastday, setForecastday] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title={"Weather Dashboard"} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: "1",
          backgroundColor: "rgb(227,242,253)",
        }}
      >
        <div
          style={{
            width: "30%",
            padding: "30px",
          }}
        >
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
        <div
          style={{
            width: "70%",
            padding: "30px",
          }}
        >
          {!isLoading && !isLoading2 ? (
            <CityWeather current={current} forecastday={forecastday} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
