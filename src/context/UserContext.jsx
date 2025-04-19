import React, { createContext, useState, useContext, useEffect } from "react";

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  // Verifica si hay un token guardado en localStorage (o alguna otra fuente persistente)
  const storedToken = localStorage.getItem("token"); 

  const [token, setToken] = useState(storedToken || null); // Usar el token guardado si existe

  const logout = () => {
    setToken(null); // Cambiar el estado del token a null
    localStorage.removeItem("token"); // Eliminar el token de localStorage
  };

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token); // Guardar el token en localStorage
  };

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acceder al contexto
export const useUser = () => {
  return useContext(UserContext);
};
