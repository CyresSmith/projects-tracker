import styled from '@emotion/styled';
import { Field } from 'formik';
import theme from 'theme';

export const TextareaBox = styled.p`
  width: 100%;
  position: relative;
`;

export const TextareaField = styled(Field)`
  display: block;
  width: 100%;
  height: 185px;
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${theme.colors.secondary.regular};
  resize: none;

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
