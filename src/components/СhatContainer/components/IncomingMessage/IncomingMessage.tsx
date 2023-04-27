import { useRef, useEffect, useState } from 'react';
import AnimatedText from 'components/СhatContainer/components/AnimatedText';
import assistant from 'data/assistant.json';
import { getContainerMaxHeight } from 'helpers';
import {
  BACKGROUND_ANIMATE_TIME,
  LAST_ROW_LINE_HEIGHT,
} from 'constants/general';
import { IncomingMessageProps } from './types';
import styles from './IncomingMessage.module.scss';

const IncomingMessage = ({ text, time }: IncomingMessageProps) => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [lastRowVisible, setLastRowVisible] = useState<boolean>(false);
  const [moreVisible, setMoreVisible] = useState<boolean>(false);

  useEffect(() => {
    const maskRowsTimeout = setTimeout(() => {
      const scrollHeight = textContainerRef.current?.scrollHeight;

      setContainerHeight(getContainerMaxHeight(scrollHeight));
    }, BACKGROUND_ANIMATE_TIME);

    return () => {
      clearTimeout(maskRowsTimeout);
    };
  }, []);

  const handleSetTimeVisible = () => {
    setLastRowVisible(true);
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
            setMoreVisible={setMoreVisible}
            onFinished={handleSetTimeVisible}
          />

          {lastRowVisible && (
            <div className={styles.lastRow}>
              {moreVisible && (
                <button className={styles.moreButton}>Show more</button>
              )}

              <p className={styles.time}>{time}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncomingMessage;
