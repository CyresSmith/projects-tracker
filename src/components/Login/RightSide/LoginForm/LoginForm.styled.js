import styled from '@emotion/styled';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

import theme from 'theme';

export const FormBox = styled(Form)`
  width: 407px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

export const FormLink = styled(Link)`
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeights.s};
  color: ${theme.colors.primary.regular};
  transition: ${theme.transition.primary};

  :hover {
    color: ${theme.colors.danger};
  }
`;

export const SignUpText = styled.p`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.s};
  margin-top: 32px;

  span {
    margin-right: ${theme.space[3]};
  }
`;
