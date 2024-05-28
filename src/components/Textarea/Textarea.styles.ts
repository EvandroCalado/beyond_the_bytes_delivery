import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    & > label {
      font-size: ${theme.font.sizes.sm};
      text-transform: capitalize;
      font-weight: 600;
    }

    & > textarea {
      width: 100%;
      height: 10rem;
      border-radius: ${theme.spacings.xs};
      border: 1px solid ${theme.colors.primary};
      outline: none;
      margin-top: ${theme.spacings.xs};
      padding: ${theme.spacings.md};

      &:focus {
        outline: 3px solid ${theme.colors.primary};
        outline-offset: 1px;
      }
    }
  `}
`;
