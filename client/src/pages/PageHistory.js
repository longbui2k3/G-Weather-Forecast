import { useEffect, useState } from "react";
import { Header } from "../components";
import { TodayWeather } from "../components/TodayWeather";
import { API_ORIGIN } from "../utils/globalVariable";
export function PageHistory() {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_ORIGIN}/api/v1/history`);
        const data = await response.json();
        setHistories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header title={"History"} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            backgroundColor: "rgb(227,242,253)",
            padding: "20px 20px",
            marginTop: "100px",
            overflowY: "scroll",
            height: "calc(100vh - 100px)",
          }}
        >
          {histories.map((history) => (
            <div
              style={{
                margin: "20px 0px",
              }}
            >
              <TodayWeather current={history.weatherInfo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
