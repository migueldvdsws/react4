import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>¡Página no encontrada!</h1>
      <p>Lo siento, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;