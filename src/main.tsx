import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import configuredStore from './shared/store/store';
import Auth0ProviderWithRouter from './auth/Auth0ProviderWithRouter';
import { useAuth0 } from '@auth0/auth0-react';
import App from './App';

const theme: DefaultTheme = {
  background: '#090B0C',
  border: '#BE70AD',
  foreground: '#34383D',
  primary: '#BE70AD',
  secondary: '#966B9D',
  lightText: '#CEC7BD',
  darkText: '#090B0C'
}

// const TestApp = () => {
//   const { user, logout, isAuthenticated, loginWithPopup } = useAuth0();

//   const Content = () => {
//     if (!isAuthenticated) {
//       return (
//         <>
//           <button onClick={loginWithPopup}>Login</button>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <h1>{user?.nickname}</h1>
//           <h2>{user?.email}</h2>
//           <button onClick={() => logout()}>Logout</button>
//         </>
//       );
//     }
//   }

//   return (
//     <>
//       <Routes >
//         <Route path='/' element={
//           <div>
//             <Content />
//             <Outlet />
//           </div>
//         }>
//           <Route path='a' element={
//             <div>
//               a
//             </div>
//           }
//           />
//           <Route path='b' element={
//             <div>
//               b
//             </div>
//           }
//           />
//         </Route>
//       </Routes>
//     </>
//   );
// }


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Auth0ProviderWithRouter>
      <ReduxProvider store={configuredStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </Auth0ProviderWithRouter>
  </Router>
  // <Router>
  //   <Auth0ProviderWithRouter>
  //     <ReduxProvider store={configuredStore} >
  //       <ThemeProvider theme={theme} >
  //         <GlobalStyle />
  //         <TestApp />
  //       </ThemeProvider>
  //     </ReduxProvider>
  //   </Auth0ProviderWithRouter>
  // </Router>
);


