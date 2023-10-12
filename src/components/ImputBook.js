import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function ImputBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addBook({ id: uuidv4(), title }));
      setTitle('');
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <p>ADD NEW BOOK</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className="input-text"
          value={title}
          onChange={handleChange}
          required
        />
        <select name="category">
          <option value="" disabled selected hidden>
            Category
          </option>
          <option value="tea">Finction</option>
          <option value="milk">Biography</option>
          <option value="milk">Academic</option>
          <option value="milk">Wealth</option>
        </select>
        <button type="submit" className="input-submit">
          ADD BOOK
        </button>
      </form>
    </>
  );
}

export default ImputBook;
