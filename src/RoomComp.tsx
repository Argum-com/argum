import { getRoom } from "./api";
import { Room, Message } from "./types";
import Chat from "./Chat";
import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";

export default function RoomComp() {
  const { isSuccess, data: room } = useQuery<Room>("getRoom", () => getRoom());

  // const room = getRoom();

  return isSuccess ? (
    <Box>
      <Box margin={10}>
        <Typography variant="h1">{room!.name}</Typography>
      </Box>
      <Chat messages={room!.messages} />
    </Box>
  ) : (
    <div> Loading... </div>
  );
}
