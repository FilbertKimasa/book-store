import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/userIcon.png';

function Navigation() {
  return (
    <section>
      <Link to="/">Bookstore CMS</Link>
      <nav>
        <ul>
          <li>
            <Link to="books">Books</Link>
          </li>
          <li>
            <Link to="category">Categories</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navigation;
