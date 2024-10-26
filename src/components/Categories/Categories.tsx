import * as React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

  const categories = [
    { title: 'Star Wars', id: 'star-wars' },
    { title: 'Famous people', id: 'famous-people' },
    { title: 'Saying', id: 'saying' },
    { title: 'Humour', id: 'humour' },
    { title: 'Motivation', id: 'motivation' },
  ];

  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">All</Link>
        </li>
        {categories.map(category => (
          <li key={category.id} className="list-group-item">
            <Link to={`/quotes?category=${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
