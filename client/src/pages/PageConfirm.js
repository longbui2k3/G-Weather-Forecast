import { useEffect, useState } from "react";
import { Header } from "../components";
import { useParams } from "react-router-dom";
import { API_ORIGIN } from "../utils/globalVariable";

export function PageConfirm() {
  const param = useParams();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(200);
  useEffect(() => {
    if (!param.tokenConfirm) return;
    (async () => {
      const response = await fetch(
        `${API_ORIGIN}/api/v1/email/confirm/${param.tokenConfirm}`
      );
      setStatus(response.status);
      const data = await response.json();
      setMessage(data.message);
    })();
  }, [param.tokenConfirm]);
  return (
    <div>
      <Header title={"Weather Dashboard"} />
      <div
        style={{
          margin: "20px",
          fontSize: "20px",
          color: `${status === 200 ? "green" : "red"}`,
          textAlign: "center",
          backgroundColor: "rgb(227,242,253)",
          padding: "20px",
        }}
      >
        {message}
      </div>
    </div>
  );
}
