import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const ToolLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${theme.space[2]} ${theme.space[3]};
  color: ${theme.colors.secondary.dark};
  background-color: transparent;
  border-radius: ${theme.radii.m};
  transition: ${theme.transition.primary};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.m};

  :hover {
    color: ${theme.colors.primary.regular};
    background-color: ${theme.colors.primary.light};
  }

  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary.regular};
  }

  svg {
    margin-right: ${theme.space[2]};
  }
`;
