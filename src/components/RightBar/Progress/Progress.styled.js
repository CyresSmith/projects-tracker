import styled from '@emotion/styled';
import theme from 'theme';

export const ProgressBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${theme.space[3]};
`;

export const Box = styled.div`
  width: 220px;
  height: 220px;
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Percentage = styled.span`
  color: ${theme.colors.black};
  text-align: center;
  font-family: ${theme.fonts.body};
  font-size: 32px;
  font-weight: ${theme.fontWeights.regular};
  letter-spacing: 0.64px;
`;

export const Text = styled.span`
  display: block;
  width: 110px;
  color: ${theme.colors.secondary.dark};
  text-align: center;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: 0.36px;
`;
