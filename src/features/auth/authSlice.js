import { createSlice } from '@reduxjs/toolkit';

import { constants } from '../../constants';
import { changePassword, getAllUsers, login, logout } from './authActions';

const initialState = {
  user: sessionStorage.userName || null,
  login: constants.defaultState,
  logout: constants.defaultState,
  users: {
    add: constants.defaultState,
    get: constants.defaultState,
    update: constants.defaultState,
    delete: constants.defaultState,
  },
  changePassword: constants.defaultState,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearData: (state, action) => {
      const { type } = action.payload;

      switch (type) {
        case 'LOGIN':
          state.login = constants.defaultState;
          break;

        case 'LOGOUT':
          state.logout = constants.defaultState;
          break;

        case 'CHANGEPASSWORD':
          state.changePassword = constants.defaultState;
          break;

        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login.loading = false;
        state.login.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.logout.loading = true;
        state.logout.data = null;
        state.logout.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.logout.loading = false;
        state.logout.data = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logout.loading = false;
        state.logout.error = action.payload;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.users.get.loading = true;
        state.users.get.data = null;
        state.users.get.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users.get.loading = false;
        state.users.get.data = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.users.get.loading = false;
        state.users.get.error = action.payload;
      })
      .addCase(changePassword.pending, (state) => {
        state.changePassword.loading = true;
        state.changePassword.data = null;
        state.changePassword.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.changePassword.loading = false;
        state.changePassword.data = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePassword.loading = false;
        state.changePassword.error = action.payload;
      });
  },
});

export const selectLogin = (state) => state.auth.login;
export const selectLogout = (state) => state.auth.logout;
export const selectUser = (state) => state.auth.user;
export const selectUsers = (state) => state.auth.users.get;
export const selectChangePassword = (state) => state.auth.changePassword;

export const { clearData, setUser } = authSlice.actions;

export default authSlice;
