import './App.css';
import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
};

function NavBar() {
  const [collapsed, setCollapsed] = useState(false);


  return (

    <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={
        [{
          key: '1',
          icon: <UserOutlined />,
          label: 'User',
        },{
          key: '2',
          icon: <CloudOutlined />,
          label: 'Storage',
        },
        ]
      } />
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

  );
}

export default NavBar;
