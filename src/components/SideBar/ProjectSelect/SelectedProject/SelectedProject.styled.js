import styled from '@emotion/styled';
import theme from 'theme';

export const ProjectBox = styled.span`
  display: block;
  width: 100%;
  padding: ${theme.space[2]} ${theme.space[3]};
  display: flex;
  justify-content: space-between;
  position: relative;
  color: ${theme.colors.primary.regular};
  background-color: ${theme.colors.primary.light};
  border-radius: ${theme.radii.m};
  cursor: pointer;
  margin-top: ${theme.space[2]};
`;

export const Text = styled.span`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
`;
