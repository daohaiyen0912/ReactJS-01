import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Layout, Menu, Breadcrumb} from 'antd'

//Thanh Menu ngang
function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}
//Item con trong Menu
function NavItem (props) {
  return (
    <li className="nav-item">
      <a href="#" className="nav-icon">
        {props.item}
      </a>
    </li>
  );
}

function App() {
  return (
    <NavBar>
      <NavItem item="MDM"/>
      <NavItem item="Quản lý sản phẩm"/>
      <NavItem item="Quản lý khách hàng"/>
      <NavItem item="Quản lý nhà cung cấp"/>
      <NavItem item="Quản lý tài sản"/>
      <NavItem item="Quản lý địa điểm"/>
    </NavBar>
  );
};

export default App;

