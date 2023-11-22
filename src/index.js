import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Electrician from './components/electrician/Electrician';
import Sites from './components/site/Sites';
import './index.css';
import configs from '../package.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <BrowserRouter basename={configs.name}>
      <Navbar />
      <div className='BodyOfContactApp'>
        <Routes>
          <Route path="/" element={<Electrician />} />
          <Route path="/electrician" element={<Electrician />} />
          <Route path="/sites" element={<Sites />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Fragment>
);