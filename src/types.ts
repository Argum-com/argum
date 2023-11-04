export interface Message {
  author: { $oid: string };
  text: string;
  timestamp: number;
}

export interface Room {
  name: string;
  messages: Array<Message>;
}
