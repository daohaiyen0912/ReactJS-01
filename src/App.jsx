import { useState } from 'react'
import React from 'react'
import logo from './logo.svg'
import './App.css'
import {Layout, Menu, Breadcrumb} from 'antd'
//import { Add } from '@carbon/icons-react'

//Tên Sản phẩm được truy cập
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

//Một item menu
function NavItem (props) {
  return (
    <li className="nav-item">
      <a href="#" className="nav-icon">
        {props.item}
      </a>
    </li>
  );
}

//Một icon Menu
function NavIcon (props) {
  return (
    <button>
      <img src={props.icon}></img>
    </button>
  );
}

function App() {
  return (
    <React.Fragment>
      <div className='container navbar'>
        <div className = 'left'>
          <ul>
            <NavItem item = "MDM" />
            <NavItem item = "Quản lý sản phẩm" />
            <NavItem item = "Quản lý KH" />
            <NavItem item = "Quản lý nhà cung cấp" />
            <NavItem item = "Quản lý tài sản" />
            <NavItem item = "Quản lý địa điểm" />
          </ul>
        </div>
        <div className ='right'>
            <NavIcon icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRIie2TTWoCQRCFe9xGd+pJsvfnBkoOkixk4kJwdKOnMeg5YjyAnsGfCFmZLwvfQKM4VqshIHlQdM/MV/WKocq5uxRQBvrAB7BVTIEeULq2+BOw4bTWQPOa4t8qNAIqwIOiCrzp2w5ohBYve523MrhYzAoohhj0084N7FhsEmIwU1LFwNbETkMMPpWUN7AFsZtzbM7PM3fjXGQFfYOFzkdDXsrMQwwmOp8NBi86xwZ2L6CkJQKIM7i2mGXwVgNNLREaxRqQV9SBibfRnaDinklDS3RKS6DjPXcvMSkCCfCu8d3qnqS/5cA03MTQRHxgMvg3ucgkl5VoVRRFQ+fcq/fq6xZ1jwR0f2Wi/lQ/2mvMQ0czO9IAAAAASUVORK5CYII="/>
            <NavIcon icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAtElEQVRIie2TMQ6CQBBFZywkxiNoJ4fRA3AMiXekIbHRWmz0DrTPwiUBwpId2MIEX7LJNvP+32xGZDEAKVC5k4bOrQwZmYgc3MmsBb0ACZC75g0P4Awkc+V74I6fG7Cb03xM3g6xvwS4BMgb8ikBV0NA6fPoSEAtIpvAPrWqbq0BBMq/ItVBl2UPJvEPWCJAYViwPkXfF/sPTLvTnYRnq2kVOmd5wdpzjwNwAt7ACzhGD/hZPm3dRB7oj6XyAAAAAElFTkSuQmCC" />
            <NavIcon icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA30lEQVRIie2UsQ3CMBBFzxLKBkRMEJpUGSQNoQ4MlwEyAEtAwQZETJDyUXBClsE4xE7Hl9KcTu9Z53NE/nEC5EvC18B5UTjAovDkAheeVADkwEW5l6QC5+RXYJNM8Amu9XiBD55E8A0eLQjBo7I03F3Ft38NUFnPoEoGB2qgAHpL0ANboA7BQxe6J5wmZiydBboBrX6DVe9mwbUvA0bta636QWsjkK1cuIicRKTUUikid6zVNsYYz1RfLVPG4o1nRIOe/Bgc0dQATegwwG62QCU1z5V017QgtKY/irwP7QFiammMx3FGpgAAAABJRU5ErkJggg==" />
            <NavIcon icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB8ElEQVRIibWVvWtUQRTFfycuC4JGt1OEBAN2pgjpXOxio4hFCoVtjJC/QRthwS61dRpdiF1sbBRMYbAIQTC1Ctskdn5go8ZjkZtk9jFv3zQ58Hi8O+ecufPu5Q6cMFRKtD0DLMTna0lfSnQTheZLwCYwH8972/dLk2syn7G9a/tyJbaXxupQcoIbwHr6SyR9Bl5y/MvGb2B71vZsDeci8DUT3wUu5QSpXytii/HeyfCfSNqvBiX1bZ+qSerIr5UEp2y3Jf1OMukA92xP1hh9t70m6VuiaQNTwBCOa7AOTAND2yu2r4T5FnAN6NQ8XWDL9vnQrITxdHiO4pAUHfLJ9rOazFPN8+DuHSbXpMF22/aq7X4Btx/cdm4926ZRh2HGrK7bhmntUrRywTEY121ZtA4zA25W1rocjIcSdG0/rMReSRpp006FcLo0y+BW9UCcQNIO8ChdKClwgjeSsvxxs6ho0jZxswu2LwDLwLkC80lgOTTNG8R8GQAbwILtppN0gW1gkJtNOfFjwEAP+AEs1Tnbvg2cAe4k2hFU2/RsGM5L+hc32VvbvyStVcwXgafALUn7tnvAtu0W8JNoUyUb9EL7QtKHxOgqsAq0gT8c3OMTkfkDSe8S7hxwNz4HRxs0IeowB1wP84/AhqS/JfoTxX+cHAn9pNq3HQAAAABJRU5ErkJggg==" />
            <NavIcon icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAATUlEQVRIie3SMQrAIBBFQcnpIrn/BTT3mDSBQBpRFmx22l+4wislzcCFGx01Yvs/0H1axHYsf3cF6ntNwxmxpTmZ6VBmul9mOpSZbvEA/0eO5ljoBV8AAAAASUVORK5CYII=" />
        </div>
      </div>
      <div className = 'content'>
        <SanPham name = 'Sản phẩm'/>
        <div className = 'contentTrangThai'>
          <div className='container'>
          
          </div>
          <div>
            <table></table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

