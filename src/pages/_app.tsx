import React from 'react';
import GlobalStyle from '../styles/global';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);

export default MyApp;
