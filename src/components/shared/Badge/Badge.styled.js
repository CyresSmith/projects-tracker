import styled from '@emotion/styled';
import theme from 'theme';

export const BadgeBox = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  height: 24px;
  width: 24px;
  background-color: ${theme.colors.danger};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radii.round};
  box-shadow: ${theme.shadow.primary};
`;

export const BadgeNumber = styled.span`
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
`;
