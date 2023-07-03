import { createAsyncThunk } from '@reduxjs/toolkit';

import configService from '../../services/config.service';
import errorHandler from '../../shared/utils/errorHandler';

export const getAboutInfo = createAsyncThunk(
  'GET_ABOUTINFO',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await configService.getAboutInfo();

      if (data.Result === 'Success') {
        sessionStorage.aboutInfo = JSON.stringify(data.Response.Details);

        return data.Response.Details;
      }
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  },
);
