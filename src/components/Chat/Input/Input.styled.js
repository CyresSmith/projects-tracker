import styled from '@emotion/styled';
import theme from 'theme';

export const InputBox = styled.div`
  form {
    position: relative;
  }

  button {
    position: absolute;
    color: ${theme.colors.primary.regular};
    background-color: transparent;
    right: ${theme.space[2]};
    top: 50%;
    transform: translateY(-50%);

    :hover:not(:disabled) {
      color: ${theme.colors.primary.hover};
    }
  }
`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  margin-top: ${theme.space[3]};
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${theme.colors.secondary.regular};

  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.m};

  ::placeholder {
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.light};
    line-height: ${theme.lineHeights.m};
  }
`;
