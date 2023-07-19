import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import theme from 'theme';

export const SidebarBox = styled.aside`
  width: 244px;
  height: 100vh;
  padding: ${theme.space[4]} ${theme.space[3]};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
`;

export const LogoLink = styled(Link)`
  margin-bottom: ${theme.space[4]};
`;
