export type MessageType = 'outgoing' | 'incoming';

export interface MessageProps {
  text: string;
  type: MessageType;
  time: string;
}
