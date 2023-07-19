import styled from '@emotion/styled';
import theme from 'theme';

export const EventBox = styled.li`
  height: 70px;
  padding: ${theme.space[2]} ${theme.space[3]};
  background-color: ${theme.colors.secondary.bg};
  border-radius: ${theme.radii.m};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const EventInfo = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: calc(6px + ${theme.space[3]});

  ::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: ${theme.radii.round};
    background-color: ${theme.colors.primary.regular};
    position: absolute;
    top: 50%;
    left: calc(-6px - ${theme.space[3]});
    transform: translateY(-50%);
  }
`;

export const EventName = styled.span`
  /* color: var(--black, #222); */
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
`;

export const EventDate = styled.span`
  /* color: var(--black, #222); */
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  opacity: 0.4;
`;
