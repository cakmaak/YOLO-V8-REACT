import { useEffect, useState } from "react";
import { connectWebSocket } from "../services/websocket";

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
  const socket = new WebSocket("ws://localhost:8080/ws");

  const audio = new Audio("/alert.mp3");

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    setAlerts((prev) => [data, ...prev]);

    // 🔥 SOUND PLAY
    audio.play();
  };
}, []);
  useEffect(() => {
    connectWebSocket((data) => {
      setAlerts((prev) => [data, ...prev]);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Security Dashboard</h1>

      {alerts.length === 0 ? (
        <p>No alerts yet...</p>
      ) : (
        alerts.map((a, i) => (
          <div
            key={i}
            style={{
              border: "1px solid red",
              margin: 10,
              padding: 10,
              borderRadius: 8
            }}
          >
            <h3>🚨 {a.label}</h3>
            <p>{a.message || "Detection event"}</p>
          </div>
        ))
      )}
    </div>
  );
}