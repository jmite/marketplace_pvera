import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css';

function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
