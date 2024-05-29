import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.md};

    & > button:nth-child(1) {
      margin-right: auto;
      padding: ${theme.spacings.sm};
    }

    & > h2 {
      text-transform: capitalize;

      @media ${theme.media.lteOrEqMedium} {
        font-size: ${theme.font.sizes.lg};
      }
    }

    & > form {
      width: 35rem;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.md};
    }
  `}
`;
