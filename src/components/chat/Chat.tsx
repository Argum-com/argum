import { Box, Button, List, ListItem, TextField } from "@mui/material";
import React, { BaseSyntheticEvent, useEffect, useRef } from "react";
import useWebSocket from "react-use-websocket";
import { Message } from "../../types";
import MessageComp from "./MessageComp";

interface ChatProps {
  messages: Array<Message>;
}

export default function Chat({ messages }: ChatProps) {
  const [value, setValue] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const scrollRef = useRef<null | HTMLLIElement>(null);
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

  const handleInputChange = (e: BaseSyntheticEvent) => {
    setValue(e.target.value);
  };

  const handleButtonClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [roomMessages]);

  return (
    <Box
      sx={{
        width: "75%",
        alignItems: "space-between",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <List
        sx={{
          display: "flex",
          marginTop: "10px",
          flexDirection: "column",
          gap: "3px",
          maxWidth: "100%",
          overflowY: "scroll",
          height: "600px", //TODO: mui invastigate about reading screen dimentions
        }}
        // className="chat-history"
      >
        {roomMessages.map((message, index) => (
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: index % 2 == 0 ? "flex-start" : "flex-end", //TODO: Add author based alignment
              padding: "10px",
            }}
            key={index}
            ref={index == roomMessages.length - 1 ? scrollRef : null}
          >
            <MessageComp message={message} index={index} />
          </ListItem>
        ))}
      </List>

      <Box
        // className="user-input"
        sx={{
          display: "flex",
          marginTop: "5px",
          gap: "10px",
          justifyContent: "flex-start",
        }}
      >
        <TextField
          id="outlined-basic"
          sx={{
            width: "100%",
          }}
          variant="outlined"
          value={value}
          onChange={handleInputChange}
          // className="user-text-input"
          autoComplete="off"
          placeholder="Write your next argument..."
          multiline
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              handleButtonClick(e);
            }
          }}
        />
        <Button
          className="user-button-input"
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
