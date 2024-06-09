import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await API.post('/auth/jwt/create/', credentials);
  return response.data;
});

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await API.post('/auth/users/', userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.access;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
