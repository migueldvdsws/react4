import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";

const Navbar = () => {
  const total = 25000;  // Total fijo de la compra
  const token = false;  // Simulación del estado de login del usuario

  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Botón Home */}
          <button className="btn btn-link">🍕 Home</button>

          {/* Botones según el estado de token */}
          <div>
            {token ? (
              <>
                <button className="btn btn-link">🔓 Profile</button>
                <button className="btn btn-link">🔒 Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-link">🔐 Login</button>
                <button className="btn btn-link" onClick={() => setShowRegister(true)}>🔐 Register</button>
              </>
            )}
          </div>

          {/* Botón Total */}
          <button className="btn btn-outline-success ms-auto">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </div>
      </nav>

      {/* Modal de Registro */}
      <Register show={showRegister} handleClose={() => setShowRegister(false)} />
    </>
  );
};

export default Navbar;