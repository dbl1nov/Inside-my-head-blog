import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import Layout from './components/layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Header/>  
      <Content/>
    </Layout>



  </React.StrictMode>
);


