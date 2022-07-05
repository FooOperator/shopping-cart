import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { capitalize } from './shared/utils/manipulations';
import { useEffect } from 'react';
import { AppRoutes } from './containers/routes';
import useAuth0 from '@auth0/auth0-react/src/use-auth0';

const App = () => {
  const location = useLocation();
  const { user, isAuthenticated, isLoading, } = useAuth0();
  const currentTitle = ` • ${capitalize(location.pathname.slice(1))}`;

  useEffect(() => {
    console.log(user);
    console.log(isAuthenticated);
    console.log(isLoading);
  }, [user, isAuthenticated, isLoading]);

  return (
    <div className="App">
      <Helmet>
        <title>Ecommerce{location.pathname !== '/' ? currentTitle : ''}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;1,200;1,400;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <AppRoutes />
    </div>
  );
}

export default App;
