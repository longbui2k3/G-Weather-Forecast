export function TodayWeather({ current }) {
  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#5372f0",
          height: "160px",
          borderRadius: "8px",
          padding: "20px 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              fontWeight: "600",
            }}
          >
            {current.name} ({current.last_updated?.split(" ")[0]})
          </div>
          <div
            style={{
              fontSize: "18px",
            }}
          >
            Temperature: {current.temp_c} °C
          </div>
          <div
            style={{
              fontSize: "18px",
            }}
          >
            Wind: {current.wind_mph} M/S
          </div>
          <div
            style={{
              fontSize: "18px",
            }}
          >
            Humidity: {current.humidity}%
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "150px",
            marginRight: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <img
              src={`${current?.condition?.icon}`}
              alt="Weather"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
              }}
            />
            <div
              style={{
                textAlign: "center",
                textSize: "18px",
              }}
            >
              {current?.condition?.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
