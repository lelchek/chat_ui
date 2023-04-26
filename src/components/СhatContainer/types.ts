export type MessageType = 'outgoing' | 'incoming';

export interface ChatMessage {
  id: number;
  text: string;
  type: MessageType;
}
