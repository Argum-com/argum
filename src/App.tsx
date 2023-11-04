import { useQuery } from "react-query";
import "./App.css";
import { getRoom, healthCheck } from "./api";

function App() {
  const { data: room } = useQuery("getRoom", () => {
    console.log("getRoom called");
    getRoom();
    console.log(room);
    console.log("getRoom finished");
  });

  const { data: health } = useQuery("healthCheck", () => {
    console.log("healthCheck called");
    healthCheck();
    console.log(health);
    console.log("healthCheck finished");
  });
  return (
    <>
      <p>The room name is {room?.roomName}</p>
      <p>The messages are {room?.messages.map((message) => message.text)}</p>
    </>
  );
}

export default App;
