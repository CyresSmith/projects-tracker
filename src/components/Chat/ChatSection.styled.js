import styled from '@emotion/styled';
import theme from 'theme';

export const ChatBox = styled.div`
  height: 630px;
`;

export const MessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
  padding-right: ${theme.space[3]};
  width: 100%;
  height: calc(100% - (48px + ${theme.space[3]}));
  overflow-y: auto;
`;
