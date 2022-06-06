import React, { createElement } from 'react';
import { AlignLeftOutlined, AlignRightOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { ModelBtn } from '../components';

const HeaderMenu = ({ value, setvalue }) => {
  return (
    <Space className="header-top-bar-menu">
      <div className="menu-left-icon">
        {createElement(value ? AlignLeftOutlined : AlignRightOutlined, {
          className: 'trigger-icon',
          onClick: () => setvalue(!value),
        })}
      </div>
      <Space className="new-account-btn">
        <ModelBtn />
      </Space>
    </Space>
  );
};

export default HeaderMenu;
