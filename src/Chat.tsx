import { Box, Button, TextField } from "@mui/material";
import React from "react";
import useWebSocket from "react-use-websocket";
import MessageComp from "./MessageComp";
import { Message } from "./types";

interface ChatProps {
  messages: Array<Message>;
}

export default function Chat({ messages }: ChatProps) {
  const [value, setValue] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const [roomMessages, setRoomMessages] =
    React.useState<Array<Message>>(messages);
  const { sendMessage } = useWebSocket(import.meta.env.VITE_WS_URL, {
    onMessage: (msg) => {
      setCounter(counter + 1);
      let message: Message = {
        author: { $oid: counter.toString() },
        text: msg.data,
        timestamp: Date.now(),
      };
      setRoomMessages((messages) => messages.concat(message));
    },
  });

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleButtonClick = () => {
    let message: Message = {
      author: { $oid: "blabla" },
      text: value,
      timestamp: Date.now(),
    };

    // send through websockets the final value (message)
    sendMessage(message.text);
    // send to DB

    // setRoomMessages((messages) => messages.concat(message));
    setValue("");
  };

  return (
    <Box>
      {roomMessages.map((message, index) => (
        <MessageComp key={index} message={message} />
      ))}
      <Box>
        <TextField
          id="outlined-basic"
          label="Enter Text"
          variant="outlined"
          value={value}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Send
        </Button>
      </Box>
    </Box>
  );
}