import React from 'react';
import './header.css';

function Header() {
  return (
      <div className='nav'>
        <nav>
          <a href="">Home</a>
          <a href="#About">About</a>
          <a href="">Performance</a>
          <a href="">Hobby</a>
          <a href="">Contact</a>
          <span></span>
        </nav>
      </div>
  );
}

export default Header;