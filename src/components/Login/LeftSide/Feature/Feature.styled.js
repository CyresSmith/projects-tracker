import styled from '@emotion/styled';
import theme from 'theme';

export const FeatureBox = styled.div`
  height: 60px;
  padding: 16px 50px;
  display: flex;
  align-items: center;
  gap: ${theme.space[2]};
  position: absolute;
  right: ${p => `${p.right}px`};
  bottom: ${p => `${p.bottom}px`};
  transform: ${p => `rotate(${p.transform})`};
  background-color: ${p => p.color};
  border-radius: 30px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);
`;

export const FeatureText = styled.p`
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  color: ${p => p.textColor};
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;
