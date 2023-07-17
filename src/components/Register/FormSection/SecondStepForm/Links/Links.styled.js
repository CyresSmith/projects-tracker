import styled from '@emotion/styled';
import { FieldArray } from 'formik';
import theme from 'theme';

export const LinksBox = styled.div`
  display: block;
  width: 100%;
  position: relative;
  margin-top: 124px;

  label[id='linksLabel'] {
    bottom: unset;
    top: calc(-27px - ${theme.space[4]});
  }

  span[id='linksSubLabel'] {
    bottom: unset;
    top: calc(-20px - ${theme.space[2]});
  }

  button[id='addLink'] {
    margin-top: ${theme.space[3]};
  }
`;

export const LinksForm = styled(FieldArray)`
  width: 100%;
  display: flex;
  gap: ${theme.space[3]};
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
`;

export const Link = styled.li`
  position: relative;

  button {
    position: absolute;
    right: ${theme.space[1]};
    top: ${theme.space[1]};
    background-color: ${theme.colors.white};
    color: ${theme.colors.danger};
  }
`;
