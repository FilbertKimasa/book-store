import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../styles/BookItem.css';

function BookItem({ itemProp }) {
  const dispatch = useDispatch();
  return (
    <article className="book-item">
      <div>
        <p className="book-category">{itemProp.category}</p>
        <p className="book-title">{itemProp.title}</p>
        <p className="book-author">{itemProp.author}</p>
        <div>
          <button type="button" className="book-buttons">
            Comment
          </button>
          <button
            type="button"
            onClick={() => dispatch(removeBook({ item_id: itemProp.item_id }))}
            className="book-buttons remove-btn"
          >
            Remove
          </button>
          <button type="button" className="book-buttons">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-status">
        <div>
          <span>
            <div className="Oval-2" />
          </span>
          <span>
            <p>64</p>
            <p>Completed</p>
          </span>
        </div>
        <div className="Line-2" />
        <div>
          <h3>Current chapter</h3>
          <p>chapter 7</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </article>
  );
}

BookItem.propTypes = {
  itemProp: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookItem;
