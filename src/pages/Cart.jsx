import React from 'react';
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, total, removeFromCart } = useCart();

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
        </div>
      )}
    </div>
  );
};

export default Cart;