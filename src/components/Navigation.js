import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <header className="panel-bg">
      <Link to="/" className="logo text-decoratrion">
        Bookstore CMS
      </Link>
      <nav>
        <ul className="navigation-menu">
          <li>
            <Link to="books" className="text-decoratrion menu-item">
              Books
            </Link>
          </li>
          <li>
            <Link to="category" className="text-decoratrion menu-item">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
    </header>
  );
}

export default Navigation;
