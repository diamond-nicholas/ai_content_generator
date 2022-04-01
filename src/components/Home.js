import React from 'react';
import Cards from './Cards';
const Home = () => {
  return (
    <>
      <main>
        <Cards
          header='Product Description'
          title='Generate product description'
          text='Generate products description for any types of products, simply enter the name and product description to get started'
          link='/products'
        />
        <Cards
          header='Cold emails'
          title='Generate cold emails'
          text='Generate cold emails for any kind of business'
          link='/codeemails'
        />
        <Cards
          header='Tweets'
          title='Generate random tweets for any purpose'
          text='Generate products description for any types of products, simply enter the name and product description to get started'
          link='/tweets'
        />
      </main>
    </>
  );
};

export default Home;
