import styled from '@emotion/styled';
import { Form } from 'formik';
import theme from 'theme';

export const ScheduleCallBox = styled(Form)`
  width: 575px;
  display: flex;
  gap: ${theme.space[4]};

  div {
    position: relative;
  }
`;

export const FormBox = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  gap: ${theme.space[4]};

  input {
    margin-top: calc(27px + ${theme.space[2]});
  }
`;
