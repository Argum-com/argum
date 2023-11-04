export interface Message{
    author: string,
    text: string,
    timestamp: number,
}


export interface Room{
    roomName: string;
    messages: Array<Message>
}
