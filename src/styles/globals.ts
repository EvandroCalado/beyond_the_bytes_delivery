import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    font-family: "Lato", sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }
`;
