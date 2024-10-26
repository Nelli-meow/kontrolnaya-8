import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-warning-subtle">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="text-black p-2 fs-4 text-decoration-none" to="/">Nelli-meow Quotes</NavLink>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none border-end border-2 border-black" to="/quotes">Quotes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/add-quote">Submit new quote</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;