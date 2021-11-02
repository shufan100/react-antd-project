import React from 'react';
import logo from '@/assets/images/logo.svg';
import './index.scss';

const Logo = () => (
  <div className="sidebar-logo-container">
    <img src={logo} className="sidebar-logo" alt="logo" />
    <h1 className="sidebar-title">SHUFAN React</h1>
  </div>
);
export default Logo;
