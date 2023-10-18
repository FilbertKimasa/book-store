import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// import userIcon from '../assets/userIcon.png';

function Navigation() {
  return (
    <section className="panel-bg">
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
      <FontAwesomeIcon icon={faUser} />
    </section>
  );
}

export default Navigation;
