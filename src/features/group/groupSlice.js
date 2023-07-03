import { createSlice } from "@reduxjs/toolkit";

import { constants } from "../../constants";
import { deleteGroupId, getAllGroups, getGroupId } from "./groupAction";
// import { getAllGroups } from "./groupAction";

const initialState = {
  group: {
    add: constants.defaultState,
    get: constants.defaultState,
    update: constants.defaultState,
    delete: constants.defaultState,
  },
  groups: constants.defaultState,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    clearData: (state, action) => {
      const { type } = action.payload;

      switch (type) {
        case "DELETEGROUP":
          state.group.delete = constants.defaultState;
          break;

        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGroups.pending, (state) => {
        state.groups.loading = true;
        state.groups.data = null;
        state.groups.error = null;
      })
      .addCase(getAllGroups.fulfilled, (state, action) => {
        state.groups.loading = false;
        state.groups.data = action.payload;
      })
      .addCase(getAllGroups.rejected, (state, action) => {
        state.groups.loading = false;
        state.groups.error = action.payload;
      })
      .addCase(getGroupId.pending, (state) => {
        state.group.get.loading = true;
        state.group.get.data = null;
        state.group.get.error = null;
      })
      .addCase(getGroupId.fulfilled, (state, action) => {
        state.group.get.loading = false;
        state.group.get.data = action.payload;
      })
      .addCase(getGroupId.rejected, (state, action) => {
        state.group.get.loading = false;
        state.group.get.error = action.payload;
      })
      .addCase(deleteGroupId.pending, (state) => {
        state.group.delete.loading = true;
        state.group.delete.data = null;
        state.group.delete.error = null;
      })
      .addCase(deleteGroupId.fulfilled, (state, action) => {
        state.group.delete.loading = false;
        state.group.delete.data = action.payload;
      })
      .addCase(deleteGroupId.rejected, (state, action) => {
        state.group.delete.loading = false;
        state.group.delete.error = action.payload;
      });
  },
});

export const selectGroup = (state) => state.group.group.get;
export const selectDeleteGroup = (state) => state.group.group.delete;
export const selectGroups = (state) => state.group.groups;

export const { clearData } = groupSlice.actions;

export default groupSlice;
