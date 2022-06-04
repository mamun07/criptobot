import React from 'react';
import { Menu, Typography } from 'antd';
import {
  HomeOutlined,
  LineChartOutlined,
  DollarOutlined,
  ExpandOutlined,
  CopyrightOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <Typography.Title level={2}>
          <CopyrightOutlined />
        </Typography.Title>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: <NavLink to="/">Home</NavLink>,
          },
          {
            key: '2',
            icon: <LineChartOutlined />,
            label: <NavLink to="/Exchanges">Exchanges</NavLink>,
          },
          {
            key: '3',
            icon: <DollarOutlined />,
            label: <NavLink to="/criptocurrencies">Cripto Currencies</NavLink>,
          },
          {
            key: '4',
            icon: <ExpandOutlined />,
            label: <NavLink to="/news">News</NavLink>,
          },
        ]}
      />
    </>
  );
};

export default Navbar;
