import { AppBar, Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getRoom } from "../../api";
import { Room } from "../../types";
import Chat from "./Chat";

export default function RoomComp() {
  const { isSuccess, data: room } = useQuery<Room>("getRoom", () => getRoom());
  return isSuccess ? (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2E3B55",
          color: "#FFFFFF",
          padding: "2px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Typography sx={{ ml: "25px" }} variant="h4" fontWeight="bold">
          {room!.name}
        </Typography>
      </AppBar>
      <Chat messages={room!.messages} />
    </Box>
  ) : (
    <div> Loading... </div>
  );
}
