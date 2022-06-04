import React, { createElement } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const HeaderMenu = ({ value, setvalue }) => {
  return (
    <>
      <div className="menu-left-icon">
        {createElement(value ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger-icon',
          onClick: () => setvalue(!value),
        })}
      </div>
    </>
  );
};

export default HeaderMenu;
