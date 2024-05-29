import isPropValid from '@emotion/is-prop-valid';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/globals.ts';
import theme from 'styles/theme.ts';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>,
);
