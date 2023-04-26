import { useState } from 'react';
import Message from 'components/СhatContainer/components/Message';
import NewMessageInput from 'components/СhatContainer/components/NewMessageInput';
import { ChatMessage } from './types';
import styles from './СhatContainer.module.scss';

const data: ChatMessage[] = [
  {
    id: 1,
    text: 'Hi Josh! What can I help you with today?',
    type: 'incoming',
  },
];

const СhatContainer = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(data);

  const handleSendOutgoingMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      text,
      type: 'outgoing',
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header} />

      <div className={styles.contentWrapper}>
        <ul className={styles.messageList}>
          {messages.map(({ id, text, type }) => (
            <li key={id}>
              <Message text={text} type={type} />
            </li>
          ))}
        </ul>

        <NewMessageInput onSubmit={handleSendOutgoingMessage} />
      </div>
    </div>
  );
};

export default СhatContainer;
