import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="logo">Cripto Bot</div>
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
            icon: <HomeOutlined />,
            label: <NavLink to="/exchnages">Exchnages</NavLink>,
          },
          {
            key: '3',
            icon: <HomeOutlined />,
            label: <NavLink to="/criptocurrencies">Cripto Currencies</NavLink>,
          },
          {
            key: '4',
            icon: <HomeOutlined />,
            label: <NavLink to="/news">News</NavLink>,
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
