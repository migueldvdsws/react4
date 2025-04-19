
import React, { useContext } from 'react';
import { useCart } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; // 👈 importar el contexto de usuario

const Cart = () => {
  const { cart, total, removeFromCart } = useCart();
  const { token } = useContext(UserContext); // 👈 obtener el token

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((pizza) => (
              <li key={pizza.id}>
                <h3>{pizza.name} x {pizza.quantity}</h3>
                <p>${pizza.price} c/u</p>
                <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toLocaleString()}</h3>

          {/* ✅ Botón Pagar, deshabilitado si token es false */}
          <button disabled={!token}>
            {token ? "Pagar" : "Inicia sesión para pagar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
