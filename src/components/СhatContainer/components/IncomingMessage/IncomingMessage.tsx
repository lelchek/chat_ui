import { useRef, useEffect, useState } from 'react';
import AnimatedText from 'components/СhatContainer/components/AnimatedText';
import assistant from 'data/assistant.json';
import {
  BACKGROUND_ANIMATE_TIME,
  LAST_ROW_LINE_HEIGHT,
} from 'constants/general';
import { IncomingMessageProps } from './types';
import styles from './IncomingMessage.module.scss';

const IncomingMessage = ({ text, time }: IncomingMessageProps) => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [timeVisible, setTimeVisible] = useState(false);

  useEffect(() => {
    const maskRowsTimeout = setTimeout(() => {
      const scrollHeight = textContainerRef.current?.scrollHeight;

      scrollHeight && setContainerHeight(scrollHeight);
    }, BACKGROUND_ANIMATE_TIME);

    return () => {
      clearTimeout(maskRowsTimeout);
    };
  }, []);

  const handleSetTimeVisible = () => {
    setTimeVisible(true);
    setContainerHeight((state) => state + LAST_ROW_LINE_HEIGHT);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.name}>{assistant.name}</p>

        <div
          ref={textContainerRef}
          className={styles.content}
          style={{ maxHeight: containerHeight || 40 }}
        >
          <AnimatedText
            text={text}
            // time={time}
            onFinished={handleSetTimeVisible}
          />

          {timeVisible && <p className={styles.time}>{time}</p>}
        </div>
      </div>
    </div>
  );
};

export default IncomingMessage;
