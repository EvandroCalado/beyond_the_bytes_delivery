import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Addresses = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.md};
    padding: 0 ${theme.spacings.md};
    padding: ${theme.spacings.lg} ${theme.spacings.md};
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.spacings.sm};

    @media ${theme.media.lteOrEqSmall} {
      width: 32rem;
    }

    @media ${theme.media.lteOrEqSmallest} {
      width: 28rem;
    }

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
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.md};
    }
  `}
`;
