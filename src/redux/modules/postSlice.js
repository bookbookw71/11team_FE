import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/api";
import api from "../../shared/api";

// WHAT 초기값
const initialState = {
  isLoading: false,
  reviews: [],
  success: false,
  data: {
    nickname: "",
    title: "",
    readStart: "2000-01-01",
    readEnd: "2999-12-31",
    intro: "",
    publisher: "",
  },
  error: null,
};

export const __getAllReviews = createAsyncThunk(
  "post/getReviews",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/auth/post`);
      // console.log("🚀 ~ const__getReview=createAsyncThunk ~ data", data);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getReview = createAsyncThunk(
  "/post/getReview",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/auth/post/${id}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
});

export const __addReview = createAsyncThunk(
  "post/addReview",
  async (args, thunkAPI) => {
    try {
      const { data } = await api.post("/api/auth/post", args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getAllReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [__getAllReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    },
    [__getAllReviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addReview.pending]: (state) => {
      state.isLoading = true;
    },

    [__addReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__addReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editReview.fulfilled]:(state, action) => {
      const newState = state.posts.map((post)=> {
        if(post.id === action.payload.data.id) {
          post= {
            ...post,
            title: action.payload.data.title,
            content: action.payload.data.content,
            star : action.payload.data.star,
            page: action.payload.data.page
          }
        }
      })
    },
    [__editReview.rejected]:(state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
