import { createSlice } from '@reduxjs/toolkit';

import { getAboutInfo } from './configActions';

const initialState = {
  about: {
    error: null,
    data:
      (sessionStorage.aboutInfo && JSON.parse(sessionStorage.aboutInfo)) ||
      null,
    loading: false,
  },
  summaryCardHeight: 0,
  contentHeight: 0,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setAboutInfo: (state, action) => {
      state.about.data = action.payload;
    },
    setSummaryCardHeight: (state, action) => {
      state.summaryCardHeight = action.payload;
    },
    setContentHeight: (state, action) => {
      state.contentHeight = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAboutInfo.pending, (state) => {
        state.about.loading = true;
        state.about.error = null;
      })
      .addCase(getAboutInfo.fulfilled, (state, action) => {
        state.about.loading = false;
        state.about.data = action.payload;
      })
      .addCase(getAboutInfo.rejected, (state, action) => {
        state.about.loading = false;
        state.about.error = action.payload;
      });
  },
});

export const selectAboutInfo = (state) => state.config.about;
export const selectContentHeight = (state) => state.config.contentHeight;
export const selectSummaryCardHeight = (state) =>
  state.config.summaryCardHeight;

export const { setAboutInfo, setContentHeight, setSummaryCardHeight } =
  configSlice.actions;

export default configSlice;
