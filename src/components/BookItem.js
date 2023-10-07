import React from 'react';
import PropTypes from 'prop-types';

function BookItem({ itemProp }) {
  return (
    <li>
      <span>{itemProp.title}</span>
      <button type="button">Delete</button>
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
