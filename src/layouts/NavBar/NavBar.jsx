import React, { useEffect, useState } from "react";

import store from "store";
import { pathToRegexp } from "path-to-regexp";
import { useLocation } from "react-router-dom";

import { queryAncestors } from "../../shared/utils";
import { _nav } from "../../constants";

import NavMenuItem from "./NavMenuItem";

const NavBar = () => {
  const [openKeys, setOpenKeys] = useState(store.get("openKeys") || []);

  const location = useLocation();

  const currentMenu = _nav.find(
    (item) => item.route && pathToRegexp(item.route).exec(location.pathname)
  );

  const selectedKeys = currentMenu
    ? queryAncestors(_nav, currentMenu, "menuParentId").map((item) => item.key)
    : [];

  useEffect(() => {
    if (currentMenu?.menuParentId) {
      setOpenKeys([currentMenu.menuParentId]);
      store.set("openKeys", [currentMenu.menuParentId]);
    } else {
      setOpenKeys([]);
      store.set("openKeys", []);

      // console.log(currentMenu);
    }
  }, [location, currentMenu?.menuParentId]);

  const onOpenChangeHandler = (openkeys) => {
    const rootSubmenuKeys = _nav
      .filter((_) => !_.menuParentId)
      .map((_) => _.id);

    const latestOpenKey = openkeys.find((key) => openKeys.indexOf(key) === -1);

    let newOpenKeys = openkeys;
    if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
      newOpenKeys = latestOpenKey ? [latestOpenKey] : [];
    }

    setOpenKeys(newOpenKeys);
    store.set("openKeys", newOpenKeys);
  };

  const onClickHandler = (item) => {
    const clickedMenu = _nav.find((menu) => menu.key === item.key);

    if (!clickedMenu.menuParentId) {
      store.set("openKeys", []);
      setOpenKeys([]);
    }
  };

  return (
    <NavMenuItem
      onClick={onClickHandler}
      onOpenChange={onOpenChangeHandler}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
    />
  );
};

export default NavBar;
