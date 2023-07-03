import { createAsyncThunk } from '@reduxjs/toolkit';

import { texts } from '../../constants';

import authService from '../../services/auth.service';
import errorHandler from '../../shared/utils/errorHandler';

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authService.login(payload);

      if (data.result !== 'Success') {
        return rejectWithValue(data.Response);
      }

      return 'Login Successfull.';
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  },
);

export const getAllUsers = createAsyncThunk(
  'auth/allusers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authService.getAllUsers();

      if (data.result !== 'Success') {
        return rejectWithValue(texts.failureRespone);
      }

      return data.users;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authService.logout(payload);

      if (data.result !== 'Success') {
        return rejectWithValue(data.Response);
      }

      return 'Logout Successfull.';
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  },
);

export const changePassword = createAsyncThunk(
  'post/changePassword',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await authService.changePassword(payload);

      if (data.Result !== 'Success') {
        return rejectWithValue(data.Response);
      }

      return data.Response;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  },
);
