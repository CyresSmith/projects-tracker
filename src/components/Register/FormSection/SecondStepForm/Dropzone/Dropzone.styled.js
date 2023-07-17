import styled from '@emotion/styled';
import { Field } from 'formik';
import theme from 'theme';

const getColor = ({ isDragAccept, isDragReject }) => {
  if (isDragAccept) {
    return theme.colors.success;
  }
  if (isDragReject) {
    return theme.colors.danger;
  }
  return theme.colors.primary.regular;
};

export const Box = styled.div`
  position: relative;
  width: 100%;

  label {
    bottom: calc(256px + ${theme.space[4]});
  }

  span {
    bottom: calc(256px + ${theme.space[2]});
  }
`;

export const DropzoneBox = styled.div`
  width: 100%;
  height: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: ${p => `2px dashed ${getColor(p)}`};
  background-color: ${p => {
    switch (true) {
      case p.isDragAccept:
        return 'rgba(20, 174, 92, 0.3)';

      case p.isDragReject:
        return 'rgba(210, 19, 18, 0.3)';

      default:
        return theme.colors.primary.bg;
    }
  }};
  padding: ${theme.space[3]} ${theme.space[5]};
  cursor: pointer;
  transition: ${theme.transition.primary};
`;

export const DropzoneText = styled.p`
  color: ${theme.colors.secondary.dark};
  font-weight: ${theme.fontWeights.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space[4]};
`;

export const Text = styled.span`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.regular};
  text-align: center;
`;

export const RequirementsBox = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Requirements = styled.span`
  font-size: ${theme.fontSizes.s};
  text-align: center;
  max-width: 270px;
`;

export const ThumbBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[3]};
  margin-top: ${theme.space[3]};
`;
