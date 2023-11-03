import axios from "axios";
import { Room } from "./types";


const API_URL = import.meta.env.VITE_API_URL;


export async function getRoom(): Promise<Room> {
    return (await axios.get(`${API_URL}/rooms`)).data[0]  // FIXME rooms hardcoded? [0]??
}