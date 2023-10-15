import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <ul>
      {Object.keys(books).map((key) => {
        const book = { ...books[key][0], item_id: key };
        return <BookItem key={book.item_id} itemProp={book} />;
      })}
    </ul>
  );
}

export default BookList;
