import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ setToken }) => {
  const userEmail = "usuario@correo.com"; // Email estático por ahora
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    setToken(false); // Elimina el token (sesión cerrada)
    navigate("/"); // Redirige al home
  };

  return (
    <div className="container mt-5">
      <h2>👤 Perfil del Usuario</h2>
      <p><strong>Email:</strong> {userEmail}</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;