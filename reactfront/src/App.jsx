import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

function App() {


  return (
    <BrowserRouter>
      
          <Navbar />
          <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
       
    </BrowserRouter>
  )
}

export default App
