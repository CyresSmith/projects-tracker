import styled from '@emotion/styled';
import theme from 'theme';

export const CalendarBox = styled.div`
  height: 360px;
  /* margin-top: ${theme.space[4]};
  margin-bottom: ${theme.space[3]}; */
  transition: ${theme.transition.primary};

  div.rdp {
    margin: 0;
  }

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

  .rdp-day_today {
    color: ${theme.colors.primary.regular};
    background-color: ${theme.colors.primary.light};

    :hover {
      background-color: ${theme.colors.primary.hover};
    }
  }
`;
