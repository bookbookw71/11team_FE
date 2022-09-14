import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookAPI } from "../../shared/api";

const initialState = {
  isLoading: false,
  books: [],
  error: null,
};

export const __getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async (title, thunk) => {
    try {
      const { data } = await bookAPI.searchBooks(title);

      return thunk.fulfillWithValue(data.documents);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [__getBooksThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBooksThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [__getBooksThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export default bookSlice.reducer;
