import { useState, useEffect } from 'react';
import cn from 'classnames';
import TypingIndicatior from 'components/СhatContainer/components/TypingIndicatior';
import assistant from 'data/assistant.json';
import styles from './IncomingMessageTyping.module.scss';

const IncomingMessageTyping = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(styles.root, { [styles.visible]: visible })}>
      <p className={styles.name}>{assistant.name}</p>

      <div className={styles.container}>
        <TypingIndicatior />
      </div>
    </div>
  );
};

export default IncomingMessageTyping;
