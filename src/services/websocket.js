import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

let client;

export function connectWebSocket(onMessage) {
  client = new Client({
    webSocketFactory: () => new SockJS("http://localhost:8080/ws"),

    onConnect: () => {
      console.log("WebSocket connected");

      client.subscribe("/topic/alerts", (message) => {
        const data = JSON.parse(message.body);
        onMessage(data);
      });
    },

    onStompError: (frame) => {
      console.error("Broker error: ", frame);
    }
  });

  client.activate();
}