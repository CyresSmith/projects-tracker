import styled from '@emotion/styled';
import theme from 'theme';

export const ProfileBox = styled.div`
  width: 330px;

  p {
    display: flex;
    flex-direction: column;
  }
`;

export const User = styled.div`
  display: flex;
  gap: ${theme.space[2]};
  align-items: center;
`;

export const UserImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${theme.radii.round};
  object-fit: cover;
`;

export const UserName = styled.span`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
`;

export const UserEmail = styled.span`
  color: ${theme.colors.secondary.regular};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[3]};
  margin-top: ${theme.space[3]};

  button {
    padding: ${theme.space[2]};
    width: 100%;
    border-radius: ${theme.radii.m};

    span {
      font-size: ${theme.fontSizes.l};
    }

    :hover:not(:disabled) {
      background-color: ${theme.colors.primary.bg};

      span {
        color: ${theme.colors.primary.regular};
      }

      svg {
        fill: ${theme.colors.primary.regular};
      }
    }
  }

  button[id='logout'] {
    svg {
      transform: scale(-1, 1);
    }
  }
`;
