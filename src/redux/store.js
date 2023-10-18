import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './books/booksSlice';
import categoryReducer from './cetgories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
