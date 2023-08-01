import styled from '@emotion/styled';
import theme from 'theme';

export const NotificationsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
`;

export const Notification = styled.p`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.space[3]};
`;

export const Text = styled.span`
  display: block;
  width: 260px;
  color: ${p => {
    switch (p.status) {
      case 'started':
        return theme.colors.primary.regular;

      case 'completed':
        return theme.colors.progress.path;

      case 'planned':
        return theme.colors.warning;

      default:
        return theme.colors.black;
    }
  }};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.light};
`;

export const DateField = styled.span`
  color: ${theme.colors.secondary.dark};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.light};
  display: flex;
  gap: ${theme.space[1]};
`;
