import React, { createElement } from 'react';
import { AlignLeftOutlined, AlignRightOutlined } from '@ant-design/icons';
const HeaderMenu = ({ value, setvalue }) => {
  return (
    <>
      <div className="menu-left-icon">
        {createElement(value ? AlignLeftOutlined : AlignRightOutlined, {
          className: 'trigger-icon',
          onClick: () => setvalue(!value),
        })}
      </div>
    </>
  );
};

export default HeaderMenu;
