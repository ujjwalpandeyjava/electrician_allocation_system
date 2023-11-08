import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AssignedSites from './components/AssignedSites';
import Electrician from './components/Electrician';
import Navbar from './components/Navbar';
import Sites from './components/Sites';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <BrowserRouter>
      <Navbar />
      <div className='BodyOfContactApp'>
        <Routes>
          <Route path="/" element={<Electrician />} />
          <Route path="/electrician" element={<Electrician />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/assignedSites" element={<AssignedSites />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Fragment>
);