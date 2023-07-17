import styled from '@emotion/styled';
import theme from 'theme';

const transition = 'all 1s cubic-bezier(0.47, 0.01, 0.61, 0.99)';

export const HeroSection = styled.section`
  width: 100%;
  height: ${p => {
    switch (p.step) {
      case 1:
        return '107px';

      case 2:
        return '341px';

      default:
        return '607px';
    }
  }};
  background-color: ${theme.colors.primary.regular};
  padding: ${theme.space[3]} 0 ${theme.space[1]};
  transition: ${transition};

  div[id='container'] {
    position: relative;
  }

  svg {
    position: absolute;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.white};
  display: block;
  width: ${p => (p.step === 2 ? '1000px' : '533px')};
  text-align: center;
  margin-top: ${p => (p.step === 2 ? '129px' : '204px')};
  margin-bottom: 36px;
  transition: ${transition};
  position: relative;
  top: ${p => (p.step === 1 ? '-100vh' : '0')};
`;

export const Box = styled.div`
  position: relative;
  top: ${p => (p.step ? '-100vh' : '0')};
  width: 100%;
  height: ${p => (p.step ? '0' : '100%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: ${transition};
`;
