import React from 'react';
import logo from '@/assets/images/logo.svg';
import './index.scss';
import { Slider, Button } from 'antd';

const Logo = () => (
  <div className="sidebar-logo-container">
    <img src={logo} className="sidebar-logo" alt="logo" />
    <h1 className="sidebar-title">舒梵</h1>
    <Slider defaultValue={30} disabled={false} />
    <Button type="primary">Button</Button>
  </div>
);
export default Logo;
