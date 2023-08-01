import styled from '@emotion/styled';
import theme from 'theme';

export const MessageBox = styled.li`
  max-width: 400px;
  padding: ${theme.space[2]};
  margin-left: ${p => (p.currentUser ? 'auto' : '0')};
  display: flex;
  flex-direction: column;
  gap: ${theme.space[2]};
  align-items: ${p => (p.currentUser ? 'flex-end' : 'flex-start')};
  background-color: ${p =>
    p.currentUser ? theme.colors.white : theme.colors.primary.light};

  border-radius: ${theme.radii.l} ${theme.radii.l}
    ${p => (p.currentUser ? 0 : theme.radii.l)}
    ${p => (p.currentUser ? theme.radii.l : 0)};
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[2]};
`;

export const AuthorImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorName = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  word-wrap: break-word;
`;

export const MessageDate = styled.p`
  color: ${theme.colors.secondary.regular};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
`;
