import { useState } from 'react';
import { getMessageTime } from 'helpers';
import Message from 'components/СhatContainer/components/Message';
import NewMessageInput from 'components/СhatContainer/components/NewMessageInput';
import { ChatMessage } from './types';
import styles from './СhatContainer.module.scss';

const welcomeMessage: ChatMessage = {
  id: 1,
  text: 'Hi Josh! What can I help you with today?',
  type: 'incoming',
  time: getMessageTime(),
};

const СhatContainer = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);

  const handleSendOutgoingMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      text,
      type: 'outgoing',
      time: getMessageTime(),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header} />

      <div className={styles.contentWrapper}>
        <ul className={styles.messageList}>
          {messages.map(({ id, text, type, time }) => (
            <li key={id}>
              <Message text={text} type={type} time={time} />
            </li>
          ))}
        </ul>

        <NewMessageInput onSubmit={handleSendOutgoingMessage} />
      </div>
    </div>
  );
};

export default СhatContainer;
