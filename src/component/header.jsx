import React from 'react';
import './header.css';

function Header() {
  return (
      <div className='nav'>
        <nav>
          <a href="">Home</a>
          <a href="#About">About</a>
          <a href="#Performance">Performance</a>
          <a href="#Hobby">Hobby</a>
          <a href="#Contact">Contact</a>
          <span></span>
        </nav>
      </div>
  );
}

export default Header;