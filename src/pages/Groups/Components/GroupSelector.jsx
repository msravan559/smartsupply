import React from "react";

import { Tabs } from "antd";

import GroupTabs from "./GroupsTabs";
import CreateNewGroups from "./CreateNewGroups";

const groupSelector = [
  {
    key: 1,
    label: `All Groups`,
    children: <GroupTabs />,
  },
  {
    key: 2,
    label: `Create New Groups`,
    children: <CreateNewGroups />,
    // children: <CreateNewGroups groupsData={groupsData} />,
  },
];

const GroupSelector = () => {
  return (
    <div className="groupselector">
      <Tabs defaultActiveKey="1" items={groupSelector} />
    </div>
  );
};

export default GroupSelector;
