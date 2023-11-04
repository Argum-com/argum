import { getRoom } from "./api";
import { Room, Message } from "./types";
import Chat from "./Chat";
import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";

export default function RoomComp() {
  const { data: room } = useQuery<Room>("getRoom", () => getRoom());

  // const room = getRoom();

  return (
    <Box>
      <Box margin={10}>
        <Typography variant="h1">{room!.name}</Typography>
      </Box>
      <Chat messages={room!.messages} />
    </Box>
  );
}
