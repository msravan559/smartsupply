import React, { useEffect } from "react";

import { AppContent } from "../../layouts";

import "./Groups.css";
import GroupSelector from "./Components/GroupSelector";
import { useAppDispatch } from "../../hooks";
import { getAllGroups } from "../../features/group/groupAction";

const Groups = () => {
  const dispatch = useAppDispatch();
  const storeId = sessionStorage.storeId;

  useEffect(() => {
    dispatch(getAllGroups(`Store_Id=${storeId}`));
  }, [dispatch, storeId]);

  return (
    <AppContent>
      <GroupSelector />
    </AppContent>
  );
};

export default Groups;
