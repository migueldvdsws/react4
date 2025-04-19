import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext"; // 👈 importar el hook
import Register from "./Register";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const { token, login, logout } = useUser(); // 👈 usar login en lugar de setToken

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  const [showCartDetails, setShowCartDetails] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirigir al home
  };
  
  const handleLoginSuccess = () => {
    const fakeToken = "sample_token_123"; // Token simulado
    login(fakeToken); // Aquí usas el método login con un token simulado
    setShowLogin(false); // Cerramos el modal de login
  };

  const getTotalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

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

            <div className="position-relative">
              <button
                className="btn btn-outline-success"
                onClick={() => setShowCartDetails(!showCartDetails)}
              >
                🛒 ({getTotalItems()}) ${total.toLocaleString()}
              </button>

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

      <Register show={showRegister} handleClose={() => setShowRegister(false)} />
      <Login show={showLogin} handleClose={handleLoginSuccess} />
    </>
  );
};

export default Navbar;
