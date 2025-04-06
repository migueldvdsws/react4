// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Login from "./Login";

const Navbar = ({ token, setToken }) => {
  const total = 0;
  const navigate = useNavigate();

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    setToken(false);  // Cambiar el estado de token a false
    navigate("/");  // Redirigir a la página de inicio
  };

  const handleLoginSuccess = () => {
    setToken(true);        // 🔓 Marcar sesión iniciada
    setShowLogin(false);   // Cerrar modal Login
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div className="container-fluid">
          {/* Logo/Home */}
          <Link className="navbar-brand" to="/">🍕 Home</Link>

          {/* Menú derecho */}
          <div className="d-flex align-items-center gap-2">
            {token ? (
              <>
                <Link className="btn btn-link" to="/profile">👤 Profile</Link>
                <button className="btn btn-link" onClick={handleLogout}>🚪 Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-link" onClick={() => setShowLogin(true)}>🔐 Login</button>
                <button className="btn btn-link" onClick={() => setShowRegister(true)}>📝 Register</button>
              </>
            )}

            {/* Carrito */}
            <button
              className="btn btn-outline-success"
              onClick={() => navigate("/cart")}
            >
              🛒 Total: ${total.toLocaleString()}
            </button>
          </div>
        </div>
      </nav>

      {/* Modales */}
      <Register show={showRegister} handleClose={() => setShowRegister(false)} />
      
      {/* 🔐 Login simulado */}
      <Login show={showLogin} handleClose={handleLoginSuccess} />
    </>
  );
};

export default Navbar;
