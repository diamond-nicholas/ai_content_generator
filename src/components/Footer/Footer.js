import React from 'react';

import './Footer.scss';
import { GrFacebookOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { BsDribbble } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// import Logo from '../Vectors/Logo';
// import './wavy-dark.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footerContainer'>
        <article>
          <div className='title'>
            <ul>
              <li>PRODUCT</li>
              <li>COMPANY</li>
              <li>LEARNING</li>
              <li>
                <img src='teams/bulkit-white.png' alt='' />
              </li>
            </ul>
          </div>

          <div className='content'>
            <ul className='one'>
              <li>Discover features</li>
              <li>CMS integration</li>
              <li>Customers</li>
              <li>Weekly sessions</li>
              <li>Free trials and demo</li>
              <li>What's next ?</li>
            </ul>

            <ul className='two'>
              <li>About us</li>
              <li>About security</li>
              <li>User guide</li>
              <li>Terms of service</li>
              <li>Terms of website use</li>
              <li>Privacy policy</li>
            </ul>

            <ul className='three'>
              <li>Resources</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>API documentation</li>
              <li>Admin guide</li>
            </ul>

            <ul className='four'>
              <li>
                <GrFacebookOption />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <ImLinkedin2 />
              </li>

              <li>
                <BsDribbble />
              </li>
              <li>
                <FaGithub />
              </li>
            </ul>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
