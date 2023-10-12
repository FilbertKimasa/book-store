import { configureStore } from '@reduxjs/toolkit';
import bookReducer from 'booksSlice';
import categoryReducer from 'categorySclcie';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
