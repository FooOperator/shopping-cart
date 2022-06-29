import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {

  return (
    <div className="App">
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
