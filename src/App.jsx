import './App.css';
import React, { useState } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import { Layout, Menu, Space, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function App() {

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
    height: '90vh',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 0]}>
        <Header style={headerStyle}>
         <h1>LOGO</h1> 
        </Header>
        <Layout hasSider>
          <NavBar />
          <Content style={contentStyle}>

          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Space>
    </div>
  );
}

export default App;
