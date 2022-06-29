import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './GlobalStyle'
import configuredStore from './store/store'

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
    <Router>
      <Provider store={configuredStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </Router >
  </React.StrictMode>
)
