import styled from '@emotion/styled';
import { Form } from 'formik';

import theme from 'theme';

export const FormBox = styled(Form)`
  width: 595px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 97px;

  div[id='email&password'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  label[for='checkboxes'] {
    position: relative;
    bottom: 0;
    margin-top: ${theme.space[3]};
    margin-bottom: ${theme.space[2]};
  }

  input[id='customerCompanyDesc'] {
    margin-top: 124px;
  }
`;
