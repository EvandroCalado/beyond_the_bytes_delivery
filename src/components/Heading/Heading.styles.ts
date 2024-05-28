import styled, { css } from 'styled-components';

import { HeadingProps } from '.';

export const Title = styled.h1<HeadingProps>`
  ${({ theme, size = 'md', fontWeight = 'normal' }) => css`
    font-size: ${theme.font.sizes[size]};
    font-weight: ${fontWeight};
  `}
`;
