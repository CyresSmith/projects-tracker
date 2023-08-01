import styled from '@emotion/styled';
import theme from 'theme';

export const DatesBox = styled.span`
  display: block;
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
  margin-bottom: ${theme.space[3]};
  opacity: ${p => (p.active ? 1 : 0.4)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: ${theme.space[1]};
  }
`;
