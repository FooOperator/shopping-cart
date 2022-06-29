import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import { Helmet } from 'react-helmet';
import { capitalize } from './shared/utils/manipulations';
const App = () => {
  const location = useLocation();
  console.log('pathname: ', location.pathname);
  const currentTitle = ` - ${capitalize(location.pathname.slice(1))}`;
  return (
    <div className="App">
      <Helmet>
        <title>Ecommerce{location.pathname !== '/' ? currentTitle : ''}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;1,200;1,400;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='store' element={<Store />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
