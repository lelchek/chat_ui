import cn from 'classnames';
import assistant from 'data/assistant.json';
import { MessageProps } from './types';
import styles from './Message.module.scss';

const Message = ({ text, type }: MessageProps) => {
  return (
    <div className={cn(styles.root, styles[type])}>
      <div className={styles.container}>
        {type === 'incoming' && <p className={styles.name}>{assistant.name}</p>}

        <div className={cn(styles.content, styles[type])}>
          <p className={styles.text}>{text}</p>
          {/* TODO: remove hardcode */}
          <p className={styles.time}>12:33 AM</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
