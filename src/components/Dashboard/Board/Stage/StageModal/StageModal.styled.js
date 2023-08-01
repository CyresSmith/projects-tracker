import styled from '@emotion/styled';
import theme from 'theme';

export const LeftSideBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h5`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.m};
`;

export const Description = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.thin};
  line-height: ${theme.lineHeights.l};
  margin-top: ${theme.space[2]};
  margin-bottom: ${theme.space[3]};
  opacity: 0.6;
  width: 440px;
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  gap: ${theme.space[3]};
  margin-bottom: ${theme.space[3]};

  div {
    flex: 50%;

    h5 {
      margin-bottom: ${theme.space[1]};
    }
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[1]};
`;

export const Link = styled.a`
  color: ${theme.colors.primary.regular};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.l};
  cursor: pointer;
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.black};
  }
`;

export const Files = styled.div`
  h5 {
    margin-bottom: ${theme.space[1]};
  }

  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: ${theme.space[2]};

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${theme.colors.primary.light};
      transition: ${theme.transition.primary};

      span {
        margin-top: ${theme.space[1]};
      }

      :hover {
        color: ${theme.colors.primary.hover};
      }
    }
  }
`;

export const BtnBox = styled.div`
  margin-top: auto;
  height: 42px;
`;

export const TextBtnBox = styled.div`
  margin-top: ${theme.space[3]};
`;
