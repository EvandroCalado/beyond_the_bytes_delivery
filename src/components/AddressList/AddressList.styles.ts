import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Addresses = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.lg};
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

    & > h1 {
      text-transform: capitalize;

      @media ${theme.media.lteOrEqMedium} {
        font-size: ${theme.font.sizes.lg};
      }
    }

    & > ul {
      display: flex;
      flex-direction: column;
    }

    & > ul > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${theme.font.sizes.xs};
      padding: ${theme.spacings.md};
      border-radius: ${theme.spacings.xs};

      @media ${theme.media.lteOrEqSmallest} {
        font-size: ${theme.font.sizes.sm};
      }

      & > .address {
        display: flex;
        gap: ${theme.spacings.xs};
        text-transform: capitalize;

        & > span {
          font-weight: 800;
        }
      }

      & > button {
        padding: ${theme.spacings.xs};
      }
    }

    & > ul > li:nth-child(odd) {
      background-color: ${theme.colors.secondary};
    }

    & > span {
      font-size: ${theme.font.sizes.lg};
    }

    & > span::first-letter {
      text-transform: capitalize;
    }
  `}
`;
