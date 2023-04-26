import { ChatMessage } from 'components/СhatContainer/types';
import Message from 'components/СhatContainer/components/Message';
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

        {/* TODO: add input */}
        <button>click</button>
      </div>
    </div>
  );
};

export default СhatContainer;
