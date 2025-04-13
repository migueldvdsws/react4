import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";

// 👉 Importar el CartProvider
import { CartProvider } from "./context/CartContext"; // Asegúrate de que la ruta sea correcta

const App = () => {
  const [token, setToken] = useState(false);

  return (
    <CartProvider> {/* ✅ CartProvider debe envolver TODO */}
      <Router>
        <div>
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
    </CartProvider>
  );
};

export default App;
