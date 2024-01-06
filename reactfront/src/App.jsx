import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Metodo from './pages/Metodo';

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
