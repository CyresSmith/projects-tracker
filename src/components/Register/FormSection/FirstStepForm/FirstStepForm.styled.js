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

  fieldset {
    margin: ${theme.space[4]} 0 0;
    padding: 0;
    border: none;
    position: relative;
    width: 100%;

    label[for='services'] {
      position: relative;
      bottom: 0;
    }

    ul {
      margin-top: ${theme.space[2]};
    }
  }

  input[id='desc'] {
    margin-top: 125px;
  }

  label[for='desc'],
  label[for='goals'] {
    bottom: calc(185px + 44px);
  }

  textarea[id='desc'],
  textarea[id='goals'] {
    margin-top: 124px;
  }

  label[for='mission'],
  label[for='values'] {
    bottom: calc(185px + 84px);
  }

  textarea[id='mission'],
  textarea[id='values'] {
    margin-top: 172px;
  }

  button[id='next'] {
    margin-top: ${theme.space[4]};
  }
`;
