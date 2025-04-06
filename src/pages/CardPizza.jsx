import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
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

      {/* Botones en la parte inferior */}
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-secondary">Ver más</button>
        <button className="btn btn-primary">Agregar</button>
      </div>
    </div>
  );
};

export default CardPizza;
