import styled from '@emotion/styled';
import theme from 'theme';

export const DatesBox = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.space[3]};
  position: relative;
  margin-top: 84px;
  margin-bottom: ${theme.space[4]};
`;

export const InputBox = styled.div`
  position: relative;
  flex: 50%;

  svg[id='dateStart'],
  svg[id='deadline'] {
    position: absolute;
    right: ${theme.space[3]};
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  div[id='datePicker'] {
    position: absolute;
    bottom: calc(48px + ${theme.space[2]});
    border-radius: ${theme.space[3]};
    box-shadow: ${theme.shadow.primary};
    background-color: ${theme.colors.white};
  }
`;
