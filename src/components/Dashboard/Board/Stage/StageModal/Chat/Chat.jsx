import ChatWindow from 'components/shared/ChatWindow';
import { Box, ChatBox, Title } from './Chat.styled';

const Chat = ({ messages }) => {
  return (
    <Box>
      <Title>Chat</Title>

      <ChatBox>
        <ChatWindow messages={messages} />
      </ChatBox>
    </Box>
  );
};

export default Chat;
