import React from 'react';
import ReactDOM from 'react-dom';
 import App from './App';
  import NavBar from './Menu';
 import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


import './index.css';




ReactDOM.render(
  <div>
    <Layout>
      <Header><NavBar /></Header>
      <Content><App/></Content>
      <Footer style={{textAlign: "center"}}>Liam Kelly - 2017</Footer>
    </Layout>




</div>,
  document.getElementById('container')
);
