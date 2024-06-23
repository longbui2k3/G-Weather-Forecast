import { useParams } from "react-router-dom";
import { Header } from "../components";
import { useEffect, useState } from "react";

export function PageUnsubscribe() {
  const param = useParams();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(200);
  useEffect(() => {
    if (!param.tokenUnsubscribe) return;
    (async () => {
      const response = await fetch(
        `http://localhost:4000/api/v1/email/unsubscribe/${param.tokenUnsubscribe}`
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
        }}
      >
        {message}
      </div>
    </div>
  );
}
