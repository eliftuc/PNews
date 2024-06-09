import React, { useState } from 'react';
import { Modal, Button, Form, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login, register } from '../redux/slices/authSlice';

const LoginModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    handleClose();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          )}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isLogin ? 'Login' : 'Register'}
          </Button>
          <Nav.Link onClick={() => setIsLogin(!isLogin)} className="mt-3">
            {isLogin ? 'Register here' : 'Login here'}
          </Nav.Link>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
