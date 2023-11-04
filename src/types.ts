export interface Message {
  author: string;
  text: string;
  timestamp: number;
}

export interface Room {
  name: string;
  messages: Array<Message>;
}
