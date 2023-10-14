import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.books);
  const availableBooks = Object.keys(book).map((key) => ({
    ...book[key][0],
    item_id: key,
  }));
  const bookList = availableBooks.map((book) => (
    <BookItem key={book.item_id} itemProp={book} />
  ));
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return <ul>{bookList}</ul>;
}

export default BookList;
