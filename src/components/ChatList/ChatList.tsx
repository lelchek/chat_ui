import ChatItem from 'components/ChatList/components/ChatItem';
import Assistant from 'components/ChatList/components/Assistant';
import { Status } from 'components/ChatList/components/ChatItem/types';
import data from 'data/tasks.json';
import styles from './ChatList.module.scss';

const ChatList = () => {
  return (
    <div className={styles.root}>
      <p className={styles.row}>Your Assistant</p>

      <Assistant />

      <p className={styles.row}>32 tasks</p>

      <ul className={styles.tasks}>
        {data.map((item) => (
          <li key={item.id}>
            <ChatItem {...item} status={item.status as Status} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
