import React from 'react';
import './sidebar.css';
import { NavLink } from "react-router-dom";

export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <NavLink to="/product" className="navigation">Product list</NavLink>
      <NavLink to="/cart" className="navigation">Cart</NavLink>
      <NavLink to="/todo" className="navigation">Todo List</NavLink>
      <NavLink to="/shopping" className="navigation">Shopping List</NavLink>
    </nav>
  </div>);
};

export default SideBar;