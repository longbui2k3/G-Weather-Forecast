import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export function FourDayForest({ forecastday }) {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ fontSize: "26px", fontWeight: "650", margin: "30px 0px" }}
        >
          4-Day Forecast
        </div>
        <div style={{ display: "flex", margin: "auto 0" }}>
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "#5372f0",
              fontSize: "20px",
              color: "white",
              marginRight: "10px",
              borderRadius: "100%",
              outline: "none",
              border: "none",
              width: "40px",
              height: "40px",
            }}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <FaChevronLeft style={{ margin: "0 auto" }} />
          </button>

          <button
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "#5372f0",
              fontSize: "20px",
              color: "white",
              borderRadius: "100%",
              outline: "none",
              border: "none",
              width: "40px",
              height: "40px",
            }}
            disabled={
              page ===
              Math.floor(forecastday.length / 4) +
                (forecastday.length % 4 ? 1 : 0)
            }
            onClick={() => setPage(page + 1)}
          >
            <FaChevronRight style={{ margin: "0 auto" }} />
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {forecastday
          .map((value, i) => (
            <div
              id="card"
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "space-between",
                height: "210px",
                width: "180px",
                backgroundColor: "#6c757d",
                borderRadius: "7px",
                color: "white",
                padding: "20px",
              }}
            >
              <div style={{ fontSize: "19px", fontWeight: "500" }}>
                ({value.date})
              </div>
              <img
                src={value.day.condition.icon}
                alt={value.day.condition.text}
                style={{
                  width: "64px",
                  height: "64px",
                }}
              />
              <div>Temp: {value.day.avgtemp_c}°C</div>
              <div>Wind: {value.day.maxwind_mph} M/S</div>
              <div>Humidity: {value.day.avghumidity}%</div>
            </div>
          ))
          .slice((page - 1) * 4, (page - 1) * 4 + 4)}
      </div>
    </div>
  );
}
