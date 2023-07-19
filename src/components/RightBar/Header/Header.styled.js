import styled from '@emotion/styled';
import theme from 'theme';

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.space[3]};

  button {
    width: 52px;
    height: 52px;
    background-color: ${theme.colors.primary.light};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const UserAvatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
`;
