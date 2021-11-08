import React from 'react';
import './Header.css'
const Header = () => {
    return (
        
        <nav className="main-nav">
  <ul>
    <li>Logo</li>
    <li>Home</li>
    <li>Contact Us</li>
  </ul>
  <form>
    <input type="search" placeholder="Search" />
    <button>Go</button>
  </form>
</nav>
      
    );
};

export default Header;