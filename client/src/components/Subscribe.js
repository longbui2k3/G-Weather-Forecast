import { useState } from "react";
import { API_ORIGIN } from "../utils/globalVariable";

export function Subscribe() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit() {
    if (!email) return;
    try {
      setIsLoading(true);
      setMessage("");
      const response = await fetch(`${API_ORIGIN}/api/v1/email/send`, {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
      });
      const data = await response.json();
      setMessage(data.message);
      setIsLoading(false);
    } catch (err) {
      setMessage("Something error!");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "60px",
        flex: "grow",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "black",
          fontWeight: "500",
        }}
      >
        Register for latest weather information{" "}
      </div>
      <input
        type="email"
        placeholder="Enter your email"
        style={{
          margin: "20px 0px",
          padding: "10px 10px",
          fontSize: "20px",
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        {isLoading ? <div class="loader"></div> : "Register"}
      </button>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {message}
      </div>
    </div>
  );
}
