import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'mNREEw9h9XER47NhKQkA';

const initialState = {
  books: [],
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
  const response = await axios.post(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`,
    bookData,
  );

  if (response.status !== 200) {
    throw new Error('Failed to add a book');
  }

  const addedBook = response.data;
  return addedBook;
});

const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  const response = await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${bookId.item_id}`,
  );

  if (response.status !== 200) {
    throw new Error('Failed to remove the book');
  }

  return bookId;
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
      });

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books = action.payload;
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export { fetchBooks, addBook, removeBook };
export default bookSlice.reducer;
