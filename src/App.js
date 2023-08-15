import './App.css';
import React, { useState } from 'react';
import './index.css';
import { Layout, Menu, Space, Button } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  DesktopOutlined,
  FileOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));



function App() {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 0]}>
        <Header style={headerStyle}>

        </Header>
        <Layout hasSider>
          <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
            <div className="demo-logo-vertical" />
            <div className='collapseBtnStyleContainer'>
            <Space align="baseline">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  color: '#fff',
                  width: '%100'
                }}
              />
              </Space>
            </div>

          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Space>
    </div>
  );
}

export default App;
