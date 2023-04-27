import { useRef } from 'react';
import cn from 'classnames';
import AnimatedText from 'components/СhatContainer/components/AnimatedText';
import assistant from 'data/assistant.json';
import { MessageProps } from './types';
import styles from './Message.module.scss';

const Message = ({ text, type, time }: MessageProps) => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cn(styles.root, styles[type])}>
      <div className={styles.container}>
        {type === 'incoming' && <p className={styles.name}>{assistant.name}</p>}

        <div
          ref={textContainerRef}
          className={cn(styles.content, styles[type])}
        >
          {type === 'incoming' ? (
            <AnimatedText text={text} />
          ) : (
            <p className={styles.text}>{text}</p>
          )}
          <p className={styles.time}>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
