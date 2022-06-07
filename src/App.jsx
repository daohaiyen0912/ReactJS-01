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

function SanPham(props) {
  return (
    <div className="sanPham">
      <div className="titleSP">
        <a>
          Quản lý sản phẩm /
        </a>
        <a className="link-SP">
          {props.name}
        </a>
      </div>
      <div className = "TenSP">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

function BangTT (props) {
  return (
    <table className="tableTT">
      <thead>
        <tr>
          <th>Trạng thái <span>icon</span></th>
          <th>More <span>icon</span></th>
          <th>icon1</th>
          <th>icon2</th>
          <th>icon3</th>
          <th>
            <button>Thêm mới <span>icon</span></button>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>
            <input type="checkbox"></input>
          </th>
          <th>Mã sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Trạng thái</th>
        </tr>
        
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div>
      <NavBar>
        <NavItem item="MDM"/>
        <NavItem item="Quản lý sản phẩm"/>
        <NavItem item="Quản lý khách hàng"/>
        <NavItem item="Quản lý nhà cung cấp"/>
        <NavItem item="Quản lý tài sản"/>
        <NavItem item="Quản lý địa điểm"/>
      </NavBar>
      <div className="Content">
        <SanPham name="Sản phẩm" />
        <BangTT />
      </div>
    </div>
  );
};

export default App;

