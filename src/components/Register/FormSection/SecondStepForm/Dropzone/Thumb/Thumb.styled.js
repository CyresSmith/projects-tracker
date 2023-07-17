import styled from '@emotion/styled';
import theme from 'theme';

const transition = 'all 1s cubic-bezier(0.47, 0.01, 0.61, 0.99)';

export const Box = styled.div`
  position: relative;
  height: 100px;
  width: calc((100% - (${theme.space[3]} * 4)) / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;
`;

export const Delete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme.transition.primary};
  opacity: ${p => (p.hovered ? '1' : '0')};
`;

export const ThumbImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ThumbIcon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThumbName = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  margin-top: ${theme.space[1]};
`;
