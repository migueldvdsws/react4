// src/pages/Pizza.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`https://api.example.com/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) return <div>Cargando pizza...</div>;

  return (
    <div className="container mt-4">
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <strong>Precio: ${pizza.price}</strong>
    </div>
  );
};

export default Pizza;

