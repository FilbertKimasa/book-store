import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Things Fall Apart',
    },
    {
      id: 2,
      title: 'Think Like a Man',
    },
    {
      id: 3,
      title: 'C++ Primer 5th Edition',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
