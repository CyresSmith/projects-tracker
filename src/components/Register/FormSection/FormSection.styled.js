import styled from '@emotion/styled';
import theme from 'theme';

export const Section = styled.section`
  width: 100%;
  padding: ${theme.space[3]} 0;
  position: relative;
`;

export const HideForm = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;
