import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ booksProps }) {
  return (
    <ul>
      {booksProps.map((book) => (
        <BookItem key={book.id} itemProp={book} />
      ))}
    </ul>
  );
}
BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
