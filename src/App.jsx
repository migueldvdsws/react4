// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Usar Routes en lugar de Switch
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";  // Importar el componente Cart
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";


const App = () => {
  const [token, setToken] = useState(false); // Mantener el estado del token

  return (
    <Router>
      <div>
        {/* Pasar token y setToken a Navbar */}
        <Navbar token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Pizza/p001" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
//



