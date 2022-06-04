import React, { useState } from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { HeaderMenu } from './container';
import { Homepage, NotFound } from './pages';
const { Sider, Content, Header } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
        <Navbar />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header">
          <HeaderMenu value={collapsed} setvalue={setCollapsed} />
        </Header>
        <Content className="site-layout-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
