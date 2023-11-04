import axios from "axios";
import { Room } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

export async function getRoom(): Promise<Room> {
  return (await axios.get(`${API_URL}/rooms`)).data[0]; // FIXME rooms hardcoded? [0]??
}

export async function healthCheck(): Promise<Boolean> {
  const response = await axios.get(`${API_URL}/healthcheck`);
  return response.status === 200;
}

// export function getRoom(): Room {
//   return {
//     name: "Besto Roomo",
//     messages: [
//       {
//         text: "This is a message - 1",
//         author: "Mickey Mouse",
//         timestamp: 1234,
//       },
//       {
//         text: "This is a message - 2",
//         author: "Donald Duck",
//         timestamp: 1235,
//       },
//     ],
//   };
// }
