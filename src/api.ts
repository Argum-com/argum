import axios from "axios";
import { Room } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

export async function getRoom(): Promise<Room> {
  console.log("API_URL:");
  console.log(API_URL);
  const rooms = (await axios.get(`${API_URL}/rooms`)).data;
  console.log("rooms:");
  console.log(rooms);
  return rooms[0];
}

export async function healthCheck(): Promise<Boolean> {
  const response = await axios.get(`${API_URL}/healthcheck`);
  console.log(response);
  return response.status === 200;
}
