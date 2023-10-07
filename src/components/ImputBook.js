/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function ImputBook() {
  return (
    <>
      <p>ADD NEW BOOK</p>
      <form>
        <input
          type="text"
          placeholder="Book title"
          className="input-text"
          required
        />
        <select name="drinks" required>
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
