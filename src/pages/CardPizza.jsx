import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem', position: 'relative' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <p className="card-text">Ingredientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <Link to={`/pizza/${id}`} className="btn btn-secondary">Ver más</Link>
        <button className="btn btn-primary">Agregar</button>
      </div>
    </div>
  );
};

export default CardPizza;