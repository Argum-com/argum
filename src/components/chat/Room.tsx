import { getRoom } from "../../api";
import { Room, Message } from "../../types";
import Chat from "./Chat";
import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";

export default function RoomComp() {
  const { isSuccess, data: room } = useQuery<Room>("getRoom", () => getRoom());
  return isSuccess ? (
    <Box className="chat-root">
      <Box margin={10} className="room-title">
        <Typography variant="h4">{room!.name}</Typography>
      </Box>
      <Chat messages={room!.messages} />
    </Box>
  ) : (
    <div> Loading... </div>
  );
}
