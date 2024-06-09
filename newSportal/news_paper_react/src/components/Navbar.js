import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">News Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form inline className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-2" />
              <Button variant="outline-success" className="mr-2">Search</Button>
              <Button variant="outline-primary" onClick={handleShow}>Login</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={show} handleClose={handleClose} />
    </>
  );
};

export default AppNavbar;
