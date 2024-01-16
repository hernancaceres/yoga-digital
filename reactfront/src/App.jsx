import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Metodo from './pages/Metodo';
import Asanas1 from './pages/Asanas1';
import Recomendaciones from './pages/Recomendaciones';

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/asanas1" element={<Asanas1 />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
