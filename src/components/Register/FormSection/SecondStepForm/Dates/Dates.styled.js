import styled from '@emotion/styled';
import theme from 'theme';

export const DatesBox = styled.div`
  width: 100%;
  display: flex;
  gap: ${theme.space[3]};
  position: relative;
  margin-top: 84px;
  margin-bottom: ${theme.space[4]};

  .rdp-nav {
    button {
      transition: ${theme.transition.primary};
    }
  }

  .rdp-cell {
    button {
      transition: ${theme.transition.primary};
    }
  }
`;

export const InputBox = styled.div`
  position: relative;
  flex: 50%;

  button[id='calendar'] {
    position: absolute;
    right: ${theme.space[1]};
    top: ${theme.space[1]};
    background-color: transparent;
    color: ${theme.colors.primary.regular};
  }

  div[id='datePicker'] {
    position: absolute;
    bottom: calc(48px + ${theme.space[2]});
    border-radius: ${theme.space[3]};
    box-shadow: ${theme.shadow.primary};
    background-color: ${theme.colors.white};
  }
`;
