import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'mNREEw9h9XER47NhKQkA';

const initialState = {
  books: {},
  isLoading: false,
  error: undefined,
};

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`,
  );

  if (response.status !== 200) {
    throw new Error('Failed to fetch books');
  }
  const { data } = response;
  return data;
});

const addBook = createAsyncThunk('books/addBook', async (bookData) => {
  await axios.post(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`,
    bookData,
  );

  const addedBook = {
    [bookData.item_id]: [
      {
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      },
    ],
  };
  return addedBook;
});

const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${bookId.item_id}`,
  );

  return bookId.item_id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books = { ...state.books, ...action.payload };
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = Object.keys(state.books).reduce((acc, key) => {
          if (key !== action.payload) {
            acc[key] = state.books[key];
          }
          return acc;
        }, {});
      });
  },
});

export { fetchBooks, addBook, removeBook };
export default bookSlice.reducer;
