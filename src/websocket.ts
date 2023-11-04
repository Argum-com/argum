import useWebSocket, { ReadyState } from "react-use-websocket";
import { Message } from "./types";

const WS_URL = import.meta.env.VITE_WS_URL;

export default function sendWebSocketMessage(message: Message): void {
  const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  // todo handle according to connection status (readyState)

  sendMessage(message.text);
}
