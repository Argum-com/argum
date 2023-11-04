import React from "react";
import { Message } from "./types";
import MessageComp from "./MessageComp";
import { Box, TextField, Button } from "@mui/material";

interface ChatProps {
  messages: Array<Message>;
}

export default function Chat({ messages }: ChatProps) {
  const [value, setValue] = React.useState("");

  const handleInputChange = (e: any) => {
    // console.log(e);
    setValue(e.target.value);
  };
  const handleButtonClick = () => {
    let message: Message = {
      author: "blabla",
      text: value,
      timestamp: Date.now(),
    };

    // send through websockets the final value (message)
    // send to DB

    messages.push(message);
    setValue("");
  };

  return (
    <Box>
      {messages.map((message, index) => (
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
