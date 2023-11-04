import axios from "axios";
import { Room } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

export async function getRoom(): Promise<Room> {
  const rooms = (await axios.get(`${API_URL}/rooms`)).data;
  return rooms[0];
}

export async function healthCheck(): Promise<Boolean> {
  const response = await axios.get(`${API_URL}/healthcheck`);
  return response.status === 200;
}
