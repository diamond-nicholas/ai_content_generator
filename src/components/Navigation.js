import React from 'react';
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand>
            <Link to='/'>AI Content Generator</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to='/products'>Product Description</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/coldemails'>Cold emails</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/tweets'>Tweets</Link>
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
