import styled from '@emotion/styled';
import theme from 'theme';

export const LabelBox = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${theme.space[3]};
  }

  svg {
    margin-right: ${theme.space[2]};
    cursor: pointer;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: ${theme.fontSizes.m};
`;

export const CheckBox = styled.input`
  display: none;
`;
