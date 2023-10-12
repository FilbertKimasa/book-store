import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

function BookList() {
  const book = useSelector((state) => state.books.books);
  return (
    <ul>
      {book.map((book) => (
        <BookItem key={book.item_id} itemProp={book} />
      ))}
    </ul>
  );
}

export default BookList;
