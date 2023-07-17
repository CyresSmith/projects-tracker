import styled from '@emotion/styled';
import theme from 'theme';

import { Form } from 'formik';

export const FormBox = styled(Form)`
  width: 595px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 97px;

  input[id='links'] {
    margin-top: 124px;
  }

  label[for='links'] {
    bottom: calc(48px + ${theme.space[4]});
  }

  span[id='links'] {
    bottom: calc(48px + ${theme.space[2]});
  }
`;
