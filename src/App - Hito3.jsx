// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  // Importa el componente Navbar
import Footer from './components/Footer';  // Importa el componente Footer
import Home from './components/Home';  // Importa el componente Home
import './App.css'; 
const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar /> {/* Aquí se renderiza el Navbar */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
          </Routes>
        </div>
        <Footer /> {/* Aquí se renderiza el Footer */}
      </div>
    </Router>
  );
};

export default App;
