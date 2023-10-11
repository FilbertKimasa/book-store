import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => {
      state.categories = 'Under construction';
    },
  },
});

export const { getStatus } = categorySlice.actions;

export default categorySlice.reducer;
