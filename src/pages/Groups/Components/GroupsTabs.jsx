import { useEffect } from "react";

import { Tabs } from "antd";

import TabsChildren from "./TabChildren";
import TabsLabel from "./TabsLabel";

import "../Groups.css";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectGroups } from "../../../features/group/groupSlice";
import { getGroupId } from "../../../features/group/groupAction";

const GroupTabs = () => {
  const { data: allGroups } = useAppSelector(selectGroups);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allGroups) {
      dispatch(getGroupId(allGroups[0].Group_ID));
    }
  }, [allGroups, dispatch]);

  const groupsTab =
    allGroups &&
    allGroups.map((ele) => {
      return {
        key: ele.Group_ID,
        label: <TabsLabel data={ele.Group_Name} />,
        children: <TabsChildren />,
      };
    });

  return (
    <div className="tabs">
      <Tabs
        tabPosition="left"
        onChange={(activekey) => {
          dispatch(getGroupId(activekey));
        }}
        items={groupsTab}
        style={{
          margin: "25px 0px 0px 0px",
          height: "fit-content",
        }}
      />
    </div>
  );
};

export default GroupTabs;
