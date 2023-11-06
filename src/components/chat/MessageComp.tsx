import { Paper, Typography } from "@mui/material";
import { Message } from "../../types";

interface MessageProps {
  message: Message;
  index: number;
}

// converts a unix timestmap to ISO format
function convertTimestampToISO(timestamp: number) {
  // format the timestamp to ISO format, example 01/31/2023, 10:10
  // let formatString = "d/MM/yy, HH:mm";
  let date = new Date(timestamp);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let minuteFormatted = minute < 10 ? "0" + minute : minute;
  return `${hour}:${minuteFormatted}, ${day}/${month}/${year}`;
}

export default function MessageComp({ message, index }: MessageProps) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: index % 2 == 0 ? "#007bff" : "#4caf50",
        color: "white",
        borderRadius: "10px",
      }}
      elevation={3}
    >
      <Typography
        sx={{
          alignSelf: "self-end",
          color: "#2E3B55",
          fontSize: "12px",
        }}
        margin="5px"
        fontWeight="bold"
        variant="h2"
      >
        {convertTimestampToISO(message.timestamp)}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          alignSelf: "self-start",
          wordWrap: "break-word",
          width: "100px",
          whiteSpace: "pre-line",
        }}
        margin="5px"
        variant="h2"
      >
        {message.text}
      </Typography>
    </Paper>
  );
}
