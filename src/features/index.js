import { configureStore } from "@reduxjs/toolkit";

import config from "./config/configSlice";
import auth from "./auth/authSlice";
import group from "./group/groupSlice";

const reducer = {
  config: config.reducer,
  auth: auth.reducer,
  group: group.reducer,
};

const reduxStore = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export default reduxStore;
