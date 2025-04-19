import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Importar el contexto

const Profile = () => {
  const { token, user, logout } = useUser(); // ⬅️ extraer también user
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Si no hay token, redirigir a login
    }
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirigir al home después de cerrar sesión
  };

  return (
    <div className="container mt-5">
      <h2>👤 Perfil del Usuario</h2>
      <p><strong>Email:</strong> {user?.email || "No disponible"}</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
