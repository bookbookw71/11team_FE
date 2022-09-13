import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../shared/api';

const initialState = {
  success: false,
  data: { nickname: '', email: '', company: '' },
  error: null,
};

export const __getUserInfo = createAsyncThunk('users/getUserInfo', async (user, thunk) => {
  try {
    const response = await api.get(`http://3.34.90.63/api/member`);
    return thunk.fulfillWithValue(response.data);
  } catch (error) {
    return thunk.rejectWithValue(error);
  }
});

export const __editUserInfo = createAsyncThunk('users/editUserInfo', async (payload, thunkAPI) => {
  try {
    const { data } = await api.put('http://3.34.90.63/api/member', payload, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    });

    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const usersSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.pending]: (state, action) => {
      return (state = initialState);
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [__getUserInfo.rejected]: (state, action) => {
      // console.log(state, action);
    },
    [__editUserInfo.fulfilled]: (state, action) => {
      state.data = {
        ...state.data,
        comment: action.payload.data.comment,
        company: action.payload.data.company,
        profileImage: action.payload.data.profileImage,
      };
    },
  },
});

export default usersSlice.reducer;
