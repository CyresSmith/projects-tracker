import styled from '@emotion/styled';
import { Field } from 'formik';
import theme from 'theme';

export const InputBox = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.m};
  position: absolute;
  bottom: 60px;
`;

export const InputField = styled(Field)`
  display: block;
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${theme.colors.secondary.regular};

  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.m};

  ::placeholder {
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.light};
    line-height: ${theme.lineHeights.m};
  }
`;

export const Error = styled.p`
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.danger};
  position: absolute;
  bottom: -24px;
  right: 0;
`;
