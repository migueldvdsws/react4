import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // 👈 Importar el contexto

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); // 👈 Usar la función addToCart del contexto

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al obtener las pizzas:", error));
  }, []);

  return (
    <div>
      <h1>Pizzas Disponibles</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <h2>{pizza.name}</h2>
            <p><strong>Precio:</strong> ${pizza.price}</p>
            <img src={pizza.img} alt={pizza.name} width={200} />
            <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
            <p><strong>Descripción:</strong> {pizza.desc}</p>
            {/* 👇 Botón para añadir al carrito */}
            <button onClick={() => addToCart(pizza)}>Añadir al carrito 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
