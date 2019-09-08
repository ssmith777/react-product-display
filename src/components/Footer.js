import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='section-footer py-4 bg-primary'>
      <div className='container'>
        <div>
          <h2 className='text-2 mb-1'>Lorem ipsum dolor sit.</h2>
          <a href='http://twitter.com'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>
          <a href='http://facebook.com'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
          <a href='http://youtube.com'>
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        </div>
        <div>
          <h3>Company Info</h3>
          <ul>
            <li>
              <Link to='/about'>All Products</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/about'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/about'>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li>
              <Link to='/about'>Lorem ipsum dolor.</Link>
            </li>
            <li>
              <Link to='/about'>Lorem ipsum dolor.</Link>
            </li>
            <li>
              <Link to='/about'>Lorem ipsum dolor.</Link>
            </li>
            <li>
              <Link to='/about'>Lorem ipsum dolor.</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form
            className='mt-1'
            name='email-form'
            method='POST'
            data-netlify='true'
          >
            <div className='email-form'>
              <span className='form-control-wrap'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  size='40'
                  className='form-control'
                  placeholder='E-mail'
                />
              </span>
              <button
                type='submit'
                value='Submit'
                className='form-control submit'
              >
                <i className='fas fa-chevron-right'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
