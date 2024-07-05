import { useNavigate } from "react-router-dom";

export function Header({ title }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100px",
          backgroundColor: "#5372f0",
          color: "white",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "500",
          padding: "auto 0px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: "fixed",
          right: "35px",
          top: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {window.location.href.includes("history") ||
        window.location.href.includes("confirm") ||
        window.location.href.includes("unsubscribe") ? (
          <button
            style={{
              background: "none",
              color: "white",
              fontSize: "18px",
              textDecoration: "none",
              border: "0",
              padding: "10px",
            }}
            onClick={(e) => navigate("/")}
          >
            Home
          </button>
        ) : (
          <button
            style={{
              background: "none",
              color: "white",
              fontSize: "18px",
              textDecoration: "none",
              border: "0",
              padding: "10px",
            }}
            onClick={(e) => navigate("/history")}
          >
            History
          </button>
        )}
      </div>
    </>
  );
}
