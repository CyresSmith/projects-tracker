import styled from '@emotion/styled';
import theme from 'theme';

export const ViewToggleBox = styled.div`
  display: flex;
  gap: ${theme.space[3]};

  button {
    span {
      font-size: ${theme.fontSizes.l};
      font-weight: ${theme.fontWeights.regular};
      line-height: normal;
      transition: ${theme.transition.primary};
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
