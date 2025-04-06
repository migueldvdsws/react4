import React from 'react';
import { pizzas } from './pizzas';
import CardPizza from './CardPizza';

const PizzaList = ({ addToCart }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Menú de Pizzas 🍕</h2>
      <div className="row">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza {...pizza} addToCart={addToCart} />
            </div>
          ))
        ) : (
          <p className="text-center">No hay pizzas disponibles 😢</p>
        )}
      </div>
    </div>
  );
};

export default PizzaList;
