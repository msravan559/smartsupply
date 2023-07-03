import { createAsyncThunk } from "@reduxjs/toolkit";

import { texts } from "../../constants";

import groupService from "../../services/group.service";
import errorHandler from "../../shared/utils/errorHandler";

export const getAllGroups = createAsyncThunk(
  "group/getAllGroups",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await groupService.getAllGroups(params);

      if (data.success !== true) {
        return rejectWithValue(data.message);
      }

      return data.data;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);

export const getGroupId = createAsyncThunk(
  "group/getGroupById",
  async (groupId, { rejectWithValue }) => {
    try {
      const { data } = await groupService.getGroupById(groupId);

      if (data.success !== true) {
        return rejectWithValue(data.message);
      }

      return { groupId, data: data.data };
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);

export const deleteGroupId = createAsyncThunk(
  "group/deleteGroupById",
  async (groupId, { rejectWithValue }) => {
    try {
      const { data } = await groupService.deleteGroupById(groupId);

      if (data.success !== true) {
        return rejectWithValue(data.message);
      }

      console.log("data", data);

      return data.data;
    } catch (error) {
      return rejectWithValue(errorHandler(error));
    }
  }
);
