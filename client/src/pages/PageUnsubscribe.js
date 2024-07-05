import { useParams } from "react-router-dom";
import { Header } from "../components";
import { useEffect, useState } from "react";
import { API_ORIGIN } from "../utils/globalVariable";

export function PageUnsubscribe() {
  const param = useParams();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(200);
  useEffect(() => {
    if (!param.tokenUnsubscribe) return;
    (async () => {
      const response = await fetch(
        `${API_ORIGIN}/api/v1/email/unsubscribe/${param.tokenUnsubscribe}`
      );
      setStatus(response.status);
      const data = await response.json();
      setMessage(data.message);
    })();
  }, []);
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
          marginTop: "100px",
          height: "calc(100vh - 100px)",
        }}
      >
        {message}
      </div>
    </div>
  );
}
