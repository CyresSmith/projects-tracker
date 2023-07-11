import styled from '@emotion/styled';
import theme from 'theme';

export const FeatureBox = styled.div`
  padding: ${p => (p.small === true ? '10px 30px' : '16px 50px')};
  display: flex;
  align-items: center;
  gap: ${theme.space[2]};
  position: absolute;
  right: ${p => `${p.right}px`};
  bottom: ${p => `${p.bottom}px`};
  transform: ${p => `rotate(${p.transform})`};
  background-color: ${p => p.color};
  border-radius: 32px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);
`;

export const FeatureText = styled.p`
  font-size: ${p => (p.small === true ? '10px' : '18px')};
  font-weight: ${theme.fontWeights.regular};
  color: ${p => p.textColor};
`;

export const Icon = styled.img`
  width: ${p => (p.small === true ? '19px' : '32px')};
  height: ${p => (p.small === true ? '19px' : '32px')};
`;
