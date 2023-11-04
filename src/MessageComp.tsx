import { Message } from "./types";
import { Card, Typography } from "@mui/material";

interface MessageProps {
  message: Message;
}

export default function MessageComp({ message }: MessageProps) {
  return (
    <Card>
      <Typography variant="overline" component="h2">
        {message.author}
      </Typography>
      <Typography variant="overline" component="h2">
        {message.text}
      </Typography>
      <Typography variant="overline" component="h2">
        {message.timestamp}
      </Typography>
    </Card>
  );
}
