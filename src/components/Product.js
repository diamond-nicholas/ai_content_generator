import React, { useState, useEffect } from 'react';

import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const { Configuration, OpenAIApi } = require('openai');
// require('dotenv').config();

const Product = () => {
  const [header, setHeader] = useState(
    'The response from the AI will be shown here'
  );
  const [text, setText] = useState('.....await the response');
  const [values, setValues] = useState({
    productname: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { productname } = values;
    console.log(productname);
    setHeader(`AI suggesition for ${productname}`);

    ///open ai

    const configuration = new Configuration({
      // apiKey: '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',
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai
      .createCompletion('text-davinci-002', {
        prompt: `Write a detailed, smart, informative and professional product description for ${productname}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((data) => setText(data.data.choices[0].text));
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
