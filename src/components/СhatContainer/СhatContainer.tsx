import Message from 'components/СhatContainer/components/Message';
import NewMessageInput from 'components/СhatContainer/components/NewMessageInput';
import { ChatMessage } from './types';
import styles from './СhatContainer.module.scss';

const data: ChatMessage[] = [
  {
    id: 1,
    text: 'rykuil fjgkhj fghj ghj',
    type: 'incoming',
  },
  {
    id: 2,
    text: 'gggfdss kkkkksass ohhdjlwhlcjwdslwjbslqw lsh;qkns;kqn;xskn;qd i;qsm;kj;jnq;cxqwdq;j ;j;m;ll;qwdsfghjk',
    type: 'outgoing',
  },
  {
    id: 3,
    text: 'rloresm ipjhigufy',
    type: 'incoming',
  },
];

const СhatContainer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header} />

      <div className={styles.contentWrapper}>
        <ul className={styles.messageList}>
          {data.map(({ id, text, type }) => (
            <li key={id}>
              <Message text={text} type={type} />
            </li>
          ))}
        </ul>

        <NewMessageInput />
      </div>
    </div>
  );
};

export default СhatContainer;
