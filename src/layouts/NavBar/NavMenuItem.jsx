import React from "react";

import _ from "lodash";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

import { icons, _nav } from "../../constants";
import { arrayToTree } from "../../shared/utils";

const generateItem = (label, key, icon, children) => {
  return {
    key,
    children,
    label,
  };
};

const generateMenus = (menuArray) => {
  const menuItems = [];

  _.map(menuArray, (menu) => {
    let label;

    if (menu.children) {
      label = (
        <div className="nav-link">
          <span>{menu.label}</span>
        </div>
      );

      const subMenus = _.map(menu.children, (subMenu) => {
        const subMenuLabel = (
          <NavLink to={subMenu.route}>
            <div className="nav-link">
              <span>{subMenu.label}</span>
            </div>
          </NavLink>
        );

        return generateItem(
          subMenuLabel,
          subMenu.key,
          icons[subMenu.icon],
          subMenu.children
        );
      });

      menuItems.push(generateItem(label, menu.key, icons[menu.icon], subMenus));
    } else {
      label = (
        <NavLink to={menu.route}>
          <div className="nav-link">
            <span>{menu.label}</span>
          </div>
        </NavLink>
      );

      menuItems.push(
        generateItem(label, menu.key, icons[menu.icon], menu.children)
      );
    }
  });

  return menuItems;
};

const NavMenuItem = (props) => {
  const { onClick, onOpenChange, openKeys, selectedKeys } = props;

  const menuTree = arrayToTree(_nav, "key", "menuParentId");

  const generatedMenuItems = generateMenus(menuTree);

  return (
    <Menu
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      mode="horizontal"
      items={generatedMenuItems}
      onClick={onClick}
      onOpenChange={onOpenChange}
      style={{ paddingLeft: 18 }}
    />
  );
};

export default NavMenuItem;
