import { useQuery } from "react-query";
import "./App.css";
import { getRoom } from "./api";

function App() {
  const { isSuccess, data: room } = useQuery("getRoom", () => getRoom());

  return isSuccess ? (
    <>
      <p>The room name is {room?.name}</p>
      <p>The messages are {room?.messages.map((message) => message.text)}</p>
    </>
  ) : (
    <p>loading...</p>
  );
}

export default App;
