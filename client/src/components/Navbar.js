import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/specification">Specification</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/order">Order</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
