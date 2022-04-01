import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Cards = ({ header, title, text, link }) => {
  return (
    <>
      <Card>
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant='success'>
            <Link to={link}>Get started</Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
