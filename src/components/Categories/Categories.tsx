import * as React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">All</Link>
        </li>
        <li className="list-group-item">
          <Link to="/star-wars">Star Wars</Link>
        </li>
        <li className="list-group-item">
          <Link to="/famous-people">Famous people</Link>
        </li>
        <li className="list-group-item">
          <Link to="/saying">Saying</Link>
        </li>
        <li className="list-group-item">
          <Link to="/motivation">Motivation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;