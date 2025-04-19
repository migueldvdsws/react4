import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir al home
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from '../context/UserContext'; // Importar el contexto de usuario

const Login = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const { token, login } = useUser(); // Obtener la función login y el token del contexto

  useEffect(() => {
    if (token) {
      navigate('/'); // Si el token está presente, redirige al home
    }
  }, [token, navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validaciones
    if (!email || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Simulación de autenticación exitosa
    setSuccess('¡Inicio de sesión exitoso!');
    login("fake_token"); // Establecer un token falso en el contexto (esto debe ser el token real)

    // Aquí iría la lógica de autenticación (ej. API, validación en el servidor)
    // Si la autenticación es exitosa, puedes cerrar el modal y redirigir:
    handleClose(); // Cerrar el modal después del login exitoso
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">Iniciar Sesión</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
