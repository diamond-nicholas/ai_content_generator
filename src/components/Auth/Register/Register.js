import React from 'react';
import './Register.scss';

const Register = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <section className='templateTwo'>
      <article>
        <div className='header'>
          <h2>Signup</h2>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type='text'
              placeholder='Name'
              name='name'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              id=''
              placeholder='Password'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className='submit'>
            <button>Next</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Register;
