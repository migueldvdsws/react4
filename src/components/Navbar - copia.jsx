// components/Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const total = 25000;  // Total fijo de la compra
  const token = false;  // Simulación del estado de login del usuario

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Botón Home (siempre visible) */}
        <button className="btn btn-link">🍕 Home</button>
        
        {/* Botones condicionales según el estado de token */}
        <div>
          {token ? (
            <>
              <button className="btn btn-link">🔓 Profile</button>
              <button className="btn btn-link">🔒 Logout</button>
            </>

          ) : (
            <>
            <button className="btn btn-link">🔐 Login</button>
            <button className="btn btn-link">🔐 Register</button>
            </>
          )}
        </div>

        {/* Botón Total (siempre visible) */}
        <button className="btn btn-outline-success ms-auto">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

