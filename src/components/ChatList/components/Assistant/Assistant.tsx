import assistant from 'data/assistant.json';
import ChatItem from 'components/ChatList/components/ChatItem';
import avatarImage from 'images/assistant-avatar.png';

const Assistant = () => {
  const { name, email } = assistant;
  return (
    <ChatItem
      status="active"
      title={name}
      description={email}
      participant={{ image: avatarImage, name }}
    />
  );
};

export default Assistant;
