import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../shared/api';

// WHAT 초기값
const initialState = {
  success: false,
  data: {
    nickname: '',
    title: '',
    readStart: '2000-01-01',
    readEnd: '2999-12-31',
    intro: '',
    publisher: '',
  },
  error: null,
};

export const __getReview = createAsyncThunk('post/getReviews', async (payload, thunkAPI) => {
  try {
    const { data } = await api.get('/posts');
    console.log('🚀 ~ const__getReview=createAsyncThunk ~ data', data);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __addReview = createAsyncThunk('post/addReview', async (args, thunkAPI) => {
  try {
    const { data } = await api.post('/posts', args);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __editReview = createAsyncThunk('post/editReview', async (args, thunkAPI) => {
  try {
    const { data } = await api.put('/posts', args);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [__getReview.pending]: state => {
      state.isLoading = true;
    },
    [__getReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addReview.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [__addReview.rejected]: (state, action) => {
      return;
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
