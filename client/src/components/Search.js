import { useEffect } from "react";
import { API_ORIGIN } from "../utils/globalVariable";
export function Search({
  location,
  setLocation,
  setForecastday,
  setCurrent,
  isLoading,
  setIsLoading,
  isLoading2,
  setIsLoading2,
}) {
  async function saveToHistory(current) {
    //save to history
    try {
      const response = await fetch(`${API_ORIGIN}/api/v1/history`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          location: current.name,
          date: current.last_updated,
          temperature: current.temp_c,
          wind: current.wind_mph,
          humidity: current.humidity,
          condition: current.condition,
        }),
      });
      await response.json();
    } catch (err) {
      console.log(err);
    }
  }
  async function search() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${API_ORIGIN}/api/v1/search?location=${location}`
      );
      const data = await response.json();

      setIsLoading(false);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async function searchCurrentLocation() {
    setIsLoading2(true);
    const responseGetIP = await fetch("https://geolocation-db.com/json/");
    const ip = (await responseGetIP.json()).IPv4;
    const response = await fetch(`${API_ORIGIN}/api/v1/search?location=${ip}`);
    const data = await response.json();
    await saveToHistory(data.current);
    setCurrent(data.current);
    setForecastday(data.forecast.forecastday);
    setIsLoading2(false);
  }
  useEffect(() => {
    (async () => {
      const data = await search();
      setCurrent(data.current);
      setForecastday(data.forecast.forecastday);
    })();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await search();
    setCurrent(data.current);
    setForecastday(data.forecast.forecastday);
    await saveToHistory(data.current);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
      }}
    >
      <label
        style={{
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        Enter a City Name
      </label>
      <input
        type="text"
        placeholder="E.g., New York, London, Tokyo"
        style={{
          padding: "10px",
          marginBottom: "20px",
          fontSize: "20px",
        }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "#5372f0",
          border: "0",
          padding: "10px",
          fontWeight: "400",
          color: "white",
          borderRadius: "5px",
          fontSize: "20px",
          outline: "none",
        }}
        onClick={handleSubmit}
      >
        {isLoading ? <div class="loader"></div> : "Search"}
      </button>
      <div
        style={{
          display: "flex",
          margin: "20px 0px",
        }}
      >
        <hr
          style={{
            width: "100%",
            borderTop: "2px solid #c2cace",
            borderLeft: "0",
            margin: "auto 0px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#6c757d",
            margin: "auto 10px",
            marginBottom: "4px",
          }}
        >
          or
        </div>
        <hr
          style={{
            width: "100%",
            borderTop: "2px solid #c2cace",
            borderLeft: "0",
            margin: "auto 0px",
          }}
        />
      </div>
      <button
        style={{
          backgroundColor: "#6c757d",
          border: "0",
          padding: "10px",
          fontWeight: "400",
          color: "white",
          borderRadius: "5px",
          fontSize: "20px",
          outline: "none",
        }}
        onClick={searchCurrentLocation}
      >
        {isLoading2 ? <div class="loader"></div> : "Use Current Location"}
      </button>
    </div>
  );
}
