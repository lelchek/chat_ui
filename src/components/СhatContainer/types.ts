import { MessageType } from 'components/СhatContainer/components/Message/types';

export interface ChatMessage {
  id: number;
  text: string;
  type: MessageType;
  time: string;
}
