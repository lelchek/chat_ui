import cn from 'classnames';
import assistant from 'data/assistant.json';
import { MessageProps } from './types';
import styles from './Message.module.scss';

const Message = ({ text, type, time }: MessageProps) => {
  return (
    <div className={cn(styles.root, styles[type])}>
      <div className={styles.container}>
        {type === 'incoming' && <p className={styles.name}>{assistant.name}</p>}

        <div
          className={cn(styles.content, styles[type], {
            [styles.outgoingFadeIn]: type === 'outgoing',
          })}
        >
          <p className={styles.text}>{text}</p>
          <p className={styles.time}>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
