import { useState, useEffect, useRef } from 'react';
import { getMessageTime } from 'helpers';
import Message from 'components/СhatContainer/components/Message';
import NewMessageInput from 'components/СhatContainer/components/NewMessageInput';
import IncomingMessageTyping from 'components/СhatContainer/components/IncomingMessageTyping';
import { ChatMessage } from './types';
import styles from './СhatContainer.module.scss';

const welcomeMessage: ChatMessage = {
  id: 1,
  text: 'Hi Josh! What can I help you with today?',
  type: 'incoming',
  time: getMessageTime(),
};

const СhatContainer = () => {
  const messageListRef = useRef<HTMLUListElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [incomingMessageInProgress, setIncomingMessageInProgress] =
    useState<boolean>(false);

  const generateIncomingMessage = async () => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      // text: 'ktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      type: 'incoming',
      time: getMessageTime(),
    };

    setTimeout(() => {
      setMessages([...messages, newMessage]);
      setIncomingMessageInProgress(false);
    }, 3000);
  };

  useEffect(() => {
    if (incomingMessageInProgress) {
      generateIncomingMessage();
    }
  }, [incomingMessageInProgress]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendOutgoingMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      text,
      type: 'outgoing',
      time: getMessageTime(),
    };

    setMessages([...messages, newMessage]);

    setIncomingMessageInProgress(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header} />

      <div className={styles.contentWrapper}>
        <ul ref={messageListRef} className={styles.messageList}>
          {messages.map(({ id, text, type, time }) => (
            <li key={id}>
              <Message text={text} type={type} time={time} />
            </li>
          ))}

          {incomingMessageInProgress && (
            <li>
              <IncomingMessageTyping />
            </li>
          )}
        </ul>

        <NewMessageInput
          onSubmit={handleSendOutgoingMessage}
          loading={incomingMessageInProgress}
        />
      </div>
    </div>
  );
};

export default СhatContainer;
