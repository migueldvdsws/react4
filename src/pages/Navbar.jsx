import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Login from "./Login";

const Navbar = ({ token, setToken }) => {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCartDetails, setShowCartDetails] = useState(false); // 👈 para mostrar resumen carrito

  const handleLogout = () => {
    setToken(false);
    navigate("/");
  };

  const handleLoginSuccess = () => {
    setToken(true);
    setShowLogin(false);
  };

  // Función para obtener la cantidad total de artículos en el carrito
  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">🍕 Home</Link>
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

            {/* 🛒 Botón de carrito con total */}
            <div className="position-relative">
              <button
                className="btn btn-outline-success"
                onClick={() => setShowCartDetails(!showCartDetails)}
              >
                🛒 ({getTotalItems()}) ${total.toLocaleString()}
              </button>

              {/* 🔽 Mini resumen del carrito */}
              {showCartDetails && cart.length > 0 && (
                <div
                  className="card position-absolute end-0 mt-2 p-3 shadow bg-white"
                  style={{ minWidth: "300px", zIndex: 1000 }}
                >
                  <h6 className="mb-2">🧾 Resumen del carrito</h6>
                  <ul className="list-unstyled mb-2">
                    {cart.map((item) => (
                      <li key={item.id}>
                        <strong>{item.name}</strong> x{item.quantity} – ${item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                  <div className="text-end">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        setShowCartDetails(false);
                        navigate("/cart");
                      }}
                    >
                      Ver carrito
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Formularios modales */}
      <Register show={showRegister} handleClose={() => setShowRegister(false)} />
      <Login show={showLogin} handleClose={handleLoginSuccess} />
    </>
  );
};

export default Navbar;
