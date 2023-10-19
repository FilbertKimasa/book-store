import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../styles/InputBook.css';

function ImputBook() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.author.trim()) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title: formData.title,
          author: formData.author,
          category: formData.category,
        }),
      );
      setFormData({
        ...formData,
        title: '',
        author: '',
      });
    }
  };

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleAuthorChange = (e) => {
    setFormData({ ...formData, author: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };
  return (
    <section className="input-section">
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className="form-field"
          value={formData.title}
          onChange={handleTitleChange}
          required
        />

        <input
          type="text"
          placeholder="Book Author"
          className="form-field"
          value={formData.author}
          onChange={handleAuthorChange}
          required
        />

        <select
          name="category"
          onChange={handleCategoryChange}
          className="form-field"
        >
          <option value={formData.category} disabled selected hidden>
            Category
          </option>
          <option value="Finction">Finction</option>
          <option value="Biography">Biography</option>
          <option value="Academic">Academic</option>
          <option value="Wealth">Wealth</option>
        </select>
        <button type="submit" className="input-submit form-field">
          ADD BOOK
        </button>
      </form>
    </section>
  );
}

export default ImputBook;
