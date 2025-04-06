import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // Captura el ID desde la URL
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al obtener la pizza:", error));
  }, [id]);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <img src={pizza.img} alt={pizza.name} width={300} />
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
    </div>
  );
};

export default Pizza;

