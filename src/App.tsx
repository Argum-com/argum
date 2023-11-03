import { useQuery } from "react-query";
import './App.css'
import { getRoom } from './api';

function App() {
  const { data: room } = useQuery(
    "getRoom",
    () => getRoom()
  );

  return (
    <>
      <p>
        The room name is {room!.roomName}
      </p>
      <p>
        The messages are {room!.messages.map((message) => message.text)}
      </p>
    </>
  )
}

export default App
