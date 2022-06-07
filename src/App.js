import React, { useState } from 'react';
import { BackTop, Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { HeaderMenu, FooterMenu } from './container';
import {
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  NotFound,
} from './pages';
import { ArrowUpOutlined } from '@ant-design/icons';
const { Sider, Content, Header, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <Sider
        className="sidebar-nav"
        width={250}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Navbar />
      </Sider>
      <Layout className="main-content">
        <Header className="entry-header">
          <HeaderMenu value={collapsed} setvalue={setCollapsed} />
        </Header>
        <Content className="entry-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Exchanges" element={<Exchanges />} />
            <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <BackTop>
          <div className="backtotop">
            <ArrowUpOutlined />
          </div>
        </BackTop>
        <Footer className="footer">
          <FooterMenu />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
