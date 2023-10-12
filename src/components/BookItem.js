import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function BookItem({ itemProp }) {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{itemProp.title}</span>

      <button
        type="button"
        onClick={() => dispatch(removeBook({ id: itemProp.item_id }))}
      >
        Delete
      </button>
    </li>
  );
}

BookItem.propTypes = {
  itemProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookItem;
