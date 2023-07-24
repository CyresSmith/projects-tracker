import styled from '@emotion/styled';
import theme from 'theme';

export const SectionInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.space[4]};
`;

export const SectionName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.48px;
`;
