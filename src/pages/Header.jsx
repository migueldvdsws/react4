// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: 'url(/images/background.jpg)', // Reemplaza con la ruta correcta
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
