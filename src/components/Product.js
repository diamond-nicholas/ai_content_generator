import React, { useState, useEffect } from 'react';

import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const { Configuration, OpenAIAPI } = require('openai');

const Product = () => {
  const [header, setHeader] = useState(
    'The response from the AI will be shown here'
  );
  const [text, setText] = useState('.....await the response');
  const [values, setValues] = useState({
    productname: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { productname } = values;
    console.log(productname);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // useEffect(() => {}, [header, text]);

  return (
    <>
      <div className='product'>
        <form onSubmit={handleSubmit}>
          <label>What product would you like to get description from ???</label>
          <br />
          <br />
          <input
            type='text'
            name='productname'
            placeholder='enter a product name'
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <button type='submit'>Get ai suggestion</button>
        </form>

        <Card>
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Product;
