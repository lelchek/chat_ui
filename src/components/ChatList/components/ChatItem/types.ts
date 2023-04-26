import { AvatarProps } from 'components/ChatList/components/Avatar/types';

export type Status = 'active' | 'unread' | 'read';

export interface ChatItemProps {
  status: Status;
  title: string;
  description: string;
  participant: AvatarProps;
}
