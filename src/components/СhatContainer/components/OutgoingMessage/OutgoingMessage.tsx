import { OutgoingMessageProps } from './types';
import styles from './OutgoingMessage.module.scss';

const OutgoingMessage = ({ text, time }: OutgoingMessageProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>{text}</p>
          <p className={styles.time}>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default OutgoingMessage;
