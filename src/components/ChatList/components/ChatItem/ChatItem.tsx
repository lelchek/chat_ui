import cn from 'classnames';
import Avatar from 'components/ChatList/components/Avatar';
import { ChatItemProps } from './types';
import styles from './ChatItem.module.scss';

const ChatItem = ({
  status,
  title,
  description,
  participant,
}: ChatItemProps) => {
  return (
    <div
      className={cn(styles.root, {
        [styles.active]: status === 'active',
        [styles.unread]: status === 'unread',
      })}
    >
      <Avatar {...participant} />

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ChatItem;
