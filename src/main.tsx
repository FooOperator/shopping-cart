import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './GlobalStyle';
import configuredStore from './shared/store/store';
import { Auth0Provider } from '@auth0/auth0-react';

const theme: DefaultTheme = {
  background: '#090B0C',
  border: '#BE70AD',
  foreground: '#34383D',
  primary: '#BE70AD',
  secondary: '#966B9D',
  lightText: '#CEC7BD',
  darkText: '#090B0C'
}

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Auth0Provider
      domain='foo-operator.eu.auth0.com'
      clientId="HmeKEfaAFIOCQMkA1VnCSwv6TcJ1AxW3"
      redirectUri={window.location.origin}
    >
      <Router>
        <Provider store={configuredStore}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </Provider>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
