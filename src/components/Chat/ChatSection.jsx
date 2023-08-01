import SectionInfo from 'components/SectionInfo/SectionInfo';
import { SectionBox } from 'components/shared/SectionBox.styled';
import { ChatBox } from './ChatSection.styled';

import messages from 'messages.json';
import ChatWindow from 'components/shared/ChatWindow';

const ChatSection = () => {
  return (
    <SectionBox>
      <SectionInfo name="Chat" />
      <ChatBox>
        <ChatWindow messages={messages} />
      </ChatBox>
    </SectionBox>
  );
};

export default ChatSection;
