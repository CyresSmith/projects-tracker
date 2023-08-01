import styled from '@emotion/styled';
import theme from 'theme';

export const Contact = styled.span`
  display: flex;
  align-items: center;
`;

export const ContactName = styled.span`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.thin};
`;

export const ContactImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${theme.radii.round};
  object-fit: cover;
  margin-right: ${theme.space[2]};
`;
